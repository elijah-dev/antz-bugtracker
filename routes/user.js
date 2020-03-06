const express = require('express');
const {
  getUser,
  loginUser,
  registerUser,
  deleteUser
} = require('../controllers/user');

const { protect } = require('../midleware/auth');

const router = express.Router({ mergeParams: true });

router.route('/register').post(registerUser);

router.route('/login').post(loginUser);

router
  .route('/')
  .get(protect, getUser)
  .delete(deleteUser);

module.exports = router;
