import playIcon from '../assets/icons/play-icon.svg';
import prettifyIcon from '../assets/icons/pretify-icon.svg';
import { useState } from 'react';
import Button from './UI/Button';
import LineCounter from './LineCounter/LineCounter';
import VariableHeaderEditor from './VariableHeaderEditor/VariableHeaderEditor';
import { manageCursor } from '../utils/manageCursor';
import { prettify } from '../utils/prettifier';
import { EndpointInput } from './EndpointInput';
import { useDispatch, useSelector } from 'react-redux';
import { setResult } from '../store/result-slice';
import { AppDispatch, RootState } from '../store/store';
import { safelyParseJson } from '../utils/safelyParseJson';
import { Docs } from './Docs';

function QueryEditor() {
  const [query, setQuery] = useState(window.localStorage.getItem('query') || '');
  const [isFocused, setIsFocused] = useState(true);
  const [docsVisible, setDocsVisible] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setQuery(value);
    window.localStorage.setItem('query', value);
  };

  const endpoint = useSelector((state: RootState) => state.endpoint.endpoint);
  const variables = safelyParseJson(useSelector((state: RootState) => state.variables.variables));
  const headers = safelyParseJson(useSelector((state: RootState) => state.headers.headers));

  const dispatch = useDispatch<AppDispatch>();

  async function sendRequest(endpoint: string, query: string, variables: object, headers: object) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        ...headers,
      },
      body: JSON.stringify({ query, variables }),
    });

    const data = await response.json();
    const prettifiedData = prettify(JSON.stringify(data), true);
    dispatch(setResult(prettifiedData));
    window.localStorage.setItem('result', prettifiedData);
  }

  return (
    <>
      {docsVisible ? <Docs /> : <></>}
      <section className="relative flex flex-col grow w1/2 pb-2 bg-medium rounded-md">
        <div className="sticky top-[58px] z-10 flex gap-6 p-3 justify-between items-center bg-medium rounded-t-md border-b-2 border-light">
          <EndpointInput docsClick={() => setDocsVisible((prevState) => !prevState)} />
          <div className="flex gap-5 items-center">
            <Button
              icon={playIcon}
              onclick={() => sendRequest(endpoint, query, variables, headers)}
            />
            <Button icon={prettifyIcon} onclick={() => setQuery(prettify(query))} />
          </div>
        </div>
        <div className="flex grow justify-between pt-2">
          <LineCounter value={query} />
          <textarea
            autoFocus
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleChange}
            onKeyDown={(event) => manageCursor(event, isFocused, setQuery)}
            name="editor"
            value={query}
            className="grow px-2 bg-medium outline-none resize-none font-mono"
          ></textarea>
        </div>
        <VariableHeaderEditor />
      </section>
    </>
  );
}

export default QueryEditor;
