import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../utils/validation.util';
import { FormInput } from '../components/FormInput';
import { FormFieldsData } from '../data/form-fields-data';
import { AppFields } from '../models/common';
import { FormWrapper } from '../components/FormWrapper';
import { auth, db } from '../utils/firebaseModule';
import { addDoc, collection } from 'firebase/firestore';
import { useLocalization } from '../context/localization-context';
import { UserCredential } from '@firebase/auth';
import React, { useState } from 'react';
import { RouterPage } from '../router';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export function SignUpPage() {
  const navigate = useNavigate();
  const [somethingWentWrongVisible, setSomethingWentWrongVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { translate } = useLocalization();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema(true)),
  });

  const onSubmitForm = async (formData: AppFields) => {
    setSomethingWentWrongVisible(false);
    setLoading(true);

    try {
      const result: UserCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = result.user;
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: `${formData.firstName} ${formData.lastName}`,
        authProvider: 'local',
        email: formData.email,
      });
      navigate(RouterPage.GQL);
    } catch (e) {
      setSomethingWentWrongVisible(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormWrapper title={translate.signUp} loading={loading} onSubmit={handleSubmit(onSubmitForm)}>
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
        title={translate.somethingWentWrong}
        className={
          'text-center text-xs max-w-2xl text-ellipsis overflow-hidden whitespace-nowrap font-bold ' +
          (somethingWentWrongVisible ? '' : 'invisible')
        }
      >
        {somethingWentWrongVisible ? translate.somethingWentWrong : 'error'}
      </p>
    </FormWrapper>
  );
}
