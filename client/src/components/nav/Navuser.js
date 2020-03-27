import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import Avatar from '../common/Avatar';
import UserName from './Username';
import SignOutButton from './SignOutButton';

const Navuser = () => {
  const isAuthorized = useSelector(state => state.currentUser.isAuthorized);
  const avatar = useSelector(state => state.currentUser.data.avatar);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => {
    if (isAuthorized) {
      setDropdownOpen(prevState => !prevState);
    }
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className='hover-pointer'>
      <DropdownToggle color='primary' className='d-flex align-items-center'>
        {isAuthorized ? (
          <UserName isAuthorized={isAuthorized} />
        ) : (
          <span className='mr-2'>Signed out</span>
        )}
        <Avatar publicId={avatar} size={50} />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>Account</DropdownItem>
        <DropdownItem divider />
        <SignOutButton isAuthorized={isAuthorized} />
      </DropdownMenu>
    </Dropdown>
  );
};

export default Navuser;
