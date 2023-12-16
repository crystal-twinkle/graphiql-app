import { useState } from 'react';
import LineCounter from '../LineCounter/LineCounter';
import Button from '../UI/Button';
import chevronIcon from '../../assets/icons/chevron-icon.svg';
import { manageCursor } from '../../utils/manageCursor';

function VariableHeaderEditor() {
  enum Tabs {
    NONE = '',
    VARIABLES = 'variables',
    HEADERS = 'headers',
  }

  const [headersValue, setHeadersValue] = useState('');
  const [variablesValue, setVariablesValue] = useState('');
  const [activeTab, setActiveTab] = useState(Tabs.NONE);
  const [isFocused, setIsFocused] = useState(true);

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
          <div className={`${activeTab === 'variables' && 'underline'}`}>
            <Button onclick={() => setActiveTab(Tabs.VARIABLES)} text="Variables" />
          </div>

          <div className={` ${activeTab === 'headers' && 'underline'}`}>
            <Button onclick={() => setActiveTab(Tabs.HEADERS)} text="Headers" />
          </div>
        </div>
        <div
          className={`transition-all duration-500 ease-in-out ${
            activeTab !== Tabs.NONE && 'rotate-180'
          }`}
        >
          <Button
            onclick={() => setActiveTab(activeTab === Tabs.NONE ? Tabs.VARIABLES : Tabs.NONE)}
            icon={chevronIcon}
          />
        </div>
      </div>
      <div
        className={`flex scale-y-0 -my-6 p-0 transition-scale duration-500 ease-in-out overflow-hidden ${
          activeTab !== Tabs.NONE && 'my-0 scale-y-100'
        }`}
      >
        <div className={`${activeTab === Tabs.NONE && 'h-0 overflow-hidden'}`}>
          <LineCounter value={activeTab === Tabs.HEADERS ? headersValue : variablesValue} />
        </div>
        <textarea
          autoFocus
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={activeTab === Tabs.HEADERS ? handleHeadersChange : handleVariablesChange}
          onKeyDown={(event) =>
            manageCursor(
              event,
              isFocused,
              activeTab === Tabs.HEADERS ? setHeadersValue : setVariablesValue
            )
          }
          name="editor"
          value={activeTab === Tabs.HEADERS ? headersValue : variablesValue}
          className="w-full px-2 overflow-hidden bg-medium outline-none resize-none"
        ></textarea>
      </div>
    </>
  );
}

export default VariableHeaderEditor;
