import { useState } from 'react';
import Button from '../UI/Button';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../../store/store';

export function EndpointInput() {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
  };

  // const dispatch = useDispatch<AppDispatch>();

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setEndpoint(event.currentTarget.val);
  // };

  return (
    <form className="flex shrink-0 w-2/3 gap-3 items-center">
      <input
        type="text"
        placeholder="Enter GraphQL endpoint"
        value={value}
        onChange={handleChange}
        className="w-full bg-light outline-none rounded py-1 px-2"
      />
      <Button type="submit" text="Apply"></Button>
    </form>
  );
}
