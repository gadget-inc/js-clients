"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAutoInput = exports.autoInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
function autoInput(Component) {
    const WrappedComponent = (props) => {
        return react_1.default.createElement(Component, { ...props });
    };
    WrappedComponent.__autoInput = true;
    return WrappedComponent;
}
exports.autoInput = autoInput;
function isAutoInput(component) {
    return typeof component.type === "function" && "__autoInput" in component.type;
}
exports.isAutoInput = isAutoInput;
//# sourceMappingURL=AutoInput.js.map