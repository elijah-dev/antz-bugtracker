import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/modal-actions';

const SignInButton = props => {
  const dispatch = useDispatch();

  if (!props.isAuthorized) {
    return (
      <span
        color='link'
        className='text-light hover-pointer mr-2 hover-underline'
        onClick={() => {
          dispatch(openModal('signin', 'submit', 'Cancel'));
        }}
      >
        Sign in
      </span>
    );
  } else {
    return '';
  }
};

export default SignInButton;
