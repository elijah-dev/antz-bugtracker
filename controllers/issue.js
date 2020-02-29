const express = require('express');
const Issue = require('../models/Issue');

// @desc      Get issues
// @route     GET /api/issue
exports.getIssues = async (req, res, next) => {
  const issues = await Issue.find();
  res.status(200).json({
    success: true,
    data: issues
  });
};

// @desc      Get single issues
// @route     GET /api/issue/:id
exports.getSingleIssue = async (req, res, next) => {
  const issue = await Issue.findById(req.params.id);

  if (!issue) {
    res.status(404).json({
      success: false,
      msg: 'Issue not found'
    });
  }

  res.status(200).json({
    success: true,
    data: issue
  });
};

// @desc      Create issue
// @route     POST /api/issue/create
exports.createIssue = async (req, res, next) => {
  const issue = await Issue.create(req.body);

  res.status(201).json({
    success: true,
    data: issue
  });
};

// @desc      Update issue
// @route     PUT /api/issue/:id
exports.updateIssue = async (req, res, next) => {
  const issue = await Issue.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: issue
  });
};

// @desc      Delete bootcamp
// @route     DELETE /api/issue/:id
exports.deleteIssue = async (req, res, next) => {
  const issue = await Issue.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: issue
  });
};
