"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.windowNavigate = exports.isSessionSignedIn = exports.isSessionSignedOut = void 0;
const isSessionSignedOut = (session) => {
    return !session?.user?.id;
};
exports.isSessionSignedOut = isSessionSignedOut;
const isSessionSignedIn = (session) => {
    return !(0, exports.isSessionSignedOut)(session);
};
exports.isSessionSignedIn = isSessionSignedIn;
function windowNavigate(path) {
    return window.location.assign(path);
}
exports.windowNavigate = windowNavigate;
//# sourceMappingURL=utils.js.map