import playIcon from '../../assets/icons/play-icon.svg';
import prettifyIcon from '../../assets/icons/pretify-icon.svg';
import { useState } from 'react';
import Button from '../UI/Button';
import LineCounter from '../LineCounter/LineCounter';
import VariableHeaderEditor from '../VariableHeaderEditor/VariableHeaderEditor';
import { manageCursor } from '../../utils/manageCursor';
import { prettify } from '../../utils/prettifier';

function QueryEditor() {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <section className="flex flex-col grow w1/2 pt-5 pb-2 bg-medium rounded-md">
      <div className="flex grow justify-between">
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
        <div className="fixed right-1/2 flex flex-col gap-5 items-center pr-5">
          <Button icon={playIcon} onclick={() => {}} />
          <Button icon={prettifyIcon} onclick={() => setValue(prettify(value))} />
        </div>
      </div>
      <VariableHeaderEditor />
    </section>
  );
}

export default QueryEditor;
