import { projectsApi } from '.';
import { Project } from './client';

export const projectProvider = {
  async getAll(ownerId?: string, page?: number, perPage?: number) {
    const { data } = await projectsApi().getAllProjects(ownerId, page, perPage);
    return data;
  },
  async createOrUpdate(project: Project) {
    const { data } = await projectsApi().crupdateProjects([project]);
    return data;
  },
  async getOne(projectId: string) {
    const { data } = await projectsApi().getProjectById(projectId);
    return data;
  },
};
