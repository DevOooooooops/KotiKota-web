"use client";

import { SessionProvider as Provider } from "next-auth/react";
import { FC } from "react";
import { IChildren } from ".";

export const SessionProvider: FC<IChildren> = ({ children }) => {
  return <Provider>{children}</Provider>;
};
