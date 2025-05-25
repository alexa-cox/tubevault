import { configureStore } from '@reduxjs/toolkit';
import { playerReducer } from './slices/playerSlice';
import { uiReducer } from './slices/uiSlice';
import { videosReducer } from './slices/videosSlice';

const Store = configureStore({
  reducer: {
    videos: videosReducer,
    ui: uiReducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default Store;
