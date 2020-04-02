import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateIssue } from '../../actions/issue-actions';

const InProgressButton = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.currentUser.data);
  const project = useSelector(state => state.currentProject.data._id);

  if (props.assignee === user._id && props.status === 'assigned') {
    return (
      <Button
        className='ml-2'
        size='sm'
        color='info'
        onClick={() =>
          dispatch(updateIssue(props.issue, project, { status: 'in progress' }))
        }
      >
        Begin Work
      </Button>
    );
  }
  return '';
};

export default InProgressButton;
