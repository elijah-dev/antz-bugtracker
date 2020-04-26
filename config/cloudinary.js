const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

function uploadToCloudinary(file, options) {
  return new Promise((resolve, reject) => {
    let cld_upload_stream = cloudinary.uploader.upload_stream(
      options,
      (err, res) => {
        if (err) return reject(err);
        return resolve(res);
      }
    );

    streamifier.createReadStream(file.buffer).pipe(cld_upload_stream);
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
  deleteCloudinaryFolder,
};
