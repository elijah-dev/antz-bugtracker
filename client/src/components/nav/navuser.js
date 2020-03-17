import React from 'react';
import { useSelector } from 'react-redux';

import Avatar from '../avatar';
import UserName from '../username';
import SignInButton from '../signin-button';
import SignUpButton from '../signup-button';
import SignOutButton from '../signout-button';

const Navuser = () => {
  const isAuthorized = useSelector(state => state.currentUser.isAuthorized);

  return (
    <div className='d-flex align-items-center'>
      <UserName isAuthorized={isAuthorized} />

      <SignInButton isAuthorized={isAuthorized} />
      <span className='mr-2 text-white'> / </span>
      <SignUpButton isAuthorized={isAuthorized} />

      <SignOutButton isAuthorized={isAuthorized} />

      <Avatar size={50} />
    </div>
  );
};

export default Navuser;
