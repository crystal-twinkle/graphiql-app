import React from 'react';
import { renderWithProviders } from '../tests-utils/renderWithProviders';
import { SignInPage } from '../../pages/Sign-in-page';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Mock, vi } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';

vi.mock('react-firebase-hooks/auth');

describe('Sign In page test', () => {
  it('render with loading', () => {
    (useAuthState as Mock).mockReturnValueOnce([{ uid: null }, true]);
    renderWithProviders(<SignInPage />);
  });

  it('render without loading and check form submit', () => {
    (useAuthState as Mock).mockReturnValueOnce([{ uid: 'user123' }, false]);
    renderWithProviders(<SignInPage />);
    const emailInput = screen.getByTestId('signIn-email-input');
    fireEvent.input(emailInput, { target: { value: 'test@example.test' } });
    const passwordInput = screen.getByTestId('signIn-password-input');
    fireEvent.input(passwordInput, { target: { value: 'weR24!!Faa' } });
    const form = screen.getByTestId('signIn-form');
    fireEvent.submit(form);
  });
});
