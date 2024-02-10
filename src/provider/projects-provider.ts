import { projectsApi } from '.';
import { Project, ProjectStatus, ProjectHealth, CreateProjectDonation } from './client';

export const projectProvider = {
  async getAll(ownerId?: string, name?: string, status?: ProjectStatus, health?: ProjectHealth, page?: number, pageSize?: number) {
    const { data } = await projectsApi().getAllProjects(ownerId, name, status, health, page, pageSize);
    return data;
  },
  async createOrUpdate(userId: string, project: Project) {
    const { data } = await projectsApi().crupdateProjects(userId, [project]);
    return data;
  },
  async getOne(projectId: string) {
    const { data } = await projectsApi().getProjectById(projectId);
    return data;
  },
  async donate(projectId: string, createProjectDonation: CreateProjectDonation) {
    const { data } = await projectsApi().donate(projectId, [createProjectDonation]);
    return data;
  },
};
