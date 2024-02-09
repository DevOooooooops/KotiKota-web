import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authProvider } from '.';

export type TSignIn = typeof authProvider.signIn;
export type TSignUp = typeof authProvider.signUp;
