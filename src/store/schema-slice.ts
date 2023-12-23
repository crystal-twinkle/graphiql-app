import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISchemaGql, ISchemaType } from '../models/schema.model';

export interface ISchemaState {
  data: {
    types: Map<string, ISchemaType> | null;
  };
}

const initialState: ISchemaState = {
  data: {
    types: null,
  },
};

const schemaSlice = createSlice({
  name: 'schema',
  initialState,
  reducers: {
    setSchema(state, action: PayloadAction<ISchemaGql | null>) {
      const typesMap = new Map<string, ISchemaType>();
      action.payload?.types.forEach((item) => {
        typesMap.set(item.name, item);
      });

      state.data.types = typesMap;
    },
  },
});

export const { setSchema } = schemaSlice.actions;

export const schemaReducer = schemaSlice.reducer;
