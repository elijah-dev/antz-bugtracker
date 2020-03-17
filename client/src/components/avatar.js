import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { useSelector } from 'react-redux';

const Avatar = props => {
  const avatar = useSelector(state => state.currentUser.data.avatar);

  return (
    <Image
      className='rounded-circle'
      publicId={avatar ? avatar : 'placeholder'}
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
