const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    secondName: {
      type: String,
      required: true
    },
    login: {
      type: String,
      required: true,
      unique: true,
      select: false
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    role: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      default: 'no-photo.jpg'
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

UserSchema.pre('save', async function(next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.pre('remove', async function(next) {
  await this.model('PermissionList').deleteMany({ user: this._id });
  next();
});

UserSchema.methods.signJwt = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET);
};

UserSchema.methods.comparePasswords = async function(password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
