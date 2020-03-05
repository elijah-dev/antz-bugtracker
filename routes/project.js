const express = require('express');
const {
  getAllProjects,
  getSingleProject,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/project');

const issueRouter = require('./issue');

const router = express.Router();

router.use('/:projectId/issue', issueRouter);

router.route('/create').post(createProject);

router
  .route('/:id')
  .get(getSingleProject)
  .put(updateProject)
  .delete(deleteProject);

router.route('/').get(getAllProjects);

module.exports = router;
