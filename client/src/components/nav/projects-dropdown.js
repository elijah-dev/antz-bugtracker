import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownToggle } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../actions/projects-actions';
import ProjectsList from './project-list';

const ProjectsDropdown = () => {
  const user = useSelector(state => state.currentUser.isAuthorized);
  const currentProject = useSelector(state => state.currentProject.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, [user, dispatch]);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color='primary' className='border border-light'>
        {currentProject.name ? currentProject.name : 'Choose a project'}
      </DropdownToggle>
      <ProjectsList />
    </Dropdown>
  );
};

export default ProjectsDropdown;
