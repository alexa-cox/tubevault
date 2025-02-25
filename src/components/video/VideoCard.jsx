import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteVideo, openPlayer, setSelectedVideo } from '../../redux/slices';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  const { id: videoId, thumbnail } = video;
  const dispatch = useDispatch();

  const handleThumbnailClick = () => {
    dispatch(setSelectedVideo(video));
    dispatch(openPlayer());
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    console.log('Deleting video:', videoId);
    dispatch(deleteVideo(videoId));
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
        src={thumbnail}
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
