import React from 'react';
import { useSelector } from 'react-redux';

const UserName = props => {
  const user = useSelector(state => state.currentUser.data);

  if (props.isAuthorized) {
    return (
      <span className='mr-2 text-white'>
        {user.firstName} {user.secondName}
      </span>
    );
  } else {
    return '';
  }
};

export default UserName;
