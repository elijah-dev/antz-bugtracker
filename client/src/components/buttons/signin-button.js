import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/modal-actions';

const SignInButton = props => {
  const dispatch = useDispatch();

  if (!props.isAuthorized) {
    return (
      <Button
        color='link'
        className='text-light'
        onClick={() => {
          dispatch(openModal('signin'));
        }}
      >
        Sign in
      </Button>
    );
  } else {
    return '';
  }
};

export default SignInButton;
