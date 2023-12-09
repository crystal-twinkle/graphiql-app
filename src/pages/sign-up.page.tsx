import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/store';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpValidationSchema } from '../utils/validation.util';
import { FormInput } from '../components/input/form-input';
import { FormFieldsData } from '../data/form-fields-data';
import { RouterPage } from '../router';
import { AppFields, IUser } from '../models/common.model';
import { v4 as uuidv4 } from 'uuid';
import { addUser, setCurrentUser } from '../store/user-slice';
import { FormWrapper } from '../components/form-wrapper/form-wrapper';

export function SignUpPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signUpValidationSchema),
  });

  const onSubmitForm = async (formData: AppFields) => {
    const validatedForm: IUser = {
      id: uuidv4(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };
    dispatch(addUser(validatedForm));
    dispatch(setCurrentUser(validatedForm));
    navigate(RouterPage.GQL);
  };

  return (
    <FormWrapper title="Sign up">
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

        <button type="submit" className={`bg-pink-400 form-submit ${!isValid ? 'disabled' : ''}`}>
          Submit
        </button>
      </form>
    </FormWrapper>
  );
}
