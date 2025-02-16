import React, { createContext, useContext, useEffect, useState } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const savedVideos =
      JSON.parse(localStorage.getItem('youTubeVideoIds')) || [];
    setVideos(savedVideos);
  }, []);

  const saveVideo = (videoId) => {
    const updatedVideos = [videoId, ...videos];
    setVideos(updatedVideos);
    localStorage.setItem('youTubeVideoIds', JSON.stringify(updatedVideos));
  };

  const deleteVideo = (videoId) => {
    const updatedVideos = videos.filter((id) => id !== videoId);
    setVideos(updatedVideos);
    localStorage.setItem('youTubeVideoIds', JSON.stringify(updatedVideos));
  };

  const openPopup = (videoId) => {
    setCurrentVideo(videoId);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setCurrentVideo(null);
    setIsPopupOpen(false);
  };

  return (
    <VideoContext.Provider
      value={{
        videos,
        saveVideo,
        deleteVideo,
        isPopupOpen,
        currentVideo,
        openPopup,
        closePopup,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => useContext(VideoContext);
