import React, { useEffect } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../actions/projects';

const Navpanel = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getProjects()));
  return (
    <Navbar className='bg-primary' dark expand='md'>
      <NavbarBrand href='/'>ANTZ</NavbarBrand>
    </Navbar>
  );
};

export default Navpanel;
