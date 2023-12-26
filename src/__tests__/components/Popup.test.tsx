import React from 'react';
import {renderWithProviders} from '../tests-utils/renderWithProviders';
import {Popup} from '../../components/Popup';
import {screen} from '@testing-library/react';
import {expect, vi} from 'vitest';

describe('popup component', () => {
  it('correct render', async () => {
    const initialSearchState = {
      popup: {
        data: {
          message: 'error',
          submitText: 'ok',
          submitClick: vi.fn()
        }
      },
    };
    renderWithProviders(<Popup/>, {
      preloadedState: {
        popup: initialSearchState.popup,
      },
    });
    expect(screen.getByTestId("popup-wrap")).toBeInTheDocument();
  });
});
