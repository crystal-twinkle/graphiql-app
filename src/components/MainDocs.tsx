import { ISchemaGql, ISchemaType } from "../models/schema.model";
import Button from './UI/Button';
import { DocsContentType, DocStep } from "./Docs";

export interface MainDocsProps {
  schema: ISchemaGql | null;
  onClick: (item: DocStep) => void;
}

export function MainDocs({ schema, onClick }: MainDocsProps) {
  return schema ? (
    <>
      {schema.types.map((item) => {
        return (
          <Button
            key={item.name}
            className="text-ellipsis max-w-full overflow-hidden block"
            text={item.name}
            onclick={() => onClick({ contentType: DocsContentType.TYPE, value: item })}
          />
        );
      })}
    </>
  ) : (
    <></>
  );
}
