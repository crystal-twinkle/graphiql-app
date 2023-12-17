import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { IUserState, IUser } from '../models/common.model';

export const userSlice = createSlice<IUserState | null, SliceCaseReducers<IUserState | null>>({
  name: 'userSlice',
  initialState: null,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.data.current = action.payload;
    },
    addUser(state, action: PayloadAction<IUser>) {
      state.data.all.push(action.payload);
    },
  },
});

export const { setUser, addUser } = userSlice.reducer;
