import { ISchemaField, ISchemaType } from '../../models/schema';
import { DocsContentType, DocStep } from './Docs';
import Button from '../UI/Button';
import { FieldValueWrapper } from './FieldValueWrapper';

interface TypeDocsProps {
  schemaTypes: Map<string, ISchemaType> | null;
  data: ISchemaType | undefined;
  onClick: (item: DocStep<ISchemaType | ISchemaField>) => void;
}

export function TypeDocs({ schemaTypes, data, onClick }: TypeDocsProps) {
  return data ? (
    <>
      {data.fields?.length
        ? data.fields.map((field) => {
            const fieldValue = schemaTypes?.get(field.type?.ofType?.name || field.type?.name)?.name;

            return (
              <div className="mb-4" key={field.name}>
                <div className={!field.args?.length ? 'flex' : ''}>
                  <div className={field.args?.length ? 'inline-block' : ''}>
                    <Button
                      text={field.name}
                      className="text-blue-400"
                      onclick={() =>
                        onClick({
                          contentType: DocsContentType.FIELD,
                          value: field,
                        })
                      }
                    />
                  </div>
                  {field.args?.length ? (
                    <>
                      <span>(</span>
                      <div className="ml-4">
                        {field.args.map((arg) => {
                          return (
                            <div className="flex">
                              <span className="text-fuchsia-400">{arg.name}</span>
                              <span className="pr-2">:</span>
                              <Button
                                text={arg.type.name}
                                onclick={() =>
                                  onClick({
                                    contentType: DocsContentType.TYPE,
                                    value: schemaTypes?.get(arg.type.name),
                                  })
                                }
                                dataTestid="typeArgName-button"
                              />
                            </div>
                          );
                        })}
                      </div>
                      <span>)</span>
                    </>
                  ) : (
                    <></>
                  )}
                  {fieldValue ? (
                    <div className="inline-flex">
                      <span className="pr-2">:</span>
                      {
                        <FieldValueWrapper kind={field.type.kind}>
                          <Button
                            text={fieldValue}
                            onclick={() =>
                              onClick({
                                contentType: DocsContentType.TYPE,
                                value: schemaTypes?.get(fieldValue),
                              })
                            }
                            dataTestid="typeValue-button"
                          />
                        </FieldValueWrapper>
                      }
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="text-xs">{field.description}</div>
              </div>
            );
          })
        : data.description}
    </>
  ) : (
    <></>
  );
}
