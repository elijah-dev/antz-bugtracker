const colors = require('colors');
const ErrorResponse = require('../utils/error-response');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;
  console.error(`${err.name}: ${err.message}`.red.bold);
  console.error(`${err.reason}${err.stack}`.red);

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message });
};

module.exports = errorHandler;
