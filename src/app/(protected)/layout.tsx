/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { IChildren, Loading } from '@/common/components';
import { SIGN_IN_PATH } from '@/common/constants/variables';
import { getCached } from '@/common/utils';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

const Layout: FC<IChildren> = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const { push } = useRouter();

  useEffect(() => {
    const token = getCached.token();
    if (token) {
      setLoading(false);
    } else {
      push(SIGN_IN_PATH);
    }
  }, []);

  return isLoading ? <Loading /> : children;
};

export default Layout;
