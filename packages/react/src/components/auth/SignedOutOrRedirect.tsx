import type { ReactNode } from "react";
import React, { useContext, useEffect, useState } from "react";
import { GadgetConfigurationContext } from "../../../src/GadgetProvider";
import { useAuth } from "../../auth/useAuth";

/**
 * Renders its `children` if the current `Session` is signed out, otherwise redirects the browser to the `path` prop. Uses `window.location.assign` to perform the redirect.
 */
export const SignedOutOrRedirect = (props: { path: string, children: ReactNode }) => {
  const [redirected, setRedirected] = useState(false);
  const { path, children } = props;

  const { user, isSignedIn } = useAuth();
  const context = useContext(GadgetConfigurationContext);
  const { auth } = context ?? {};

  useEffect(() => {
    if (auth && !redirected && (isSignedIn || user)) {
      setRedirected(true);
      const redirectUrl = new URL(path, window.location.origin);
      window.location.assign(redirectUrl.toString());
    }
  }, [redirected, isSignedIn, auth, path, user]);

  if (!user && !isSignedIn) {
    return <>{children}</>;
  } else {
    return null;
  }
};
