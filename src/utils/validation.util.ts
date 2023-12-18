import * as yup from 'yup';

export const validationSchema = (isSignUp?: boolean) =>
  yup.object().shape({
    firstName: isSignUp ? yup.string().required('fieldRequired') : yup.string(),
    lastName: isSignUp ? yup.string().required('fieldRequired') : yup.string(),
    email: yup.string().required('fieldRequired').email('fieldInvalid'),
    password: yup
      .string()
      .matches(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).{8,}$/, 'passwordValidHint')
      .required('fieldRequired'),
    passwordRepeat: isSignUp
      ? yup
          .string()
          .required('fieldRequired')
          .oneOf([yup.ref('password')], 'passwordMustMatch')
      : yup.string(),
  });
