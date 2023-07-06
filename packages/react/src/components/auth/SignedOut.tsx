import type { ReactNode } from "react";
import React from "react";
import { useSession } from "../../../src/auth/useSession";
import { isSessionSignedOut } from "../../../src/auth/utils";

/**
 * Renders its `children` if the current `Session` is signed out (no associated `User`), otherwise renders nothing.
 */
export const SignedOut = (props: { children: ReactNode }) => {
  const session = useSession();
  if (!session || isSessionSignedOut(session)) {
    return <>{props.children}</>;
  } else {
    return null;
  }
};
