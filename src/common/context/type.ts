import { Whoami } from '@/provider/client';
import { Dispatch, SetStateAction } from 'react';

export interface IWhoamiContext {
  whoami: Whoami;
  setWhoami: Dispatch<SetStateAction<Whoami>>;
}
