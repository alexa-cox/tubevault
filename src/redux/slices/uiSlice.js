import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  notifications: [],
};

const uiSlice = createSlice({
  name: '',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    addNotification: (state, action) => {
      state.notifications.unshift(action.payload);
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
  },
});

export const { setLoading, setError, addNotification, removeNotification } =
  uiSlice.actions;

export const uiReducer = uiSlice.reducer;
