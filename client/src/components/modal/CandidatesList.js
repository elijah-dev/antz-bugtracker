import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useSelector } from 'react-redux';
import Avatar from '../common/Avatar';
import MemberButton from './MemberButton';
import FetchSpinner from '../common/FetchSpinner';

const CandidatesList = () => {
  const type = useSelector(state => state.modal.type);
  const candidates = useSelector(state => state.team.candidates);
  const fetching = useSelector(state => state.team.fetching);

  const users = candidates.map(candidate => {
    return (
      <ListGroupItem
        key={candidate._id}
        className='d-flex align-items-center justify-content-between'
      >
        <div>
          <Avatar publicId={candidate.avatar} size={40} />
          <span className='ml-2'>
            {candidate.firstName} {candidate.secondName},{' '}
            <span className='text-secondary'>{candidate.role}</span>
          </span>
        </div>
        <div>
          <MemberButton member={candidate} action='add' />
        </div>
      </ListGroupItem>
    );
  });

  if (type === 'candidates') {
    return (
      <ListGroup className='mb-2'>
        {fetching ? <FetchSpinner /> : ''}
        {users}
        {candidates.length < 1 ? <div>No users found</div> : ''}
      </ListGroup>
    );
  } else {
    return '';
  }
};

export default CandidatesList;
