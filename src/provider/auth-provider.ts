import { cache } from '@/common/utils';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { v4 } from 'uuid';
import { auth, securityApi, userProvider } from '.';

export const authProvider = {
  async signUp(email: string, password: string) {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await userProvider.create({ firebaseId: user.user.uid, id: v4() });
    user.user.getIdToken().then(cache.token);
    return user;
  },
  async signIn(email: string, password: string) {
    const user = await signInWithEmailAndPassword(auth, email, password);
    user.user.getIdToken().then(cache.token);
    return user;
  },
  async whoami() {
    const { data } = await securityApi().whoami();
    cache.whoami(data);
    return data;
  },
};
