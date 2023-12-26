import React from 'react';
import {renderWithProviders} from '../tests-utils/renderWithProviders';
import {PrivateOnlyPageWrapper} from '../../components/PrivateOnlyPageWrapper';

describe('Private Only Page Wrapper element', () => {
  it('correct render', async () => {
    renderWithProviders(<PrivateOnlyPageWrapper/>)
  });
});
