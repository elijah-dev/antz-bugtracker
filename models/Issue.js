const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.ObjectId,
      ref: 'Project'
    },
    key: {
      type: String,
      unique: true
    },
    type: {
      type: String
    },
    affectVersion: {
      type: String,
      default: 'none'
    },
    status: {
      type: String,
      enum: ['Open', 'Closed', 'In progress', 'Resolved', 'Reopened'],
      default: 'Open'
    },
    resolution: {
      type: String,
      enum: [
        'Unresolved',
        'Fixed',
        "Won't fix",
        'Duplicate',
        'Incomplete',
        'Cannot reproduce',
        'FAD'
      ],
      default: 'Unresolved'
    },
    summary: {
      type: String
    },
    priority: {
      type: String,
      enum: ['Blocker', 'Critical', 'Major', 'Minor', 'Trivial']
    },
    severity: {
      type: String,
      enum: ['Blocker', 'Critical', 'Major', 'Minor', 'Trivial']
    },
    description: {
      type: String
    },
    stepsToReproduce: {
      type: String
    },
    expectedResult: {
      type: String
    },
    actualResult: {
      type: String
    },
    environment: {
      type: String
    },
    attachment: {
      type: String
    },
    assignedTo: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    submittedBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    attachments: [{ type: String }]
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

module.exports = mongoose.model('Issue', IssueSchema);
