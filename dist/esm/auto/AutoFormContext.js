import React, { useCallback, useContext, useReducer } from "react";
/**
 * React context that stores an instance of the metadata loaded for a particular form action
 */
export const AutoFormMetadataContext = React.createContext(undefined);
/**
 * Get the current `metadata` object and `submit` function from React context
 * Must be called within a component wrapped by the `<AutoForm>` component.
 **/
export const useAutoFormMetadata = () => {
    const autoFormContext = useContext(AutoFormMetadataContext);
    if (!autoFormContext) {
        throw new Error(`useAutoFormMetadata hook called in context where no AutoFormMetadata context is available. Please ensure you are wrapping this hook with the <AutoForm/> component from @gadgetinc/react.

    Possible remedies:
      - ensuring you have the <AutoForm/> component wrapped around your hook invocation
      - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`);
    }
    return autoFormContext;
};
export const useAssertNotNestedInAnotherAutoForm = () => {
    const autoFormContext = useContext(AutoFormMetadataContext);
    if (autoFormContext) {
        throw new Error(`<AutoForm/> cannot be nested within another <AutoForm/> component.`);
    }
};
export const useFieldsFromChildComponents = () => {
    const autoFormContext = useContext(AutoFormFieldsFromChildComponentsContext);
    if (!autoFormContext) {
        throw new Error(`useFieldsFromChildComponents hook called in context where no AutoFormFieldsFromChildComponents context is available. Please ensure you are wrapping this hook with the <AutoForm/> component from @gadgetinc/react.

    Possible remedies:
      - ensuring you have the <AutoForm/> component wrapped around your hook invocation
      - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`);
    }
    return autoFormContext;
};
export const AutoFormFieldsFromChildComponentsContext = React.createContext(undefined);
export const AutoFormFieldsFromChildComponentsProvider = ({ children, hasCustomFormChildren, }) => {
    const fieldsFromChildComponents = useInitializeFieldsFromChildComponents(hasCustomFormChildren);
    return (React.createElement(AutoFormFieldsFromChildComponentsContext.Provider, { value: fieldsFromChildComponents }, children));
};
const fieldSetReducer = (state, action) => {
    return new Set([...state, ...action.fields]);
};
const useInitializeFieldsFromChildComponents = (hasCustomFormChildren) => {
    const [fieldSet, dispatch] = useReducer(fieldSetReducer, new Set());
    const registerFields = useCallback((fields) => {
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