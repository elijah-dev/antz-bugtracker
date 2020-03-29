import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../actions/modal-actions';

const InviteButton = () => {
  const button = useSelector(state => state.modal.okBtnType);
  const text = useSelector(state => state.modal.okBtnText);
  const permissions = useSelector(state => state.currentProject.permissions);
  const dispatch = useDispatch();

  if (button === 'invite') {
    return (
      <Button
        color='info'
        disabled={!permissions.canAddTeamMembers}
        onClick={() => {
          dispatch(
            openModal({
              type: 'candidates',
              closeBtnText: 'Close',
              okBtnType: 'back',
              okBtnText: 'Back'
            })
          );
        }}
      >
        {text}
      </Button>
    );
  }
  return '';
};

export default InviteButton;
