import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import {GqlPage} from '../../pages/gql-page';
import {renderWithProviders} from '../utils/renderWithProviders';

describe('gql page', () => {
  it('renders correctly', async () => {
    renderWithProviders( <GqlPage />);
    await waitFor(() => {
    });
  });

});
