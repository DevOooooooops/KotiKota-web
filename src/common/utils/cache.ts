import { Whoami } from '@/provider/client';

const WHOAMI_ITEM = 'whoami';
const TOKEN_ITEM = 'token';

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
  token(value = '') {
    localStorage.setItem(TOKEN_ITEM, value);
  },
};

export const getCached = {
  whoami() {
    return getItem(WHOAMI_ITEM);
  },
  token() {
    return localStorage.getItem(TOKEN_ITEM);
  },
};
