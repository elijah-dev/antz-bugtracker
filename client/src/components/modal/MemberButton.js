import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { openSecondaryModal } from '../../actions/modal-actions';

const MemberButton = props => {
  const permissions = useSelector(state => state.currentProject.permissions);
  const dispatch = useDispatch();

  if (props.action === 'add') {
    return (
      <Button
        className='d-flex align-items-center justify-content-center p-2'
        color='success'
        disabled={!permissions.canAddTeamMembers}
        onClick={() =>
          dispatch(
            openSecondaryModal({
              type: 'confirm',
              action: 'add',
              member: props.member
            })
          )
        }
      >
        <img src='add-user.svg' height='20px' width='20px' alt='' />
      </Button>
    );
  }

  if (props.action === 'remove') {
    return (
      <Button
        className='d-flex align-items-center justify-content-center p-2'
        color='danger'
        disabled={!permissions.canAddTeamMembers}
        onClick={() =>
          dispatch(
            openSecondaryModal({
              type: 'confirm',
              action: 'remove',
              member: props.member
            })
          )
        }
      >
        <img src='remove-user.svg' height='20px' width='20px' alt='' />
      </Button>
    );
  }

  return '';
};

export default MemberButton;
