'use client';

import { useFetch } from '@/common/hooks';
import { formatNumber, getColorBy } from '@/common/utils';
import { TGetOneProject, projectProvider } from '@/provider';
import { Project } from '@/provider/client';
import { FC, useEffect } from 'react';

const Page: FC<any> = ({ params }) => {
  const { data, fetch } = useFetch<Project, TGetOneProject>(projectProvider.getOne);

  useEffect(() => {
    fetch(params.projectId);
  }, []);

  return (
    <div className='flex justify-center items-center w-full h-full'>
      {
        <div className='w-2/3 h-2/3 rounded-lg shadow-lg flex justify-around items-start'>
          {data && (
            <>
              <div className='basis-0 overflow-hidden lg:basis-[49%] h-full flex justify-center items-start'>
                <div className=' w-0 lg:w-fit h-fit -translate-y-[60%] scale-150 absolute -top-[90%] lg:top-[40%]'>
                  <div className='stat'>
                    <div className='stat-figure text-secondary'>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-8 h-8 stroke-current'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z'></path>
                      </svg>
                    </div>
                    <div className='stat-title'>Amour</div>
                    <div className='stat-value text-secondary'>{formatNumber(data.targetAmount)}</div>
                    <div className='stat-desc'>MGA</div>
                  </div>
                </div>
              </div>
              <div className='basis-full p-5 lg:basis-[49%] h-full'>
                <div className='mb-4'>
                  <div className={`px-4 mr-2 badge-lg badge text-xs ${getColorBy.projectHealth(data.health)}`}>{data.health}</div>
                  <div className={`px-4 mr-2 badge-lg badge text-xs ${getColorBy.projectStatus(data.status)}`}>{data.status}</div>
                </div>
                <h1 className='text-2xl font-bold'>{data.name}</h1>
                <p className='max-w-[90%] mt-5'>{data.description}</p>
              </div>
            </>
          )}
        </div>
      }
    </div>
  );
};

export default Page;
