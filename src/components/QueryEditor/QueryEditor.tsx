import playIcon from '../../assets/icons/play-icon.svg';
import prettifyIcon from '../../assets/icons/pretify-icon.svg';
import { useState } from 'react';
import Button from '../UI/Button';
import LineCounter from '../LineCounter/LineCounter';
import VariableHeaderEditor from '../VariableHeaderEditor/VariableHeaderEditor';
import {
  completeBrackets,
  handleEnterPress,
  handleTabPress,
  prettify,
} from '../../utils/prettifier';

function QueryEditor() {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <section className="flex flex-col grow w1/2 pt-5 pb-2 bg-medium rounded-md">
      <div className="flex grow justify-between">
        <LineCounter value={value} />
        <textarea
          autoFocus
          onChange={handleChange}
          onKeyDown={(event) => [
            handleTabPress(event, setValue),
            handleEnterPress(event, setValue),
            completeBrackets(event, setValue),
          ]}
          name="editor"
          value={value}
          className="grow px-2 bg-medium outline-none resize-none tab"
        ></textarea>
        <div className="flex flex-col gap-5 items-center pr-5">
          <Button icon={playIcon} onclick={() => {}} />
          <Button icon={prettifyIcon} onclick={() => setValue(prettify(value))} />
        </div>
      </div>
      <VariableHeaderEditor />
    </section>
  );
}

export default QueryEditor;
