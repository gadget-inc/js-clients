import { useApi } from "../GadgetProvider.js";
import { useGet } from "../useGet.js";
/**
 * Used for fetching the current `Session` record from Gadget. Will suspend while the user is being fetched.
 * @returns The current session
 */
export const useSession = () => {
    const api = useApi();
    if ("currentSession" in api && "session" in api) {
        const select = api.session.findMany.defaultSelection;
        if ("user" in api) {
            select.userId = true;
            select.user = {
                ...api.user.findMany.defaultSelection,
            };
        }
        const [{ data: session, error }] = useGet(api.currentSession, {
            suspense: true,
            select,
        });
        if (error)
            throw error;
        if (!session)
            throw new Error("currentSession not found but should be present");
        return session;
    }
    else {
        throw new Error("api client does not have a Session model");
    }
};
//# sourceMappingURL=useSession.js.map