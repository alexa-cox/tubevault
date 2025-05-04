import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../redux/thunks';
import { Error, Loading } from '../common';
import VideoCard from './VideoCard';
import styles from './VideoGrid.module.css';

const VideoGrid = () => {
  const dispatch = useDispatch();
  const { videos, loading, error } = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  if (!videos || !Array.isArray(videos) || videos.length === 0) {
    return <div>Nothing found</div>;
  }

  return (
    <ul className={styles.videosContainer}>
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
        />
      ))}
    </ul>
  );
};

export default VideoGrid;
