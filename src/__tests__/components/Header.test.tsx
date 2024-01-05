import React from 'react';
import { renderWithProviders } from '../tests-utils/renderWithProviders';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Mock, vi } from 'vitest';
import Header from '../../components/Header/Header';
import { fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

vi.mock('react-firebase-hooks/auth');

describe('Anonymous Only Page Wrapper element', () => {
  it('render with loading', () => {
    (useAuthState as Mock).mockReturnValueOnce([{ uid: null }, true]);
    renderWithProviders(<Header />);
  });

  it('render without loading', () => {
    (useAuthState as Mock).mockReturnValueOnce([{ uid: 'user123' }, false]);
    renderWithProviders(<Header />);
    fireEvent.click(screen.getByTestId('signOut-button'));
  });

  it('check scroll', () => {
    (useAuthState as Mock).mockReturnValueOnce([{ uid: 'user123' }, false]);
    renderWithProviders(<Header />);
    act(() => {
      window.scrollTo(0, 100);
      window.dispatchEvent(new Event('scroll'));
    });
  });
});
