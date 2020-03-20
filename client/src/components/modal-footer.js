import React from 'react';
import SubmitButton from './buttons/submit-button';
import CloseModalButton from './buttons/close-modal-button';
import InviteButton from './buttons/invite-button';

const ModalFooter = props => {
  return (
    <div className='d-flex justify-content-between'>
      <CloseModalButton />
      <SubmitButton />
      <InviteButton />
    </div>
  );
};

export default ModalFooter;
