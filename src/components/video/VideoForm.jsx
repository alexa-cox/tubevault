import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVideoById } from '../../redux/thunks';
import './VideoForm.css';

const VideoForm = () => {
  const [videoId, setVideoId] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getVideoById(videoId));
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
