import React, { useState } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { closeSecondaryModal } from '../../actions/modal-actions';
import { changePermissions } from '../../actions/team-actions';
import FetchSpinner from '../common/FetchSpinner';

const PermsList = () => {
  const dispatch = useDispatch();
  const type = useSelector(state => state.secondaryModal.type);
  const loading = useSelector(state => state.secondaryModal.loading);
  const project = useSelector(state => state.currentProject.data._id);
  const member = useSelector(state => state.secondaryModal.member);
  let user = '';
  let permissions = '';
  if (member) {
    user = member._id;
    permissions = member.permissions;
  }

  const [perms, setPerms] = useState(permissions);
  let permlist = '';

  if (permissions) {
    permlist = Object.entries(perms).map(([key, value]) => {
      if (key === 'canEditProject') return null;

      return (
        <ListGroupItem
          key={key}
          className='d-flex justify-content-between align-items-center'>
          <div>
            {key === 'canAddTeamMembers' ? 'Can add team members' : null}
            {key === 'canRemoveTeamMembers' ? 'Can remove team members' : null}
            {key === 'canChangePermissions' ? 'Can change permissions' : null}
            {key === 'canAssignIssues' ? 'Can assign issues' : null}
            {key === 'canSubmitIssues' ? 'Can submit issues' : null}
            {key === 'canSetResolution' ? 'Can resolve issues' : null}
            {key === 'canSetStatus' ? 'Can chenge issue status' : null}
          </div>
          <div className='d-flex align-items-center'>
            <label className='switch-wrap'>
              <input
                type='checkbox'
                id={key}
                name={key}
                defaultChecked={value}
                onChange={() => {
                  setPerms({ ...perms, [key]: !value });
                }}
              />
              <div className='switch'></div>
            </label>
          </div>
        </ListGroupItem>
      );
    });
  }

  if (type === 'perms') {
    return (
      <div>
        {loading ? <FetchSpinner /> : ''}
        <ListGroup>{permlist}</ListGroup>

        <div className='d-flex justify-content-between mt-4'>
          <Button
            color='danger'
            onClick={() => dispatch(closeSecondaryModal())}>
            Cancel
          </Button>

          <Button
            color='success'
            onClick={() => dispatch(changePermissions(project, user, perms))}>
            Confirm
          </Button>
        </div>
      </div>
    );
  }
  return '';
};

export default PermsList;
