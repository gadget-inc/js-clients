"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSessionSignedIn = exports.isSessionSignedOut = void 0;
const isSessionSignedOut = (session) => {
    return !session?.userId;
};
exports.isSessionSignedOut = isSessionSignedOut;
const isSessionSignedIn = (session) => {
    return !(0, exports.isSessionSignedOut)(session);
};
exports.isSessionSignedIn = isSessionSignedIn;
//# sourceMappingURL=utils.js.map