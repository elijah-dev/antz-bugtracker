const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.ObjectId,
      ref: 'Project'
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
      enum: [
        'open',
        'closed',
        'assigned',
        'in progress',
        'resolved',
        'reopened'
      ]
    },
    resolution: {
      type: String
    },
    summary: {
      type: String
    },
    priority: {
      type: String
    },
    severity: {
      type: String
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
    }
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

module.exports = mongoose.model('Issue', IssueSchema);
