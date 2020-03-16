import React, { useEffect, useState } from 'react';
import { Navbar, NavbarBrand, NavbarText, Button } from 'reactstrap';
import { Image, Transformation } from 'cloudinary-react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/auth-actions';

const Navpanel = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.currentUser.data);
  const isAuthorized = useSelector(state => state.currentUser.isAuthorized);

  return (
    <Navbar
      className='d-flex justify-content-between bg-primary'
      dark
      expand='md'
    >
      <NavbarBrand href='/'>ANTZ</NavbarBrand>
      <div className='d-flex align-items-center'>
        <NavbarText
          id='logout'
          className='mr-2 text-light'
          onClick={() => {
            dispatch(logout());
          }}
        >
          {isAuthorized ? `Log out` : ``}
        </NavbarText>
        <NavbarText className='mr-2 text-white'>
          {isAuthorized
            ? `${user.firstName} ${user.secondName}`
            : `Not logged in`}
        </NavbarText>
        <Image
          className='rounded-circle'
          publicId={user.avatar ? user.avatar : 'placeholder'}
        >
          <Transformation height='50' width='50' crop='thumb' gravity='face' />
        </Image>
      </div>
    </Navbar>
  );
};

export default Navpanel;
