import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import {GqlPage} from '../../pages/Gql-page';
import {renderWithProviders} from '../tests-utils/renderWithProviders';
import {it, vi} from 'vitest';
import {act} from 'react-dom/test-utils';
import VariableHeaderEditor from '../../components/VariableHeaderEditor/VariableHeaderEditor';

describe('variable header editor component', () => {
  it('updates textarea editor query state on input change', () => {
    renderWithProviders(<VariableHeaderEditor  />)
    const textarea = screen.getByRole('textbox');

    fireEvent.change(textarea, { target: { value: 'New Header' } });

    expect(textarea.value).toBe('New Header');
  });
});
