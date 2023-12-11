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

export interface SignUpAppFields extends SignInAppFields {
  firstName: string;
  lastName: string;
  passwordRepeat: string;
}

export interface SignInAppFields {
  email: string;
  password: string;
}

export enum FormKeys {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  PASSWORD = 'password',
  PASSWORD_REPEAT = 'passwordRepeat',
}

export interface ISignInModel {
  email: string;
  password: string;
}

export interface IUser extends ISignInModel {
  id: string;
  firstName: string;
  lastName: string;
}

export interface IUserState {
  data: {
    current: IUser | null;
    all: IUser[];
  };
}
