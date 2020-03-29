import React from 'react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import { useSelector } from 'react-redux';
import NewProjectForm from './NewProjectForm';
import TeamList from './TeamList';
import CandidatesList from './CandidatesList';
import IssueForm from './IssueForm';
import IssueTable from './IssueTable';
import SubmitButton from './SubmitButton';
import CloseModalButton from './CloseModalButton';
import InviteButton from './InviteButton';

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
      </ModalBody>
      <ModalFooter className='d-flex justify-content-between'>
        <CloseModalButton />
        <SubmitButton />
        <InviteButton />
      </ModalFooter>
    </Modal>
  );
};

export default Popup;
