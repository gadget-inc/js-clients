/**
 * Returns a callback that will POST to the configured `signOutPath` on the `Provider`, and then redirect the user to the returned URL.
 * @returns The callback to sign out the `User`
 */
export declare const useSignOut: () => () => Promise<import("../utils").ActionHookState<import("@gadgetinc/api-client-core").GadgetRecordImplementation<{}[] | null> & {}[], any>>;
