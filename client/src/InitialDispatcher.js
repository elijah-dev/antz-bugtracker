import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from './actions/auth-actions';
import { getProjects } from './actions/projects-actions';
import { setCurrentProject } from './actions/project-actions';
import { getIssues } from './actions/issue-actions';
import { getTeam } from './actions/team-actions';
import { closeModal } from './actions/modal-actions';

const InitialDispatcher = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(closeModal()), [dispatch]);

  // Authorize and set current user
  useEffect(() => dispatch(getCurrentUser()), [dispatch]);

  // Fetch and set current project
  const isAuthorized = useSelector(state => state.currentUser.isAuthorized);
  const cookie = Cookies.get('project');
  useEffect(() => {
    if (isAuthorized && cookie) {
      dispatch(setCurrentProject(cookie));
    }
  }, [isAuthorized, cookie, dispatch]);

  // Fetch and set project issues
  const project = useSelector(state => state.currentProject.data._id);
  useEffect(() => {
    if (project) dispatch(getIssues(project, ''));
  }, [project, dispatch]);

  //    Fetch and set user projects
  useEffect(() => {
    if (isAuthorized) dispatch(getProjects());
  }, [isAuthorized, dispatch]);

  //   Fetch and set project team
  useEffect(() => {
    if (project) {
      dispatch(getTeam(project, ''));
    }
  }, [project, dispatch]);

  return <div></div>;
};

export default InitialDispatcher;
