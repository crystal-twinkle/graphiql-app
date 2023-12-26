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

    const typeArgNameBtns = screen.getAllByTestId('typeArgName-button');
    fireEvent.click(typeArgNameBtns[0]);

    const prevButton = screen.getByTestId('prev-button');
    fireEvent.click(prevButton);

    const typeValueBtns = screen.getAllByTestId('typeValue-button');
    fireEvent.click(typeValueBtns[0]);

    fireEvent.click(prevButton);

    const allFilms = screen.getByText('allPlanets');
    fireEvent.click(allFilms);
  });
});
