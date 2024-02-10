'use client';
import { RHFTextInput } from '@/common/components';
import { fieldMessages } from '@/common/constants';
import { TUpdateProfile, userProvider } from '@/provider';
import { useSnackbar } from 'notistack';
import { FormProvider, useForm } from 'react-hook-form';
import { FaMailBulk, FaUserCircle } from 'react-icons/fa';
import { v4 } from 'uuid';
import { useFetch } from '@/common/hooks';

export const Profile = () => {
  const form = useForm({ mode: 'all' });
  const { enqueueSnackbar } = useSnackbar();
  const { fetch } = useFetch<string, TUpdateProfile>(userProvider.updateProfile);
  const handleSubmit = form.handleSubmit(({ email, firstname, lastname }) =>
    fetch(v4(), { email, first_name: firstname, last_name: lastname }).then(() => {
      enqueueSnackbar(fieldMessages.success_profile_update);
    })
  );

  return (
    <div className='flex justify-center items-center h-full w-full mt-0'>
      <div>
        <div className='avatar'>
          <div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ml-32 translate-y-11'>
            <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
          </div>
        </div>
        {/* <img src={BG} alt="Description of your image" className="w-10 h-10 mb-10" /> */}
        <FormProvider {...form}>
          <form onSubmit={handleSubmit} className='basis-2/3 bg-white p-14 pl-20 pr-20 rounded-lg'>
            <h1 className='text-2xl font-bold mb-75'>Profile</h1>
            <div className='block-container'>
              <div className='flex gap-7'>
                <RHFTextInput label='Firstname' name='firstname' placeholder='First name' className='w-full pr-10' startIcon={<FaUserCircle />} />
                <RHFTextInput label='Lastname' name='lastname' placeholder='Last name' className='w-full pr-10' startIcon={<FaUserCircle />} />
              </div>
              <div className='flex gap-7'>
                <RHFTextInput label='Email' name='email' placeholder='Email' className='w-full pr-10' startIcon={<FaMailBulk />} />
                <RHFTextInput label='Birthdate' name='birthdate' placeholder='Birthdate' type='date' className='w-full' />
              </div>
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
