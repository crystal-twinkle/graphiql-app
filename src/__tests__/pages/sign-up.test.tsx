import React from 'react';
import { renderWithProviders } from '../tests-utils/renderWithProviders';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Mock, vi } from 'vitest';
import { SignUpPage } from '../../pages/Sign-up-page';

vi.mock('react-firebase-hooks/auth');

describe('Sign In page test', () => {
  it('render with loading', () => {
    (useAuthState as Mock).mockReturnValueOnce([{ uid: 'user123' }, true]);
    renderWithProviders(<SignUpPage />);
  });

  it('render without loading', async () => {
    (useAuthState as Mock).mockReturnValueOnce([{ uid: 'user123' }, false]);
    renderWithProviders(<SignUpPage />);
  });
});
