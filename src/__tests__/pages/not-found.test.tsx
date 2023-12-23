import React from 'react';
import {NotFoundPage} from '../../pages/not-found-page';
import {renderWithProviders} from '../utils/renderWithProviders';

describe('Not Found page test', () => {
  it('Render NotFound component', () => {
    renderWithProviders(<NotFoundPage/>)
  });
});
