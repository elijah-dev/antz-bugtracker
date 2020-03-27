import React from 'react';
import Avatar from '../common/Avatar';
import AssigneePicker from './AssigneePicker';

const AssignElement = props => {
  const assignee = props.issue.assignedTo;

  return (
    <td>
      {assignee ? (
        <span>
          <Avatar publicId={assignee.avatar} size={30} /> {assignee.role}{' '}
          {assignee.firstName} {assignee.secondName}
        </span>
      ) : (
        <AssigneePicker issue={props.issue._id} />
      )}
    </td>
  );
};

export default AssignElement;
