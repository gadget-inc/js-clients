/**
 * Returns a callback that will call the configured `signOutActionApiIdentifier` on the `User` model and optionally redirect (by default).
 * @returns The `Promise` to call to execute the `signOut` action. Will automatically redirect to the configured `signInPath` unless the `redirect: false` option is provided.
 */
export declare const useSignOut: (opts?: {
    redirectOnSuccess?: boolean;
    redirectToPath?: string;
}) => () => Promise<void>;
