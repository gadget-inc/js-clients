import type { ReactNode} from "react";
import { useContext, useEffect } from "react";
import { GadgetClientContext } from "src/GadgetProvider";
import { useSession, isSessionSignedIn } from "../../src/auth/useSession";

export const SignedInOrRedirect = (props: { children: ReactNode }) => {
  const session = useSession();
  const isSignedIn = session && isSessionSignedIn(session);
  const context = useContext(GadgetClientContext)

  useEffect(() => {
    if (context?.signInPath && !isSignedIn) {
      // TODO: change to provider value
      window.location.href = context.signInPath;
    }
  }, [isSignedIn, context?.signInPath]);

  if (isSignedIn) {
    return props.children;
  } else {
    return null;
  }
}
