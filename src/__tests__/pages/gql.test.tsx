import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { GqlPage } from '../../pages/Gql-page';
import { renderWithProviders } from '../tests-utils/renderWithProviders';
import { vi } from 'vitest';
import { act } from 'react-dom/test-utils';

const gqlPageRender = () => {
  return renderWithProviders(<GqlPage />);
};

vi.spyOn(global, 'fetch').mockResolvedValue({
  ok: true,
  json: vi.fn().mockResolvedValue({ data: {} }),
  headers: new Headers(),
  redirected: false,
  status: 0,
  statusText: '',
  type: 'error',
  url: '',
  clone: function (): Response {
    throw new Error('Function not implemented.');
  },
  body: null,
  bodyUsed: false,
  arrayBuffer: function (): Promise<ArrayBuffer> {
    throw new Error('Function not implemented.');
  },
  blob: function (): Promise<Blob> {
    throw new Error('Function not implemented.');
  },
  formData: function (): Promise<FormData> {
    throw new Error('Function not implemented.');
  },
  text: function (): Promise<string> {
    throw new Error('Function not implemented.');
  },
});

describe('gql page', () => {
  it('sends request when play button is clicked', async () => {
    gqlPageRender();
    const playButton = screen.getByTestId('play-button');
    fireEvent.click(playButton);

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
  });

  it('check function changes active tab on button click', async () => {
    gqlPageRender();
    act(() => {
      const responseButton = screen.getByText('Response');
      fireEvent.click(responseButton);
      const ls = localStorage.getItem('editorActiveTab');
      expect(ls).toBe('1');
    });

    act(() => {
      const editorButton = screen.getByText('Editor');
      fireEvent.click(editorButton);
      const ls = localStorage.getItem('editorActiveTab');
      expect(ls).toBe('0');
    });
  });

  it('click on prettify-button', () => {
    gqlPageRender();
    const prettifyButton = screen.getByTestId('prettify-button');
    fireEvent.click(prettifyButton);
  });

  it('updates textarea editor query state on input change', () => {
    gqlPageRender();
    const queryTextarea: HTMLTextAreaElement = screen.getByTestId('textarea-query');
    fireEvent.change(queryTextarea, { target: { value: 'New GraphQL Query' } });

    expect(queryTextarea.value).toBe('New GraphQL Query');
  });

  it('click on prettify-button', () => {
    gqlPageRender();
    const prettifyButton = screen.getByTestId('prettify-button');
    fireEvent.click(prettifyButton);
  });

  it('displays documentation tab content when button is clicked', () => {
    gqlPageRender();
    const docsButton = screen.getByTestId('docs-button');
    fireEvent.click(docsButton);
  });
});
