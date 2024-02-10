import { Project } from '@/provider/client';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface IChildren {
  children: ReactNode;
}

export interface ProjectCardProps {
  project: Project;
}
