const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: { type: String },
    key: {
      type: String,
      unique: true,
      required: true
    },
    team: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

ProjectSchema.pre('remove', async function(next) {
  await this.model('Issue').deleteMany({ project: this._id });
  await this.model('PermissionList').deleteMany({ project: this._id });
  next();
});

ProjectSchema.virtual('issues', {
  ref: 'Issue',
  localField: '_id',
  foreignField: 'project',
  justOne: false
});

module.exports = mongoose.model('Project', ProjectSchema);
