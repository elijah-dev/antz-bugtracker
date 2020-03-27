import React from 'react';
import { Modal, ModalBody, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { closeSecondaryModal } from '../../actions/modal-actions';
import AttachmentViewer from './AttachmentViewer';

const SecondaryPopup = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.secondaryModal.isOpen);
  const type = useSelector(state => state.secondaryModal.type);

  return (
    <Modal isOpen={isOpen} size={type === 'media' ? 'xl' : ''}>
      <ModalBody>
        <Button close onClick={() => dispatch(closeSecondaryModal())} />

        <AttachmentViewer />
      </ModalBody>
    </Modal>
  );
};

export default SecondaryPopup;
