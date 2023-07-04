import type { ReactNode } from "react";
import { useSession } from "../../src/auth/useSession";
import { isSessionSignedOut } from "../../src/auth/utils";
import React from "react";

export const SignedOut = (props: { children: ReactNode }) => {
  const session = useSession();
  if (!session || isSessionSignedOut(session)) {
    return <>{props.children}</>;
  } else {
    return null;
  }
};
