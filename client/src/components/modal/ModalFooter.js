import React from 'react';
import SubmitButton from './SubmitButton';
import CloseModalButton from './CloseModalButton';
import InviteButton from './InviteButton';

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
