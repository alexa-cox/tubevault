import React from 'react';
import './VideoPlayer.css';
import { useDispatch, useSelector } from 'react-redux';
import { openPlayer, closePlayer } from '../../redux/slices';

const VideoPlayer = () => {
  const dispatch = useDispatch();
  const { isPlayerOpen } = useSelector((state) => state.player);
  const { selectedVideo } = useSelector((state) => state.videos);

  const handleClose = () => {
    dispatch(closePlayer());
  };

  return (
    <div
      id='popup'
      onClick={handleClose}
      className={isPlayerOpen ? 'open' : 'closed'}
    >
      <iframe
        width='560'
        height='315'
        src={
          selectedVideo
            ? `https://www.youtube.com/embed/${selectedVideo.id}`
            : ''
        }
        border='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
