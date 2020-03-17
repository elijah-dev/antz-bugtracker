import React from 'react';
import { Navbar, NavbarText } from 'reactstrap';
import Navlogo from './navlogo';
import Navuser from './navuser';

const Navpanel = () => {
  return (
    <Navbar
      className='d-flex justify-content-between bg-primary'
      dark
      expand='md'
    >
      <Navlogo />
      <Navuser />
    </Navbar>
  );
};

export default Navpanel;
