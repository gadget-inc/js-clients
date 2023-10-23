import type { GadgetSession } from "./useSession.js";

export const isSessionSignedOut = (session: GadgetSession) => {
  return !session?.user?.id;
};

export const isSessionSignedIn = (session: GadgetSession) => {
  return !isSessionSignedOut(session);
};

export function windowNavigate(path: string) {
  return window.location.assign(path);
}
