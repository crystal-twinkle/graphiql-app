import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  result: window.localStorage.getItem('result') || '',
};

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResult(state, action: PayloadAction<string>) {
      state.result = action.payload;
    },
  },
});

export const { setResult } = resultSlice.actions;

export const resultReducer = resultSlice.reducer;
