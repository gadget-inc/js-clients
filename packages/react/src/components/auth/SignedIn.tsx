import type { ReactNode } from "react";
import React from "react";
import { useSession } from "../../auth/useSession";
import { isSessionSignedIn } from "../../auth/utils";

/**
 * Renders its `children` if the current `Session` is signed in (has an associated `User`), otherwise renders nothing.
 */
export const SignedIn = (props: { children: ReactNode }) => {
  const session = useSession();
  if (session.user && isSessionSignedIn(session)) {
    return <>{props.children}</>;
  } else {
    return null;
  }
};
