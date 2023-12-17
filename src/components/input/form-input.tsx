import { FieldProps } from '../../models/common.model';
import { useLocalization } from '../../context/localization-context';
import './form-input.css';

export function FormInput({ type, id, label, placeholder, formKey, error, register }: FieldProps) {
  const { i18n, language } = useLocalization();

  return (
    <div className="relative mb-2">
      <div className="flex flex-col">
        <label className="text-base cursor-pointer input-label" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          className={`p-2 border-2 ${error ? 'border-red-600 ' : 'border-black'}`}
          type={type}
          autoComplete="on"
          placeholder={placeholder}
          {...register(formKey)}
        />
      </div>
      <p
        title={error?.message}
        className={
          'text-xs max-w-2xl text-ellipsis overflow-hidden whitespace-nowrap font-bold text-red-600 ' +
          (error?.message ? '' : 'invisible')
        }
      >
        {i18n[language]?.[error?.message] || 'error'}
      </p>
    </div>
  );
}
