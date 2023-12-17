import playIcon from '../../assets/icons/play-icon.svg';
import prettifyIcon from '../../assets/icons/pretify-icon.svg';
import { useState } from 'react';
import Button from '../UI/Button';
import LineCounter from '../LineCounter/LineCounter';
import VariableHeaderEditor from '../VariableHeaderEditor/VariableHeaderEditor';
import { manageCursor } from '../../utils/manageCursor';
import { prettify } from '../../utils/prettifier';
import { EndpointInput } from '../EndpointInput/EndpointInput';

function QueryEditor() {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <section className="relative flex flex-col grow w1/2 pb-2 bg-medium rounded-md">
      <div className="sticky top-[58px] z-10 flex gap-6 p-3 justify-between items-center bg-medium rounded-t-md border-b-2 border-light">
        <EndpointInput />
        <div className="flex gap-5 items-center">
          <Button icon={playIcon} onclick={() => {}} />
          <Button icon={prettifyIcon} onclick={() => setValue(prettify(value))} />
        </div>
      </div>
      <div className="flex grow justify-between pt-2">
        <LineCounter value={value} />
        <textarea
          autoFocus
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
          onKeyDown={(event) => manageCursor(event, isFocused, setValue)}
          name="editor"
          value={value}
          className="grow px-2 bg-medium outline-none resize-none"
        ></textarea>
      </div>
      <VariableHeaderEditor />
    </section>
  );
}

export default QueryEditor;
