const express = require('express');
const Issue = require('../models/Issue');
const Project = require('../models/Project');
const asyncHandler = require('../midleware/async-handler');
const ErrorResponse = require('../utils/error-response');
const {
  uploadToCloudinary,
  deleteFromCloudinary,
  deleteCloudinaryFolder
} = require('../config/cloudinary');
const cloudinary = require('cloudinary').v2;
const path = require('path');
const fs = require('fs');
const url = require('url');

// @desc      Get issues
// @route     GET /api/project/:id/issue
exports.getIssues = asyncHandler(async (req, res, next) => {
  const issues = await Issue.find({
    project: req.params.projectId,
    ...req.query
  })
    .populate('submittedBy')
    .populate('assignedTo');

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
  let body = req.body;
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

  // Constructing body
  body.project = projectId;
  body.key = issueKey;
  body.submittedBy = req.user._id;
  body.atachments = [];

  const issue = await Issue.create(body);

  if (!issue) {
    return next(new ErrorResponse(`Could not create issue`, 500));
  }

  // Handle attachments
  if (req.files) {
    const files = req.files;
    const filePaths = files.map(
      file => (file = path.join(__dirname, '..', 'tmp', file.filename))
    );

    for (let file of files) {
      let attachment = await uploadToCloudinary(file.path, {
        resource_type: 'auto',
        folder: `issue-attachments/${issueKey}`
      });
      console.log(
        `File ${file.filename} uploaded on ${attachment.created_at}`.green
      );
      issue.attachments.push({
        publicId: attachment.public_id,
        mimeType: file.mimetype
      });
      issue.save();
    }

    for (let path of filePaths) {
      fs.unlinkSync(path);
      let f = fs.existsSync(path);
      if (!f) {
        console.log(`Temporary file removed`.blue);
      }
    }
  }

  res.status(201).json({
    success: true
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

// @desc      Delete issue
// @route     DELETE /api/issue/:id
exports.deleteIssue = asyncHandler(async (req, res, next) => {
  // if (!req.user.admin) {
  //   return next(new ErrorResponse(`Only admin can access this route`, 404));
  // }

  const issue = await Issue.findById(req.params.id);

  if (!issue) {
    return next(
      new ErrorResponse(
        `Issue with an ID of ${req.params.id} was not found`,
        404
      )
    );
  }

  for (let path of issue.attachments) {
    let type = 'image';
    if (path.match(/video/)) {
      type = 'video';
    }
    console.log(`Deleting ${type} from cloudinary...`);

    const id = path.match(/issue-attachments\/.*(?=\.)/);
    const del = await deleteFromCloudinary(id[0], { resource_type: type });
    if (del.result === 'ok') {
      console.log(`${type} deleted successfuly from Cloudinary`);
    } else {
      console.warn(`${type} was not deleted!`);
    }
  }

  const folder = issue.attachments[0].match(/issue-attachments\/.*(?=\/)/);

  const delf = await deleteCloudinaryFolder(folder[0]);
  console.log(delf);

  await issue.remove();

  res.status(200).json({
    success: true,
    data: issue
  });
});
