import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { useSelector } from 'react-redux';
import SignInForm from './forms/signin-form';
import SignUpForm from './forms/signup-form';
import NewProjectForm from './forms/new-project-form';
import TeamList from './lists/team-list';
import CandidatesList from './lists/candidates-list';
import ModalFooter from './modal-footer';

const Popup = () => {
  const isOpen = useSelector(state => state.modal.isOpen);

  return (
    <Modal isOpen={isOpen}>
      <ModalBody>
        <CandidatesList />
        <TeamList />
        <NewProjectForm />
        <SignInForm />
        <SignUpForm />
        <ModalFooter />
      </ModalBody>
    </Modal>
  );
};

export default Popup;
