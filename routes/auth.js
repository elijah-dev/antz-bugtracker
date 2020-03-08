const express = require('express');
const { login, register, logout } = require('../controllers/auth');

const router = express.Router({ mergeParams: true });

router.route('/register').post(register);

router.route('/login').post(login);

router.route('/logout').post(logout);

module.exports = router;
