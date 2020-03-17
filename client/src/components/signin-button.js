import React from 'react';
import { useDispatch } from 'react-redux';
import { openFormSignin } from '../actions/auth-form-actions';

const SignInButton = props => {
  const dispatch = useDispatch();

  if (!props.isAuthorized) {
    return (
      <span
        className='mr-2 text-white signin-button'
        onClick={() => dispatch(openFormSignin())}
      >
        Sign in
      </span>
    );
  } else {
    return '';
  }
};

export default SignInButton;
