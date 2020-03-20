import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../actions/modal-actions';

const InviteButton = () => {
  const button = useSelector(state => state.modal.button);
  const dispatch = useDispatch();

  if (button === 'invite') {
    return (
      <Button
        color='info'
        onClick={() => {
          dispatch(openModal('candidates', 'ok', 'Cancel'));
        }}
      >
        Add members
      </Button>
    );
  }
  return '';
};

export default InviteButton;
