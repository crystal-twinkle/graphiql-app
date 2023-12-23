import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { endpointReducer } from './endpoint-slice';
import { resultReducer } from './result-slice';
import { variablesReducer } from './variables-slice';
import { headersReducer } from './headers-slice';

export const rootReducer = combineReducers({
  endpoint: endpointReducer,
  result: resultReducer,
  variables: variablesReducer,
  headers: headersReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
