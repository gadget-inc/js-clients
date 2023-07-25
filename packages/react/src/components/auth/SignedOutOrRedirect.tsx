import type { ReactNode } from "react";
import React, { useContext, useEffect, useState } from "react";
import { GadgetConfigurationContext } from "../../../src/GadgetProvider";
import { useAuth } from "../../auth/useAuth";

/**
 * Renders its `children` if the current `Session` is signed out, otherwise redirects the browser to the `signOutPath` configured in the `Provider`. Uses `window.location.assign` to perform the redirect.
 */
export const SignedOutOrRedirect = (props: { children: ReactNode }) => {
  const [redirected, setRedirected] = useState(false);

  const { user, isSignedIn } = useAuth();
  const context = useContext(GadgetConfigurationContext);
  const { auth } = context ?? {};

  useEffect(() => {
    if (auth && !redirected && (isSignedIn || user)) {
      setRedirected(true);
      const redirectUrl = new URL(auth.signOutPath, window.location.origin);
      redirectUrl.searchParams.set("redirectTo", window.location.pathname);
      window.location.assign(redirectUrl.toString());
    }
  }, [redirected, isSignedIn, auth]);

  if (!user && !isSignedIn) {
    return <>{props.children}</>;
  } else {
    return null;
  }
};
