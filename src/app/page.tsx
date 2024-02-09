'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
  useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });
  return <div></div>;
}

Home.requireAuth = true;
