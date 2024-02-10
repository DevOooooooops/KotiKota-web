'use client';

import LOGO from '@/assets/kotikota-logo-without-circle.png';
import { useFetch } from '@/common/hooks';
import { getColorBy } from '@/common/utils';
import { TGetAllProjects, auth, projectProvider } from '@/provider';
import { Project } from '@/provider/client';
import Image from 'next/image';
import { useEffect } from 'react';
import { GoSearch } from 'react-icons/go';

export default function Home() {
  const { fetch: fetchProjects, data: projects } = useFetch<Project[], TGetAllProjects>(projectProvider.getAll);

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className='w-screen h-screen flex justify-start items-start'>
      <div className='fixed bg-white w-screen h-16 shadow-sm top-0 left-0 flex justify-start items-center'>
        <div className='basis-44'>
          <Image src={LOGO} alt='logo' className='object-contain h-16' />
        </div>
        <div className='grow flex justify-center items-center'>
          <div className='w-1/3 relative'>
            <input type='text' placeholder='Search book' className='input input-bordered bg-white w-full rounded-full' />
            <span className='absolute active:shadow-sx active:scale-[0.95] cursor-pointer top-1/2 -translate-y-1/2 right-1 text-white bg-secondary p-2 rounded-full shadow-lg'>
              <GoSearch size={24} />
            </span>
          </div>
        </div>
        <div className='basis-16 flex justify-start items-start'>
          <div className='avatar online placeholder'>
            <div className='bg-neutral text-neutral-content rounded-full w-14'>
              <span className='text-xl text-white'>AI</span>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20 p-2 w-full h-[90vh] overflow-x-hidden overflow-y-auto flex justify-start items-start gap-4 flex-wrap'>
        {projects &&
          projects?.length > 0 &&
          projects.map(project => (
            <div key={project.id} className='w-96 h-72 m-2 p-4 shadow-base-md rounded-md relative'>
              <div className='flex gap-4'>
                <div className='basis-20'>
                  <div className='avatar placeholder'>
                    <div className='bg-secondary text-neutral-content rounded-lg w-16'>
                      <span className='text-3xl text-white'>{(project.name || '')[0]}</span>
                    </div>
                  </div>
                </div>
                <div className={`mt-5 badge ${getColorBy.projectStatus(project.status)} py-4 px-8 text-black`}>{project.status}</div>
              </div>
              <div>
                <h1 className='text-lg font-semibold'>{project.name}</h1>
                <p className='text-md w-3/4 text-neutral'>{project.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
