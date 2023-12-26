import React from 'react';
import {renderWithProviders} from '../tests-utils/renderWithProviders';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import {fireEvent, screen} from '@testing-library/react';

describe('variable header editor component', () => {
  it('toggles the dropdown when the button is clicked', () => {
    renderWithProviders(<LanguageSwitcher/>);

    const button = screen.getByText('English');
    fireEvent.click(button);

    expect(screen.getByText('Russian')).toBeInTheDocument();
    expect(screen.getByText('Belarusian')).toBeInTheDocument();
  });
});