import { FieldError, RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';

export type CommonReactProps = {
  children: React.ReactNode;
};

export interface CommonFieldProps {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
}

export interface FieldProps extends CommonFieldProps {
  formKey: FormKeys;
  error?: FieldError | undefined;
  register: (
    name: FormKeys,
    options?: RegisterOptions<AppFields, FormKeys> | undefined
  ) => UseFormRegisterReturn<FormKeys>;
}

export type AppFields = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordRepeat: string;
};

export enum FormKeys {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  PASSWORD = 'password',
  PASSWORD_REPEAT = 'passwordRepeat',
}
