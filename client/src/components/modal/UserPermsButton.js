import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { openSecondaryModal } from '../../actions/modal-actions';

const UserPermsButton = props => {
  const permissions = useSelector(state => state.currentProject.permissions);
  const dispatch = useDispatch();

  return (
    <Button
      className='d-flex align-items-center justify-content-center p-2'
      color='info'
      disabled={!permissions.canChangePermissions}
      onClick={() =>
        dispatch(
          openSecondaryModal({
            type: 'perms',
            member: props.member
          })
        )
      }
    >
      <img src='user-settings.svg' height='20px' width='20px' alt='' />
    </Button>
  );
};

export default UserPermsButton;
