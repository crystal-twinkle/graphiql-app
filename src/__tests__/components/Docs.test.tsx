import React from 'react';
import {renderWithProviders} from '../tests-utils/renderWithProviders';
import {Docs} from '../../components/Docs/Docs';

describe('docs component', () => {
  it('render', () => {
    renderWithProviders(<Docs/>)
  });
});
