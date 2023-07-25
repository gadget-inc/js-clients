import { useCallback, useContext } from "react";
import { GadgetConfigurationContext, useConnection } from "../../src/GadgetProvider";

/**
 * Returns a callback that will POST to the configured `signOutPath` on the `Provider`, and then redirect the user to the returned URL.
 * @returns The callback to sign out the `User`
 */
export const useSignOut = () => {
  const connection = useConnection();
  const context = useContext(GadgetConfigurationContext);
  const signOutPath = context?.auth.signOutPath;

  return useCallback(async () => {
    if (connection && signOutPath) {
      const res = await connection.fetch(signOutPath, { method: "POST" });
      const redirectUrl = res.headers.get("location") ?? new URL("/", window.location.origin);
      window.location.assign(redirectUrl);
    }
  }, [connection, signOutPath]);
};
