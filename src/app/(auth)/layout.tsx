import Image from 'next/image';
import LOGO from '@/assets/kotikota-logo.png';
import BG from '@/assets/bg.png';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{  backgroundImage: `url(${BG.src})`, backgroundSize:'cover'}} className='w-full h-full flex justify-center items-center'>
      <div className='glass w-full h-full sm:w-3/4 lg:w-2/3 xl:w-1/2 sm:h-2/3 relative shadow-lg rounded-2xl p-3 flex justify-around items-center'>
        <div className='absolute md:top-7 top-[12vh] lg:top-0 left-1/2 lg:left-0 lg:-translate-x-0 -translate-x-1/2 lg:basis-1/2 lg:relative flex justify-center items-center'>
          <Image src={LOGO} alt='logo' className='object-contain lg:w-2/3 w-28' />
        </div>
        <div className='basis-full lg:relative lg:basis-1/2 flex justify-center items-center lg:mt-0 mt-16'>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
