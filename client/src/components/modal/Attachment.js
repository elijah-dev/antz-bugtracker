import React from 'react';
import { Image, Video } from 'cloudinary-react';
import { useDispatch } from 'react-redux';
import { openSecondaryModal } from '../../actions/modal-actions';

const Attachment = props => {
  const dispatch = useDispatch();

  const classname =
    'm-2 border-right border-bottom border-secondary hover-pointer';

  const viewAttachment = () => {
    dispatch(
      openSecondaryModal({
        isOpen: true,
        type: 'media',
        publicId: props.publicId,
        mimeType: props.mimeType
      })
    );
  };

  if (props.mimeType.match(/video.+/)) {
    return (
      <Video
        className={classname}
        publicId={`${props.publicId}.jpg`}
        resourceType='video'
        width='150'
        crop='scale'
        onClick={() => viewAttachment()}
      ></Video>
    );
  }

  return (
    <Image
      className={classname}
      publicId={props.publicId}
      width='150'
      crop='scale'
      onClick={() => viewAttachment()}
    ></Image>
  );
};

export default Attachment;
