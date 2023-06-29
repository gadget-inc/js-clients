import type { ReactNode } from "react";
import { isSessionSignedIn, useSession } from "../../src/auth/useSession";

export const SignedIn = (props: { children: ReactNode}) => {
  const session = useSession();
  if (session && isSessionSignedIn(session)) {
    return props.children;
  } else {
    return null;
  }
}
