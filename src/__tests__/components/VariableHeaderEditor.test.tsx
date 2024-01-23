import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../tests-utils/renderWithProviders';
import VariableHeaderEditor from '../../components/VariableHeaderEditor/VariableHeaderEditor';

describe('variable header editor component', () => {
  it('updates textarea editor query state on input change', () => {
    renderWithProviders(<VariableHeaderEditor />);
    const textarea: HTMLTextAreaElement = screen.getByRole('textbox');

    fireEvent.change(textarea, { target: { value: 'some string' } });
    expect(textarea.value).toBe('some string');
  });

  it('check click on Variables', () => {
    renderWithProviders(<VariableHeaderEditor />);
    const variablesBtn = screen.getByText('Variables');
    fireEvent.click(variablesBtn);
    const textarea: HTMLTextAreaElement = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'New Variables' } });
    expect(textarea.value).toBe('New Variables');
  });

  it('check click on Headers', () => {
    renderWithProviders(<VariableHeaderEditor />);
    const headersBtn = screen.getByText('Headers');
    fireEvent.click(headersBtn);
    const textarea: HTMLTextAreaElement = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'New Headers' } });
    expect(textarea.value).toBe('New Headers');
  });
});
