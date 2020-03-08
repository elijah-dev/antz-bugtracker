const express = require('express');
const {
  getAllProjects,
  getSingleProject,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/project');
const { manageTeam, getMembers } = require('../controllers/team');

const router = express.Router();

const issueRouter = require('./issue');
router.use('/:projectId/issue', issueRouter);

const { protect } = require('../midleware/auth');
router.use(protect);

router.route('/create').post(createProject);

router
  .route('/:id/team')
  .get(getMembers)
  .put(manageTeam);

router
  .route('/:id')
  .get(getSingleProject)
  .put(updateProject)
  .delete(deleteProject);

router.route('/').get(getAllProjects);

module.exports = router;
