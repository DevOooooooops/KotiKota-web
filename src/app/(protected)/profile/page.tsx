/* eslint-disable @next/next/no-img-element */
'use client';
import { RHFTextInput } from '@/common/components';
import { fieldMessages } from '@/common/constants';
import { useFetch } from '@/common/hooks';
import { TProfileInput, profileResolver } from '@/common/resolvers/profile-resolver';
import { getCached, renderBase64 } from '@/common/utils';
import { TGetOneProfile, TUpdateProfile, authProvider, userProvider } from '@/provider';
import { User } from '@/provider/client';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FaMailBulk, FaUserCircle } from 'react-icons/fa';

export const Profile = () => {
  const { fetch: getCurrentUser, data, error } = useFetch<User, TGetOneProfile>(userProvider.getOne);
  const form = useForm<TProfileInput>({
    mode: 'all',
    resolver: profileResolver,
  });

  useEffect(() => {
    form.setValue('email', data?.profile?.email || '');
    form.setValue('firstName', data?.profile?.first_name || '');
    form.setValue('lastName', data?.profile?.last_name || '');
    form.setValue('profilePicture', data?.profile?.profile_picture || '');
    form.setValue('birthDate', (data?.profile?.birthdate || '.          .').slice(0, 10));
  }, [data]);

  const { enqueueSnackbar } = useSnackbar();
  const { fetch } = useFetch<string, TUpdateProfile>(userProvider.updateProfile);
  const handleSubmit = form.handleSubmit(({ email, firstName, lastName, profilePicture, birthDate }) =>
    fetch(getCached.user()?.id || '', {
      email,
      first_name: firstName,
      last_name: lastName,
      profile_picture: data?.profile?.profile_picture,
      birthdate: birthDate,
    }).then(() => {
      const userId = getCached.user()?.id;
      if (!error && userId) {
        enqueueSnackbar(fieldMessages.success_profile_update);
        getCurrentUser(userId);
      }
    })
  );

  useEffect(() => {
    authProvider.whoami().then(whoami => {
      getCurrentUser(whoami.user?.id || '');
    });
  }, []);

  return (
    <div className='flex justify-center items-center h-full w-full mt-0'>
      <div>
        <div className='avatar'>
          <div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ml-32 translate-y-11'>
            <img
              src={
                data?.profile?.profile_picture
                  ? renderBase64(data?.profile?.profile_picture)
                  : 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              }
              alt='user profile'
            />
          </div>
        </div>
        {/* <img src={BG} alt="Description of your image" className="w-10 h-10 mb-10" /> */}
        <FormProvider {...form}>
          <form onSubmit={handleSubmit} className='basis-2/3 bg-white p-14 pl-20 pr-20 rounded-lg'>
            <h1 className='text-2xl font-bold mb-75'>Profile</h1>
            <div className='block-container'>
              <div className='flex gap-7'>
                <RHFTextInput label='First name' name='firstName' placeholder='Doe' className='w-full pr-10' startIcon={<FaUserCircle />} />
                <RHFTextInput label='Last name' name='lastName' placeholder='John' className='w-full pr-10' startIcon={<FaUserCircle />} />
              </div>
              <div className='flex gap-7'>
                <RHFTextInput label='Email' name='email' placeholder='example@gmail.com' className='w-full pr-10' startIcon={<FaMailBulk />} />
                <RHFTextInput label='Birthdate' name='birthDate' placeholder='mm-dd-yy' type='date' className='w-full' />
              </div>
              <RHFTextInput label='Profile picture' name='profilePicture' type='file' accept='image/*' className='w-full' />
            </div>
            <button
              onClick={handleSubmit}
              type='button'
              className='bg-green-600 text-white px-6 py-2 rounded font-medium mt-4 hover:bg-green-700 transition duration-200 each-in-out '
            >
              Edit
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Profile;
