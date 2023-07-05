import { useSession } from "./useSession";
import { useUser } from "./useUser";

/**
 * Used for fetching the current authentication state of the session
 * @returns An object with the current authentication state: `session`, `user`, and `isSignedIn`
 */
export const useAuth = () => {
  const session = useSession();
  const user = useUser();
  return { session, user, isSignedIn: !!user };
};
