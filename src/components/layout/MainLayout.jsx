import React from 'react';
import { VideoProvider } from '../../context/VideoContext';
import VideoForm from '../video/VideoForm';
import VideoGrid from '../video/VideoGrid';
import VideoPlayer from '../video/VideoPlayer';

const MainLayout = () => {
  return (
    <VideoProvider>
      <div className='container'>
        <div className='header'>
          <div>
            <h1 className='headline'>My Youtube Resource Gallery</h1>
            <p>
              The perfect app to keep track of valuable resources while learning
              to code. As you come across a helpful video, add the id here.
            </p>
          </div>
          <VideoForm />
        </div>
        <VideoGrid />
      </div>
      <VideoPlayer />
    </VideoProvider>
  );
};

export default MainLayout;
