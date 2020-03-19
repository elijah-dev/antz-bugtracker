import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { useSelector } from 'react-redux';
import SignInForm from './forms/signin-form';
import SignUpForm from './forms/signup-form';
import NewProjectForm from './forms/new-project-form';
import { Spinner } from 'reactstrap';

const AuthPopup = () => {
  const modal = useSelector(state => state.modal);

  return (
    <Modal isOpen={modal.isOpen}>
      <ModalBody>
        {modal.type === 'loading' ? <Spinner /> : ''}
        <NewProjectForm isOpen={modal.type === 'project'} />
        <SignInForm type={modal.type} />
        <SignUpForm type={modal.type} />
      </ModalBody>
    </Modal>
  );
};

export default AuthPopup;
