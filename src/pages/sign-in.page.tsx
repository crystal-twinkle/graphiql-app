import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInValidationSchema } from '../utils/validation.util';
import { FormInput } from '../components/input/form-input';
import { FormFieldsData } from '../data/form-fields-data';
import { FormWrapper } from '../components/form-wrapper/form-wrapper';

export function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(signInValidationSchema),
  });

  const onSubmitForm = async () => {
    // const validatedForm: ISignInModel = {
    //   email: formData.email,
    //   password: formData.password,
    // };
    // const currentUser = useAppSelector((state) =>
    //   state.user.data.all.find(
    //     (item) => item.email === validatedForm.email && item.password === validatedForm.password
    //   )
    // );
    //
    // if (currentUser) {
    //   dispatch(setCurrentUser(currentUser));
    //   navigate(RouterPage.GQL);
    // }
  };

  return (
    <FormWrapper title="Sign up">
      <form className="form" autoComplete="on" onSubmit={handleSubmit(onSubmitForm)}>
        <FormInput {...FormFieldsData.email} register={register} error={errors.email} />
        <FormInput {...FormFieldsData.password} register={register} error={errors.password} />
        {/*{error && <p className="input-error">{error.message}</p>}*/}
        <button type="submit" className={`bg-pink-400 form-submit ${!isValid ? 'disabled' : ''}`}>
          Submit
        </button>
      </form>
    </FormWrapper>
  );
}
