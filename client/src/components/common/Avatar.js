import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

const Avatar = props => {
  return (
    <Image
      className='rounded-circle'
      publicId={props.publicId ? props.publicId : 'placeholder'}
    >
      <Transformation
        height={props.size}
        width={props.size}
        crop='thumb'
        gravity='face'
        zoom='0.9'
      />
    </Image>
  );
};

export default Avatar;
