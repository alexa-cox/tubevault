import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedVideo } from '../../redux/slices/videosSlice';
import { openPlayer } from '../../redux/slices/playerSlice';
import useDeleteHandler from '../../hooks/useDeleteHandler';
import useNavigationHandler from '../../hooks/useNavigationHandler';
import { ROLES, TAB_INDEXES } from '../../utils/a11y';
import styles from './VideoCard.module.css';

const VideoCard = ({ video }) => {
  const { id: videoId, thumbnail } = video;
  const dispatch = useDispatch();

  const { handleClick, handleKeyPress } = useNavigationHandler(() => {
    dispatch(setSelectedVideo(video));
    dispatch(openPlayer());
  });

  const { handleDelete, handleDeleteKeyPress } = useDeleteHandler(videoId);

  return (
    <li
      role={ROLES.ARTICLE}
      tabIndex={TAB_INDEXES.FOCUSABLE}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
    >
      <img
        className={styles.thumbnail}
        src={thumbnail}
        alt={`Cover image for YouTube video with id ${videoId}`}
      />
      <button
        className={styles.deleteBtn}
        role={ROLES.BUTTON}
        aria-label='delete video'
        onClick={handleDelete}
        onKeyDown={handleDeleteKeyPress}
      >
        &times;
      </button>
    </li>
  );
};

export default VideoCard;
