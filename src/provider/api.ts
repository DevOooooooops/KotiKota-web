import { auth } from '.';
import { Configuration, ProjectsApi, SecurityApi, UsersApi } from './client';

const getConfig = () => new Configuration({ accessToken: auth.currentUser?.getIdToken(true) });

export const usersApi = () => new UsersApi(getConfig());
export const projectsApi = () => new ProjectsApi(getConfig());
export const securityApi = () => new SecurityApi(getConfig());
