/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useFetch } from '@/common/hooks';
import { getColorBy } from '@/common/utils';
import { TGetAllProjects, projectProvider } from '@/provider';
import { Project } from '@/provider/client';
import { useEffect } from 'react';
import { GoSearch } from 'react-icons/go';

const Page = () => {
  const { fetch: fetchProjects, data: projects } = useFetch<Project[], TGetAllProjects>(projectProvider.getAll);

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className='mt-20 p-2 w-full h-[90vh] overflow-x-hidden overflow-y-auto flex justify-start items-start gap-4 flex-wrap'>
      <div className='w-1/3 relative'>
        <input type='text' placeholder='Search book' className='input input-bordered bg-white w-full rounded-full' />
        <span className='absolute active:shadow-sx active:scale-[0.95] cursor-pointer top-1/2 -translate-y-1/2 right-1 text-white bg-secondary p-2 rounded-full shadow-lg'>
          <GoSearch size={24} />
        </span>
      </div>
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
  );
};

export default Page;
