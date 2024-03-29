import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authProvider, projectProvider, userProvider } from '.';

export type TSignIn = typeof authProvider.signIn;
export type TSignUp = typeof authProvider.signUp;

export type TGetAllProjects = typeof projectProvider.getAll;
export type TGetOneProject = typeof projectProvider.getOne;
export type TCreateOrUpdateProject = typeof projectProvider.createOrUpdate;
export type TDonate = typeof projectProvider.donate;

export type TUpdateProfile = typeof userProvider.updateProfile;
export type TGetAllUsers = typeof userProvider.getAll;
export type TGetOneProfile = typeof userProvider.getOne;
