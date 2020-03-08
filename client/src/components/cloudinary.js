import React from 'react';
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext
} from 'cloudinary-react';

const Cloudinary = () => {
  return (
    <CloudinaryContext cloudName='dgiga3ohj'>
      <div>
        <Image publicId='sample' width='50' />
      </div>
      <Image publicId='sample' width='0.5' />
    </CloudinaryContext>
  );
};

export default Cloudinary;
