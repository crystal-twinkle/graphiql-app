import playIcon from '../../assets/icons/play-icon.svg';
import prettifyIcon from '../../assets/icons/pretify-icon.svg';
import { useState } from 'react';
import Button from '../UI/Button';
import LineCounter from '../LineCounter/LineCounter';
import VariableHeaderEditor from '../VariableHeaderEditor/VariableHeaderEditor';
import { manageCursor } from '../../utils/manageCursor';
import { prettify } from '../../utils/prettifier';
import { EndpointInput } from '../EndpointInput';
import { useDispatch, useSelector } from 'react-redux';
import { setResult } from '../../store/result-slice';
import { AppDispatch, RootState } from '../../store/store';
import { safelyParseJson } from '../../utils/safelyParseJson';
import { Docs } from '../Docs';

function QueryEditor() {
  enum Tabs {
    EDITOR,
    RESPONSE,
  }

  const [activeTab, setActiveTab] = useState(
    Number(window.localStorage.getItem('editorActiveTab')) || Tabs.EDITOR
  );
  const [isFocused, setIsFocused] = useState(true);
  const [query, setQuery] = useState(window.localStorage.getItem('query') || '');
  const [docsVisible, setDocsVisible] = useState(false);

  const endpoint = useSelector((state: RootState) => state.endpoint.endpoint);
  const variables = safelyParseJson(useSelector((state: RootState) => state.variables.variables));
  const headers = safelyParseJson(useSelector((state: RootState) => state.headers.headers));
  const result = useSelector((state: RootState) => state.result.result);

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setQuery(value);
    window.localStorage.setItem('query', value);
  };

  const changeActiveTab = (tab: Tabs) => {
    window.localStorage.setItem('editorActiveTab', tab.toString());
    setActiveTab(tab);
  };

  async function sendRequest(endpoint: string, query: string, variables: object, headers: object) {
    try {
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
    } catch (error) {
      console.error('Error during request:', error);
    }
  }

  return (
    <>
      {docsVisible ? <Docs /> : <></>}
      <section className="flex flex-col grow rounded-md">
        <div className="sticky top-[58px] z-10 flex gap-6 p-3 justify-between items-center bg-medium rounded-t-md border-b-2 border-light">
          <div className="flex gap-5 w-1/4">
            <div
              className={`pb-4 pt-1 -mb-[15px] w-24 flex justify-center items-center ${
                activeTab === Tabs.EDITOR &&
                'underline border-2 border-light bg-medium border-b-0 rounded-t'
              }`}
            >
              <Button onclick={() => changeActiveTab(Tabs.EDITOR)} text="Editor" />
            </div>

            <div
              className={`pb-4 pt-1 -mb-[15px] w-24 flex justify-center ${
                activeTab === Tabs.RESPONSE && 'underline bg-light rounded-t'
              } `}
            >
              <Button onclick={() => changeActiveTab(Tabs.RESPONSE)} text="Response" />
            </div>
          </div>
          <div
            className={`flex justify-between w-3/4 ${
              activeTab === Tabs.RESPONSE && 'pointer-events-none brightness-75'
            }`}
          >
            <EndpointInput docsClick={() => setDocsVisible((prevState) => !prevState)} />
            <div className="flex gap-5 items-center">
              <Button icon={prettifyIcon} onclick={() => setQuery(prettify(query))} />
              <Button
                icon={playIcon}
                onclick={() => sendRequest(endpoint, query, variables, headers)}
              />
            </div>
          </div>
        </div>
        {activeTab === Tabs.EDITOR && (
          <div className="flex flex-col grow bg-medium rounded-b-md">
            <div className="flex grow justify-between pt-2 text-gray-400 font-mono">
              <LineCounter value={query} />
              <textarea
                autoFocus
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleChange}
                onKeyDown={(event) => manageCursor(event, isFocused, setQuery)}
                value={query}
                className="grow px-2 bg-medium outline-none whitespace-pre-wrap resize-none"
              ></textarea>
            </div>
            <VariableHeaderEditor />
          </div>
        )}

        {activeTab === Tabs.RESPONSE && (
          <div className="bg-light px-5 py-1 whitespace-pre-wrap text-gray-300 font-mono">
            {result}
          </div>
        )}
      </section>
    </>
  );
}

export default QueryEditor;
