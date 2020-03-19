import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/modal-actions';

const SignUpButton = props => {
  const dispatch = useDispatch();

  if (!props.isAuthorized) {
    return (
      <Button
        color='link'
        className='text-light'
        onClick={() => {
          dispatch(openModal('signup'));
        }}
      >
        Sign up
      </Button>
    );
  } else {
    return '';
  }
};

export default SignUpButton;
