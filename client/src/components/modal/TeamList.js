import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '../common/Avatar';
import CickButton from './CickButton';

const TeamList = props => {
  const type = useSelector(state => state.modal.type);
  const team = useSelector(state => state.team.data);

  const members = team.map(member => {
    return (
      <ListGroupItem
        key={member._id}
        className='d-flex align-items-center justify-content-between'
      >
        <div>
          <Avatar avatar={member.avatar} size={40} />
          <span className='ml-2'>
            {member.firstName} {member.secondName}, {member.role}
          </span>
        </div>
        <div>
          <CickButton className user={member._id} />
        </div>
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
