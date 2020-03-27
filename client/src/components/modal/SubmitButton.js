import React from 'react';
import { Button } from 'reactstrap';
import { useSelector } from 'react-redux';

const SubmitButton = () => {
  const button = useSelector(state => state.modal.okBtnType);
  const text = useSelector(state => state.modal.okBtnText);
  const type = useSelector(state => state.modal.type);

  if (button === 'submit') {
    return (
      <Button type='submit' color='primary' form={type}>
        {text}
      </Button>
    );
  }
  return '';
};

export default SubmitButton;
