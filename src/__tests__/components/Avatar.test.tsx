import React from 'react';
import {renderWithProviders} from '../tests-utils/renderWithProviders';
import {Avatar} from '../../components/Avatar';

describe('avatar component', () => {
  it('render', () => {
    renderWithProviders(<Avatar user={{email: 'example@example.com'}}/>)
  });
});
