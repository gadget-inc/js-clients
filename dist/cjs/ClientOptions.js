"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserSessionStorageType = void 0;
/**
 * If using the `browserSession` authentication mode, sets how long the stored authentication information will last for for each user.
 */
var BrowserSessionStorageType;
(function (BrowserSessionStorageType) {
    /**
     * `Durable` authentications ask the browser to keep the user's authentication information around for as long as it can, like the "Remember Me" button on a lot of webpages. Uses `window.localStorage` to store authentication tokens.
     */
    BrowserSessionStorageType["Durable"] = "Durable";
    /**
     * `Session` authentications ask the browser to keep the user's authentication information around for a given browser tab, and then remove it when the tab is closed. Useful for high security scenarios where authenticated sessions are sensitive and should be forgotten quickly, or where the user's identity is temporary and only needs to last a short while. Uses `window.sessionStorage` to store authentication tokens.
     */
    BrowserSessionStorageType["Session"] = "session";
    /**
     * `Temporary` authentications don't ask the browser to keep the user's authentication information around at all, such that refreshing the page will result in the user having no saved authentication state and likely being logged out. Useful for high security scenarios where authenticated sessions are sensitive and should be forgotten quickly.
     */
    BrowserSessionStorageType["Temporary"] = "temporary";
})(BrowserSessionStorageType = exports.BrowserSessionStorageType || (exports.BrowserSessionStorageType = {}));
//# sourceMappingURL=ClientOptions.js.map