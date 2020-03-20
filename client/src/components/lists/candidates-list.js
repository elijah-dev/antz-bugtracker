import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getTeam } from '../../actions/team-actions';
import Avatar from '../avatar';

const CandidatesList = () => {
  const type = useSelector(state => state.modal.type);
  const project = useSelector(state => state.currentProject.data._id);
  const candidates = useSelector(state => state.team.candidates);
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 'candidates') dispatch(getTeam(project, '?invite=true'));
  }, [type, dispatch]);

  const users = candidates.map(candidate => {
    return (
      <ListGroupItem key={candidate._id} className='d-flex align-items-center'>
        <Avatar avatar={candidate.avatar} size={40} />
        <span className='ml-2'>
          {candidate.firstName} {candidate.secondName}, {candidate.role}
        </span>
      </ListGroupItem>
    );
  });

  if (type === 'candidates') {
    return <ListGroup className='mb-2'>{users}</ListGroup>;
  } else {
    return '';
  }
};

export default CandidatesList;
