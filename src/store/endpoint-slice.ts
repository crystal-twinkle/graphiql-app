import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  endpoint: window.localStorage.getItem('endpoint') || '',
};

const endpointSlice = createSlice({
  name: 'endpoint',
  initialState,
  reducers: {
    setEndpoint(state, action: PayloadAction<string>) {
      state.endpoint = action.payload;
    },
  },
});

export const { setEndpoint } = endpointSlice.actions;

export const endpointReducer = endpointSlice.reducer;
