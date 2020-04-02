import React from 'react';
import Avatar from '../common/Avatar';
import AssigneePicker from './AssigneePicker';
import InProgressButton from './InProgressButton';

const AssignElement = props => {
  const assignee = props.issue.assignedTo;

  return (
    <td>
      {assignee ? (
        <span className='d-flex align-items-center'>
          <Avatar publicId={assignee.avatar} size={30} /> {assignee.role}{' '}
          {assignee.firstName} {assignee.secondName}{' '}
          <InProgressButton
            issue={props.issue._id}
            status={props.issue.status}
            assignee={assignee._id}
          />
        </span>
      ) : (
        <AssigneePicker issue={props.issue._id} />
      )}
    </td>
  );
};

export default AssignElement;
