import React, { useEffect, useState } from 'react';
import { Dropdown, ButtonDropdown, DropdownToggle, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../actions/projects-actions';
import ProjectsList from './project-list';

const ProjectsDropdown = () => {
  const user = useSelector(state => state.currentUser.isAuthorized);
  const currentProject = useSelector(state => state.currentProject.data);
  const isAuthorized = useSelector(state => state.currentUser.isAuthorized);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthorized) dispatch(getProjects());
  }, [user, dispatch]);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className='m-1'>
      <Button
        id='caret'
        color='primary'
        className='border border-light'
        style={{ width: '12rem' }}
      >
        {currentProject.name ? currentProject.name : 'Choose a project'}
      </Button>
      <DropdownToggle
        caret
        color='primary'
        className='border border-light'
      ></DropdownToggle>
      <ProjectsList />
    </ButtonDropdown>
  );
};

export default ProjectsDropdown;
