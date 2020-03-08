const express = require('express');
const User = require('../models/User');
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
