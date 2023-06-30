import { useSession } from "./useSession";

export const useUser = () => {
  const session = useSession();
  return session && session.user;
};
