import { ISchemaGql, ISchemaType } from '../models/schema.model';
import { DocStep } from './Docs';
import Button from './UI/Button';

export interface FieldDocsProps {
  schema: ISchemaGql | null;
  step: DocStep | undefined;
}

export function FieldDocs({ schema, step }: FieldDocsProps) {
  return {
    ...(step?.value as ISchemaType).fields.map((item) => (
      <div>
        <span>
          <Button text={item.name} />:{' '}
          {schema?.types.find((schemaType) => schemaType.name === item.type.ofType.name)?.name}
        </span>
        <div>{item.description}</div>
      </div>
    )),
  };
}
