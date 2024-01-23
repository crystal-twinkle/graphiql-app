import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISchemaGql, ISchemaType } from '../models/schema';

export interface ISchemaState {
  data: {
    types: Map<string, ISchemaType> | null;
  };
}

export const initialState: ISchemaState = {
  data: {
    types: null,
  },
};

const schemaSlice = createSlice({
  name: 'schema',
  initialState,
  reducers: {
    setSchema(state, action: PayloadAction<ISchemaGql | null>) {
      if (action.payload) {
        const typesMap = new Map<string, ISchemaType>();
        action.payload.types.forEach((item) => {
          if (!item.name.includes('__')) {
            typesMap.set(item.name, item);
            state.data.types = typesMap;
          }
        });
      } else {
        state.data.types = null;
      }
    },
  },
});

export const { setSchema } = schemaSlice.actions;

export const schemaReducer = schemaSlice.reducer;
