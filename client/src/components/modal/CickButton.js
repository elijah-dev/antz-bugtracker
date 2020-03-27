import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { manageTeam } from '../../actions/team-actions';

const CickButton = props => {
  const permissions = useSelector(state => state.currentProject.permissions);
  const project = useSelector(state => state.currentProject.data._id);
  const user = useSelector(state => state.currentUser.data._id);
  const dispatch = useDispatch();

  if (props.user === user) {
    return '';
  }

  return (
    <Button
      color='danger'
      //   className=''
      disabled={!permissions.canRemoveTeamMembers}
      onClick={() => {
        dispatch(manageTeam(project, `?user=${props.user}&action=remove`));
      }}
    >
      <img src='remove-user.svg' height='20px' width='20px' alt='' />
    </Button>
  );
};

export default CickButton;
