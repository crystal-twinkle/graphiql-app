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

export interface IUser {
  uid: string;
  displayName: string;
  lastName: string;
  email: string;
}

export interface StsTokenManager {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}

// "user": {
//   "uid": "PooaHpwF0EYTd5DhKy7Mu0k5xgw2",
//   "providerData": [
//     {
//       "providerId": "password",
//       "uid": "gemer_31@mail.ru",
//       "displayName": null,
//       "email": "gemer_31@mail.ru",
//       "phoneNumber": null,
//       "photoURL": null
//     }
//   ],
//   "stsTokenManager": {
//     "refreshToken": "AMf-vBw4sGwKilNZzfVKAG3PKid_Tkd5CpysGuGSs_dmOWanix3HL_Rbi0SiPSWJM9Zj6o8x54vW167eOTdo7x93AStRqfQvK62afGQaNrWo9YQFGjkTrSVLzgPRPs7XpCmj8tjwJqEWPqTOjUYlX3AE-AU6XUj8Gfgc3Fs0EC47HW04PdmpLZ8X8m3mx7URm0hst4NvsivtYNvY1h2pMIIZlp7SrYtOpg",
//     "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlNzgyM2VmMDFiZDRkMmI5NjI3NDE2NThkMjA4MDdlZmVlNmRlNWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZ3JhcGhpcWwtYXBwLTg3Mjk1IiwiYXVkIjoiZ3JhcGhpcWwtYXBwLTg3Mjk1IiwiYXV0aF90aW1lIjoxNzAyODE5MTkxLCJ1c2VyX2lkIjoiUG9vYUhwd0YwRVlUZDVEaEt5N011MGs1eGd3MiIsInN1YiI6IlBvb2FIcHdGMEVZVGQ1RGhLeTdNdTBrNXhndzIiLCJpYXQiOjE3MDI4MTkxOTEsImV4cCI6MTcwMjgyMjc5MSwiZW1haWwiOiJnZW1lcl8zMUBtYWlsLnJ1IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImdlbWVyXzMxQG1haWwucnUiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.U8OzR2y3gv8DfyeCzkOzKNZ0kDpVeVhuSexwwiBEcL4wPT-1DAm-w0EtEyqcjEu8-Dsx8PEo_XkrLEjORJn1sx0dn3_BaXmJapZVyyrNapwlyIFj-y09XdF5Rz22doTCXuMxANUnY1NAecK2wSVf1P8huxSrv1d3LtEy-v7DunDneuaWOAxgugS_LaAOxQHqP8canPO1hrI-WRUKMeqbMRd6_Ckeym4nIr3gGFLz4_vTdz7kJ9csJ1RnPjk5cC4a_tqox4xTvIX4JR2Wt47ipIs3IPKBJWZBokelQU-ZqrlFXtKe1GaAZ-wR5g0yxkT8_qR2ROdEVdr0nrr52krgwQ",
//     "expirationTime": 1702822791181
//   },
// },

export interface IUserState {
  data: {
    current: IUser | null;
    all: IUser[];
  };
}
