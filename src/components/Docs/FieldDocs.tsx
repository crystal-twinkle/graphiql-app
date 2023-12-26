import { ISchemaField, ISchemaType } from '../../models/schema';
import { DocsContentType, DocStep } from './Docs';
import Button from '../UI/Button';
import { FieldValueWrapper } from './FieldValueWrapper';

interface FieldDocsProps {
  schemaTypes: Map<string, ISchemaType> | null;
  data: ISchemaField;
  onClick: (item: DocStep<ISchemaType | ISchemaField>) => void;
}

export function FieldDocs({ schemaTypes, data, onClick }: FieldDocsProps) {
  return (
    <div className="flex ">
      {
        <FieldValueWrapper kind={data.type.kind}>
          <Button
            text={data?.type?.ofType?.name || data?.type?.name}
            onclick={() =>
              onClick({
                contentType: DocsContentType.TYPE,
                value: schemaTypes?.get(data?.type?.ofType?.name || data?.type?.name),
              })
            }
          />
        </FieldValueWrapper>
      }
    </div>
  );
}
