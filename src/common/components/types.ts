import { Project } from '@/provider/client';
import { ReactNode } from 'react';

export interface IChildren {
  children: ReactNode;
}

export interface ProjectCardProps {
  project: Project;
}
