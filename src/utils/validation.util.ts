import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .matches(/^[A-Z]/, 'Name must start with an uppercase letter'),
  lastName: yup
    .string()
    .required('Last name is required')
    .matches(/^[A-Z]/, 'Name must start with an uppercase letter'),
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup
    .string()
    .matches(
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])/,
      'Password must contain at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character'
    )
    .required('Password is required'),
  passwordRepeat: yup
    .string()
    .required('Field "Confirm Password" is required')
    .oneOf([yup.ref('password')], 'Passwords must match!'),
});
