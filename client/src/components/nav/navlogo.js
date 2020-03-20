import React from 'react';
import { NavbarBrand } from 'reactstrap';
import { Image, Transformation } from 'cloudinary-react';

const Navlogo = () => {
  return (
    <NavbarBrand id='navlogo' className='d-flex align-items-center'>
      <Image publicId='logo'>
        <Transformation height='50' width='50' crop='scale' />
      </Image>
      <span id='logotext'>ANTZ</span>
    </NavbarBrand>
  );
};

export default Navlogo;
