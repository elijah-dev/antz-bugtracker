const express = require('express');
const { getCurrentUser, deleteUser } = require('../controllers/user');

const router = express.Router({ mergeParams: true });

const { protect } = require('../midleware/auth');
router.use(protect);

router
  .route('/')
  .get(getCurrentUser)
  .delete(deleteUser);

module.exports = router;
