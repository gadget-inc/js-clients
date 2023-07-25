"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = void 0;
const useSession_1 = require("./useSession");
const useUser_1 = require("./useUser");
/**
 * Used for fetching the current authentication state of the session
 * @returns An object with the current authentication state: `session`, `user`, and `isSignedIn`
 */
const useAuth = () => {
    const session = (0, useSession_1.useSession)();
    const user = (0, useUser_1.useUser)();
    return { session, user, isSignedIn: !!user };
};
exports.useAuth = useAuth;
//# sourceMappingURL=useAuth.js.map