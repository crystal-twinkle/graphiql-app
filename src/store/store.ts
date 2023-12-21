import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { endpointReducer } from './endpoint-slice';
import { resultReducer } from './result-slice';
import { variablesReducer } from './variables-slice';
import { headersReducer } from './headers-slice';
import { schemaReducer } from './schema-slice';
import { popupReducer } from './popup-slice';

export const rootReducer = combineReducers({
  endpoint: endpointReducer,
  result: resultReducer,
  variables: variablesReducer,
  headers: headersReducer,
  schema: schemaReducer,
  popup: popupReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
