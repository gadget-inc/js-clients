"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAutoInput = exports.autoRelationshipForm = exports.autoInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const AutoFormContext_js_1 = require("./AutoFormContext.js");
const useAutoRelationship_js_1 = require("./hooks/useAutoRelationship.js");
function autoInput(Component) {
    const WrappedComponent = (props) => {
        const { hasCustomFormChildren, registerFields, fieldSet } = (0, AutoFormContext_js_1.useFieldsFromChildComponents)();
        const relationshipContext = (0, useAutoRelationship_js_1.useRelationshipContext)();
        const fieldSetPath = (0, react_1.useMemo)(() => {
            if (relationshipContext) {
                return relationshipContext?.transformMetadataPath
                    ? relationshipContext.transformMetadataPath(props.field)
                    : relationshipContext.transformPath(props.field);
            }
            // Non relationship context - Use field name directly
            return props.field;
        }, [relationshipContext, props.field]);
        (0, react_1.useEffect)(() => {
            registerFields([fieldSetPath]);
        }, [registerFields, fieldSetPath]);
        if (hasCustomFormChildren && !fieldSet.has(fieldSetPath)) {
            // Do not render before registration
            return null;
        }
        return react_1.default.createElement(Component, { ...props });
    };
    WrappedComponent.__autoInput = true;
    return WrappedComponent;
}
exports.autoInput = autoInput;
function autoRelationshipForm(Component) {
    const WrappedComponent = (props) => {
        const { hasCustomFormChildren, registerFields, fieldSet } = (0, AutoFormContext_js_1.useFieldsFromChildComponents)();
        const hasSelectPaths = "selectPaths" in props && props.selectPaths;
        const selectPathsToRegister = (0, react_1.useMemo)(() => hasSelectPaths && Array.isArray(props.selectPaths) ? props.selectPaths.map((selectPath) => `${props.field}.${selectPath}`) : [], [hasSelectPaths, props.field]);
        (0, react_1.useEffect)(() => {
            if (hasSelectPaths) {
                registerFields(selectPathsToRegister);
            }
        }, [hasSelectPaths, registerFields, selectPathsToRegister]);
        if (hasCustomFormChildren && !selectPathsToRegister.every((field) => fieldSet.has(field))) {
            // Do not render before registration
            return null;
        }
        return react_1.default.createElement(Component, { ...props });
    };
    WrappedComponent.__autoInput = true;
    return autoInput(WrappedComponent);
}
exports.autoRelationshipForm = autoRelationshipForm;
function isAutoInput(component) {
    return typeof component.type === "function" && "__autoInput" in component.type;
}
exports.isAutoInput = isAutoInput;
//# sourceMappingURL=AutoInput.js.map