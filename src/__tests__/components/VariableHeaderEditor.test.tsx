import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import {renderWithProviders} from '../tests-utils/renderWithProviders';
import VariableHeaderEditor from '../../components/VariableHeaderEditor/VariableHeaderEditor';

describe('variable header editor component', () => {
  it('updates textarea editor query state on input change', () => {
    renderWithProviders(<VariableHeaderEditor  />)
    const textarea = screen.getByRole('textbox');

    fireEvent.change(textarea, { target: { value: 'New Header' } });

    expect(textarea.value).toBe('New Header');
  });
});
