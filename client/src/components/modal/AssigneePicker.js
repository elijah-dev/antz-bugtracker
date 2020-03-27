import React, { useState } from 'react';
import {
  Form,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '../common/Avatar';
import { updateIssue } from '../../actions/issue-actions';

const AssigneePicker = props => {
  const team = useSelector(state => state.team.data);
  const project = useSelector(state => state.currentProject.data._id);
  const isActive = useSelector(
    state => state.currentProject.permissions.canAssignUsers
  );
  const [assigneeName, setAssigneeName] = useState('');
  const [assigneeRole, setAssigneeRole] = useState('');
  const [assigneeId, setAssigneeId] = useState('');
  const [assigneeAv, setAssigneeAv] = useState('');

  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();
    const data = {
      assignedTo: assigneeId,
      status: 'assigned'
    };
    dispatch(updateIssue(props.issue, project, data));
  };

  const assignees = team.map(member => {
    if (member.canSetResolution) {
      return (
        <DropdownItem
          key={member._id}
          onClick={() => {
            setAssigneeName(`${member.firstName} ${member.secondName}`);
            setAssigneeRole(member.role);
            setAssigneeAv(member.avatar);
            setAssigneeId(member._id);
          }}
        >
          <span className='d-flex align-items-center'>
            <span className='mr-2'>
              {member.firstName} {member.secondName}{' '}
              <span className='text-secondary'>{member.role}</span>
            </span>
            <Avatar publicId={member.avatar} size={25} />
          </span>
        </DropdownItem>
      );
    }
    return '';
  });

  return (
    <Form onSubmit={submit}>
      <div className='d-flex'>
        <UncontrolledDropdown>
          <DropdownToggle
            size='sm'
            color='info'
            caret={assigneeName ? false : true}
            outline={assigneeName ? true : false}
            disabled={!isActive}
          >
            {assigneeName ? (
              <span className='d-flex align-items-center'>
                <span className='mr-2'>
                  {assigneeName}
                  <span className='text-secondary ml-2'>{assigneeRole}</span>
                </span>
                <Avatar publicId={assigneeAv} size={25} />
              </span>
            ) : (
              <span>Assign issue</span>
            )}
          </DropdownToggle>
          <DropdownMenu>{assignees}</DropdownMenu>
        </UncontrolledDropdown>
        {assigneeId ? (
          <Button type='submit' size='sm' color='info' className='ml-2'>
            Assign
          </Button>
        ) : (
          ''
        )}
      </div>
    </Form>
  );
};

export default AssigneePicker;
