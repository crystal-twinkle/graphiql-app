import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, useAppSelector } from '../store/store';
import { setEndpoint } from '../store/endpoint-slice';
import Button from './UI/Button';
import applyIcon from '../assets/icons/apply-icon.svg';
import docsIcon from '../assets/icons/docs-icon.svg';
import { ISchemaGql } from '../models/schema.model';
import { setSchema } from '../store/schema-slice';
import { setPopupData } from '../store/popup-slice';
import { useLocalization } from '../context/localization-context';
import { SCHEMA_QUERY } from '../data/schema-query';
import { Loader } from './Loader/Loader';

export function EndpointInput({ docsClick }: { docsClick: () => void }) {
  const endpoint = useSelector((state: RootState) => state.endpoint.endpoint);
  const schema = useAppSelector((state) => state.schema.data);
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
      console.log(schemaData.data.__schema);

      dispatch(setSchema(schemaData.data.__schema));
    } catch (e) {
      console.error(e);
      dispatch(setSchema(null));
      dispatch(
        setPopupData({
          message: translate.invalidEndpoint,
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
    <form onSubmit={handleSubmit} className="flex w-2/3 gap-3 items-center justify-between">
      <Button disabled={!schema} type="button" icon={docsIcon} onclick={docsClick} />
      <input
        type="text"
        placeholder="Enter GraphQL endpoint supporting CORS"
        value={value}
        onChange={handleChange}
        className="w-10/12 bg-light outline-none rounded py-1 px-2"
      />
      <div className="w-2/12 flex items-center">
        {loading ? (
          <Loader className="w-8 h-8 p-2" />
        ) : (
          <Button type="submit" text={translate.apply} icon={applyIcon} />
        )}
      </div>
    </form>
  );
}
