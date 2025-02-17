import { useState, useCallback } from 'react';
import { YoutubeService } from '../services';

export const useVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchVideos = useCallback(async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await YoutubeService.searchVideos(query);
      setVideos(response.items);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const getVideoById = useCallback(async (videoId) => {
    setLoading(true);
    setError(null);
    try {
      const video = await YoutubeService.getVideoById(videoId);
      return video;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    videos,
    loading,
    error,
    searchVideos,
    getVideoById,
  };
};
