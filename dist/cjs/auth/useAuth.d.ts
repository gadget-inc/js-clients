/**
 * Used for fetching the current authentication state of the session
 * @returns An object with the current authentication state: `session`, `user`, and `isSignedIn`
 */
export declare const useAuth: () => {
    session: import("./useSession.js").GadgetSession;
    user: import("./useSession.js").GadgetUser | null;
    isSignedIn: boolean;
};
