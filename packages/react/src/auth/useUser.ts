import { useSession } from "./useSession";

/**
 * Used for fetching the current `User` record from Gadget. Will return `null` if the session is unauthenticated. Will suspend while the user is being fetched.
 * @returns The current user associated with the session or `null`.
 */
export const useUser = () => {
  const session = useSession();
  return session && session.user;
};
