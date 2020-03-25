import React from 'react';
import { Navbar } from 'reactstrap';
import Navlogo from './Navlogo';
import Navuser from './Navuser';
import ProjectsDropdown from './ProjectsDropdown';
import TeamButton from './TeamButton';
import IssueButton from './NewIssueButton';

const Navpanel = () => {
  return (
    <Navbar
      className='d-flex justify-content-between bg-primary mb-3'
      expand='md'
    >
      <div className='d-flex align-items-center'>
        <Navlogo />
        <ProjectsDropdown />
        <TeamButton />
        <IssueButton />
      </div>
      <Navuser />
    </Navbar>
  );
};

export default Navpanel;
