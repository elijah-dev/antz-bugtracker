import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navpanel = props => {
  return (
    <Navbar className='bg-primary' dark expand='md'>
      <NavbarBrand href='/'>ANTZ</NavbarBrand>
    </Navbar>
  );
};

export default Navpanel;
