"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSession = void 0;
const hooks_js_1 = require("../hooks.js");
/**
 * Used for fetching the current `Session` record from Gadget. Will suspend while the user is being fetched.
 * @returns The current session
 */
function useSession(client, options) {
    const fallbackApi = (0, hooks_js_1.useApi)();
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
        // oxlint-disable-next-line react/rules-of-hooks -- else branch always throws, so hook order is consistent
        const [{ data: session, error }] = (0, hooks_js_1.useGet)(api.currentSession, opts);
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
exports.useSession = useSession;
//# sourceMappingURL=useSession.js.map