import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useSelector } from 'react-redux';
import Avatar from '../common/Avatar';
import CickButton from './CickButton';
import FetchSpinner from '../common/FetchSpinner';

const TeamList = props => {
  const type = useSelector(state => state.modal.type);
  const team = useSelector(state => state.team.data);
  const fetching = useSelector(state => state.team.fetching);
  const curUserId = useSelector(state => state.currentUser.data._id);

  const members = team.map(member => {
    if (member._id !== curUserId) {
      return (
        <ListGroupItem
          key={member._id}
          className='d-flex align-items-center justify-content-between'
        >
          <div>
            <Avatar publicId={member.avatar} size={40} />
            <span className='ml-2'>
              {member.firstName} {member.secondName}, {member.role}
            </span>
          </div>
          <div>
            <CickButton className user={member._id} />
          </div>
        </ListGroupItem>
      );
    }
    return '';
  });

  if (type === 'team') {
    return (
      <ListGroup className='mb-2'>
        {fetching ? <FetchSpinner /> : ''}
        {members}
      </ListGroup>
    );
  } else {
    return '';
  }
};

export default TeamList;
