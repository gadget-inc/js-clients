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

const useGetSessionAndUser = () => {
  const api = useApi();
  if("currentSession" in api && "session" in api && "user" in api) {
    return useGet(api.currentSession as any, {
      suspense: true,
      select: {
        ...(api.session as any).findMany.defaultSelection,
        userId: true,
        user: {
            ...(api.user as any).findMany.defaultSelection
        }
      }
    });
  } else {
    throw new Error("api client does not have a Session or User model");
  }
}

export const useSession = (): GadgetSession | undefined => {
  const [{ data: session }] = useGetSessionAndUser();
  return session;
}

export const isSessionSignedOut = (session: GadgetSession) => {
  return session?.userId == undefined;
}

export const isSessionSignedIn = (session: GadgetSession) => {
  return !isSessionSignedOut(session);
}
