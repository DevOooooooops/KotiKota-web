'use client';

import { SnackbarProvider } from 'notistack';
import { FC } from 'react';
import { IChildren } from '.';
import { WhoamiProvider } from '../context';

export const MainProvider: FC<IChildren> = ({ children }) => {
  return (
    <WhoamiProvider>
      <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>{children}</SnackbarProvider>
    </WhoamiProvider>
  );
};
