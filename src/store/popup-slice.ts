import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPopupProps {
  message: string;
  submitText: string;
  submitClick: () => void;
}

const initialState = {
  endpoint: window.localStorage.getItem('endpoint') || '',
};

const endpointSlice = createSlice({
  name: 'endpoint',
  initialState,
  reducers: {
    setPopupData(state, action: PayloadAction<string>) {
      state.endpoint = action.payload;
    },
  },
});

export const { setPopupData } = endpointSlice.actions;

export const endpointReducer = endpointSlice.reducer;
