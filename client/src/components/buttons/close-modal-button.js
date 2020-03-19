import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../actions/modal-actions';

const CloseModalButton = props => {
  const dispatch = useDispatch();

  if (!props.isAuthorized) {
    return (
      <Button
        color='danger'
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        Cancel
      </Button>
    );
  } else {
    return '';
  }
};

export default CloseModalButton;
