import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { useSelector } from 'react-redux';
import NewProjectForm from './NewProjectForm';
import TeamList from './TeamList';
import CandidatesList from './CandidatesList';
import IssueForm from './IssueForm';
import ModalFooter from './ModalFooter';
import IssueTable from './IssueTable';

const Popup = () => {
  const isOpen = useSelector(state => state.modal.isOpen);
  const type = useSelector(state => state.modal.type);

  return (
    <Modal isOpen={isOpen} size={type.match(/issu.+/) ? 'lg' : ''}>
      <ModalBody>
        <CandidatesList />
        <TeamList />
        <NewProjectForm />
        <IssueForm />
        <IssueTable />
        <ModalFooter />
      </ModalBody>
    </Modal>
  );
};

export default Popup;
