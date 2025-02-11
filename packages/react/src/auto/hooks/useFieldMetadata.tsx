import { type FieldMetadata } from "../../metadata.js";
import { useAutoFormMetadata } from "../AutoFormContext.js";
import { useRelationshipContext } from "../hooks/useAutoRelationship.js";

export const useMaybeFieldMetadata = (fieldApiIdentifier: string) => {
  fieldApiIdentifier = useFieldApiIdentifier(fieldApiIdentifier);
  const { fields } = useAutoFormMetadata();

  const { path, metaDataPath } = useGetPaths(fieldApiIdentifier);

  const targetFieldMetadata = fields.find(
    (field) => field.path === metaDataPath || isFieldCustomParamOnModelAction(fieldApiIdentifier, field)
  );

  return { path, metadata: targetFieldMetadata?.metadata };
};

export const useFieldMetadata = (fieldApiIdentifier: string) => {
  const { path, metadata } = useMaybeFieldMetadata(fieldApiIdentifier);

  if (!metadata) {
    throw new Error(`Field "${fieldApiIdentifier}" not found in metadata`);
  }

  return { path, metadata };
};

const useGetPaths = (fieldApiIdentifier: string) => {
  fieldApiIdentifier = useFieldApiIdentifier(fieldApiIdentifier);
  const { model } = useAutoFormMetadata();

  const relationshipTransformedPaths = useRelationshipTransformedMetaDataPaths(fieldApiIdentifier);

  if (relationshipTransformedPaths && model) {
    const path = model.apiIdentifier + "." + relationshipTransformedPaths.path;
    const metaDataPath = model.apiIdentifier + "." + relationshipTransformedPaths.metaDataPath;

    return { path, metaDataPath };
  }

  // Non-relationship
  const isModelAction = model && model.apiIdentifier;
  const path = isModelAction
    ? model.apiIdentifier + "." + fieldApiIdentifier // Model action
    : fieldApiIdentifier; // Global action

  return { path, metaDataPath: path };
};

export const useRelationshipTransformedMetaDataPaths = (fieldApiIdentifier: string) => {
  fieldApiIdentifier = useFieldApiIdentifier(fieldApiIdentifier);
  const { model } = useAutoFormMetadata();
  const relationshipContext = useRelationshipContext();

  if (!relationshipContext || !model) {
    return null;
  }

  const path = relationshipContext.transformPath(fieldApiIdentifier);
  const metaDataPath = relationshipContext.transformMetadataPath(fieldApiIdentifier);

  return { path, metaDataPath };
};

const isFieldCustomParamOnModelAction = (
  fieldApiIdentifier: string,
  fieldCandidate: {
    path: string;
    metadata: FieldMetadata;
  }
) => fieldCandidate.metadata.__typename !== "GadgetModelField" && fieldCandidate.path === fieldApiIdentifier;

export const useFieldApiIdentifier = (fieldApiIdentifier: string) => {
  const relationshipContext = useRelationshipContext();

  if (relationshipContext && relationshipContext.hasManyThrough) {
    // Within AutoHasManyThroughForm - Special consideration needed for fields on the sibling model
    return getFieldApiIdentifierWithinHasManyThroughForm(fieldApiIdentifier, relationshipContext.hasManyThrough);
  }

  return fieldApiIdentifier;
};

const getFieldApiIdentifierWithinHasManyThroughForm = (
  fieldApiIdentifier: string,
  hasManyThrough: { joinModelApiIdentifier: string; inverseRelatedModelField: string }
) => {
  const { joinModelApiIdentifier, inverseRelatedModelField } = hasManyThrough;

  if (fieldApiIdentifier.startsWith(`${joinModelApiIdentifier}.`)) {
    // Within a AutoHasManyThroughForm, and the field is on the join model
    return fieldApiIdentifier;
  }

  // Within a AutoHasManyThroughForm - Assume field is on sibling model without joinModelApiIdentifier prefix
  // The resulting API request variables will be apply these changes through a nested action on `joinModel.belongsToSiblingModelField`
  return `${joinModelApiIdentifier}.${inverseRelatedModelField}.${fieldApiIdentifier}`;
};
