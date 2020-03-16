import React, { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './login-form';

const AuthPopup = () => {
  const isAuthorized = useSelector(state => state.currentUser.isAuthorized);

  return (
    <Modal isOpen={!isAuthorized}>
      <ModalHeader>Log in</ModalHeader>
      <ModalBody>
        <LoginForm />
      </ModalBody>
    </Modal>
  );
};

export default AuthPopup;
