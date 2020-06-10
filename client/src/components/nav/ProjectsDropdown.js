import React, { useState } from 'react';
import { Dropdown, DropdownToggle } from 'reactstrap';
import { useSelector } from 'react-redux';
import ProjectsList from './ProjectList';

const ProjectsDropdown = () => {
  const currentProject = useSelector(state => state.currentProject.data);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className='m-1'>
      {/* <Button
        id='caret'
        color='primary'
        // className='border border-light'
        style={{ width: '12rem' }}>
        {currentProject.name ? currentProject.name : 'No projects chosen'}
      </Button> */}
      <DropdownToggle color='primary'>
        {currentProject.name ? currentProject.name : 'No projects chosen'}
      </DropdownToggle>
      <ProjectsList />
    </Dropdown>
  );
};

export default ProjectsDropdown;
