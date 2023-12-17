import * as yup from 'yup';

export const signInValidationSchema = yup.object().shape({
  email: yup.string().required('fieldRequired').email('fieldInvalid'),
  password: yup
    .string()
    .matches(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).{6,}$/, 'passwordValidHint')
    .required('fieldRequired'),
});

export const signUpValidationSchema = yup.object().shape({
  firstName: yup.string().required('fieldRequired'),
  lastName: yup.string().required('fieldRequired'),
  email: yup.string().required('fieldRequired').email('fieldInvalid'),
  password: yup
    .string()
    .matches(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).{6,}$/, 'passwordValidHint')
    .required('fieldRequired'),
  passwordRepeat: yup
    .string()
    .required('fieldRequired')
    .oneOf([yup.ref('password')], 'passwordMustMatch'),
});
