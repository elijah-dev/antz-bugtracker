import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/modal-actions';

const SignUpButton = props => {
  const dispatch = useDispatch();

  if (!props.isAuthorized) {
    return (
      <span
        color='link'
        className='text-light hover-pointer mr-2 hover-underline'
        onClick={() => {
          dispatch(openModal('signup', 'submit', 'Cancel'));
        }}
      >
        Sign up
      </span>
    );
  } else {
    return '';
  }
};

export default SignUpButton;
