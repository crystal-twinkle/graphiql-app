import { FieldProps } from '../../models/common.model';
import classes from './form-input.module.scss';

export function FormInput({ type, id, label, placeholder, formKey, error, register }: FieldProps) {
  return (
    <div className="relative mb-7">
      <div className="flex flex-col">
        <label className={classes.inputLabel} htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          className={`${classes.inputInput} ${error ? classes.error : ''}`}
          type={type}
          autoComplete="on"
          placeholder={placeholder}
          {...register(formKey)}
        />
      </div>
      {error && <p className={classes.inputError}>{error.message}</p>}
    </div>
  );
}
