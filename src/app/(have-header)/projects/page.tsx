/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { ProjectCard, SquareProgress } from '@/common/components';
import { useFetch } from '@/common/hooks';
import { TGetAllProjects, projectProvider } from '@/provider';
import { Project } from '@/provider/client';
import { FormEvent, useEffect, useRef } from 'react';
import { GoSearch } from 'react-icons/go';

const Page = () => {
  const { fetch: fetchProjects, data: projects, isLoading } = useFetch<Project[], TGetAllProjects>(projectProvider.getAll);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSearch = () => {
    if (input.current) {
      fetchProjects(undefined, input.current.value);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <>
      <div className='flex justify-center items-center  mb-4'>
        <form className='w-1/3 relative' onSubmit={handleSubmit}>
          <input ref={input} type='text' placeholder='Search projects' className='input input-bordered bg-white w-full rounded-full' />
          <span
            onClick={handleSearch}
            className='absolute active:shadow-sx active:scale-[0.95] cursor-pointer top-1/2 -translate-y-1/2 right-1 text-white bg-secondary p-2 rounded-full shadow-lg'
          >
            {isLoading ? <SquareProgress size={24} /> : <GoSearch size={24} />}
          </span>
        </form>
      </div>
      <div className='flex justify-center items-start gap-4 flex-wrap'>
        {projects && projects?.length > 0 && projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </>
  );
};

export default Page;
