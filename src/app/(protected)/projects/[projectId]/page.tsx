/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from '@/common/components/button/Button';
import { fieldMessages } from '@/common/constants';
import { PROJECT_PATH } from '@/common/constants/variables';
import { useWhoami } from '@/common/context';
import { useFetch } from '@/common/hooks';
import { fieldErrorMessages } from '@/common/resolvers';
import { formatNumber, getCached, getColorBy, renderBase64 } from '@/common/utils';
import { TDonate, TGetOneProject, projectProvider } from '@/provider';
import { Project, ProjectDonation } from '@/provider/client';
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { GiShakingHands } from 'react-icons/gi';

const Page: FC<any> = ({ params }) => {
  const { data, fetch } = useFetch<Project, TGetOneProject>(projectProvider.getOne);
  const [input, setInput] = useState('');
  const { push } = useRouter();
  const { fetch: donate, isLoading: donationLoading } = useFetch<ProjectDonation[], TDonate>(projectProvider.donate);
  const { enqueueSnackbar } = useSnackbar();

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!/[^\d\s\.]/gi.test(value)) {
      setInput(value);
    }
  };

  const handleSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault();

    donate(data?.id || '', { amount: +input.replace(/^\d/g, ''), destination: data?.id, source: getCached.user()?.id })
      .then(() => {
        enqueueSnackbar(fieldMessages.success_donation, { className: 'bg-success' });
        push(PROJECT_PATH);
      })
      .catch(() => {
        enqueueSnackbar(fieldErrorMessages.error, { className: 'bg-error' });
      });
  };

  useEffect(() => {
    fetch(params.projectId);
  }, []);

  return (
    <>
      <div className='flex pt-10 justify-center items-center mx-auto w-[200vh] flex-col h-full'>
        <div className='bg-white w-3/4 lg:w-2/3 lg:h-2/3 h-max rounded-lg py-2 shadow-lg flex justify-center gap-3 items-start flex-col lg:flex-row'>
          {data && (
            <>
              {data.logo && <img src={renderBase64(data.logo)} alt='logo' className=' w-full lg:w-[50%] object-cover h-[45%] lg:h-full p-3' />}
              <div className='basis-[49%] p-5 lg:basis-[49%] h-full'>
                <div className='mb-4'>
                  <div className={`px-4 mr-2 badge-lg badge text-xs ${getColorBy.projectHealth(data.health)}`}>{data.health}</div>
                  <div className={`px-4 mr-2 badge-lg badge text-xs ${getColorBy.projectStatus(data.status)}`}>{data.status}</div>
                </div>
                <h1 className='text-2xl mb-7 font-bold'>{data.name}</h1>
                <div className='w-full  shadow-lg'>
                  <div className=' w-0 lg:w-fit h-fit '>
                    <div className='stat'>
                      <div className='stat-figure text-secondary'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-8 h-8 stroke-current'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z'></path>
                        </svg>
                      </div>
                      <div className='stat-title'>Amount</div>
                      <div className='stat-value text-secondary'>{formatNumber(data.targetAmount)}</div>
                      <div className='stat-desc'>MGA</div>
                    </div>
                  </div>
                </div>
                <p className='max-w-[90%] mt-5 '>{data.description}</p>
                <form className='flex flex-col mt-4 gap-2' onSubmit={handleSubmit}>
                  <input value={input} className='input w-full' disabled={donationLoading} placeholder='10 000' onChange={handlerChange} />
                  <Button
                    onClick={handleSubmit}
                    disabled={input.length === 0}
                    isLoading={donationLoading}
                    label='Give to receive'
                    className='w-full'
                    mt-5
                    icon={<GiShakingHands />}
                  />
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
