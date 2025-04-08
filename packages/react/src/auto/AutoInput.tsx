import React, { useEffect, useMemo } from "react";
import type { FieldMetadata } from "../metadata.js";
import { useFieldsFromChildComponents } from "./AutoFormContext.js";
import { useRelationshipContext } from "./hooks/useAutoRelationship.js";
import { useFieldApiIdentifier, useRelationshipTransformedMetaDataPaths } from "./hooks/useFieldMetadata.js";
import { useSelectedPathsFromRecordLabel } from "./hooks/useSelectedPathsFromRecordLabel.js";
import type { AutoRelationshipFormProps } from "./interfaces/AutoRelationshipInputProps.js";

export interface AutoInputComponent<P> extends React.FC<P> {
  __autoInput: true;
}

export function autoInput<P extends { field: string }>(Component: React.FC<P>): AutoInputComponent<P> {
  const WrappedComponent: React.FC<P> = (props) => {
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

    return <Component {...props} />;
  };

  (WrappedComponent as AutoInputComponent<P>).__autoInput = true;

  return WrappedComponent as AutoInputComponent<P>;
}

export function autoRelationshipForm<P extends Pick<AutoRelationshipFormProps, "field" | "recordLabel">>(
  Component: React.FC<P>
): AutoInputComponent<P> {
  const WrappedComponent: React.FC<P> = (props) => {
    const { hasCustomFormChildren, registerFields, fieldSet } = useFieldsFromChildComponents();

    const { selectedPaths: displayedRecordPaths, metadata } = useSelectedPathsFromRecordLabel(props);

    const relationshipTransformedPaths = useRelationshipTransformedMetaDataPaths(props.field);
    const displayedRecordPathsToRegister = useMemo(() => {
      const fallbackMetaDataPathPrefix = getFallbackMetaDataPathPrefix(props.field, metadata);
      return displayedRecordPaths.map((path) => `${relationshipTransformedPaths?.metaDataPath ?? fallbackMetaDataPathPrefix}.${path}`);
    }, [displayedRecordPaths, props.field, relationshipTransformedPaths?.metaDataPath, metadata]);

    useEffect(() => {
      registerFields(displayedRecordPathsToRegister);
    }, [registerFields, displayedRecordPathsToRegister]);

    if (hasCustomFormChildren && !displayedRecordPathsToRegister.every((field) => fieldSet.has(field))) {
      // Do not render before registration
      return null;
    }

    return <Component {...props} />;
  };

  (WrappedComponent as AutoInputComponent<P>).__autoInput = true;

  return autoInput(WrappedComponent as AutoInputComponent<P>);
}

export function isAutoInput(component: React.ReactElement): component is React.ReactElement<any, AutoInputComponent<any>> {
  return typeof component.type === "function" && "__autoInput" in component.type;
}

const getFallbackMetaDataPathPrefix = (field: string, metadata?: FieldMetadata) => {
  const config = metadata?.configuration;
  if (config?.__typename === "GadgetHasManyThroughConfig") {
    // In HMT fields, the labels are based on the sibling model, but need to be routed through the join model
    const joinModelHasManyFieldApiIdentifier = config.joinModelHasManyFieldApiIdentifier;
    const inverseRelatedModelFieldApiId = config.inverseRelatedModelField?.apiIdentifier;
    const fallbackMetaDataPath = `${joinModelHasManyFieldApiIdentifier}.${inverseRelatedModelFieldApiId}`;
    return fallbackMetaDataPath;
  }

  return field;
};
