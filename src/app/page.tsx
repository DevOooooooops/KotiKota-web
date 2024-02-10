/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Loading } from '@/common/components';
import { PROJECT_PATH, SIGN_IN_PATH } from '@/common/constants/variables';
import { getCached } from '@/common/utils';
import { auth } from '@/provider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { push } = useRouter();

  useEffect(() => {
    const token = getCached.token();
    if (!token || token?.length === 0) {
      push(SIGN_IN_PATH);
    } else {
      push(PROJECT_PATH);
    }
  }, []);

  return <Loading />;
}
