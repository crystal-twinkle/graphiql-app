import React from 'react';
import {renderWithProviders} from '../utils/renderWithProviders';
import {SignInPage} from '../../pages/sign-in-page';


describe('Sign Up page test', () => {
  it('Render Sign Up component', () => {
    renderWithProviders(<SignInPage/>)
  });
});
