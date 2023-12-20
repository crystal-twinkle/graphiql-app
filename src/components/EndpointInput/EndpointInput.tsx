import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { setEndpoint } from '../../store/endpoint-slice';
import Button from '../UI/Button';
import applyIcon from '../../assets/icons/apply-icon.svg';

export function EndpointInput() {
  const endpoint = useSelector((state: RootState) => state.endpoint.endpoint);
  const [value, setValue] = useState(endpoint);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
    window.localStorage.setItem('endpoint', value);
  };

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setEndpoint(value));
  };

  return (
    <form onSubmit={handleSubmit} className="flex shrink-0 w-2/3 gap-3 items-center">
      <input
        type="text"
        placeholder="Enter GraphQL endpoint"
        value={value}
        onChange={handleChange}
        className="w-full bg-light outline-none rounded py-1 px-2"
      />
      <Button type="submit" text="Apply" icon={applyIcon}></Button>
    </form>
  );
}
