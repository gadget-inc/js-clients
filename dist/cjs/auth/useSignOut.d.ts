/**
 * Returns a callback that will call the configured `signOutActionApiIdentifier` on the `User` model and optionally redirect (by default). Throws an `error` if one occurs while performing the `signOut` action, or if the `User` is not signed in.
 * @param opts - `redirectOnSuccess` defaults to `true` and will redirect the browser via `window.location.assign` if the sign out action is successful. Setting it to `false` will call the action but will not return. Defaults to `true`.
 * @param opts - `redirectToPath` defaults to the `signInPath` configured in the `GadgetConfigurationContext` and will be used as the redirect path if `redirectOnSuccess` is `true`.
 */
export declare const useSignOut: (opts?: {
    redirectOnSuccess?: boolean;
    redirectToPath?: string;
}) => () => Promise<void>;
