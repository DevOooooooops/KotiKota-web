import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, securityApi, userProvider } from '.';
import { signIn } from 'next-auth/react';
import { v4 } from 'uuid';

export const authProvider = {
  async signUp(email: string, password: string) {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await userProvider.create({ firebaseId: user.user.uid, id: v4() });
    return user;
  },
  async signIn(email: string, password: string) {
    return signIn('credentials', { email, password, redirect: true, callbackUrl: '/' });
  },
  async whoami() {
    const { data } = await securityApi().whoami();
    return data;
  },
};
