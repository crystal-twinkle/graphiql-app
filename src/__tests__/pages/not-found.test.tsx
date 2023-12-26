import React from 'react';
import {NotFoundPage} from '../../pages/Not-found-page';
import {renderWithProviders} from '../tests-utils/renderWithProviders';

describe('Not Found page test', () => {
  it('Render NotFound component', () => {
    renderWithProviders(<NotFoundPage/>)
  });
});
