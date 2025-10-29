import type { ReactNode } from "react";
import React, { useContext, useEffect, useRef } from "react";
import { GadgetApiContext } from "../GadgetProvider.js";
import { useAuth } from "./useAuth.js";
import { windowNavigate } from "./utils.js";

/**
 * Renders its `children` if the current `Session` is signed in, otherwise redirects the browser to the `signInPath` configured in the `Provider`. Uses `window.location.assign` to perform the redirect.
 */
export const SignedInOrRedirect = (props: { path?: string; children: ReactNode }) => {
  const redirected = useRef(false);

  const { user, isSignedIn } = useAuth();
  const context = useContext(GadgetApiContext);
  const { auth } = context ?? {};

  useEffect(() => {
    if (auth && !redirected.current && (!isSignedIn || !user)) {
      redirected.current = true;
      const redirectPath = props.path ?? auth.signInPath;
      const redirectUrl = new URL(redirectPath, window.location.origin);
      redirectUrl.searchParams.set("redirectTo", window.location.pathname);

      const navigate = context?.navigate ?? windowNavigate;
      navigate(`${redirectUrl.pathname}${redirectUrl.search}`);
    }
  }, [props.path, isSignedIn, auth, user, context?.navigate]);

  if (user && isSignedIn) {
    return <>{props.children}</>;
  } else {
    return null;
  }
};
