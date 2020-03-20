import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/modal-actions';

const TeamButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      className='border border-white bg-primary m-1'
      onClick={() => dispatch(openModal('team', 'invite', 'Close'))}
    >
      Team
    </Button>
  );
};

export default TeamButton;
