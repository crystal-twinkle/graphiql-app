import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';

interface User {
  firstName: string;
  lastName: string;
}

interface IUserState {
  data: User | null;
}

export const userSlice = createSlice<IUserState, SliceCaseReducers<IUserState>>({
  name: 'userSlice',
  initialState: {
    data: null,
  },
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.data = action.payload;
    },
  },
});
