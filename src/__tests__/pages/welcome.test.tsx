import React from 'react';
import {renderWithProviders} from '../tests-utils/renderWithProviders';
import {WelcomePage} from '../../pages/Welcome-page';

describe('Sign Up page test', () => {
  it('Render Sign Up component', () => {
    renderWithProviders(<WelcomePage/>)
  });
});
