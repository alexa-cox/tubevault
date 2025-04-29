import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedVideo, openPlayer } from '../../redux/slices';
import { useNavigationHandler, useDeleteHandler } from '../../hooks';
import { ROLES, TAB_INDEXES } from '../../utils';
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
