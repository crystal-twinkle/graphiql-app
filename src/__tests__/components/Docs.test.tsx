import React from 'react';
import { renderWithProviders } from '../tests-utils/renderWithProviders';
import { Docs } from '../../components/Docs/Docs';
import { ISchemaType } from '../../models/schema';
import { fireEvent, screen } from '@testing-library/react';
import schemaTypes from '../tests-utils/rawDataDocs';
import { schemaReducer, initialState, setSchema } from '../../store/schema-slice';

const typesMap = new Map<string, ISchemaType>();
schemaTypes.forEach((item) => {
  if (!item.name.includes('__')) {
    typesMap.set(item.name, item);
  }
});

const docsRender = () => {
  const initialState = {
    schema: {
      data: {
        types: typesMap,
      },
    },
  };
  renderWithProviders(<Docs />, {
    preloadedState: {
      schema: initialState.schema,
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
    fireEvent.click(screen.getByText('PlanetsConnection'));
  });

  it('check schemaSlice', () => {
    const schema = { types: schemaTypes };
    schemaReducer(initialState, setSchema(schema));
  });
});
