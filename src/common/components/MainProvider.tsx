'use client';

import { SessionProvider } from 'next-auth/react';
import { FC } from 'react';
import { IChildren } from '.';
import { SnackbarProvider } from 'notistack';
import { WhoamiProvider } from '../context';

export const MainProvider: FC<IChildren> = ({ children }) => {
  return (
    <WhoamiProvider>
      <SessionProvider>
        <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>{children}</SnackbarProvider>
      </SessionProvider>
    </WhoamiProvider>
  );
};
