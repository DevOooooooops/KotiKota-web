'use client';

import { SIGN_IN_PATH } from '@/common/constants/variables';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
  useSession({
    required: true,
    onUnauthenticated() {
      redirect(SIGN_IN_PATH);
    },
  });

  return <div className='w-screen h-screen flex justify-start items-start'></div>;
}

Home.requiredAuth = true;
