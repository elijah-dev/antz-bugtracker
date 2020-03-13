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
      enum: ['open', 'closed', 'in progress', 'resolved', 'reopened'],
      default: 'open'
    },
    resolution: {
      type: String,
      enum: [
        'unresolved',
        'fixed',
        "won't fix",
        'duplicate',
        'incomplete',
        'cannot reproduce',
        'fad'
      ],
      default: 'unresolved'
    },
    summary: {
      type: String
    },
    priority: {
      type: String,
      enum: ['blocker', 'critical', 'major', 'minor', 'trivial']
    },
    severity: {
      type: String,
      enum: ['blocker', 'critical', 'major', 'minor', 'trivial']
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
