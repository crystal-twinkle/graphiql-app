import { ISchemaField, ISchemaType } from '../../models/schema';
import Button from '../UI/Button';
import { DocsContentType, DocStep } from './Docs';

interface MainDocsProps {
  schemaTypes: ISchemaType[];
  onClick: (item: DocStep<ISchemaType | ISchemaField>) => void;
}

export function MainDocs({ schemaTypes, onClick }: MainDocsProps) {
  return schemaTypes ? (
    <>
      {schemaTypes.map((item) => {
        return (
          <Button
            key={item.name}
            className="text-ellipsis max-w-full overflow-hidden block"
            text={item.name}
            onclick={() => onClick({ contentType: DocsContentType.TYPE, value: item })}
            dataTestid="mainDocs-button"
          />
        );
      })}
    </>
  ) : (
    <></>
  );
}
