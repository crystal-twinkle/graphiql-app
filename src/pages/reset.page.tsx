import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInValidationSchema } from '../utils/validation.util';
import { FormInput } from '../components/input/form-input';
import { FormFieldsData } from '../data/form-fields-data';
import { FormWrapper } from '../components/form-wrapper/form-wrapper';
import { sendPasswordResetEmail } from 'firebase/auth';
import { AppFields } from '../models/common.model';
import { auth } from '../main';
import React from 'react';
import { useLocalization } from '../context/localization-context';

export function ResetPage() {
  const { i18n, language } = useLocalization();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(signInValidationSchema),
  });

  const onSubmitForm = async (formData: AppFields) => {
    try {
      await sendPasswordResetEmail(auth, formData.email);
      alert('Password reset link sent!');
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <FormWrapper title="Reset password">
      <form className="form" autoComplete="on" onSubmit={handleSubmit(onSubmitForm)}>
        <FormInput {...FormFieldsData.email} register={register} error={errors.email} />
        <button
          type="submit"
          className={`hover:brightness-125 hover:scale-[1.02] transition-all duration-200 ease-in-out w-full py-2 border-2 border-pink-500 rounded-2xl form-submit ${
            isValid ? '' : 'disabled'
          }`}
        >
          {i18n[language].submit}
        </button>
      </form>
    </FormWrapper>
  );
}
