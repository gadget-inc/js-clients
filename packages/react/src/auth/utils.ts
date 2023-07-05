import type { GadgetSession } from "./useSession";

export const isSessionSignedOut = (session: GadgetSession) => {
  return !session?.userId;
};

export const isSessionSignedIn = (session: GadgetSession) => {
  return !isSessionSignedOut(session);
};
