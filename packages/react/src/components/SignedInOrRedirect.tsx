import type { ReactNode} from "react";
import { useContext, useEffect } from "react";
import { GadgetProviderContext } from "src/GadgetProvider";
import { useSession, isSessionSignedIn } from "../../src/auth/useSession";

export const SignedInOrRedirect = (props: { children: ReactNode }) => {
  const session = useSession();
  const isSignedIn = session && isSessionSignedIn(session);
  const gadgetProviderProps = useContext(GadgetProviderContext);

  useEffect(() => {
    if (gadgetProviderProps && !isSignedIn) {
      // TODO: change to provider value
      window.location.href = gadgetProviderProps.signInPath;
    }
  }, [isSignedIn]);

  if (isSignedIn) {
    return props.children;
  } else {
    return null;
  }
}
