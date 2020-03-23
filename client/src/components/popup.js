import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { useSelector } from 'react-redux';
import SignInForm from './forms/signin-form';
import SignUpForm from './forms/signup-form';
import NewProjectForm from './forms/new-project-form';
import TeamList from './lists/team-list';
import CandidatesList from './lists/candidates-list';
import IssueForm from './forms/issue-form';
import ModalFooter from './modal-footer';

const Popup = () => {
  const isOpen = useSelector(state => state.modal.isOpen);
  const type = useSelector(state => state.modal.type);

  return (
    <Modal isOpen={isOpen} size={type === 'issue' ? 'lg' : ''}>
      <ModalBody>
        <CandidatesList />
        <TeamList />
        <NewProjectForm />
        <SignInForm />
        <SignUpForm />
        <IssueForm />
        <ModalFooter />
      </ModalBody>
    </Modal>
  );
};

export default Popup;
