import React from 'react';
import { DropdownItem } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/auth-actions';

const SignOutButton = props => {
  const dispatch = useDispatch();
  if (props.isAuthorized) {
    return (
      <DropdownItem
        size='sm'
        color='link'
        onClick={() => {
          dispatch(logout());
        }}
      >
        Sign out
      </DropdownItem>
    );
  } else return '';
};

export default SignOutButton;
