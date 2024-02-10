'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import { SquareProgress } from '@/common/components';
import { PROJECT_PATH, SIGN_IN_PATH } from '@/common/constants/variables';
import { useWhoami } from '@/common/context';
import { authProvider } from '@/provider';
import debounce from 'debounce';
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import { useEffect, useMemo } from 'react';

const Page = () => {
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { setWhoami } = useWhoami();

  const notify = useMemo(() => debounce(() => enqueueSnackbar("Une erreur s'est produite!", { className: 'bg-error text-white' }), 200), []);

  useEffect(() => {
    setTimeout(() => {
      authProvider
        .whoami()
        .then(whoami => {
          setWhoami(whoami);
          push(PROJECT_PATH);
        })
        .catch(() => {
          notify();
          push(SIGN_IN_PATH);
        });
    }, 1000);
  }, []);

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <SquareProgress />
    </div>
  );
};

export default Page;
