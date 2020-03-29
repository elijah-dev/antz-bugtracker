import React from 'react';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { closeSecondaryModal } from '../../actions/modal-actions';
import AttachmentViewer from './AttachmentViewer';
import Confirmation from './Confirmation';
import PermsList from './PermsList';

const SecondaryPopup = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.secondaryModal.isOpen);
  const type = useSelector(state => state.secondaryModal.type);

  return (
    <Modal isOpen={isOpen} size={type === 'media' ? 'xl' : ''}>
      {type === 'media' ? (
        <ModalHeader className='d-flex flex-column align-items-end'>
          <Button close onClick={() => dispatch(closeSecondaryModal())} />
        </ModalHeader>
      ) : (
        ''
      )}
      <ModalBody>
        <PermsList />
        <AttachmentViewer />
        <Confirmation />
      </ModalBody>
    </Modal>
  );
};

export default SecondaryPopup;
