import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, Button } from 'reactstrap';
import { useSelector } from 'react-redux';
import ProjectsList from './ProjectList';

const ProjectsDropdown = () => {
  const currentProject = useSelector(state => state.currentProject.data);

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
