import { FormKeys, FieldProps } from '../models/common.model';

export const FormFieldsData: Record<string, Omit<FieldProps, 'register'>> = {
  firstName: {
    id: FormKeys.FIRST_NAME,
    name: FormKeys.FIRST_NAME,
    formKey: FormKeys.FIRST_NAME,
    type: 'text',
    label: 'firstName',
    placeholder: 'enterFirstName',
  },
  lastName: {
    id: FormKeys.LAST_NAME,
    name: FormKeys.LAST_NAME,
    formKey: FormKeys.LAST_NAME,
    type: 'text',
    label: 'lastName',
    placeholder: 'enterLastName',
  },
  email: {
    id: FormKeys.EMAIL,
    name: FormKeys.EMAIL,
    formKey: FormKeys.EMAIL,
    type: 'text',
    label: 'email',
    placeholder: 'enterEmail',
  },
  password: {
    id: FormKeys.PASSWORD,
    name: FormKeys.PASSWORD,
    formKey: FormKeys.PASSWORD,
    type: 'password',
    label: 'password',
    placeholder: 'createPassword',
  },
  passwordRepeat: {
    id: FormKeys.PASSWORD_REPEAT,
    name: FormKeys.PASSWORD_REPEAT,
    formKey: FormKeys.PASSWORD_REPEAT,
    type: 'password',
    label: 'passwordRepeat',
    placeholder: 'repeatPassword',
  },
};
