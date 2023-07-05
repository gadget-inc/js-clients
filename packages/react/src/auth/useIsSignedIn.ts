import { useUser } from "./useUser";

/**
 * Used for determining if the current `Session` has a user `User` associated with it (is signed in). Will suspend while the session is being fetched.
 * @returns `true` if the `Session` has a `User`, `false` otherwise.
 */
export const useIsSignedIn = () => {
  const user = useUser();
  return !!user;
};
