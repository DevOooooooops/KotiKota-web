'use client';
import { RHFPasswordInput, RHFTextInput } from '@/app/common/components';
import { Button } from '@/app/common/components/button/Button';
import { fieldMessages } from '@/app/common/constants';
import { SIGN_IN_PATH } from '@/app/common/constants/variables';
import { useFetch } from '@/app/common/hooks';
import { signUpResolver } from '@/app/common/resolvers';
import { TSignUp, authProvider } from '@/app/provider';
import { User } from 'firebase/auth';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FaLock, FaMailBulk } from 'react-icons/fa';

export const SignUp = () => {
  const form = useForm({ mode: 'all', resolver: signUpResolver });
  const { isLoading, fetch, error } = useFetch<User, TSignUp>(authProvider.signUp);
  const { enqueueSnackbar } = useSnackbar();
  const { push } = useRouter();

  useEffect(() => {
    if (error) {
      form.setError('password', { message: (error.response?.data as any)?.error?.message });
    }
  }, [error, form]);

  const handleSubmit = form.handleSubmit(({ password, email }) =>
    fetch(email, password).then(() => {
      enqueueSnackbar(fieldMessages.success_signup);
      push(SIGN_IN_PATH);
    })
  );
  return (
    <div>
      <h1 className='text-2xl font-bold mb-7'>Sign Up</h1>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit} className='basis-2/3'>
          <RHFTextInput label='Email' name='email' className='pr-10' hideLabel startIcon={<FaMailBulk />} />
          <RHFPasswordInput label='Password' name='password' hideLabel startIcon={<FaLock />} />
          <RHFPasswordInput label='Confirm password' name='confirmPassword' hideLabel startIcon={<FaLock />} />
          <Button label='Submit' isLoading={isLoading} type='submit' className='w-full text-white' />
          <div className='mt-2'>
            <Link href={SIGN_IN_PATH} className='text-blue-500 hover:text-blue-700 underline'>
              Already have account ?
            </Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignUp;
