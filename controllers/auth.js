const express = require('express');
const User = require('../models/User');
const asyncHandler = require('../midleware/async-handler');
const ErrorResponse = require('../utils/error-response');
const {
  uploadToCloudinary,
  deleteFromCloudinary
} = require('../config/cloudinary');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const options = {
  expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  httpOnly: true
};

// @desc      Register new user
// @route     POST /api/auth/register
exports.register = asyncHandler(async (req, res, next) => {
  const image = path.join(__dirname, '..', 'tmp', req.files[0].filename);

  const avatar = await uploadToCloudinary(image, { folder: 'avatars' });

  fs.unlinkSync(image);

  req.body.avatar = avatar.url;

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
// @route     POST /api/auth/login
exports.login = asyncHandler(async (req, res, next) => {
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

// @desc      Logout by clearing cookie
// @route     POST /api/auth/logout
exports.logout = asyncHandler(async (req, res, next) => {
  res
    .status(200)
    .cookie('token', 'none', {
      expires: new Date(Date.now() + 1000),
      httpOnly: true
    })
    .json({
      success: true
    });
});
