import { useAppSelector } from '../store/store';
import { useLocalization } from '../context/localization-context';
import { useState } from 'react';
import Button from './UI/Button';
import { ISchemaType } from '../models/schema.model';

export function Docs() {
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

  return schema ? (
    <section className="w-3/12 pr-4 mr-2 overflow-y-auto overflow-x-hidden">
      {prevTypes.length ? (
        <Button
          type="button"
          text={'< ' + (prevTypes?.[0]?.name || translate.docs)}
          onclick={prevClick}
        />
      ) : (
        <></>
      )}
      <h2 className="overflow-hidden text-ellipsis text-3xl mb-4">
        {currentType?.name || translate.docs}
      </h2>

      {prevTypes.length ? (
        <div></div>
      ) : (
        <div>
          {...schema.types.map((type) => (
            <Button
              className="text-ellipsis max-w-full overflow-hidden block"
              text={type.name}
              onclick={() => typeClick(type)}
            ></Button>
          ))}
        </div>
      )}
    </section>
  ) : (
    <></>
  );
}
