import { useApi } from "../GadgetProvider.js";
import { useGet } from "../useGet.js";
/**
 * Used for fetching the current `Session` record from Gadget. Will suspend while the user is being fetched.
 * @returns The current session
 */
export function useSession(client, options) {
    const fallbackApi = useApi();
    const api = client ?? fallbackApi;
    if (api && "currentSession" in api && "session" in api) {
        const { select: selection, ...restOptions } = options ?? {};
        const { user: userSelect, ...sessionSelect } = selection ?? { user: undefined };
        const sessionSelection = Object.keys(sessionSelect).length > 0 ? sessionSelect : api.currentSession.get.defaultSelection;
        const userSelection = userSelect ? userSelect : api.user?.findMany.defaultSelection;
        const opts = {
            suspense: true,
            select: {
                ...sessionSelection,
                ...(userSelection && { user: userSelection }),
            },
            ...(restOptions ?? {}),
        };
        const [{ data: session, error }] = useGet(api.currentSession, opts);
        if (error)
            throw error;
        if (!session)
            throw new Error("currentSession not found but should be present");
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        return typeof client == "undefined" ? session : session;
    }
    else {
        throw new Error("api client does not have a Session model");
    }
}
//# sourceMappingURL=useSession.js.map