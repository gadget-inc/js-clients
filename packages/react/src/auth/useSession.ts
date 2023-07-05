import { useApi } from "../../src/GadgetProvider";
import { useGet } from "../../src/useGet";

export interface GadgetSession {
  id: string;
  userId: string | null;
  user: GadgetUser | null;
  [key: string]: any;
}

export interface GadgetUser {
  id: string;
  [key: string]: any;
}

/**
 * Used for fetching the current `Session` record from Gadget. Will suspend while the user is being fetched.
 * @returns The current session
 */
export const useSession = (): GadgetSession => {
  const api = useApi();
  if ("currentSession" in api && "session" in api && "user" in api) {
    const [{ data: session, error }] = useGet(api.currentSession as any, {
      suspense: true,
      select: {
        ...(api.session as any).findMany.defaultSelection,
        userId: true,
        user: {
          ...(api.user as any).findMany.defaultSelection,
        },
      },
    });
    if (error) throw error;
    if (!session) throw new Error("currentSession not found but should be present");
    return session;
  } else {
    throw new Error("api client does not have a Session or User model");
  }
};
