"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUser = void 0;
const GadgetProvider_js_1 = require("../GadgetProvider.js");
const useSession_js_1 = require("./useSession.js");
/**
 * Used for fetching the current `User` record from Gadget. Will return `null` if the session is unauthenticated. Will suspend while the user is being fetched.
 * @returns The current user associated with the session or `null`.
 */
const useUser = () => {
    const api = (0, GadgetProvider_js_1.useApi)();
    if (!("user" in api)) {
        throw new Error("api client does not have a User model");
    }
    const session = (0, useSession_js_1.useSession)();
    return session && session.user;
};
exports.useUser = useUser;
//# sourceMappingURL=useUser.js.map