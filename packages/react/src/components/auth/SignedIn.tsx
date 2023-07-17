import type { ReactNode } from "react";
import React from "react";
import { useAuth } from "../../auth/useAuth";
import { isSessionSignedIn } from "../../auth/utils";

/**
 * Renders its `children` if the current `Session` is signed in (has an associated `User`), otherwise renders nothing.
 */
export const SignedIn = (props: { children: ReactNode }) => {
  const { session, user, isSignedIn } = useAuth();
  if (user && isSignedIn && isSessionSignedIn(session)) {
    return <>{props.children}</>;
  } else {
    return null;
  }
};
