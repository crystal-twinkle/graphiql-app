import { useAppSelector } from '../store/store';
import { useLocalization } from '../context/localization-context';
import { useState } from 'react';
import Button from './UI/Button';
import { ISchemaType } from '../models/schema.model';

interface IDocsProps {}

export function Docs({}: IDocsProps) {
  const { translate } = useLocalization();
  const [prevTypes, setPrevTypes] = useState<(ISchemaType | undefined)[]>([]);
  const [currentType, setCurrentType] = useState<ISchemaType>();
  const schema = useAppSelector((state) => state.schema.data);

  const prevClick = () => {
    setCurrentType(prevTypes[0]);
    setPrevTypes((prevState) => [...prevState.slice(1)]);
  };

  const typeClick = (newType: ISchemaType) => {
    setPrevTypes((prevState) => [currentType, ...prevState]);
    setCurrentType(newType);
  };

  return (
    <section className="w-3/12">
      {prevTypes.length ? (
        <Button
          type="button"
          text={'< ' + (prevTypes?.[0]?.name || translate.docs)}
          onclick={prevClick}
        />
      ) : (
        <></>
      )}
      <h2 className="text-3xl mb-4">{currentType?.name || translate.docs}</h2>

      {prevTypes.length ? (
        <div></div>
      ) : (
        <div>
          {...schema.types.map((type) => {
            return <Button text={type.name} onclick={() => typeClick(type)}></Button>;
          })}
        </div>
      )}
    </section>
  );
}
