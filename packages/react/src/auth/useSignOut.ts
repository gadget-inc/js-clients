import { useCallback, useContext, useEffect } from "react";
import { GadgetConfigurationContext, useApi } from "../../src/GadgetProvider";
import { useAction } from "../../src/useAction";
import { useUser } from "./useUser";

/**
 * Returns a callback that will call the configured `signOutActionApiIdentifier` on the `User` model and optionally redirect (by default).
 * @returns The `Promise` to call to execute the `signOut` action. Will automatically redirect to the configured `signInPath` unless the `redirect: false` option is provided.
 */
export const useSignOut = (opts?: { redirectOnSuccess?: boolean; redirectToPath?: string }) => {
  const redirectOnSuccess = opts?.redirectOnSuccess ?? true;
  const redirectToPath = opts?.redirectToPath;
  const api = useApi();
  const user = useUser();
  const context = useContext(GadgetConfigurationContext);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { signOutActionApiIdentifier, signInPath } = context!.auth;
  if (signOutActionApiIdentifier && (api as any).user[signOutActionApiIdentifier]) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const [{ fetching, error, data }, signOutAction] = useAction((api as any).user[signOutActionApiIdentifier]);
    useEffect(() => {
      if (!user || fetching) return;

      if (error) throw error;
      else if (redirectOnSuccess && data) {
        const redirectUrl = new URL(redirectToPath ?? signInPath, window.location.origin);
        window.location.assign(redirectUrl.toString());
      }
    }, [data, fetching, error, redirectToPath, redirectOnSuccess, signInPath, signOutAction, user]);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return useCallback(async () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      await signOutAction({ id: user!.id });
    }, [user, signOutAction]);
  } else {
    throw new Error(`missing configured signOutActionApiIdentifier '${signOutActionApiIdentifier}' on the \`api.user\` model manager.`);
  }
};
