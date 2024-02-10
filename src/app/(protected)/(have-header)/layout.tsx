'use client';
import LOGO from '@/assets/kotikota-logo-without-circle.png';
import { IChildren } from '@/common/components';
import { PROFILE_PATH } from '@/common/constants/variables';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

const Layout: FC<IChildren> = ({ children }) => {
  const { push } = useRouter();

  return (
    <div className='w-screen h-screen flex justify-start items-start'>
      <div className='fixed bg-white w-screen h-16 shadow-sm top-0 left-0 flex justify-start items-center'>
        <div className='basis-44'>
          <Image src={LOGO} alt='logo' className='object-contain h-16' />
        </div>
        <div className='grow flex justify-center items-center'></div>
        <div style={{cursor: 'pointer'}} onClick={() => push(PROFILE_PATH)} className='basis-16 flex justify-start items-start'>
          <div className='avatar online placeholder'>
            <div className='bg-neutral text-neutral-content rounded-full w-14'>
              <span className='text-xl text-white'>AI</span>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20 p-2 w-full h-[90vh] overflow-x-hidden overflow-y-auto'>{children}</div>
    </div>
  );
};

export default Layout;
