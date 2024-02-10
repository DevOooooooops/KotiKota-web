import { auth } from '@/provider';
import { signInWithEmailAndPassword } from 'firebase/auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { ICredential } from './type';

export const authOptions = {
  pages: {
    signIn: '/signIn',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(_credentials): Promise<any> {
        const credentials = _credentials as ICredential;
        return await signInWithEmailAndPassword(auth, credentials.email, credentials.password).catch(err => {
          console.log(err);
          return null;
        });
      },
    }),
  ],
};

export default NextAuth(authOptions);
