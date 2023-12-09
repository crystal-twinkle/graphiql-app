import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { IUserState, IUser } from '../models/common.model';

export const userSlice = createSlice<IUserState, SliceCaseReducers<IUserState>>({
  name: 'userSlice',
  initialState: {
    data: {
      current: null,
      all: [
        {
          id: '1',
          firstName: 'Aa',
          lastName: 'Bb',
          email: 'aa@bb.ru',
          password: 'aA1!',
        },
      ],
    },
  },
  reducers: {
    setCurrentUser(state, action: PayloadAction<IUser>) {
      state.data.current = action.payload;
    },
    addUser(state, action: PayloadAction<IUser>) {
      state.data.all.push(action.payload);
    },
  },
});

export const { setCurrentUser, addUser } = userSlice.reducer;
