"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoLoadingIndicator = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const makeShadcnAutoLoadingIndicator = (elements) => {
    function ShadcnAutoLoadingIndicator() {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("p", null, "Loading...")));
    }
    return ShadcnAutoLoadingIndicator;
};
exports.makeShadcnAutoLoadingIndicator = makeShadcnAutoLoadingIndicator;
//# sourceMappingURL=ShadcnAutoLoadingIndicator.js.map