import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import WelcomePage from './pages/welcome.page';
import Layout from './components/layout';
import GqlPage from './pages/gql.page';

export enum RouterPage {
  WELCOME = '/',
  GQL = '/gql',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: RouterPage.WELCOME,
        element: <WelcomePage />,
      },
      {
        path: RouterPage.GQL,
        element: <GqlPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
