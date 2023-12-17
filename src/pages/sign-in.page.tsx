import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInValidationSchema } from '../utils/validation.util';
import { FormInput } from '../components/input/form-input';
import { FormFieldsData } from '../data/form-fields-data';
import { FormWrapper } from '../components/form-wrapper/form-wrapper';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { AppFields } from '../models/common.model';
import { useAppDispatch } from '../store/store';
import firebase from 'firebase/compat';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../main';
import React, { useState } from 'react';
import { RouterPage } from '../router';
import { i18n } from '../models/i18n';
import { useLocalization } from '../context/localization-context';
import { UserCredential } from '@firebase/auth';

export function SignInPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { i18n, language } = useLocalization();
  const [credentialErrorVisible, setCredentialErrorVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(signInValidationSchema),
  });

  const onSubmitForm = async (formData: AppFields) => {
    setCredentialErrorVisible(false);
    setLoading(true);

    try {
      const result: UserCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      console.log('login res: ', result);
    } catch (err) {
      console.error(err);
      setCredentialErrorVisible(true);
    } finally {
      setLoading(false);
    }
  };

  // const signInWithGoogle = async () => {
  //   try {
  //     const res = await signInWithPopup(auth, googleProvider);
  //     const user = res.user;
  //     const q = query(collection(db, 'users'), where('uid', '==', user.uid));
  //     const docs = await getDocs(q);
  //     if (docs.docs.length === 0) {
  //       await addDoc(collection(db, 'users'), {
  //         uid: user.uid,
  //         name: user.displayName,
  //         authProvider: 'google',
  //         email: user.email,
  //       });
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert(err.message);
  //   }
  // };

  return (
    <FormWrapper title={i18n[language].signIn}>
      <form className="form" autoComplete="on" onSubmit={handleSubmit(onSubmitForm)}>
        <FormInput {...FormFieldsData.email} register={register} error={errors.email} />
        <FormInput {...FormFieldsData.password} register={register} error={errors.password} />
        <p
          title={i18n[language].invalidEmailOrPassword}
          className={
            'text-center text-xs max-w-2xl text-ellipsis overflow-hidden whitespace-nowrap font-bold ' +
            (credentialErrorVisible ? '' : 'invisible')
          }
        >
          {credentialErrorVisible ? i18n[language].invalidEmailOrPassword : 'error'}
        </p>
        <NavLink
          className="accent-red-600 w-full block text-center mb-4 hover:brightness-125 hover:scale-[1.02] transition-all duration-200 ease-in-out"
          to={RouterPage.RESET}
        >
          {i18n[language].forgotPassword}
        </NavLink>
        <button
          type="submit"
          className={`hover:brightness-125 hover:scale-[1.02] border-sky-500 transition-all duration-200 ease-in-out w-full py-2 border-2 rounded-2xl form-submit ${
            isValid ? '' : 'disabled'
          }`}
        >
          {loading ? <></> : i18n[language].submit}
        </button>
      </form>
    </FormWrapper>
  );
}
