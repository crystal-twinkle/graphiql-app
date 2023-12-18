import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  variables: {},
};

const variablesSlice = createSlice({
  name: 'variables',
  initialState,
  reducers: {
    setVariables(state, action: PayloadAction<object>) {
      state.variables = action.payload;
    },
  },
});

export const { setVariables } = variablesSlice.actions;

export const variablesReducer = variablesSlice.reducer;
