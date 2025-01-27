import { assert } from "@gadgetinc/api-client-core";
import React from "react";
import type { useFieldArray } from "../../useActionForm.js";
import { useAutoFormMetadata } from "../AutoFormContext.js";
import { useFieldMetadata } from "./useFieldMetadata.js";

export interface RelationshipContextValue {
  transformPath: (path: string) => string;
  transformMetadataPath?: (path: string) => string;
  fieldArray?: ReturnType<typeof useFieldArray>;
}

export const RelationshipContext = React.createContext<RelationshipContextValue | undefined>(undefined);

export const useRelationshipContext = () => {
  return React.useContext(RelationshipContext);
};

export const useAutoRelationship = (props: { field: string }) => {
  const { field } = props;
  const formMetadata = useAutoFormMetadata();

  assert(formMetadata.model, "useAutoRelationship must be used within an AutoForm for a model");

  const { path, metadata } = useFieldMetadata(field);

  return {
    path,
    metadata,
  };
};
