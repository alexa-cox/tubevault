import { client } from './api/client';
import { ENDPOINTS } from './api/config';

export const YoutubeService = {
  // Search videos
  searchVideos: async (query) => {
    try {
      const response = await client.get(ENDPOINTS.SEARCH, {
        params: {
          q: query,
          type: 'video',
        },
      });
      return {
        items: response.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
          description: item.snippet.description,
          publishedAt: item.snippet.publishedAt,
        })),
      };
    } catch (error) {
      throw new Error(`Failed to search videos: ${error.message}`);
    }
  },

  // Get video details
  getVideoById: async (videoId) => {
    try {
      const response = await client.get(ENDPOINTS.VIDEOS, {
        params: {
          id: videoId,
        },
      });
      const video = response.items[0];
      return {
        id: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.high.url,
        publishedAt: video.snippet.publishedAt,
        statistics: video.statistics,
      };
    } catch (error) {
      throw new Error(`Failed to get video: ${error.message}`);
    }
  },

  // Get playlist items
  getPlaylistItems: async (playlistId) => {
    try {
      const response = await client.get(ENDPOINTS.PLAYLIST_ITEMS, {
        params: {
          playlistId,
        },
      });
      return {
        items: response.items.map((item) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
          position: item.snippet.position,
        })),
      };
    } catch (error) {
      throw new Error(`Failed to get playlist items: ${error.message}`);
    }
  },
};

window.YoutubeService = YoutubeService;
