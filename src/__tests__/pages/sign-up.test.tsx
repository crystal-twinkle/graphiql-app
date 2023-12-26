import React from 'react';
import { renderWithProviders } from '../tests-utils/renderWithProviders';
import { SignUpPage } from '../../pages/Sign-up-page';

describe('Sign Up page test', () => {
  it('Render Sign Up component', () => {
    renderWithProviders(<SignUpPage />);
  });
});
