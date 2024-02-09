'use client';
import { RHFTextInput, RHFPasswordInput } from '@/app/common/components';
import { Button } from '@/app/common/components/button/Button';
import { SIGN_UP_PATH } from '@/app/common/constants/variables';
import { useFetch } from '@/app/common/hooks';
import { TLoginInput, fieldErrorMessages, loginResolver } from '@/app/common/resolvers';
import { TSignIn, authProvider } from '@/app/provider';
import { User } from 'firebase/auth';
import Link from 'next/link';
import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FaUser, FaLock } from 'react-icons/fa6';

const SignIn = () => {
  const form = useForm<TLoginInput>({ mode: 'all', resolver: loginResolver });
  const { isLoading, fetch, error } = useFetch<User, TSignIn>(authProvider.signIn);

  useEffect(() => {
    if (error) {
      form.setError('password', { message: (error.response?.data as any)?.error?.message || fieldErrorMessages.auth_failed });
    }
  }, [error, form]);

  const handleSubmit = form.handleSubmit(({ password, email }) => fetch(email, password));

  return (
    <div>
      <h1 className='text-2xl font-bold mb-7'>Sign In</h1>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit} className='basis-2/3'>
          <RHFTextInput label='Email' name='email' className='pr-10' hideLabel startIcon={<FaUser />} />
          <RHFPasswordInput label='Password' name='password' hideLabel startIcon={<FaLock />} />
          <Button label='Submit' isLoading={isLoading} type='submit' className='w-full btn-primary' />
          <div className='mt-2 flex justify-between'>
            <Link href={SIGN_UP_PATH} className='text-blue-500 hover:text-blue-700 underline'>
              Create account ?
            </Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignIn;
