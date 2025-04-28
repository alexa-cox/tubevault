import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closePlayer } from '../../redux/slices';
import styles from './VideoPlayer.module.css';

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
      className={`${styles.popup} ${
        isPlayerOpen ? styles.open : styles.closed
      }`}
    >
      <iframe
        className={styles.iframe}
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
