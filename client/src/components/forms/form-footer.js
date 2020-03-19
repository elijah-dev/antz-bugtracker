import React from 'react';
import SubmitButton from '../buttons/submit-button';
import CloseModalButton from '../buttons/close-modal-button';

const FormFooter = () => {
  return (
    <div className='d-flex justify-content-between'>
      <CloseModalButton />
      <SubmitButton />
    </div>
  );
};

export default FormFooter;
