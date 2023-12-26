import React from 'react';
import { renderWithProviders } from '../tests-utils/renderWithProviders';
import { Docs } from '../../components/Docs/Docs';
import { ISchemaType } from '../../models/schema';
import { fireEvent, screen } from '@testing-library/react';
import rawData from '../tests-utils/rawDataDocs';

const typesMap = new Map<string, ISchemaType>();
rawData.forEach((item) => {
  if (!item.name.includes('__')) {
    typesMap.set(item.name, item);
  }
});

const docsRender = () => {
  const initialSearchState = {
    schema: {
      data: {
        types: typesMap,
      },
    },
  };
  renderWithProviders(<Docs />, {
    preloadedState: {
      schema: initialSearchState.schema,
    },
  });
};

describe('docs component', () => {
  it('click on docs elements', () => {
    docsRender();
    const rootInfo = screen.getByText('Root');
    fireEvent.click(rootInfo);
    const allFilms = screen.getByText('allFilms');
    fireEvent.click(allFilms);
    const prevButton = screen.getByTestId('prev-button');
    fireEvent.click(prevButton);
  });
});
