import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import Avatar from '../avatar';
import UserName from '../username';
import SignInButton from '../buttons/signin-button';
import SignUpButton from '../buttons/signup-button';
import SignOutButton from '../buttons/signout-button';

const Navuser = () => {
  const isAuthorized = useSelector(state => state.currentUser.isAuthorized);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => {
    if (isAuthorized) {
      setDropdownOpen(prevState => !prevState);
    }
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className='hover-pointer'>
      <DropdownToggle color='primary' className='d-flex align-items-center'>
        <UserName isAuthorized={isAuthorized} />
        <SignInButton isAuthorized={isAuthorized} />
        <SignUpButton isAuthorized={isAuthorized} />
        <Avatar size={50} />
      </DropdownToggle>
      <DropdownMenu right>
        <SignOutButton isAuthorized={isAuthorized} />

        <DropdownItem divider />
      </DropdownMenu>
    </Dropdown>
  );
};

export default Navuser;
