import { useAppSelector } from '../store/store';
import { useLocalization } from '../context/localization-context';
import { ReactNode, useState } from 'react';
import Button from './UI/Button';
import { IName } from '../models/schema.model';
import { TypeDocs } from './TypeDocs';
import { FieldDocs } from './FieldDocs';
import { MainDocs } from './MainDocs';

export enum DocsContentType {
  TYPE = 'type',
  FIELD = 'field',
}

export interface DocStep {
  contentType: DocsContentType;
  value?: unknown;
}

export function Docs() {
  const { translate } = useLocalization();
  const [prevSteps, setPrevSteps] = useState<(DocStep | undefined)[]>([]);
  const [currentStep, setCurrentStep] = useState<DocStep>();
  const schema = useAppSelector((state) => state.schema.data);

  const prevClick = () => {
    setCurrentStep(prevSteps[0]);
    setPrevSteps((prevState) => [...prevState.slice(1)]);
  };

  const stepClick = (newStep: DocStep) => {
    setPrevSteps((prevState) => [currentStep, ...prevState]);
    setCurrentStep(newStep);
  };

  const getDocsContent = (contentType?: string): ReactNode => {
    switch (contentType) {
      case DocsContentType.TYPE: {
        return <TypeDocs schema={schema} data={currentStep} />;
      }
      case DocsContentType.FIELD: {
        return <FieldDocs schema={schema} step={currentStep} />;
      }
      default: {
        return <MainDocs schema={schema} onClick={(item) => stepClick(item)} />;
      }
    }
  };

  return schema ? (
    <div className="mr-2 overflow-y-auto overflow-x-hidden sticky top-16">
      {prevSteps.length ? (
        <Button
          type="button"
          text={'< ' + ((prevSteps?.[0]?.value as IName)?.name || translate.docs)}
          onclick={prevClick}
        />
      ) : (
        <></>
      )}

      <h2 className="overflow-hidden text-ellipsis text-3xl mb-4">
        {(currentStep?.value as IName)?.name || translate.docs}
      </h2>

      <div className="my-4 border-t-2 border-text"></div>

      <div className="overflow-auto h-[765px]">{getDocsContent(currentStep?.contentType)}</div>
    </div>
  ) : (
    <></>
  );
}
