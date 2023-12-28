import { useAppSelector } from '../../store/store';
import { useLocalization } from '../../context/localization-context';
import React, { ReactNode, useState } from 'react';
import Button from '../UI/Button';
import { IName, ISchemaField, ISchemaType } from '../../models/schema';
import { TypeDocs } from './TypeDocs';
import { FieldDocs } from './FieldDocs';
import { MainDocs } from './MainDocs';
import { DocsTitle } from './DocsTitle';

export enum DocsContentType {
  TYPE = 'type',
  FIELD = 'field',
}

export interface DocStep<T> {
  contentType: DocsContentType;
  value?: T;
}

export function Docs() {
  const { translate } = useLocalization();
  const [prevSteps, setPrevSteps] = useState<(DocStep<ISchemaType | ISchemaField> | undefined)[]>(
    []
  );
  const [currentStep, setCurrentStep] = useState<DocStep<ISchemaType | ISchemaField>>();
  const schemaTypes = useAppSelector((state) => state.schema.data.types);

  const prevClick = () => {
    setCurrentStep(prevSteps[0]);
    setPrevSteps((prevState) => [...prevState.slice(1)]);
  };

  const stepClick = (newStep: DocStep<ISchemaType | ISchemaField>) => {
    setPrevSteps((prevState) => [currentStep, ...prevState]);
    setCurrentStep(newStep);
  };

  const getDocsContent = (contentType?: DocsContentType): ReactNode => {
    switch (contentType) {
      case DocsContentType.TYPE: {
        return (
          <TypeDocs
            schemaTypes={schemaTypes}
            data={currentStep?.value as ISchemaType}
            onClick={(newStep) => stepClick(newStep)}
          />
        );
      }
      case DocsContentType.FIELD: {
        return (
          <FieldDocs
            schemaTypes={schemaTypes}
            data={currentStep?.value as ISchemaField}
            onClick={(newStep) => stepClick(newStep)}
          />
        );
      }
      default: {
        const typesArr = Array.from(schemaTypes?.values() as IterableIterator<ISchemaType>);
        return <MainDocs schemaTypes={typesArr} onClick={(item) => stepClick(item)} />;
      }
    }
  };

  return schemaTypes ? (
    <>
      <div className="mr-2 overflow-y-auto overflow-x-hidden sticky top-16">
        {prevSteps.length ? (
          <Button
            type="button"
            className="overflow-hidden text-ellipsis text-nowrap"
            prefix="<"
            text={(prevSteps?.[0]?.value as IName)?.name || translate.docs}
            onclick={prevClick}
            dataTestid="prev-button"
          />
        ) : (
          <></>
        )}
        <DocsTitle title={(currentStep?.value as IName)?.name || translate.docs} />
        <div className="my-4 border-t-2 border-text"></div>
        <div className="overflow-auto h-[30vh] sm:h-[79vh]">
          {getDocsContent(currentStep?.contentType)}
        </div>
      </div>
      <div />
    </>
  ) : (
    <></>
  );
}
