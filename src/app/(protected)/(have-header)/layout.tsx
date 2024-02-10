'use client';
import LOGO from '@/assets/kotikota-logo-without-circle.png';
import { IChildren } from '@/common/components';
import { PROFILE_PATH, SIGN_IN_PATH } from '@/common/constants/variables';
import { auth } from '@/provider';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { FaBusinessTime } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { FcBusiness } from 'react-icons/fc';
const Layout: FC<IChildren> = ({ children }) => {
  const { push } = useRouter();

  return (
    <div className='w-screen h-screen flex justify-start items-start'>
      <div className='fixed bg-white w-screen h-16 shadow-sm top-0 left-0 flex justify-start items-center'>
        <div className='basis-44'>
          <Image src={LOGO} alt='logo' className='object-contain h-16' />
        </div>
        <div className='grow flex justify-center items-center'>
            <Link href={"/chat"} className='hover:text-blue-700 mr-28  text-center'>
               Message
            </Link>
            
            <Link href={"/projects/crete"} className='hover:text-blue-700 mr-24  text-center'>
               Create project
            </Link>

             <Link href={"/projects"} className='hover:text-blue-700  text-center'>
               Projects
            </Link>

        </div>
        <Link href={SIGN_IN_PATH} className='hover:text-blue-700  text-center'>
                Log out
        </Link>
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
