import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInValidationSchema } from '../utils/validation.util';
import { FormInput } from '../components/FormInput';
import { FormFieldsData } from '../data/form-fields-data';
import { FormWrapper } from '../components/FormWrapper';
import { AppFields } from '../models/common.model';
import { useNavigate } from 'react-router-dom';
import { auth } from '../main';
import React, { useState } from 'react';
import { RouterPage } from '../router';
import { useLocalization } from '../context/localization-context';
import { Loader } from '../components/Loader/Loader';
import { signInWithEmailAndPassword } from 'firebase/auth';

export function SignInPage() {
  const navigate = useNavigate();
  const { translate } = useLocalization();
  const [credentialErrorVisible, setCredentialErrorVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInValidationSchema),
  });

  const onSubmitForm = async (formData: AppFields) => {
    setCredentialErrorVisible(false);
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate(RouterPage.GQL);
    } catch (err) {
      console.error(err);
      setCredentialErrorVisible(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormWrapper title={translate.signIn}>
      <form className="form" autoComplete="on" onSubmit={handleSubmit(onSubmitForm)}>
        <FormInput {...FormFieldsData.email} register={register} error={errors.email} />
        <FormInput {...FormFieldsData.password} register={register} error={errors.password} />
        <p
          title={translate.invalidEmailOrPassword}
          className={
            'text-center text-xs max-w-2xl text-ellipsis overflow-hidden whitespace-nowrap font-bold text-red-500 ' +
            (credentialErrorVisible ? '' : 'invisible')
          }
        >
          {credentialErrorVisible ? translate.invalidEmailOrPassword : 'error'}
        </p>
        <button
          type="submit"
          className={
            'hover:brightness-125 hover:scale-[1.02] border-sky-500 transition-all duration-200 ease-in-out w-full py-2 border-2 rounded-md form-submit ' +
            (loading ? 'disabled' : '')
          }
        >
          {loading ? <Loader className="w-4 h-4" /> : translate.submit}
        </button>
      </form>
    </FormWrapper>
  );
}
