export const BASE_URL = 'https://www.googleapis.com/youtube/v3/';
export const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const ENDPOINTS = {
  SEARCH: 'search/',
  VIDEOS: 'videos/',
  PLAYLISTS: 'playlists/',
  PLAYLIST_ITEMS: 'playlistItems/',
};

export const DEFAULT_PARAMS = {
  part: 'snippet',
  maxResults: 12,
  key: API_KEY,
};
