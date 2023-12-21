import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISchemaGql } from '../models/schema.model';

export interface ISchemaState {
  data: ISchemaGql | null;
}

const initialState: ISchemaState = {
  data: window.localStorage.getItem('schema')
    ? JSON.parse(window.localStorage.getItem('schema') as string)
    : null,
};

const schemaSlice = createSlice({
  name: 'schema',
  initialState,
  reducers: {
    setSchema(state, action: PayloadAction<ISchemaGql | null>) {
      state.data = action.payload;
    },
  },
});

export const { setSchema } = schemaSlice.actions;

export const schemaReducer = schemaSlice.reducer;
