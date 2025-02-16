import React, { useState } from 'react';
import { useVideo } from '../../context/VideoContext';

const VideoForm = () => {
  const [videoId, setVideoId] = useState('');
  const { saveVideo } = useVideo();

  const handleSubmit = (e) => {
    e.preventDefault();
    saveVideo(videoId);
    setVideoId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='videoId'>Video Id</label>
      <input
        type='text'
        name='videoId'
        id='videoId'
        placeholder='HSN3499'
        value={videoId}
        onChange={(e) => setVideoId(e.target.value)}
      />
      <button type='submit'>Save the Video!</button>
    </form>
  );
};

export default VideoForm;
