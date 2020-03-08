const express = require('express');
const Project = require('../models/Project');
const User = require('../models/User');
const PermissionList = require('../models/PermissonList');
const asyncHandler = require('../midleware/async-handler');
const ErrorResponse = require('../utils/error-response');
const _ = require('lodash');

// @desc      Invite user to the project
// @route     PUT /api/project/:id/team
exports.manageTeam = asyncHandler(async (req, res, next) => {
  if (!req.query.user) {
    return next(new ErrorResponse(`No user id provided`, 400));
  }

  if (!req.query.action) {
    return next(new ErrorResponse(`No action provided`, 400));
  }

  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(
      new ErrorResponse(`Project not found with an id of ${req.params.id}`, 400)
    );
  }

  const user = await User.findById(req.query.user);

  if (!user) {
    return next(
      new ErrorResponse(`No user found with an id of ${req.query.user}`, 404)
    );
  }

  switch (req.query.action) {
    case 'add': {
      if (project.team.includes(user._id)) {
        return next(
          new ErrorResponse(
            `User with an id of ${user._id} already is in the team`,
            400
          )
        );
      }

      const permissions = await PermissionList.create({
        project: project._id,
        user: user._id
      });

      if (!permissions) {
        return next(new ErrorResponse(`Could not create privilege list`, 500));
      }

      project.team.push(user._id);
      break;
    }
    case 'remove': {
      if (!project.team.includes(user._id)) {
        return next(
          new ErrorResponse(
            `User with an id of ${user._id} is not in the team`,
            400
          )
        );
      }

      const permissions = await PermissionList.findOne({
        project: project._id,
        user: user._id
      });

      if (!permissions) {
        return next(new ErrorResponse(`Could not find privilege list`, 500));
      }

      await permissions.remove();

      const member = project.team.indexOf(user._id);
      project.team.splice(member, 1);
      console.log(project);
      break;
    }
    default: {
      return next(new ErrorResponse(`Impossible action requested`, 400));
    }
  }

  await project.save();

  res.status(201).json({
    success: true,
    data: project
  });
});

// @desc      Get team members of the project
// @route     GET /api/project/:id/team
exports.getMembers = asyncHandler(async (req, res, next) => {
  const members = await PermissionList.find({
    ...req.query,
    project: req.params.id
  })
    .select('-project -_id')
    .populate('user');

  res.status(200).json({
    success: true,
    data: members
  });
});
