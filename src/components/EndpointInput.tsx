import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { setEndpoint } from '../store/endpoint-slice';
import Button from './UI/Button';
import applyIcon from '../assets/icons/apply-icon.svg';
import { ISchemaGql } from '../models/schema';
import { setSchema } from '../store/schema-slice';
import { setPopupData } from '../store/popup-slice';
import { useLocalization } from '../context/localization-context';
import { SCHEMA_QUERY } from '../data/schema-query';

export function EndpointInput() {
  const endpoint = useSelector((state: RootState) => state.endpoint.endpoint);
  const [value, setValue] = useState(endpoint);
  const { translate } = useLocalization();
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (endpoint?.length) {
      handleSubmit();
    }
  }, [endpoint]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
    window.localStorage.setItem('endpoint', value);
  };

  const handleSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setLoading(true);

    try {
      const schemaResponse = await fetch(value, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ query: SCHEMA_QUERY }),
      });

      const schemaData: { data: { __schema: ISchemaGql } } = await schemaResponse.json();
      dispatch(setSchema(schemaData.data.__schema));
    } catch (e) {
      dispatch(setSchema(null));
      dispatch(
        setPopupData({
          messages: [translate.invalidEndpoint],
          submitText: translate.ok,
          submitClick: () => dispatch(setPopupData(null)),
        })
      );
    } finally {
      setLoading(false);
      dispatch(setEndpoint(value));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 justify-between w-full lg:w-1/2 order-1 lg:order-2 items-center"
      data-testid="endpoint-form"
    >
      <input
        type="text"
        placeholder="Enter GraphQL endpoint supporting CORS"
        value={value}
        onChange={handleChange}
        className="grow bg-light outline-none rounded py-1 px-2"
      />
      <div className="flex justify-start items-center">
        <div className="w-8 sm:w-auto overflow-hidden sm:overflow-visible">
          <Button type="submit" text={translate.apply} loading={loading} icon={applyIcon} />
        </div>
      </div>
    </form>
  );
}
