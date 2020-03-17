import React from 'react';
import { useDispatch } from 'react-redux';
import { openFormSignup } from '../actions/auth-form-actions';

const SignUpButton = props => {
  const dispatch = useDispatch();

  if (!props.isAuthorized) {
    return (
      <span
        className='mr-2 text-white signin-button'
        onClick={() => dispatch(openFormSignup())}
      >
        Sign up
      </span>
    );
  } else {
    return '';
  }
};

export default SignUpButton;
