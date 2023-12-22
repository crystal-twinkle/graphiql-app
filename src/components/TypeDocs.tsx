import { ISchemaGql, ISchemaType } from '../models/schema.model';
import { DocStep } from './Docs';

export interface TypeDocsProps {
  schema: ISchemaGql | null;
  data: DocStep | undefined;
}

export function TypeDocs({ schema, data }: TypeDocsProps) {
  return data ? (
    {
      ...(data?.value as ISchemaType).fields.map((item) => (
        <div key={item.name}>
          <span>
            {item.name}:{' '}
            {schema?.types.find((schemaType) => schemaType.name === item.type.ofType.name)?.name}
          </span>
          <div>{item.description}</div>
        </div>
      )),
    }
  ) : (
    <></>
  );
}
