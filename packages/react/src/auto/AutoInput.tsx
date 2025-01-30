import React, { useEffect, useMemo } from "react";
import { useFieldsFromChildComponents } from "./AutoFormContext.js";
import { useRelationshipContext } from "./hooks/useAutoRelationship.js";

export interface AutoInputComponent<P> extends React.FC<P> {
  __autoInput: true;
}

export function autoInput<P extends { field: string }>(Component: React.FC<P>): AutoInputComponent<P & { selectPaths?: string[] }> {
  const WrappedComponent: React.FC<P> = (props) => {
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

    return <Component {...props} />;
  };

  (WrappedComponent as AutoInputComponent<P>).__autoInput = true;

  return WrappedComponent as AutoInputComponent<P>;
}

export function isAutoInput(component: React.ReactElement): component is React.ReactElement<any, AutoInputComponent<any>> {
  return typeof component.type === "function" && "__autoInput" in component.type;
}
