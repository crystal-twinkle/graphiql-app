import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { WelcomePage } from './pages/Welcome-page';
import { GqlPage } from './pages/Gql-page';
import { SignInPage } from './pages/Sign-in-page';
import { NotFoundPage } from './pages/Not-found-page';
import { SignUpPage } from './pages/Sign-up-page';
import { Layout } from './components/Layout';
import { PrivateOnlyPageWrapper } from './components/PrivateOnlyPageWrapper';
import { AnonymousOnlyPageWrapper } from './components/AnonymousOnlyPageWrapper';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorComponent from './components/ErrorComponent';

export enum RouterPage {
  WELCOME = '/',
  GQL = '/gql',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
}
export const ErrorBoundaryLayout = () => (
  <ErrorBoundary FallbackComponent={ErrorComponent}>
    <Layout />
  </ErrorBoundary>
);

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <ErrorBoundaryLayout />,
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
