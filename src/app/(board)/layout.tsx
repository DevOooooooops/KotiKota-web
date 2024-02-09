import { IChildren } from '@/common/components';
import { FC } from 'react';

export const Layout: FC<IChildren> = ({ children }) => {
  return (
    <>
      <div className='w-full h-full'>{children}</div>
    </>
  );
};

export default Layout;
