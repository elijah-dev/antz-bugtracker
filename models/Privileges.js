const mongoose = require('mongoose');

const PriviligesSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.ObjectId,
    ref: 'Project'
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  canInviteUsers: {
    type: Boolean,
    default: false
  },
  canChangePriviliges: {
    type: Boolean,
    default: false
  },
  canAssignIssues: {
    type: Boolean,
    default: false
  },
  canSubmitIssues: {
    type: Boolean,
    default: true
  },
  canSetResolution: {
    type: Boolean,
    default: false
  },
  canChangeStatus: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Priviliges', PriviligesSchema);
