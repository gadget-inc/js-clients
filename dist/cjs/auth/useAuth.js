"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = void 0;
const useSession_js_1 = require("./useSession.js");
const useUser_js_1 = require("./useUser.js");
/**
 * Used for fetching the current authentication state of the session
 * @returns An object with the current authentication state: `session`, `user`, and `isSignedIn`
 */
const useAuth = () => {
    const session = (0, useSession_js_1.useSession)();
    const user = (0, useUser_js_1.useUser)();
    return { session, user, isSignedIn: !!user };
};
exports.useAuth = useAuth;
//# sourceMappingURL=useAuth.js.map