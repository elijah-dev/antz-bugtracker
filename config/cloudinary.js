const cloudinary = require('cloudinary').v2;

function uploadToCloudinary(file, options) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file, options, (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
}

function deleteFromCloudinary(file, options) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(file, options, (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
}

function deleteCloudinaryFolder(file, options) {
  return new Promise((resolve, reject) => {
    cloudinary.api.delete_folder(file, options, (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
}

module.exports = {
  uploadToCloudinary,
  deleteFromCloudinary,
  deleteCloudinaryFolder
};
