"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignedIn = void 0;
const react_1 = __importDefault(require("react"));
const useSession_1 = require("../../auth/useSession");
const utils_1 = require("../../auth/utils");
/**
 * Renders its `children` if the current `Session` is signed in (has an associated `User`), otherwise renders nothing.
 */
const SignedIn = (props) => {
    const session = (0, useSession_1.useSession)();
    if (session && (0, utils_1.isSessionSignedIn)(session)) {
        return react_1.default.createElement(react_1.default.Fragment, null, props.children);
    }
    else {
        return null;
    }
};
exports.SignedIn = SignedIn;
//# sourceMappingURL=SignedIn.js.map