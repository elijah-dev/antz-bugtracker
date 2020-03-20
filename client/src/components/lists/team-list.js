import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getTeam } from '../../actions/team-actions';
import Avatar from '../avatar';

const TeamList = props => {
  const type = useSelector(state => state.modal.type);
  const project = useSelector(state => state.currentProject.data._id);
  const team = useSelector(state => state.team.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 'team') dispatch(getTeam(project, ''));
  }, [type, dispatch]);

  const members = team.map(member => {
    return (
      <ListGroupItem key={member._id} className='d-flex align-items-center'>
        <Avatar avatar={member.avatar} size={40} />
        <span className='ml-2'>
          {member.firstName} {member.secondName}, {member.role}
        </span>
      </ListGroupItem>
    );
  });

  if (type === 'team') {
    return <ListGroup className='mb-2'>{members}</ListGroup>;
  } else {
    return '';
  }
};

export default TeamList;
