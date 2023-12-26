import React from 'react';
import {renderWithProviders} from '../tests-utils/renderWithProviders';
import {AnonymousOnlyPageWrapper} from '../../components/AnonymousOnlyPageWrapper';

describe('Anonymous Only Page Wrapper element', () => {
  it('render', () => {
    renderWithProviders(<AnonymousOnlyPageWrapper/>)
  });
});
