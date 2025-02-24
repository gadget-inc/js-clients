import { type FieldMetadata } from "../../metadata.js";
import { isRelationshipField } from "../../use-table/helpers.js";
import { useAutoFormMetadata } from "../AutoFormContext.js";
import { useRelationshipContext } from "../hooks/useAutoRelationship.js";
import { useIsInHasManyThroughJoinModelInput } from "./useHasManyThroughController.js";

export const useMaybeFieldMetadata = (fieldApiIdentifier: string) => {
  validateNoDotNotationInFieldApiIdentifier(fieldApiIdentifier);

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

  useValidateNoRelationshipFieldsInHasManyThroughForm(metadata);

  return { path, metadata };
};

const useValidateNoRelationshipFieldsInHasManyThroughForm = (metadata: FieldMetadata) => {
  const relationshipContext = useRelationshipContext();

  if (isRelationshipField(metadata) && relationshipContext && relationshipContext.hasManyThrough) {
    throw new Error(`"${metadata.apiIdentifier}" is not allowed in a AutoHasManyThroughForm`);
  }
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
  const isInHasManyThroughJoinModelInput = useIsInHasManyThroughJoinModelInput();

  if (relationshipContext && relationshipContext.hasManyThrough) {
    // Within AutoHasManyThroughForm - Special consideration needed for fields on the sibling model
    return getFieldApiIdentifierWithinHasManyThroughForm(
      fieldApiIdentifier,
      relationshipContext.hasManyThrough,
      isInHasManyThroughJoinModelInput
    );
  }

  return fieldApiIdentifier;
};

const getFieldApiIdentifierWithinHasManyThroughForm = (
  fieldApiIdentifier: string,
  hasManyThrough: { joinModelApiIdentifier: string; inverseRelatedModelField: string },
  isInHasManyThroughJoinModelInput: boolean
) => {
  const { joinModelApiIdentifier, inverseRelatedModelField } = hasManyThrough;
  if (fieldApiIdentifier.startsWith(`${joinModelApiIdentifier}.`)) {
    // Already properly prefixed
    return fieldApiIdentifier;
  }

  if (isInHasManyThroughJoinModelInput) {
    // Within a AutoHasManyThroughForm, and the field is on the join model
    return `${joinModelApiIdentifier}.${fieldApiIdentifier}`;
  }

  // Within a AutoHasManyThroughForm - Assume field is on sibling model without joinModelApiIdentifier prefix
  // The resulting API request variables will be apply these changes through a nested action on `joinModel.belongsToSiblingModelField`
  return `${joinModelApiIdentifier}.${inverseRelatedModelField}.${fieldApiIdentifier}`;
};

const validateNoDotNotationInFieldApiIdentifier = (fieldApiIdentifier: string) => {
  if (fieldApiIdentifier.includes(".")) {
    throw new Error(`"${fieldApiIdentifier}" is invalid. The 'field' prop in AutoForm components cannot contain "."`);
  }
};
