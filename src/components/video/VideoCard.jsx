import React from 'react';
import { useVideo } from '../../context/VideoContext';

const VideoCard = ({ videoId }) => {
  const { deleteVideo, openPopup } = useVideo();

  const handleThumbnailClick = () => {
    openPopup(videoId);
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    deleteVideo(videoId);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleThumbnailClick();
    }
  };

  const handleDeleteKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.stopPropagation();
      handleDelete(event);
    }
  };

  return (
    <li
      role='article'
      tabIndex='0'
      onClick={handleThumbnailClick}
      onKeyDown={handleKeyPress}
    >
      <img
        className='thumbnail'
        src={`https://i3.ytimg.com/vi/${videoId}/sddefault.jpg`}
        alt={`Cover image for YouTube video with id ${videoId}`}
      />
      <button
        className='delete-btn'
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
