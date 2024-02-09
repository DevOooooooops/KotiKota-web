'use client';

import { auth } from '@/provider';
import { useState } from 'react';

export default function Home() {
  const [sideBar, setSideBar] = useState(false);

  const handleToggleSideBar = () => setSideBar(e => !e);

  auth.currentUser?.getIdToken().then(console.log);

  return <div className='w-screen h-screen flex justify-start items-start'></div>;
}
