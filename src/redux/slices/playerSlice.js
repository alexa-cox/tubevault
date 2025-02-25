import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlayerOpen: false,
  currentVideo: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    openPlayer: (state) => {
      state.isPlayerOpen = true;
    },
    closePlayer: (state) => {
      state.isPlayerOpen = false;
    },
  },
});

export const { openPlayer, closePlayer } = playerSlice.actions;

export const playerReducer = playerSlice.reducer;
