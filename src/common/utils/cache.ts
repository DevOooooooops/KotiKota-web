import { Whoami } from '@/provider/client';

const WHOAMI_ITEM = 'whoami';
const TOKEN_ITEM = 'token';
const USER_ITEM = 'user-from-api';

const setItem = (name: string, value: any, ifNull = '') => {
  try {
    localStorage.setItem(name, JSON.stringify(value));
  } catch {
    localStorage.setItem(name, ifNull);
  }
};
const getItem = (name: string, ifNull: any = null) => {
  try {
    return JSON.parse(localStorage.getItem(name) || '');
  } catch {
    return ifNull;
  }
};

export const cache = {
  whoami(value?: Whoami) {
    setItem(WHOAMI_ITEM, value);
  },
  user(value?: Whoami['user']) {
    setItem(USER_ITEM, value);
  },
  token(value = '') {
    localStorage.setItem(TOKEN_ITEM, value);
  },
};

export const getCached = {
  whoami() {
    return getItem(WHOAMI_ITEM) as Whoami;
  },
  user() {
    return getItem(USER_ITEM) as Whoami['user'];
  },
  token() {
    return localStorage.getItem(TOKEN_ITEM);
  },
};
