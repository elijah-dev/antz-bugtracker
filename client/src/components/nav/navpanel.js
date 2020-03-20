import React from 'react';
import { Navbar } from 'reactstrap';
import Navlogo from './navlogo';
import Navuser from './navuser';
import ProjectsDropdown from './projects-dropdown';
import TeamButton from '../buttons/team-button';

const Navpanel = () => {
  return (
    <Navbar
      className='d-flex justify-content-between bg-primary'
      dark
      expand='md'
    >
      <div className='d-flex align-items-center'>
        <Navlogo />
        <ProjectsDropdown />
        <TeamButton />
      </div>
      <Navuser />
    </Navbar>
  );
};

export default Navpanel;
