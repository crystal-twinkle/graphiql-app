import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, useAppSelector } from '../store/store';
import { setEndpoint } from '../store/endpoint-slice';
import Button from './UI/Button';
import applyIcon from '../assets/icons/apply-icon.svg';
import docsIcon from '../assets/icons/docs-icon.svg';
import { setSchema } from '../store/schema-slice';
import { Loader } from './Loader/Loader';
import { Popup } from './Popup';
import { useLocalization } from '../context/localization-context';

export function EndpointInput({ docsClick }: { docsClick: () => void }) {
  const endpoint = useAppSelector((state: RootState) => state.endpoint.endpoint);
  const schema = useAppSelector((state) => state.schema.data);
  const [value, setValue] = useState(endpoint);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { translate } = useLocalization();

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
      const schemaResponse = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ query: SCHEMA_QUERY }),
      });

      const schemaData = await schemaResponse.json();
      console.log(schemaData.data.__schema);

      dispatch(setSchema(schemaData.data.__schema));
      dispatch(setEndpoint(value));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex shrink-0 w-fit gap-3 items-center">
        <Button disabled={!schema} type="button" icon={docsIcon} onclick={docsClick} />
        <input
          type="text"
          placeholder="Enter GraphQL endpoint"
          value={value}
          onChange={handleChange}
          className="w-full bg-light outline-none rounded py-1 px-2"
        />
        <div className="w-28 flex items-center justify-center">
          {loading ? (
            <Loader className="w-6 h-6" />
          ) : (
            <Button type="submit" text="Apply" icon={applyIcon} />
          )}
        </div>
      </form>
    </>
  );
}

const SCHEMA_QUERY: string =
  'query IntrospectionQuery {\n' +
  '  __schema {\n' +
  '    queryType {\n' +
  '      name\n' +
  '    }\n' +
  '    mutationType {\n' +
  '      name\n' +
  '    }\n' +
  '    subscriptionType {\n' +
  '      name\n' +
  '    }\n' +
  '    types {\n' +
  '      ...FullType\n' +
  '    }\n' +
  '    directives {\n' +
  '      name\n' +
  '      description\n' +
  '      locations\n' +
  '      args {\n' +
  '        ...InputValue\n' +
  '      }\n' +
  '    }\n' +
  '  }\n' +
  '}\n' +
  'fragment\n' +
  'FullType\n' +
  'on\n' +
  '__Type {\n' +
  '  kind\n' +
  '  name\n' +
  '  description\n' +
  '  fields(includeDeprecated: true) {\n' +
  '    name\n' +
  '    description\n' +
  '    args {\n' +
  '      ...InputValue\n' +
  '    }\n' +
  '    type {\n' +
  '      ...TypeRef\n' +
  '    }\n' +
  '    isDeprecated\n' +
  '    deprecationReason\n' +
  '  }\n' +
  '  inputFields {\n' +
  '    ...InputValue\n' +
  '  }\n' +
  '  interfaces {\n' +
  '    ...TypeRef\n' +
  '  }\n' +
  '  enumValues(includeDeprecated: true) {\n' +
  '    name\n' +
  '    description\n' +
  '    isDeprecated\n' +
  '    deprecationReason\n' +
  '  }\n' +
  '  possibleTypes {\n' +
  '    ...TypeRef\n' +
  '  }\n' +
  '}\n' +
  'fragment\n' +
  'InputValue\n' +
  'on\n' +
  '__InputValue {\n' +
  '  name\n' +
  '  description\n' +
  '  type {\n' +
  '    ...TypeRef\n' +
  '  }\n' +
  '  defaultValue\n' +
  '}\n' +
  'fragment\n' +
  'TypeRef\n' +
  'on\n' +
  '__Type {\n' +
  '  kind\n' +
  '  name\n' +
  '  ofType {\n' +
  '    kind\n' +
  '    name\n' +
  '    ofType {\n' +
  '      kind\n' +
  '      name\n' +
  '      ofType {\n' +
  '        kind\n' +
  '        name\n' +
  '        ofType {\n' +
  '          kind\n' +
  '          name\n' +
  '          ofType {\n' +
  '            kind\n' +
  '            name\n' +
  '            ofType {\n' +
  '              kind\n' +
  '              name\n' +
  '              ofType {\n' +
  '                kind\n' +
  '                name\n' +
  '              }\n' +
  '            }\n' +
  '          }\n' +
  '        }\n' +
  '      }\n' +
  '    }\n' +
  '  }\n' +
  '}\n';
