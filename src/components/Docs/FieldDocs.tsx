import { ISchemaField, ISchemaType } from '../../models/schema.model';
import { DocsContentType, DocStep } from './Docs';
import Button from '../UI/Button';
import { valueWrapper } from '../../utils/docsFieldValueWrapper';

interface FieldDocsProps {
  schemaTypes: Map<string, ISchemaType> | null;
  data: ISchemaField;
  onClick: (item: DocStep<ISchemaType | ISchemaField>) => void;
}

export function FieldDocs({ schemaTypes, data, onClick }: FieldDocsProps) {
  return (
    <div className="flex ">
      {valueWrapper(
        data?.type.kind,
        <Button
          text={data?.type?.ofType?.name}
          onclick={() =>
            onClick({
              contentType: DocsContentType.TYPE,
              value: schemaTypes?.get(data?.type?.ofType?.name),
            })
          }
        />
      )}
    </div>
  );
}
