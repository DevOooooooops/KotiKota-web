'use client';

import LOGO from '@/assets/kotikota-logo-without-circle.png';
import { auth } from '@/provider';
import Image from 'next/image';
import { GoSearch } from 'react-icons/go';

export default function Home() {
  auth.currentUser?.getIdToken().then(console.log);

  return (
    <div className='w-screen h-screen flex justify-start items-start'>
      <div className='fixed bg-white w-screen h-16 shadow-sm top-0 left-0 flex justify-start items-center'>
        <div className='basis-44'>
          <Image src={LOGO} alt='logo' className='object-contain h-16' />
        </div>
        <div className='grow flex justify-center items-center'>
          <div className='w-1/3 relative'>
            <input type='text' placeholder='Search book' className='input input-bordered bg-white w-full rounded-full' />
            <span className='absolute active:shadow-sx active:scale-[0.95] cursor-pointer top-1/2 -translate-y-1/2 right-1 text-white bg-secondary p-2 rounded-full shadow-lg'>
              <GoSearch size={24} />
            </span>
          </div>
        </div>
        <div className='basis-16 flex justify-start items-start'>
          <div className='avatar online placeholder'>
            <div className='bg-neutral text-neutral-content rounded-full w-14'>
              <span className='text-xl text-white'>AI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
