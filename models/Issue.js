const mongoose = require('mongoose');

const Attachment = new mongoose.Schema({
  publicId: { type: String },
  mimeType: { type: String }
});

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
    issueType: {
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
      ],
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
      enum: ['Critical', 'Major', 'Minor', 'Trivial']
    },
    severity: {
      type: String,
      enum: ['Critical', 'Major', 'Minor', 'Trivial']
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
    attachments: [
      {
        publicId: String,
        mimeType: String
      }
    ],
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
    }
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

module.exports = mongoose.model('Issue', IssueSchema);
