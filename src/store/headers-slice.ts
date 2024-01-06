import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  headers: window.localStorage.getItem('headers') || '',
};

const headersSlice = createSlice({
  name: 'headers',
  initialState,
  reducers: {
    setHeaders(state, action: PayloadAction<string>) {
      state.headers = action.payload;
    },
  },
});

export const { setHeaders } = headersSlice.actions;

export const headersReducer = headersSlice.reducer;
