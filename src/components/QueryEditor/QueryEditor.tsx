import playIcon from '../../assets/icons/play-icon.svg';
import prettifyIcon from '../../assets/icons/pretify-icon.svg';
import { useState } from 'react';
import Button from '../UI/Button';
import LineCounter from '../LineCounter/LineCounter';
import VariableHeaderEditor from '../VariableHeaderEditor/VariableHeaderEditor';

function QueryEditor() {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <section className="flex flex-col grow w1/2 py-5 bg-medium rounded-md">
      <div className="flex grow justify-between">
        <LineCounter value={value} />
        <textarea
          autoFocus
          onChange={handleChange}
          name="editor"
          value={value}
          className="grow px-2 bg-medium  outline-none resize-none"
        ></textarea>
        <div className="flex flex-col gap-5 items-center pr-5">
          <Button icon={playIcon} onclick={() => {}} />
          <Button icon={prettifyIcon} onclick={() => {}} />
        </div>
      </div>
      <VariableHeaderEditor />
    </section>
  );
}

export default QueryEditor;
