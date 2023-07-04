import type { ReactNode } from "react";
import { useContext, useEffect, useState } from "react";
import { GadgetClientContext } from "../../src/GadgetProvider";
import { useSession } from "../../src/auth/useSession";
import { isSessionSignedIn } from "../../src/auth/utils";
import React from "react";

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
