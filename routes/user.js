const express = require('express');
const {
  getCurrentUser,
  getAllUsers,
  deleteUser
} = require('../controllers/user');

const router = express.Router({ mergeParams: true });

const { protect } = require('../midleware/auth');
router.use(protect);

router.route('/all').get(getAllUsers);

router
  .route('/')
  .get(getCurrentUser)
  .delete(deleteUser);

module.exports = router;
