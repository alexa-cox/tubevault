import { createAsyncThunk } from '@reduxjs/toolkit';
import { YoutubeService } from '../../services/youtube';

const fetchVideos = createAsyncThunk(
  'videos/fetchVideos',
  async (query, thunkAPI) => {
    try {
      const response = await YoutubeService.searchVideos(query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const searchVideos = createAsyncThunk(
  'videos/searchVideos',
  async (query, thunkAPI) => {
    try {
      const response = await YoutubeService.searchVideos(query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const getVideoById = createAsyncThunk(
  'videos/getVideoById',
  async (query, thunkAPI) => {
    try {
      console.log('Getting video details for ID:', videoId);
      const response = await YoutubeService.getVideoById(query);
      console.log('Video details response:', response);
      return response;
    } catch (error) {
      console.log('Error fetching video:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { fetchVideos, searchVideos, getVideoById };
