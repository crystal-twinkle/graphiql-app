import React from 'react';
import {renderWithProviders} from '../utils/renderWithProviders';
import {WelcomePage} from '../../pages/welcome-page';

describe('Sign Up page test', () => {
  it('Render Sign Up component', () => {
    renderWithProviders(<WelcomePage/>)
  });
});
