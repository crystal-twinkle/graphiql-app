import { FieldProps } from '../models/common.model';
import { useLocalization } from '../context/localization-context';

export function FormInput({ type, id, label, placeholder, formKey, error, register }: FieldProps) {
  const { translate } = useLocalization();

  return (
    <div className="relative mb-2">
      <div className="flex flex-col">
        <label
          className="text-base cursor-pointer after:content-['*'] after:ml-0.5 after:text-red-500 after:font-bold after:text-base"
          htmlFor={id}
        >
          {translate[label] as string}
        </label>
        <input
          id={id}
          className={`p-2 border-2 rounded-md ${error ? 'border-red-600 ' : 'border-black'}`}
          type={type}
          autoComplete="on"
          placeholder={translate[placeholder] as string}
          {...register(formKey)}
        />
      </div>
      <p
        title={error?.message}
        className={
          'text-xs max-w-2xl text-ellipsis overflow-hidden whitespace-nowrap font-bold text-red-500 ' +
          (error?.message ? '' : 'invisible')
        }
      >
        {error?.message ? (translate[error.message] as string) : 'error'}
      </p>
    </div>
  );
}
