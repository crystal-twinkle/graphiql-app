import playIcon from '../../assets/icons/play-icon.svg';
import prettifyIcon from '../../assets/icons/pretify-icon.svg';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import Button from '../UI/Button';
import LineCounter from '../LineCounter/LineCounter';
import VariableHeaderEditor from '../VariableHeaderEditor/VariableHeaderEditor';
import { manageCursor } from '../../utils/manageCursor';
import { prettify } from '../../utils/prettifier';
import { EndpointInput } from '../EndpointInput';
import { useDispatch, useSelector } from 'react-redux';
import { setResult } from '../../store/result-slice';
import { AppDispatch, RootState, useAppSelector } from '../../store/store';
import docsIcon from '../../assets/icons/docs-icon.svg';
import { setPopupData } from '../../store/popup-slice';
import { useLocalization } from '../../context/localization-context';
import { IErrorsGQL, IErrorsGQLResult } from '../../models/common';
import { Loader } from '../Loader/Loader';

enum Tabs {
  EDITOR,
  RESPONSE,
}

const LazyDocs = lazy(() => import('../Docs/Docs').then(({ Docs }) => ({ default: Docs })));

function QueryEditor() {
  const [activeTab, setActiveTab] = useState(
    Number(window.localStorage.getItem('editorActiveTab')) || Tabs.EDITOR
  );
  const { translate } = useLocalization();
  const [isFocused, setIsFocused] = useState(true);
  const [query, setQuery] = useState(window.localStorage.getItem('query') || '');
  const [docsVisible, setDocsVisible] = useState(false);
  const [docsStyles, setDocsStyles] = useState('w-full h-0 sm:h-auto sm:w-0');
  const [loading, setLoading] = useState(false);

  const endpoint = useSelector((state: RootState) => state.endpoint.endpoint);
  const variables = useSelector((state: RootState) => state.variables.variables);
  const headers = useSelector((state: RootState) => state.headers.headers);
  const result = useSelector((state: RootState) => state.result.result);
  const schemaTypes = useAppSelector((state) => state.schema.data?.types);

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setQuery(value);
  };

  useEffect(() => {
    window.localStorage.setItem('query', query);
  }, [query]);

  const changeActiveTab = (tab: Tabs) => {
    window.localStorage.setItem('editorActiveTab', tab.toString());
    setActiveTab(tab);
  };

  const toggleDocs = () => {
    if (!docsVisible) {
      setDocsVisible(true);
      setTimeout(() => {
        setDocsStyles('w-full h-[45vh] sm:h-auto sm:w-1/3 md:w-1/4');
      });
    } else {
      setDocsStyles('w-full h-0 sm:h-auto sm:w-0');
      setTimeout(() => {
        setDocsVisible(false);
      }, 500);
    }
  };

  async function sendRequest(endpoint: string, query: string, variables: string, headers: string) {
    setLoading(true);

    try {
      if (variables) {
        variables = JSON.parse(variables);
      }

      let parsedHeaders = new Headers();
      if (headers) {
        parsedHeaders = new Headers(JSON.parse(headers));
      }

      parsedHeaders.set('Content-type', 'application/json');

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: parsedHeaders,
        body: JSON.stringify({ query, variables }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errors: IErrorsGQL[] = (data as IErrorsGQLResult).errors;

        dispatch(
          setPopupData({
            messages: errors.map((e) => `${e.message}`),
            submitText: translate.ok,
            submitClick: () => dispatch(setPopupData(null)),
          })
        );
      }

      const prettifiedData = prettify(JSON.stringify(data), true);
      dispatch(setResult(prettifiedData));
      window.localStorage.setItem('result', prettifiedData);
    } catch (error) {
      dispatch(
        setPopupData({
          messages: [(error as Error).message],
          submitText: translate.ok,
          submitClick: () => dispatch(setPopupData(null)),
        })
      );
    }
    setLoading(false);
  }

  return (
    <>
      {docsVisible && schemaTypes?.size ? (
        <section className={`overflow-hidden transition-all ease-out duration-500 ${docsStyles}`}>
          <Suspense
            fallback={
              <div className="h-16 w-full flex justify-center items-center">
                <Loader className="w-8 h-8" />
              </div>
            }
          >
            <LazyDocs />
          </Suspense>
        </section>
      ) : (
        <></>
      )}
      <section className="w-auto sm:w-2/3 md:w-3/4 flex flex-col grow rounded-md">
        <div
          className={`sticky top-[48px] sm:top-[56px] z-10 flex flex-wrap lg:flex-nowrap gap-6 p-3 justify-between items-center bg-medium rounded-t-md ${
            activeTab === Tabs.EDITOR && 'border-b-2 border-light'
          }`}
        >
          <div className="flex w-1/5 sm:w-auto order-2 lg:order-1 justify-start gap-0 sm:gap-2">
            <Button
              disabled={!schemaTypes}
              type="button"
              icon={docsIcon}
              onclick={toggleDocs}
              tooltip={translate.docs}
              dataTestid="docs-button"
            />
            <div
              className={`pb-4 pt-1 px-2 -mb-[14px] w-24 flex justify-center items-center ${
                activeTab === Tabs.EDITOR &&
                'underline border-2 border-light bg-medium border-b-0 rounded-t'
              }`}
            >
              <Button onclick={() => changeActiveTab(Tabs.EDITOR)} text={translate.editor} />
            </div>
            <div
              className={`pb-4 pt-1 px-2 -mb-[14px] w-24 flex justify-center ${
                activeTab === Tabs.RESPONSE && 'underline bg-light rounded-t'
              } `}
            >
              <Button onclick={() => changeActiveTab(Tabs.RESPONSE)} text={translate.response} />
            </div>
          </div>

          <EndpointInput />

          <div
            className={`flex justify-end order-3 gap-2 items-center ${
              activeTab === Tabs.RESPONSE && 'pointer-events-none brightness-75'
            }`}
          >
            <Button
              icon={prettifyIcon}
              onclick={() => setQuery(prettify(query))}
              tooltip={translate.prettify}
              dataTestid="prettify-button"
            />
            {loading ? (
              <div className="w-9 flex justify-center items-center">
                <Loader className="w-6 h-6" />
              </div>
            ) : (
              <Button
                disabled={!schemaTypes}
                icon={playIcon}
                onclick={() => sendRequest(endpoint, query, variables, headers)}
                tooltip={translate.sendQuery}
                dataTestid="play-button"
              />
            )}
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
                className="grow px-2 bg-medium outline-none whitespace-pre-wrap overflow-auto resize-none"
                data-testid="textarea-query"
              ></textarea>
            </div>
            <VariableHeaderEditor />
          </div>
        )}

        {activeTab === Tabs.RESPONSE && (
          <div
            className={`${
              docsVisible && 'sm:border-l-2 sm:border-medium'
            } h-full pl-3 -my-2 py-3 whitespace-pre-wrap break-words text-gray-300 font-mono`}
          >
            {result}
          </div>
        )}
      </section>
    </>
  );
}

export default QueryEditor;
