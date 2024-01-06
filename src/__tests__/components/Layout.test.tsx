import React from 'react';
import { renderWithProviders } from '../tests-utils/renderWithProviders';
import { Layout } from '../../components/Layout';

describe('variable header editor component', () => {
  it('updates textarea editor query state on input change', async () => {
    renderWithProviders(<Layout />);
  });
});
