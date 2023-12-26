import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../utils/validation.util';
import { FormInput } from '../components/FormInput';
import { FormFieldsData } from '../data/form-fields-data';
import { FormWrapper } from '../components/FormWrapper';
import { AppFields } from '../models/common';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebaseModule';
import React, { useState } from 'react';
import { RouterPage } from '../router';
import { useLocalization } from '../context/localization-context';
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
    resolver: yupResolver(validationSchema()),
  });

  const onSubmitForm = async (formData: AppFields) => {
    setCredentialErrorVisible(false);
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate(RouterPage.GQL);
    } catch (err) {
      setCredentialErrorVisible(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormWrapper title={translate.signIn} loading={loading} onSubmit={handleSubmit(onSubmitForm)}>
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
    </FormWrapper>
  );
}
