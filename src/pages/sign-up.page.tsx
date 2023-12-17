import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/store';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpValidationSchema } from '../utils/validation.util';
import { FormInput } from '../components/input/form-input';
import { FormFieldsData } from '../data/form-fields-data';
import { RouterPage } from '../router';
import { AppFields, IUser, StsTokenManager } from '../models/common.model';
import { FormWrapper } from '../components/form-wrapper/form-wrapper';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../main';
import { addDoc, collection } from 'firebase/firestore';
import { useLocalization } from '../context/localization-context';
import { UserCredential } from '@firebase/auth';
import React, { useState } from 'react';

export function SignUpPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [somethingWentWrongVisible, setSomethingWentWrongVisible] = useState(false);
  const { i18n, language } = useLocalization();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signUpValidationSchema),
  });

  const onSubmitForm = async (formData: AppFields) => {
    setSomethingWentWrongVisible(false);

    try {
      const res: UserCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = res.user;
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: `${formData.firstName} ${formData.lastName}`,
        authProvider: 'local',
        email: formData.email,
      });

      const stsTokenManager: StsTokenManager = res.user['stsTokenManager'] as StsTokenManager;

      localStorage.setItem('refreshToken', stsTokenManager.refreshToken);
      localStorage.setItem('accessToken', stsTokenManager.accessToken);
      localStorage.setItem('expirationTime', String(stsTokenManager.expirationTime));

      // dispatch(addUser(validatedForm));
      // dispatch(setCurrentUser(validatedForm));
      // navigate(RouterPage.GQL);
    } catch (err) {
      console.error(err);
      setSomethingWentWrongVisible(true);
    }
  };

  return (
    <FormWrapper title={i18n[language].signUp}>
      <form autoComplete="on" onSubmit={handleSubmit(onSubmitForm)}>
        <FormInput {...FormFieldsData.firstName} register={register} error={errors.firstName} />
        <FormInput {...FormFieldsData.lastName} register={register} error={errors.lastName} />
        <FormInput {...FormFieldsData.email} register={register} error={errors.email} />
        <FormInput {...FormFieldsData.password} register={register} error={errors.password} />
        <FormInput
          {...FormFieldsData.passwordRepeat}
          register={register}
          error={errors.passwordRepeat}
        />
        <p
          title={i18n[language].somethingWentWrong}
          className={
            'text-center text-xs max-w-2xl text-ellipsis overflow-hidden whitespace-nowrap font-bold ' +
            (somethingWentWrongVisible ? '' : 'invisible')
          }
        >
          {somethingWentWrongVisible ? i18n[language].somethingWentWrong : 'error'}
        </p>
        <button
          type="submit"
          className={`hover:brightness-125 hover:scale-[1.02] border-sky-500 transition-all duration-200 ease-in-out w-full py-2 border-2 rounded-2xl form-submit ${
            isValid ? '' : 'disabled'
          }`}
        >
          {i18n[language].submit}
        </button>
      </form>
    </FormWrapper>
  );
}
