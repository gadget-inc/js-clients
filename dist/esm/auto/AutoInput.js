import React, { useEffect, useMemo } from "react";
import { useFieldsFromChildComponents } from "./AutoFormContext.js";
import { useRelationshipContext } from "./hooks/useAutoRelationship.js";
export function autoInput(Component) {
    const WrappedComponent = (props) => {
        const { hasCustomFormChildren, registerFields, fieldSet } = useFieldsFromChildComponents();
        const relationshipContext = useRelationshipContext();
        const fieldSetPath = useMemo(() => {
            if (relationshipContext) {
                return relationshipContext?.transformMetadataPath
                    ? relationshipContext.transformMetadataPath(props.field)
                    : relationshipContext.transformPath(props.field);
            }
            // Non relationship context - Use field name directly
            return props.field;
        }, [relationshipContext, props.field]);
        const hasSelectPaths = "selectPaths" in props && props.selectPaths;
        const selectPaths = useMemo(() => (hasSelectPaths && Array.isArray(props.selectPaths) ? props.selectPaths : []), [hasSelectPaths]);
        useEffect(() => {
            const fieldsToRegister = [fieldSetPath];
            if (hasSelectPaths) {
                fieldsToRegister.push(...selectPaths.map((selectPath) => `${props.field}.${selectPath}`));
            }
            registerFields(fieldsToRegister);
        }, [registerFields, fieldSetPath, selectPaths]);
        if (hasCustomFormChildren && !fieldSet.has(fieldSetPath)) {
            // Do not render before registration
            return null;
        }
        return React.createElement(Component, { ...props });
    };
    WrappedComponent.__autoInput = true;
    return WrappedComponent;
}
export function isAutoInput(component) {
    return typeof component.type === "function" && "__autoInput" in component.type;
}
//# sourceMappingURL=AutoInput.js.map