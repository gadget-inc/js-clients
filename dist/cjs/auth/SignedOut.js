"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignedOut = void 0;
const react_1 = __importDefault(require("react"));
const useAuth_js_1 = require("./useAuth.js");
const utils_js_1 = require("./utils.js");
/**
 * Renders its `children` if the current `Session` is signed out (no associated `User`), otherwise renders nothing.
 */
const SignedOut = (props) => {
    const { session, user } = (0, useAuth_js_1.useAuth)();
    if (!session || (0, utils_js_1.isSessionSignedOut)(session) || !user) {
        return react_1.default.createElement(react_1.default.Fragment, null, props.children);
    }
    else {
        return null;
    }
};
exports.SignedOut = SignedOut;
//# sourceMappingURL=SignedOut.js.map