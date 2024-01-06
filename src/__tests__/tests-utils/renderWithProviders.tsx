import { MemoryRouter } from 'react-router-dom';
import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import { LocalizationProvider } from '../../context/localization-context';
import { Provider } from 'react-redux';
import { setupStore, RootState, AppStore } from '../../store/store';
import type { RenderOptions } from '@testing-library/react';
import { PreloadedState } from '@reduxjs/toolkit';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren): React.ReactElement {
    return (
      <MemoryRouter>
        <Provider store={store}>
          <LocalizationProvider>{children}</LocalizationProvider>
        </Provider>
      </MemoryRouter>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
