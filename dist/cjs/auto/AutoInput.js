"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAutoInput = exports.autoInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const AutoFormContext_js_1 = require("./AutoFormContext.js");
function autoInput(Component) {
    const WrappedComponent = (props) => {
        const { hasCustomFormChildren, registerFields, fieldSet } = (0, AutoFormContext_js_1.useFieldsFromChildComponents)();
        (0, react_1.useEffect)(() => {
            registerFields([props.field]);
        }, [registerFields]);
        if (hasCustomFormChildren && !fieldSet.has(props.field)) {
            // Do not render before registration
            return null;
        }
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