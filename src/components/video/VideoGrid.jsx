import React from 'react';
import { useVideo } from '../../context/VideoContext';
import VideoCard from './VideoCard';

const VideoGrid = () => {
  const { videos } = useVideo();

  return (
    <ul id='videosContainer'>
      {videos.map((videoId) => (
        <VideoCard
          key={videoId}
          videoId={videoId}
        />
      ))}
    </ul>
  );
};

export default VideoGrid;
