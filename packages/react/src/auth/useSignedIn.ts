import { useUser } from "./useUser";

export const useIsSignedIn = () => {
  const user = useUser();
  return !!user;
}
