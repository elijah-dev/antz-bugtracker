const jwt = require('jsonwebtoken');
const asyncHandler = require('../midleware/async-handler');
const ErrorResponse = require('../utils/error-response');
const User = require('../models/User');

exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return next(new ErrorResponse(`Not authorized to access this route`, 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    console.log(
      `${req.user.role} ${req.user.firstName} ${req.user.secondName} authorized`
        .green
    );
    next();
  } catch (err) {
    next(err);
  }
});
