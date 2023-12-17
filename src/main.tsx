import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { routes } from './router';
import './index.css';
import { LocalizationProvider } from './context/localization-context';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyBcxSC8w0IY6movQiC3BlTRW3AuoiD5IxQ',
  authDomain: 'graphiql-app-87295.firebaseapp.com',
  projectId: 'graphiql-app-87295',
  storageBucket: 'graphiql-app-87295.appspot.com',
  messagingSenderId: '10586008659',
  appId: '1:10586008659:web:899a3906001e6766b6aaa6',
  measurementId: 'G-4308VXV489',
};

const store = setupStore();
const router = createBrowserRouter(routes);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider>
        <RouterProvider router={router} />
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>
);
