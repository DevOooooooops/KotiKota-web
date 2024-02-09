import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '.';
import { signIn } from 'next-auth/react';

export const authProvider = {
  async signUp(email: string, password: string) {
    const user = createUserWithEmailAndPassword(auth, email, password);
    return user;
  },
  async signIn(email: string, password: string) {
    return signIn('credentials', { email, password, redirect: true, callbackUrl: '/' });
  },
};