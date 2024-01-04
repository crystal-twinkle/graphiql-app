import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { routes } from './router';
import './index.css';
import { LocalizationProvider } from './context/localization-context';

const store = setupStore();
const router = createBrowserRouter(routes);

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider>
        <RouterProvider router={router} />
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
