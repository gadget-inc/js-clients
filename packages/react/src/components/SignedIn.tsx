import type { ReactNode } from "react";
import React from "react";
import { useSession } from "../../src/auth/useSession";
import { isSessionSignedIn } from "../../src/auth/utils";

export const SignedIn = (props: { children: ReactNode }) => {
  const session = useSession();
  if (session && isSessionSignedIn(session)) {
    return <>{props.children}</>;
  } else {
    return null;
  }
};
