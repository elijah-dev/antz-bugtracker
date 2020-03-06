const express = require('express');
const User = require('../models/User');
const Project = require('../models/Project');
const asyncHandler = require('../midleware/async-handler');
const ErrorResponse = require('../utils/error-response');
const options = {
  expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  httpOnly: true
};

// @desc      Get single user by id
// @route     POST /api/user/:id
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    return next(
      new ErrorResponse(`User not found with an id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: user
  });
});

// @desc      Register new user
// @route     POST /api/user/register
exports.registerUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  if (!user) {
    return next(new ErrorResponse(`Could not create user`, 500));
  }

  const token = user.signJwt();

  res
    .status(201)
    .cookie('token', token, options)
    .json({
      success: true,
      data: user,
      token
    });
});

// @desc      Login existing user
// @route     POST /api/user/login
exports.loginUser = asyncHandler(async (req, res, next) => {
  const { login, password } = req.body;

  if (!login) {
    return next(new ErrorResponse('Login is required', 400));
  }

  if (!password) {
    return next(new ErrorResponse('Password is required', 400));
  }

  const user = await User.findOne({ login }).select('+password');

  if (!user) {
    return next(new ErrorResponse(`Login ${login} is invalid`, 401));
  }

  const isPasswordCorrect = await user.comparePasswords(password);

  if (!isPasswordCorrect) {
    return next(new ErrorResponse(`Incorrect password`, 401));
  }

  const token = user.signJwt();

  res
    .status(200)
    .cookie('token', token, options)
    .json({
      success: true,
      token
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
