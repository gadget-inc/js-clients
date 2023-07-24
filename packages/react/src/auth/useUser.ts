import { useApi } from "../GadgetProvider.js";
import { useSession } from "./useSession.js";

/**
 * Used for fetching the current `User` record from Gadget. Will return `null` if the session is unauthenticated. Will suspend while the user is being fetched.
 * @returns The current user associated with the session or `null`.
 */
export const useUser = () => {
  const api = useApi();
  if (!("user" in api)) {
    throw new Error("api client does not have a User model");
  }
  const session = useSession();
  return session && session.user;
};
