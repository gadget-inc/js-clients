"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoFormFieldsFromChildComponentsProvider = exports.AutoFormFieldsFromChildComponentsContext = exports.useFieldsFromChildComponents = exports.useAutoFormMetadata = exports.AutoFormMetadataContext = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
/**
 * React context that stores an instance of the metadata loaded for a particular form action
 */
exports.AutoFormMetadataContext = react_1.default.createContext(undefined);
/**
 * Get the current `metadata` object and `submit` function from React context
 * Must be called within a component wrapped by the `<AutoForm>` component.
 **/
const useAutoFormMetadata = () => {
    const autoFormContext = (0, react_1.useContext)(exports.AutoFormMetadataContext);
    if (!autoFormContext) {
        throw new Error(`useAutoFormMetadata hook called in context where no AutoFormMetadata context is available. Please ensure you are wrapping this hook with the <AutoForm/> component from @gadgetinc/react.

    Possible remedies:
      - ensuring you have the <AutoForm/> component wrapped around your hook invocation
      - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`);
    }
    return autoFormContext;
};
exports.useAutoFormMetadata = useAutoFormMetadata;
const useFieldsFromChildComponents = () => {
    const autoFormContext = (0, react_1.useContext)(exports.AutoFormFieldsFromChildComponentsContext);
    if (!autoFormContext) {
        throw new Error(`useFieldsFromChildComponents hook called in context where no AutoFormFieldsFromChildComponents context is available. Please ensure you are wrapping this hook with the <AutoForm/> component from @gadgetinc/react.

    Possible remedies:
      - ensuring you have the <AutoForm/> component wrapped around your hook invocation
      - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`);
    }
    return autoFormContext;
};
exports.useFieldsFromChildComponents = useFieldsFromChildComponents;
exports.AutoFormFieldsFromChildComponentsContext = react_1.default.createContext(undefined);
const AutoFormFieldsFromChildComponentsProvider = ({ children, hasCustomFormChildren, }) => {
    const fieldsFromChildComponents = useInitializeFieldsFromChildComponents(hasCustomFormChildren);
    return (react_1.default.createElement(exports.AutoFormFieldsFromChildComponentsContext.Provider, { value: fieldsFromChildComponents }, children));
};
exports.AutoFormFieldsFromChildComponentsProvider = AutoFormFieldsFromChildComponentsProvider;
const fieldSetReducer = (state, action) => {
    return new Set([...state, ...action.fields]);
};
const useInitializeFieldsFromChildComponents = (hasCustomFormChildren) => {
    const [fieldSet, dispatch] = (0, react_1.useReducer)(fieldSetReducer, new Set());
    const registerFields = (0, react_1.useCallback)((fields) => {
        if (!hasCustomFormChildren) {
            return; // Registration is only necessary with custom children in the form
        }
        dispatch({ type: "add", fields });
    }, [hasCustomFormChildren, dispatch]);
    return {
        hasCustomFormChildren,
        fieldSet,
        registerFields,
    };
};
//# sourceMappingURL=AutoFormContext.js.map