import { FormKeys, FieldProps } from '../models/common.model';

export const FormFieldsData: Record<string, Omit<FieldProps, 'register'>> = {
  firstName: {
    id: FormKeys.FIRST_NAME,
    name: FormKeys.FIRST_NAME,
    formKey: FormKeys.FIRST_NAME,
    type: 'text',
    label: 'First Name',
    placeholder: 'Enter the name',
  },
  lastName: {
    id: FormKeys.LAST_NAME,
    name: FormKeys.LAST_NAME,
    formKey: FormKeys.LAST_NAME,
    type: 'text',
    label: 'Last Name',
    placeholder: 'Enter the name',
  },
  email: {
    id: FormKeys.EMAIL,
    name: FormKeys.EMAIL,
    formKey: FormKeys.EMAIL,
    type: 'text',
    label: 'Email',
    placeholder: 'Enter the email',
  },
  password: {
    id: FormKeys.PASSWORD,
    name: FormKeys.PASSWORD,
    formKey: FormKeys.PASSWORD,
    type: 'password',
    label: 'Password',
    placeholder: 'Create a password',
  },
  passwordRepeat: {
    id: FormKeys.PASSWORD_REPEAT,
    name: FormKeys.PASSWORD_REPEAT,
    formKey: FormKeys.PASSWORD_REPEAT,
    type: 'password',
    label: 'Confirm Password',
    placeholder: 'Enter your password again',
  },
};
