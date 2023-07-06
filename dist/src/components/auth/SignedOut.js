"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignedOut = void 0;
const react_1 = __importDefault(require("react"));
const useSession_1 = require("../../../src/auth/useSession");
const utils_1 = require("../../../src/auth/utils");
/**
 * Renders its `children` if the current `Session` is signed out (no associated `User`), otherwise renders nothing.
 */
const SignedOut = (props) => {
    const session = (0, useSession_1.useSession)();
    if (!session || (0, utils_1.isSessionSignedOut)(session)) {
        return react_1.default.createElement(react_1.default.Fragment, null, props.children);
    }
    else {
        return null;
    }
};
exports.SignedOut = SignedOut;
//# sourceMappingURL=SignedOut.js.map