import React from 'react';
import { Image, Video } from 'cloudinary-react';
import { useSelector } from 'react-redux';

const AttachmentViewer = () => {
  const type = useSelector(state => state.secondaryModal.type);
  const publicId = useSelector(state => state.secondaryModal.publicId);
  const mimeType = useSelector(state => state.secondaryModal.mimeType);

  if (type === 'media') {
    if (mimeType.match(/video.+/)) {
      return (
        <div className='d-flex justify-content-around'>
          <Video
            controls='true'
            publicId={publicId}
            resourceType='video'
            width='1000'
            crop='scale'
          ></Video>
        </div>
      );
    }

    return (
      <div className='d-flex justify-content-around'>
        <Image publicId={publicId} width='1000' crop='scale'></Image>
      </div>
    );
  }

  return '';
};

export default AttachmentViewer;
