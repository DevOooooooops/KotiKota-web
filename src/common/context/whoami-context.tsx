'use client';

import { FC, createContext, useContext, useState } from 'react';
import { IWhoamiContext } from '.';
import { IChildren } from '../components';
import { Whoami } from '@/provider/client';

export const whoamiContext = createContext<IWhoamiContext>({ whoami: {}, setWhoami: () => {} });

export const useWhoami = () => {
  return useContext(whoamiContext);
};

export const WhoamiProvider: FC<IChildren> = ({ children }) => {
  const [whoami, setWhoami] = useState<Whoami>({});
  return <whoamiContext.Provider value={{ whoami, setWhoami }}>{children}</whoamiContext.Provider>;
};
