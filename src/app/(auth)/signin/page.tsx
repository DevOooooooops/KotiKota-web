'use client';
import { RHFPasswordInput, RHFTextInput } from '@/common/components';
import { Button } from '@/common/components/button/Button';
import { PROJECT_PATH, SIGN_UP_PATH } from '@/common/constants/variables';
import { useFetch } from '@/common/hooks';
import { TLoginInput, fieldErrorMessages, loginResolver } from '@/common/resolvers';
import { TSignIn, authProvider } from '@/provider';
import { User } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FaLock, FaUser } from 'react-icons/fa6';

const SignIn = () => {
  const form = useForm<TLoginInput>({ mode: 'all', resolver: loginResolver });
  const { isLoading, fetch, error } = useFetch<User, TSignIn>(authProvider.signIn);
  const { push } = useRouter();

  useEffect(() => {
    if (error) {
      form.setError('password', { message: (error.response?.data as any)?.error?.message || fieldErrorMessages.auth_failed });
    }
  }, [error, form]);

  const handleSubmit = form.handleSubmit(({ password, email }) =>
    fetch(email, password)
      .then(() => push(PROJECT_PATH))
      .catch(() => push(PROJECT_PATH))
  );
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
