const express = require('express');
const Issue = require('../models/Issue');
const Project = require('../models/Project');
const asyncHandler = require('../midleware/async-handler');
const ErrorResponse = require('../utils/error-response');

// @desc      Get issues
// @route     GET /api/project/:id/issue
exports.getIssues = asyncHandler(async (req, res, next) => {
  console.log(req.query);
  const issues = await Issue.find({
    project: req.params.projectId,
    ...req.query
  });

  res.status(200).json({
    success: true,
    issues: issues.length,
    data: issues
  });
});

// @desc      Get single issue
// @route     GET /api/issue/:id
exports.getSingleIssue = asyncHandler(async (req, res, next) => {
  const issue = await Issue.findById(req.params.id);

  if (!issue) {
    return next(
      new ErrorResponse(`Issue not found with an id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: issue
  });
});

// @desc      Create issue
// @route     POST /api/project/:projectId/issue/create
exports.createIssue = asyncHandler(async (req, res, next) => {
  const projectId = req.params.projectId;

  const project = await Project.findById(projectId, 'key -_id');
  if (!project) {
    return next(
      new ErrorResponse(`Project not found with an id of ${projectId}`, 400)
    );
  }

  // Count existing issues inside the project
  const issues = await Issue.find({ project: projectId });

  // Construct issue key
  const issueKey = `${project.key}-${issues.length + 1}`;

  req.body.project = projectId;
  req.body.key = issueKey;

  const issue = await Issue.create(req.body);

  if (!issue) {
    return next(new ErrorResponse(`Could not create issue`, 500));
  }

  res.status(201).json({
    success: true,
    data: issue
  });
});

// @desc      Update issue
// @route     PUT /api/issue/:id
exports.updateIssue = asyncHandler(async (req, res, next) => {
  const issue = await Issue.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!issue) {
    return next(
      new ErrorResponse(
        `Issue with an ID of ${req.params.id} was not found`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    data: issue
  });
});

// @desc      Delete bootcamp
// @route     DELETE /api/issue/:id
exports.deleteIssue = asyncHandler(async (req, res, next) => {
  const issue = await Issue.findByIdAndDelete(req.params.id);

  if (!issue) {
    return next(
      new ErrorResponse(
        `Issue with an ID of ${req.params.id} was not found`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    data: issue
  });
});
