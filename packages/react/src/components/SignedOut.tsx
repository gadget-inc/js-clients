import type { ReactNode } from "react";
import { isSessionSignedOut, useSession } from "../../src/auth/useSession";

export const SignedOUt = (props: { children: ReactNode}) => {
  const session = useSession();
  if (!session || isSessionSignedOut(session)) {
    return props.children;
  } else {
    return null;
  }
}
