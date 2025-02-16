import React from 'react';
import { useVideo } from '../../context/VideoContext';

const VideoPlayer = () => {
  const { isPopupOpen, currentVideo, closePopup } = useVideo();

  return (
    <div
      id='popup'
      onClick={closePopup}
      className={isPopupOpen ? 'open' : 'closed'}
    >
      <iframe
        width='560'
        height='315'
        src={
          currentVideo ? `https://www.youtube.com/embed/${currentVideo}` : ''
        }
        border='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
