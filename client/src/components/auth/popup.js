import React, { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import SignInForm from './signin-form';
import SignUpForm from './signup-form';
import { closeForm } from '../../actions/auth-form-actions';

const AuthPopup = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.authForm.isOpen);
  const signup = useSelector(state => state.authForm.signup);

  return (
    <Modal isOpen={isOpen}>
      <ModalBody>
        <SignInForm signup={signup} />
        <SignUpForm signup={signup} />
      </ModalBody>
    </Modal>
  );
};

export default AuthPopup;
