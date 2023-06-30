import type { GadgetSession } from "./useSession";

export const isSessionSignedOut = (session: GadgetSession) => {
  return session?.userId == undefined;
};

export const isSessionSignedIn = (session: GadgetSession) => {
  return !isSessionSignedOut(session);
};
