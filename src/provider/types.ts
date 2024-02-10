import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authProvider, projectProvider } from '.';

export type TSignIn = typeof authProvider.signIn;
export type TSignUp = typeof authProvider.signUp;

export type TGetAllProjects = typeof projectProvider.getAll;
export type TGetOneProject = typeof projectProvider.getOne;
export type TCreateOrUpdateProject = typeof projectProvider.createOrUpdate;
