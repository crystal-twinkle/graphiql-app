import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { WelcomePage } from './pages/welcome.page';
import { GqlPage } from './pages/gql.page';
import { SignInPage } from './pages/sign-in.page';
import { NotFoundPage } from './pages/not-found.page';
import { SignUpPage } from './pages/sign-up.page';
import { Layout } from './components/layout';
import { PrivateOnlyPageWrapper } from './components/PrivateOnlyPageWrapper';
import { AnonymousOnlyPageWrapper } from './components/AnonymousOnlyPageWrapper';

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
        element: (
          <PrivateOnlyPageWrapper>
            <GqlPage />
          </PrivateOnlyPageWrapper>
        ),
      },
      {
        path: RouterPage.SIGN_IN,
        element: (
          <AnonymousOnlyPageWrapper>
            <SignInPage />
          </AnonymousOnlyPageWrapper>
        ),
      },
      {
        path: RouterPage.SIGN_UP,
        element: (
          <AnonymousOnlyPageWrapper>
            <SignUpPage />
          </AnonymousOnlyPageWrapper>
        ),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
