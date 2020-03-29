import React from 'react';
import { Alert, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { closeSecondaryModal } from '../../actions/modal-actions';
import { manageTeam } from '../../actions/team-actions';

const Confirmation = () => {
  const type = useSelector(state => state.secondaryModal.type);
  const action = useSelector(state => state.secondaryModal.action);
  const member = useSelector(state => state.secondaryModal.member);
  const project = useSelector(state => state.currentProject.data._id);
  const dispatch = useDispatch();

  if (type === 'confirm') {
    return (
      <div>
        <Alert color={action === 'remove' ? 'danger' : 'success'}>
          Are you sure you want to {action} {member.firstName}{' '}
          {action === 'remove' ? 'from' : 'to'} the team?
        </Alert>
        <div className='d-flex justify-content-between'>
          <Button
            color='danger'
            onClick={() => dispatch(closeSecondaryModal())}
          >
            Cancel
          </Button>

          <Button
            color='success'
            onClick={() => dispatch(manageTeam(project, member._id, action))}
          >
            Confirm
          </Button>
        </div>
      </div>
    );
  }
  return '';
};

export default Confirmation;
