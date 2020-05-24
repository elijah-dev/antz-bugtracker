import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../actions/modal-actions';

const TeamButton = () => {
  const dispatch = useDispatch();
  const project = useSelector(state => state.currentProject.data._id);

  return (
    <Button
      className='border border-primary bg-primary m-1'
      disabled={!project}
      onClick={() =>
        dispatch(
          openModal({
            type: 'team',
            closeBtnText: 'Close',
            okBtnType: 'invite',
            okBtnText: 'Invite'
          })
        )
      }>
      Team
    </Button>
  );
};

export default TeamButton;
