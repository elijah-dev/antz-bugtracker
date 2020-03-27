import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../actions/modal-actions';

const CloseModalButton = props => {
  const dispatch = useDispatch();
  const text = useSelector(state => state.modal.closeBtnText);

  return (
    <Button
      color='danger'
      onClick={() => {
        dispatch(closeModal());
      }}
    >
      {text}
    </Button>
  );
};

export default CloseModalButton;
