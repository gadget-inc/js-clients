import { useApi } from "../GadgetProvider.js";
import { useSession } from "./useSession.js";
/**
 * Used for fetching the current `User` record from Gadget. Will return `null` if the session is unauthenticated. Will suspend while the user is being fetched.
 * @returns The current user associated with the session or `null`.
 */
export function useUser(client, options) {
    const fallbackApi = useApi();
    const api = client ?? fallbackApi;
    if (!("user" in api)) {
        throw new Error("api client does not have a User model");
    }
    const { select, ...baseOpts } = options ?? {};
    const opts = {
        suspense: true,
        ...baseOpts,
    };
    if (select) {
        opts.select = {
            user: select,
        };
    }
    const session = useSession(api, opts);
    return session && session.getField("user");
}
//# sourceMappingURL=useUser.js.map