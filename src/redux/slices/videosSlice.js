import { createSlice } from '@reduxjs/toolkit';
import { fetchVideos, searchVideos, getVideoById } from '../thunks';

const initialState = {
  videos: [],
  selectedVideo: {},
  searchQuery: '',
  searchResults: [],
  loading: false,
  error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(searchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(searchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getVideoById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getVideoById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedVideo = action.payload;
      })
      .addCase(getVideoById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
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
