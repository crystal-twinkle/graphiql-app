import React from 'react';
import { renderWithProviders } from '../tests-utils/renderWithProviders';
import ErrorComponent from '../../components/ErrorComponent';
import { vi } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { ErrorBoundaryLayout } from '../../router';

describe('Error components', () => {
  it('render Error component', () => {
    const resetMockFunc = vi.fn();
    renderWithProviders(<ErrorComponent error="test error" resetErrorBoundary={resetMockFunc} />);
    fireEvent.click(screen.getByText('Reset'));
    expect(resetMockFunc).toBeCalled();
  });

  it('render ErrorBoundaryLayout', () => {
    renderWithProviders(<ErrorBoundaryLayout />);
  });
});
