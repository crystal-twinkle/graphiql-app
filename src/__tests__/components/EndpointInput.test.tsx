import React from 'react';
import {renderWithProviders} from '../tests-utils/renderWithProviders';
import {EndpointInput} from '../../components/EndpointInput';
import {fireEvent, screen} from '@testing-library/react';
import {act} from 'react-dom/test-utils';

describe('variable header editor component', () => {
  it('handles input change and form submit', async () => {
    renderWithProviders(<EndpointInput/>)
    const form = screen.getByTestId('endpoint-form');
    const input = screen.getByPlaceholderText('Enter GraphQL endpoint supporting CORS');
    fireEvent.change(input, { target: { value: 'https://new-endpoint.com/graphql' } });
    expect(input).toHaveValue('https://new-endpoint.com/graphql');
    await act(async () => {
      fireEvent.submit(form);
    });
  });

});
