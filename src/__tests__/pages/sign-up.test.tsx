import React from 'react';
import { renderWithProviders } from '../tests-utils/renderWithProviders';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Mock, vi } from 'vitest';
import { SignUpPage } from '../../pages/Sign-up-page';
import { fireEvent, screen } from '@testing-library/react';

vi.mock('react-firebase-hooks/auth');

describe('Sign In page test', () => {
  it('render with loading', () => {
    (useAuthState as Mock).mockReturnValueOnce([{ uid: 'user123' }, true]);
    renderWithProviders(<SignUpPage />);
  });

  it('render without loading and check form submit', async () => {
    (useAuthState as Mock).mockReturnValueOnce([{ uid: 'user123' }, false]);
    renderWithProviders(<SignUpPage />);
    fireEvent.input(screen.getByTestId('signUp-firstName-input'), {
      target: { value: 'First name test' },
    });
    fireEvent.input(screen.getByTestId('signUp-lastName-input'), {
      target: { value: 'Last name test' },
    });
    fireEvent.input(screen.getByTestId('signUp-email-input'), {
      target: { value: 'test@example.test' },
    });
    fireEvent.input(screen.getByTestId('signUp-password-input'), {
      target: { value: 'weR24!!Faa' },
    });
    fireEvent.input(screen.getByTestId('signUp-passwordRepeat-input'), {
      target: { value: 'weR24!!Faa' },
    });

    const form = screen.getByTestId('signUp-form');
    fireEvent.submit(form);
  });
});
