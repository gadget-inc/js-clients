export interface GadgetSession {
    id: string;
    userId: string | null;
    user: GadgetUser | null;
    [key: string]: any;
}
export interface GadgetUser {
    id: string;
    [key: string]: any;
}
/**
 * Used for fetching the current `Session` record from Gadget. Will suspend while the user is being fetched.
 * @returns The current session
 */
export declare const useSession: () => GadgetSession;
