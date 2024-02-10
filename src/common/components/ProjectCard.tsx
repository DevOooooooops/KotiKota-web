'use client';

/* eslint-disable @next/next/no-img-element */
import { FC, useEffect } from 'react';
import { ProjectCardProps } from '.';
import { formatDate, formatNumber, formatText, getColorBy } from '../utils';
import { FaHistory } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { PROJECT_PATH } from '../constants/variables';
import { auth } from '@/provider';

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { push } = useRouter();

  const handleClick = () => {
    push(`${PROJECT_PATH}/${project.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className='cursor-pointer bg-white transition-all duration-100 hover:bg-slate-50 active:shadow-none w-96 h-[23rem] m-2 p-4 shadow-base-md rounded-md relative'
    >
      <div className='flex w-full justify-between items-center'>
        {project.logo ? (
          <div className='avatar'>
            <div className='w-24 rounded-xl'>
              <img alt='user-s-logo' src={`data:image/png;base64,${project.logo}`} />
            </div>
          </div>
        ) : (
          <div className='avatar placeholder'>
            <div className='bg-secondary text-neutral-content rounded-lg w-16'>
              <span className='text-3xl text-white'>{(project.name || '')[0]}</span>
            </div>
          </div>
        )}
        <div>
          <div className='stat'>
            <div className='stat-title'>Amount</div>
            <div className='stat-value'>{formatNumber(project.targetAmount)}</div>
            <div className='stat-desc'>MGA</div>
          </div>
        </div>
      </div>
      <div className='divider'></div>

      <div className='w-full flex mb-2 justify-between items-center'>
        <h1 className='text-lg font-semibold'>{project.name}</h1>
        <div className='flex items-center gap-2 text-neutral'>
          <FaHistory />
          <p className='text-md text-neutral'>{formatDate(project.deadline)}</p>
        </div>
      </div>
      <p className='text-md w-3/4 mt-5 text-neutral'>{formatText(project.description)}</p>
      <div className='absolute bottom-4 right-4'>
        <div className={`px-4 mx-1 badge-lg badge text-xs ${getColorBy.projectHealth(project.health)}`}>{project.health}</div>
        <div className={`px-4 mx-1 badge-lg badge text-xs ${getColorBy.projectStatus(project.status)}`}>{project.status}</div>
      </div>
    </div>
  );
};
