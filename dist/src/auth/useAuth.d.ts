/**
 * Used for fetching the current authentication state of the session
 * @returns An object with the current authentication state: `session`, `user`, and `isSignedIn`
 */
export declare const useAuth: () => {
    session: import("./useSession").GadgetSession;
    user: import("./useSession").GadgetUser | null;
    isSignedIn: boolean;
};
