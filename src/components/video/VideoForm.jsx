import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVideoById } from '../../redux/thunks/videoThunks';
import styles from './VideoForm.module.css';

const VideoForm = () => {
  const [videoId, setVideoId] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getVideoById(videoId));
    setVideoId('');
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <label
        className={styles.label}
        htmlFor='videoId'
      >
        Video Id
      </label>
      <input
        type='text'
        name='videoId'
        id='videoId'
        className={styles.input}
        placeholder='HSN3499'
        value={videoId}
        onChange={(e) => setVideoId(e.target.value)}
      />
      <button
        className={styles.button}
        type='submit'
      >
        Save the Video!
      </button>
    </form>
  );
};

export default VideoForm;
