"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUser = void 0;
const useSession_1 = require("./useSession");
/**
 * Used for fetching the current `User` record from Gadget. Will return `null` if the session is unauthenticated. Will suspend while the user is being fetched.
 * @returns The current user associated with the session or `null`.
 */
const useUser = () => {
    const session = (0, useSession_1.useSession)();
    return session && session.user;
};
exports.useUser = useUser;
//# sourceMappingURL=useUser.js.map