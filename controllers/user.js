const express = require('express');
const User = require('../models/User');
const Project = require('../models/Project');
const PermissionList = require('../models/PermissonList');
const asyncHandler = require('../midleware/async-handler');
const ErrorResponse = require('../utils/error-response');

// @desc      Get currently loged in user
// @route     GET /api/user/
exports.getCurrentUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    return next(
      new ErrorResponse(`User not found with an id of ${req.user._id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: user
  });
});

// @desc      Find all users
// @route     GET /api/user/all
exports.getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find()
    .select('+login +password')
    .lean();
  let fullUsers = [];

  for (let user of users) {
    const permissions = await PermissionList.find({ user: user._id })
      .select('-user')
      .populate('project');

    user = { ...user, projects: permissions };
    fullUsers.push(user);
  }

  // if (!user) {
  //   return next(
  //     new ErrorResponse(`User not found with an id of ${req.user._id}`, 404)
  //   );
  // }

  res.status(200).json({
    success: true,
    data: fullUsers
  });
});

// @desc      Delete user
// @route     DELETE /api/user/:id
exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorResponse(`User not found with an id of ${req.params.id}`, 400)
    );
  }

  await user.remove();

  res.status(200).json({
    success: true,
    data: user
  });
});
