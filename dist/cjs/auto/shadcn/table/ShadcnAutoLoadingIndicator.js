"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoLoadingIndicator = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importDefault(require("react"));
const makeShadcnAutoLoadingIndicator = (elements) => {
    function ShadcnAutoLoadingIndicator(props) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(lucide_react_1.LoaderIcon, { className: `w-4 h-4 animate-spin ${props.className}` })));
    }
    return ShadcnAutoLoadingIndicator;
};
exports.makeShadcnAutoLoadingIndicator = makeShadcnAutoLoadingIndicator;
//# sourceMappingURL=ShadcnAutoLoadingIndicator.js.map