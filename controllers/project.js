const express = require('express');
const Project = require('../models/Project');
const User = require('../models/User');
const PermissionList = require('../models/PermissonList');
const asyncHandler = require('../midleware/async-handler');
const ErrorResponse = require('../utils/error-response');
const options = {
  expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  httpOnly: true
};

// @desc      Get all projects
// @route     GET /api/project/
exports.getAllProjects = asyncHandler(async (req, res, next) => {
  const projects = await Project.find();
  const userProjects = projects.filter(project =>
    project.team.includes(req.user._id)
  );

  res.status(200).json({
    success: true,
    data: projects
  });
});

// @desc      Get single project
// @route     GET /api/project/:id
exports.getSingleProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(
      new ErrorResponse(`Project not found with an id of ${req.params.id}`, 400)
    );
  }

  const permissions = await PermissionList.findOne({
    user: req.user._id,
    project: req.params.id
  }).select('-project -user -_id');

  res.status(200).json({
    success: true,
    data: project,
    permissions
  });
});

// @desc      Create project
// @route     POST /api/project/create
exports.createProject = asyncHandler(async (req, res, next) => {
  req.body.team = [];
  req.body.team.push(req.user._id);
  const project = await Project.create(req.body);

  if (!project) {
    return next(new ErrorResponse(`Could not create project`, 500));
  }

  let permissions = await PermissionList.create({
    project: project._id,
    user: req.user._id,
    canAddTeamMembers: true,
    canRemoveTeamMembers: true,
    canChangePermissions: true,
    canEditProject: true,
    canAssignIssues: true,
    canSubmitIssues: true,
    canSetResolution: true,
    canSetStatus: true
  });

  if (!permissions) {
    return next(new ErrorResponse(`Could not set default privileges`, 500));
  }

  res.status(201).json({
    success: true,
    data: project,
    permissions
  });
});

// @desc      Update project
// @route     PUT /api/project/:id
exports.updateProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!project) {
    return next(
      new ErrorResponse(
        `Project with an ID of ${req.params.id} was not found`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    data: project
  });
});

// @desc      Delete project with all the issues
// @route     DELETE /api/project/:id
exports.deleteProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(
      new ErrorResponse(`Project not found with an id of ${req.params.id}`, 400)
    );
  }

  await project.remove();

  res.status(200).json({
    success: true,
    data: project
  });
});
