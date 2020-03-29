import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { closeSecondaryModal } from '../../actions/modal-actions';

const PermsList = () => {
  const dispatch = useDispatch();
  const type = useSelector(state => state.secondaryModal.type);
  const canAddTeamMembers = useSelector(
    state => state.secondaryModal.canAddTeamMembers
  );
  const canRemoveTeamMembers = useSelector(
    state => state.secondaryModal.canRemoveTeamMembers
  );
  const canChangePermissions = useSelector(
    state => state.secondaryModal.canChangePermissions
  );
  const canAssignIssues = useSelector(
    state => state.secondaryModal.canAssignIssues
  );
  const canSubmitIssues = useSelector(
    state => state.secondaryModal.canSubmitIssues
  );
  const canSetResolution = useSelector(
    state => state.secondaryModal.canSetResolution
  );
  const canSetStatus = useSelector(state => state.secondaryModal.canSetStatus);

  if (type === 'perms') {
    return (
      <div>
        <ListGroup>
          <ListGroupItem>
            <div>Can invite team members</div>
          </ListGroupItem>

          <ListGroupItem>
            <div>Can remove team members</div>
          </ListGroupItem>

          <ListGroupItem>
            <div>Can change user permissions</div>
          </ListGroupItem>

          <ListGroupItem>
            <div>Can change user permissions</div>
          </ListGroupItem>

          <ListGroupItem>
            <div>Can assign issues</div>
          </ListGroupItem>

          <ListGroupItem>
            <div>Can resolve issues</div>
          </ListGroupItem>

          <ListGroupItem>
            <div>Can close issues</div>
          </ListGroupItem>
        </ListGroup>

        <div className='d-flex justify-content-between mt-4'>
          <Button
            color='danger'
            onClick={() => dispatch(closeSecondaryModal())}
          >
            Cancel
          </Button>

          <Button color='success'>Confirm</Button>
        </div>
      </div>
    );
  }
  return '';
};

export default PermsList;
