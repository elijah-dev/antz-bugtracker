import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useSelector } from 'react-redux';
import Avatar from '../common/Avatar';
import MemberButton from './MemberButton';
import UserPermsButton from './UserPermsButton';
import FetchSpinner from '../common/FetchSpinner';

const TeamList = () => {
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
              {member.firstName} {member.secondName}{' '}
              <span className='text-secondary'>{member.role}</span>
            </span>
          </div>
          <div className='d-flex align-items-center justify-content-between'>
            <UserPermsButton member={member} />
            <span className='m-1'></span>
            <MemberButton member={member} action='remove' />
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
