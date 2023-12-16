import { useState } from 'react';
import LineCounter from '../LineCounter/LineCounter';
import Button from '../UI/Button';
import chevronIcon from '../../assets/icons/chevron-icon.svg';

function VariableHeaderEditor() {
  enum Tabs {
    NONE = '',
    VARIABLES = 'variables',
    HEADERS = 'headers',
  }

  const [headersValue, setHeadersValue] = useState('');
  const [variablesValue, setVariablesValue] = useState('');
  const [currentTab, setCurrentTab] = useState(Tabs.NONE);

  const handleHeadersChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHeadersValue(event.target.value);
  };

  const handleVariablesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVariablesValue(event.target.value);
  };

  return (
    <>
      <div className="relative z-10 flex justify-between gap-10 px-5 pt-2 pb-0 border-t-2 bg-medium border-light">
        <div className="flex items-center gap-5">
          <div className={`${currentTab === 'variables' && 'underline'}`}>
            <Button onclick={() => setCurrentTab(Tabs.VARIABLES)} text="Variables" />
          </div>

          <div className={` ${currentTab === 'headers' && 'underline'}`}>
            <Button onclick={() => setCurrentTab(Tabs.HEADERS)} text="Headers" />
          </div>
        </div>
        <div
          className={`transition-all duration-500 ease-in-out ${
            currentTab !== Tabs.NONE && 'rotate-180'
          }`}
        >
          <Button
            onclick={() => setCurrentTab(currentTab === Tabs.NONE ? Tabs.VARIABLES : Tabs.NONE)}
            icon={chevronIcon}
          />
        </div>
      </div>
      <div
        className={`flex -my-6 scale-y-0 p-0 transition-scale duration-500 ease-in-out overflow-hidden ${
          currentTab !== Tabs.NONE && '-my-0 scale-y-100'
        }`}
      >
        <div className={`${currentTab === Tabs.NONE && 'h-0'}`}>
          <LineCounter value={currentTab === Tabs.HEADERS ? headersValue : variablesValue} />
        </div>
        <textarea
          autoFocus
          onChange={currentTab === Tabs.HEADERS ? handleHeadersChange : handleVariablesChange}
          name="editor"
          placeholder={currentTab}
          value={currentTab === Tabs.HEADERS ? headersValue : variablesValue}
          className="w-full px-2 overflow-hidden bg-medium outline-none resize-none"
        ></textarea>
      </div>
    </>
  );
}

export default VariableHeaderEditor;
