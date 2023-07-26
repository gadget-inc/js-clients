"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSession = void 0;
const GadgetProvider_1 = require("../../src/GadgetProvider");
const useGet_1 = require("../../src/useGet");
/**
 * Used for fetching the current `Session` record from Gadget. Will suspend while the user is being fetched.
 * @returns The current session
 */
const useSession = () => {
    const api = (0, GadgetProvider_1.useApi)();
    if ("currentSession" in api && "session" in api) {
        const select = api.session.findMany.defaultSelection;
        if ("user" in api) {
            select.userId = true;
            select.user = {
                ...api.user.findMany.defaultSelection,
            };
        }
        const [{ data: session, error }] = (0, useGet_1.useGet)(api.currentSession, {
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
exports.useSession = useSession;
//# sourceMappingURL=useSession.js.map