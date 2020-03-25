import React from 'react';
import { DropdownMenu, DropdownItem } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentProject } from '../../actions/project-actions';
import NewProjectButton from './NewProjectButton';

const ProjectsList = () => {
  const projects = useSelector(state => state.userProjects.data);
  const isAuthorized = useSelector(state => state.currentUser.isAuthorized);

  const dispatch = useDispatch();

  const projectsList = projects.map(project => {
    return (
      <DropdownItem
        key={project._id}
        onClick={() => {
          dispatch(setCurrentProject(project._id));
        }}
      >
        {project.name}
      </DropdownItem>
    );
  });

  return (
    <DropdownMenu
      right
      className='border border-primary'
      style={{ width: '14.4rem' }}
    >
      {projects.length < 1 ? (
        <DropdownItem disabled>No projects found</DropdownItem>
      ) : (
        ''
      )}

      {projectsList}
      <DropdownItem divider />
      <NewProjectButton active={isAuthorized} />
    </DropdownMenu>
  );
};

export default ProjectsList;
