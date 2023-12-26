import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice';

export interface IPopupData {
  messages: string[];
  submitText: string;
  submitClick: () => void;
}

export interface IPopupState {
  data: IPopupData | null;
}

const popupSlice = createSlice<IPopupState, SliceCaseReducers<IPopupState>>({
  name: 'endpoint',
  initialState: {
    data: null,
  },
  reducers: {
    setPopupData(state, action: PayloadAction<IPopupData | null>) {
      state.data = action.payload;
    },
  },
});

export const { setPopupData } = popupSlice.actions;

export const popupReducer = popupSlice.reducer;
