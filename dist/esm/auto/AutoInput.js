import React, { useEffect, useMemo } from "react";
import { useFieldsFromChildComponents } from "./AutoFormContext.js";
import { useRelationshipContext } from "./hooks/useAutoRelationship.js";
import { useFieldApiIdentifier, useRelationshipTransformedMetaDataPaths } from "./hooks/useFieldMetadata.js";
import { useSelectedPathsFromRecordLabel } from "./hooks/useSelectedPathsFromRecordLabel.js";
export function autoInput(Component) {
    const WrappedComponent = (props) => {
        const { hasCustomFormChildren, registerFields, fieldSet } = useFieldsFromChildComponents();
        const relationshipContext = useRelationshipContext();
        const fieldApiIdentifier = useFieldApiIdentifier(props.field);
        const fieldSetPath = useMemo(() => {
            if (relationshipContext) {
                return relationshipContext?.transformMetadataPath
                    ? relationshipContext.transformMetadataPath(fieldApiIdentifier)
                    : relationshipContext.transformPath(fieldApiIdentifier);
            }
            // Non relationship context - Use field name directly
            return fieldApiIdentifier;
        }, [relationshipContext, fieldApiIdentifier]);
        useEffect(() => {
            registerFields([fieldSetPath]);
        }, [registerFields, fieldSetPath]);
        if (hasCustomFormChildren && !fieldSet.has(fieldSetPath)) {
            // Do not render before registration
            return null;
        }
        return React.createElement(Component, { ...props });
    };
    WrappedComponent.__autoInput = true;
    return WrappedComponent;
}
export function autoRelationshipForm(Component) {
    const WrappedComponent = (props) => {
        const { hasCustomFormChildren, registerFields, fieldSet } = useFieldsFromChildComponents();
        const displayedRecordPaths = useSelectedPathsFromRecordLabel(props);
        const relationshipTransformedPaths = useRelationshipTransformedMetaDataPaths(props.field);
        const displayedRecordPathsToRegister = useMemo(() => displayedRecordPaths.map((path) => `${relationshipTransformedPaths?.metaDataPath ?? props.field}.${path}`), [displayedRecordPaths, props.field, relationshipTransformedPaths?.metaDataPath]);
        useEffect(() => {
            registerFields(displayedRecordPathsToRegister);
        }, [registerFields, displayedRecordPathsToRegister]);
        if (hasCustomFormChildren && !displayedRecordPathsToRegister.every((field) => fieldSet.has(field))) {
            // Do not render before registration
            return null;
        }
        return React.createElement(Component, { ...props });
    };
    WrappedComponent.__autoInput = true;
    return autoInput(WrappedComponent);
}
export function isAutoInput(component) {
    return typeof component.type === "function" && "__autoInput" in component.type;
}
//# sourceMappingURL=AutoInput.js.map