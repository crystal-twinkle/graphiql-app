import React from 'react';
import {renderWithProviders} from '../tests-utils/renderWithProviders';
import {SignInPage} from '../../pages/Sign-in-page';

describe('Sign Up page test', () => {
  it('Render Sign Up component', () => {
    renderWithProviders(<SignInPage/>)
  });
});
