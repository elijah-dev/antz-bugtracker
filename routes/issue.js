const express = require('express');
const {
  getIssues,
  getSingleIssue,
  createIssue,
  updateIssue,
  deleteIssue
} = require('../controllers/issue');

const { protect } = require('../midleware/auth');

const router = express.Router({ mergeParams: true });

router.route('/').get(getIssues);

router.route('/create').post(protect, createIssue);

router
  .route('/:id')
  .get(getSingleIssue)
  .put(updateIssue)
  .delete(deleteIssue);

module.exports = router;
