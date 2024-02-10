'use client';
import { RHFTextInput } from '@/common/components';
import { Button } from '@/common/components/button/Button';
import { PROJECT_PATH } from '@/common/constants/variables';
import { useFetch } from '@/common/hooks';
import { TCrupdateProjectForm, crupdateProjectResolver } from '@/common/resolvers/project-resolver';
import { getCached } from '@/common/utils';
import { TCreateOrUpdateProject, projectProvider } from '@/provider';
import { Project, ProjectHealth, ProjectStatus } from '@/provider/client';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { FaFile, FaHistory, FaMoneyBill, FaPen } from 'react-icons/fa';
import { MdOutlineDescription } from 'react-icons/md';
import { v4 } from 'uuid';

const Page = () => {
  const form = useForm<TCrupdateProjectForm>({ mode: 'all', resolver: crupdateProjectResolver });
  const { fetch, isLoading, error } = useFetch<Project[], TCreateOrUpdateProject>(projectProvider.createOrUpdate);
  const { push } = useRouter();
  const handleSubmit = form.handleSubmit(async data => {
    const userId = getCached.user()?.id;

    if (userId)
      fetch(userId, {
        ...data,
        logo: data.logo.split(',')[1],
        health: ProjectHealth.IN_PROGRESS,
        status: ProjectStatus.OPEN,
        id: v4(),
        ownerId: userId,
      }).then(() => {
        if (!error) {
          push(PROJECT_PATH);
        }
      });
  });

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <FormProvider {...form}>
        <form className='p-7 bg-white rounded-lg' onSubmit={handleSubmit}>
          <h1 className='text-xl'>Create crowdfunding</h1>
          <RHFTextInput className='w-80' name='name' label='Name' startIcon={<FaPen />} />
          <RHFTextInput className='w-80' name='description' label='Description' startIcon={<MdOutlineDescription />} />
          <RHFTextInput className='w-80' type='date' name='deadline' label='Deadline' startIcon={<FaHistory />} />
          <RHFTextInput className='w-80' type='number' name='targetAmount' label='Target amount' startIcon={<FaMoneyBill />} />
          <RHFTextInput className='w-80' type='file' accept='image/*' name='logo' label='Logo' startIcon={<FaFile />} />
          <Button isLoading={isLoading} className='w-80' label='Submit' type='submit' />
        </form>
      </FormProvider>
    </div>
  );
};

export default Page;
