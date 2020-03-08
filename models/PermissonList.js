const mongoose = require('mongoose');

const PermissionListSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.ObjectId,
    ref: 'Project'
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  canAddTeamMembers: {
    type: Boolean,
    default: false
  },
  canRemoveTeamMembers: {
    type: Boolean,
    default: false
  },
  canChangePermissions: {
    type: Boolean,
    default: false
  },
  canEditProject: {
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
  canSetStatus: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('PermissionList', PermissionListSchema);
