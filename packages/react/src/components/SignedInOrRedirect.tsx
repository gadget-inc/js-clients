import type { ReactNode } from "react";
import React, { useContext, useEffect, useState } from "react";
import { GadgetClientContext } from "../../src/GadgetProvider";
import { useSession } from "../../src/auth/useSession";
import { isSessionSignedIn } from "../../src/auth/utils";

/**
/**
 * Renders its `children` if the current `Session` is signed in, otherwise redirects the browser to the `signInPath` configured in the `Provider`. Uses `window.location.assign` to perform the redirect.
 */
export const SignedInOrRedirect = (props: { children: ReactNode }) => {
  const [redirected, setRedirected] = useState(false);
  const session = useSession();
  const isSignedIn = session && isSessionSignedIn(session);
  const context = useContext(GadgetClientContext);

  useEffect(() => {
    if (context?.signInPath && !redirected && !isSignedIn) {
      setRedirected(true);
      window.location.assign(context.signInPath);
    }
  }, [redirected, isSignedIn, context?.signInPath]);

  if (isSignedIn) {
    return <>{props.children}</>;
  } else {
    return null;
  }
};
