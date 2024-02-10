[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex 72b8df5..8b22ec0 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -10,6 +10,7 @@[m
       "dependencies": {[m
         "@hookform/resolvers": "^3.3.4",[m
         "axios": "^1.6.7",[m
[32m+[m[32m        "debounce": "^2.0.0",[m
         "firebase": "^10.8.0",[m
         "next": "14.1.0",[m
         "next-auth": "^4.24.5",[m
[36m@@ -1955,6 +1956,17 @@[m
       "integrity": "sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA==",[m
       "dev": true[m
     },[m
[32m+[m[32m    "node_modules/debounce": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/debounce/-/debounce-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-xRetU6gL1VJbs85Mc4FoEGSjQxzpdxRyFhe3lmWFyy2EzydIcD4xzUvRJMD+NPDfMwKNhxa3PvsIOU32luIWeA==",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=18"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/sponsors/sindresorhus"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/debug": {[m
       "version": "4.3.4",[m
       "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",[m
[1mdiff --git a/package.json b/package.json[m
[1mindex a8e7e9f..77e95a4 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -13,6 +13,7 @@[m
   "dependencies": {[m
     "@hookform/resolvers": "^3.3.4",[m
     "axios": "^1.6.7",[m
[32m+[m[32m    "debounce": "^2.0.0",[m
     "firebase": "^10.8.0",[m
     "next": "14.1.0",[m
     "next-auth": "^4.24.5",[m
[1mdiff --git a/pages/api/auth/[...nextauth].ts b/pages/api/auth/[...nextauth].ts[m
[1mindex 16c42e4..48d2351 100644[m
[1m--- a/pages/api/auth/[...nextauth].ts[m
[1m+++ b/pages/api/auth/[...nextauth].ts[m
[36m@@ -14,12 +14,10 @@[m [mexport const authOptions = {[m
       credentials: {},[m
       async authorize(_credentials): Promise<any> {[m
         const credentials = _credentials as ICredential;[m
[31m-        return await signInWithEmailAndPassword(auth, credentials.email, credentials.password)[m
[31m-          .then(user => user.user)[m
[31m-          .catch(err => {[m
[31m-            console.log(err);[m
[31m-            return null;[m
[31m-          });[m
[32m+[m[32m        return await signInWithEmailAndPassword(auth, credentials.email, credentials.password).catch(err => {[m
[32m+[m[32m          console.log(err);[m
[32m+[m[32m          return null;[m
[32m+[m[32m        });[m
       },[m
     }),[m
   ],[m
[1mdiff --git a/src/common/components/SessionProvider.tsx b/src/common/components/SessionProvider.tsx[m
[1mdeleted file mode 100644[m
[1mindex b5f2cfa..0000000[m
[1m--- a/src/common/components/SessionProvider.tsx[m
[1m+++ /dev/null[m
[36m@@ -1,14 +0,0 @@[m
[31m-'use client';[m
[31m-[m
[31m-import { SessionProvider } from 'next-auth/react';[m
[31m-import { FC } from 'react';[m
[31m-import { IChildren } from '.';[m
[31m-import { SnackbarProvider } from 'notistack';[m
[31m-[m
[31m-export const MainProvider: FC<IChildren> = ({ children }) => {[m
[31m-  return ([m
[31m-    <SessionProvider>[m
[31m-      <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>{children}</SnackbarProvider>[m
[31m-    </SessionProvider>[m
[31m-  );[m
[31m-};[m
[1mdiff --git a/src/common/components/button/Button.tsx b/src/common/components/button/Button.tsx[m
[1mindex 378f1e0..779d2c0 100644[m
[1m--- a/src/common/components/button/Button.tsx[m
[1m+++ b/src/common/components/button/Button.tsx[m
[36m@@ -1,6 +1,7 @@[m
 import { FC, ReactElement, cloneElement } from 'react';[m
 import { BsTriangle } from 'react-icons/bs';[m
 import { TButtonProps } from './type';[m
[32m+[m[32mimport { SquareProgress } from '..';[m
 [m
 export const Button: FC<TButtonProps> = ({ label, className, color = 'primary', icon, isLoading, disabled, ...others }) => {[m
   const buttonColor = `btn-${color}`;[m
[36m@@ -16,7 +17,7 @@[m [mexport const Button: FC<TButtonProps> = ({ label, className, color = 'primary',[m
         {label}[m
         {isLoading && ([m
           <span className='animate-spin'>[m
[31m-            <BsTriangle className={`m-2 -translate-y-[1px] text-${color}`} size={17} />[m
[32m+[m[32m            <SquareProgress size={17} />[m
           </span>[m
         )}[m
       </button>[m
[1mdiff --git a/src/common/components/index.ts b/src/common/components/index.ts[m
[1mindex d860da9..054d14a 100644[m
[1m--- a/src/common/components/index.ts[m
[1m+++ b/src/common/components/index.ts[m
[36m@@ -1,4 +1,5 @@[m
[31m-export * from './SessionProvider';[m
[32m+[m[32mexport * from './MainProvider';[m
[32m+[m[32mexport * from './ProjectCard';[m
[32m+[m[32mexport * from './SquareProgress';[m
 export * from './react-hook-form-inputs';[m
 export * from './types';[m
[31m-export * from './ProjectCard';[m
[1mdiff --git a/src/common/components/types.ts b/src/common/components/types.ts[m
[1mindex 9cd00c3..84ca26c 100644[m
[1m--- a/src/common/components/types.ts[m
[1m+++ b/src/common/components/types.ts[m
[36m@@ -1,5 +1,6 @@[m
 import { Project } from '@/provider/client';[m
 import { ReactNode } from 'react';[m
[32m+[m[32mimport { IconType } from 'react-icons';[m
 [m
 export interface IChildren {[m
   children: ReactNode;[m
[1mdiff --git a/src/common/constants/variables.ts b/src/common/constants/variables.ts[m
[1mindex 2bc0d65..9801100 100644[m
[1m--- a/src/common/constants/variables.ts[m
[1m+++ b/src/common/constants/variables.ts[m
[36m@@ -1,3 +1,4 @@[m
 export const HOME_PATH = '/';[m
[32m+[m[32mexport const PROJECT_PATH = '/projects';[m
 export const SIGN_IN_PATH = '/signin';[m
 export const SIGN_UP_PATH = '/signup';[m
[1mdiff --git a/src/common/utils/index.ts b/src/common/utils/index.ts[m
[1mindex cf18cad..8fb7f5c 100644[m
[1m--- a/src/common/utils/index.ts[m
[1m+++ b/src/common/utils/index.ts[m
[36m@@ -2,3 +2,4 @@[m [mexport * from './colors';[m
 export * from './format-date';[m
 export * from './format-number';[m
 export * from './format-text';[m
[32m+[m[32mexport * from './cache';[m
[1mdiff --git a/src/provider/auth-provider.ts b/src/provider/auth-provider.ts[m
[1mindex ae4f774..e23bcd6 100644[m
[1m--- a/src/provider/auth-provider.ts[m
[1m+++ b/src/provider/auth-provider.ts[m
[36m@@ -2,6 +2,7 @@[m [mimport { createUserWithEmailAndPassword } from 'firebase/auth';[m
 import { auth, securityApi, userProvider } from '.';[m
 import { signIn } from 'next-auth/react';[m
 import { v4 } from 'uuid';[m
[32m+[m[32mimport { cache } from '@/common/utils';[m
 [m
 export const authProvider = {[m
   async signUp(email: string, password: string) {[m
[36m@@ -10,10 +11,11 @@[m [mexport const authProvider = {[m
     return user;[m
   },[m
   async signIn(email: string, password: string) {[m
[31m-    return signIn('credentials', { email, password, redirect: true, callbackUrl: '/' });[m
[32m+[m[32m    return await signIn('credentials', { email, password, redirect: true, callbackUrl: '/success' });[m
   },[m
   async whoami() {[m
     const { data } = await securityApi().whoami();[m
[32m+[m[32m    cache.whoami(data);[m
     return data;[m
   },[m
 };[m
