import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/auth-actions';

const SignOutButton = props => {
  const dispatch = useDispatch();
  if (props.isAuthorized) {
    return (
      <span
        id='logout'
        className='mr-2 text-light'
        onClick={() => {
          dispatch(logout());
        }}
      >
        Sign out
      </span>
    );
  } else return '';
};

export default SignOutButton;
