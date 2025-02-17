import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  video: [],
  seletedVideo: {},
  searchQuery: '',
  searchResults: [],
};

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
    setSelectedVideo: (state, action) => {
      state.selectedVideo = action.payload;
    },
    clearVideos: (state) => {
      state.videos = [];
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSearchResult: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const {
  setVideos,
  setSelectedVideo,
  clearVideos,
  setSearchQuery,
  setSearchResult,
} = videosSlice.actions;
export const videosReducer = videosSlice.reducer;
