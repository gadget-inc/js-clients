"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationMode = void 0;
/**
 * Represents the current strategy for authenticating with the Gadget platform.
 * For individual users in web browsers, we authenticate using a session token stored client side, like a cookie, but with cross domain support.
 * For server to server communication, or traceable access from the browser, we use pre shared secrets called API Keys
 * And when within the Gadget platform itself, we use a private secret token called an Internal Auth Token. Internal Auth Tokens are managed by Gadget and should never be used by external developers.
 **/
var AuthenticationMode;
(function (AuthenticationMode) {
    AuthenticationMode["BrowserSession"] = "browser-session";
    AuthenticationMode["APIKey"] = "api-key";
    AuthenticationMode["Internal"] = "internal";
    AuthenticationMode["InternalAuthToken"] = "internal-auth-token";
    AuthenticationMode["Anonymous"] = "anonymous";
    AuthenticationMode["Custom"] = "custom";
})(AuthenticationMode || (exports.AuthenticationMode = AuthenticationMode = {}));
//# sourceMappingURL=AnyConnection.js.map