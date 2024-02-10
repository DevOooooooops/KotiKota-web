import { Whoami } from '@/provider/client';

const WHOAMI_ITEM = 'whoami';

const setItem = (name: string, value: any, ifNull = '') => {
  try {
    localStorage.setItem(name, value);
  } catch {
    localStorage.setItem(name, ifNull);
  }
};
const getItem = (name: string, ifNull: any = null) => {
  try {
    return JSON.parse(localStorage.get(name));
  } catch {
    return ifNull;
  }
};

export const cache = {
  whoami(value?: Whoami) {
    setItem(WHOAMI_ITEM, value);
  },
};

export const getCached = {
  whoami() {
    getItem(WHOAMI_ITEM);
  },
};
