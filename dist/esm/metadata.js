import { assert } from "@gadgetinc/api-client-core";
import { useApi } from "./GadgetProvider.js";
import { graphql } from "./internal/gql/gql.js";
import { GadgetFieldType } from "./internal/gql/graphql.js";
import { useGadgetQuery } from "./useGadgetQuery.js";
import { ErrorWrapper, getModelManager } from "./utils.js";
/**
 * The enum of all possible field types in Gadget's type system
 * @internal
 */
export const FieldType = GadgetFieldType;
const RelatedModelFieldFragment = graphql(/* GraphQL */ `
  fragment RelatedModelFieldFragment on GadgetModelField {
    name
    apiIdentifier
    fieldType
  }
`);
const FieldMetadataFragment = graphql(/* GraphQL */ `
  fragment FieldMetadata on GadgetField {
    name
    apiIdentifier
    fieldType
    requiredArgumentForInput
    ... on GadgetModelField {
      sortable
      filterable
    }
    configuration {
      __typename
      fieldType
      validations {
        __typename
        ... on GadgetRegexFieldValidation {
          name
          specID
          pattern
        }
        ... on GadgetRangeFieldValidation {
          name
          specID
          min
          max
        }
        ... on GadgetOnlyImageFileFieldValidation {
          name
          specID
          allowAnimatedImages
        }
        ... on GadgetGenericFieldValidation {
          name
          specID
        }
      }
      ... on GadgetHasManyConfig {
        relatedModel {
          key
          apiIdentifier
          namespace
          defaultDisplayField {
            name
            apiIdentifier
            fieldType
          }
          fields @include(if: $includeRelatedFields) {
            ...RelatedModelFieldFragment
          }
        }
        inverseField {
          apiIdentifier
        }
      }
      ... on GadgetHasOneConfig {
        relatedModel {
          key
          apiIdentifier
          namespace
          defaultDisplayField {
            name
            apiIdentifier
            fieldType
          }
          fields @include(if: $includeRelatedFields) {
            ...RelatedModelFieldFragment
          }
        }
        inverseField {
          apiIdentifier
        }
      }
      ... on GadgetBelongsToConfig {
        relatedModel {
          key
          apiIdentifier
          namespace
          defaultDisplayField {
            name
            apiIdentifier
            fieldType
          }
          fields @include(if: $includeRelatedFields) {
            ...RelatedModelFieldFragment
          }
        }
      }
      ... on GadgetEnumConfig {
        allowMultiple
        allowOther
        options {
          name
          color
        }
      }
      ... on GadgetDateTimeConfig {
        includeTime
      }
      ... on GadgetNumberConfig {
        decimals
      }
    }
  }
`);
const ModelMetadataQuery = graphql(/* GraphQL */ `
  query GetModelMetadata($apiIdentifier: String!, $namespace: [String!], $includeRelatedFields: Boolean!) {
    gadgetMeta {
      model(apiIdentifier: $apiIdentifier, namespace: $namespace) {
        apiIdentifier
        namespace
        name
        fields {
          ...FieldMetadata
        }
      }
    }
  }
`);
const _SubFieldsFragment = graphql(/* GraphQL */ `
  fragment SubFields on GadgetField {
    configuration {
      __typename
      ... on GadgetObjectFieldConfig {
        name
        fields {
          ...FieldMetadata
          configuration {
            __typename
            ... on GadgetObjectFieldConfig {
              name
              fields {
                ...FieldMetadata
                configuration {
                  __typename
                  ... on GadgetObjectFieldConfig {
                    name
                    fields {
                      ...FieldMetadata
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);
const ModelActionMetadataQuery = graphql(/* GraphQL */ `
  query ModelActionMetadata($modelApiIdentifier: String!, $modelNamespace: [String!], $action: String!, $includeRelatedFields: Boolean!) {
    gadgetMeta {
      model(apiIdentifier: $modelApiIdentifier, namespace: $modelNamespace) {
        name
        apiIdentifier
        defaultRecord
        action(apiIdentifier: $action) {
          name
          apiIdentifier
          operatesWithRecordIdentity
          isDeleteAction
          inputFields {
            ...FieldMetadata
            ...SubFields
          }
          triggers {
            specID
          }
        }
      }
    }
  }
`);
/**
 * Global actions don't have related fields, but $includeRelatedFields needed for the fragment
 */
const GlobalActionMetadataQuery = graphql(/* GraphQL */ `
  query GlobalActionMetadata($apiIdentifier: String!, $namespace: [String!], $includeRelatedFields: Boolean = false) {
    gadgetMeta {
      globalAction(apiIdentifier: $apiIdentifier, namespace: $namespace) {
        name
        apiIdentifier
        inputFields {
          ...FieldMetadata
          ...SubFields
        }
        triggers {
          specID
        }
      }
    }
  }
`);
const RolesMetadataQuery = graphql(/* GraphQL */ `
  query RolesMetadata {
    gadgetMeta {
      roles {
        name
        key
        selectable
      }
    }
  }
`);
/**
 * Retrieve a given Gadget model's metadata from the backend
 * @internal
 */
export const useModelMetadata = (apiIdentifier, namespace) => {
    const [{ data, fetching, error }] = useGadgetQuery({
        query: ModelMetadataQuery,
        variables: {
            apiIdentifier,
            namespace,
            includeRelatedFields: true,
        },
    });
    return {
        metadata: data ? assert(data.gadgetMeta.model, "no model metadata found from Gadget API") : data,
        fetching,
        error: error ? ErrorWrapper.forClientSideError(error) : undefined,
    };
};
const getGlobalActionApiIdentifier = (api, fn) => {
    let cursor = api;
    if (fn.namespace) {
        for (const segment of Array.isArray(fn.namespace) ? fn.namespace : [fn.namespace]) {
            cursor = cursor[segment];
        }
    }
    for (const [key, value] of Object.entries(cursor)) {
        if (value === fn) {
            return key;
        }
    }
    throw new Error("global action function not found on model manager");
};
/**
 * Retrieve a given Gadget model action's metadata from the backend
 * @internal
 */
export const useActionMetadata = (actionFunction) => {
    const api = useApi();
    let query;
    let variables;
    if (actionFunction.type === "globalAction") {
        query = GlobalActionMetadataQuery;
        variables = {
            apiIdentifier: getGlobalActionApiIdentifier(api, actionFunction),
            namespace: actionFunction.namespace,
            includeRelatedFields: false,
        };
    }
    else if (actionFunction.type === "action") {
        query = ModelActionMetadataQuery;
        const modelManager = assert(getModelManager(api, actionFunction.modelApiIdentifier, actionFunction.namespace), "no model manager found for action function");
        let actionName;
        const proto = Object.getPrototypeOf(modelManager);
        for (const [key, value] of Object.entries(proto)) {
            if (value === actionFunction) {
                actionName = key;
                break;
            }
        }
        if (!actionName) {
            throw new Error("action function not found on model manager");
        }
        variables = {
            modelApiIdentifier: actionFunction.modelApiIdentifier,
            modelNamespace: actionFunction.namespace,
            action: actionName,
            includeRelatedFields: false,
        };
    }
    else {
        throw new Error(`Invalid action function type`);
    }
    const [{ data, fetching, error }] = useGadgetQuery({
        query,
        variables,
    });
    let metadata = undefined;
    if (data && !error) {
        if (actionFunction.type === "globalAction") {
            metadata = assert(data.gadgetMeta.globalAction, "no global action metadata found from Gadget API");
        }
        else {
            metadata = data.gadgetMeta.model;
            assert(metadata?.action, "no model metadata found from Gadget API");
        }
    }
    return {
        metadata,
        fetching,
        error: error ? ErrorWrapper.forClientSideError(error) : undefined,
    };
};
/**
 * @internal
 */
export const filterAutoFormFieldList = (fields, options) => {
    if (!fields) {
        return [];
    }
    let subset = fields;
    if (options?.include && options?.exclude) {
        throw new Error("Cannot use both 'include' and 'exclude' options at the same time");
    }
    if (options?.include) {
        // When including fields, the order will match the order of the `include` array
        subset = [];
        const includes = new Set(options.include);
        for (const includedFieldApiId of Array.from(includes)) {
            const metadataField = fields.find((field) => field.apiIdentifier === includedFieldApiId);
            if (metadataField) {
                subset.push(metadataField);
            }
        }
    }
    if (options?.exclude) {
        const excludes = new Set(options.exclude);
        subset = subset.filter((field) => !excludes.has(field.apiIdentifier));
    }
    // Filter out fields that are not supported by the form
    const validFieldTypeSubset = subset.filter(options?.isUpsertAction ? isAcceptedUpsertFieldType : isAcceptedFieldType);
    return options?.include
        ? validFieldTypeSubset // Everything explicitly included is valid
        : validFieldTypeSubset.filter(isNotRelatedToSpecialModelFilter); // Without explicit includes, filter out relationships to special models
};
/**
 * Filters out relationship fields that are related to special models
 */
const isNotRelatedToSpecialModelFilter = (field) => {
    const relatedModelKey = field.configuration &&
        "relatedModel" in field.configuration &&
        field.configuration.relatedModel &&
        field.configuration.relatedModel.key;
    return typeof relatedModelKey === "string" ? !specialModelKeys.has(relatedModelKey) : true;
};
const specialModelKeys = new Set(["DataModel-Shopify-Shop"]);
const isAcceptedFieldType = (field) => acceptedAutoFormFieldTypes.has(field.fieldType);
const isAcceptedUpsertFieldType = (field) => field.fieldType === FieldType.Id || isAcceptedFieldType(field);
const acceptedAutoFormFieldTypes = new Set([
    FieldType.Boolean,
    FieldType.Color,
    FieldType.Computed, // Not rendered as an input
    FieldType.DateTime,
    FieldType.Email,
    FieldType.EncryptedString,
    FieldType.Enum,
    FieldType.File,
    FieldType.Json,
    FieldType.Number,
    FieldType.Password,
    FieldType.RichText,
    FieldType.RoleAssignments,
    FieldType.String,
    FieldType.Url,
    FieldType.Vector, // Not rendered as an input
    FieldType.RichText,
    // Relationships
    FieldType.BelongsTo,
    FieldType.HasMany,
    FieldType.HasOne,
]);
export const filterAutoTableFieldList = (fields) => {
    let subset = fields;
    // Don't include relationships in the table by default
    subset = subset.filter((field) => field.fieldType !== GadgetFieldType.HasOne &&
        field.fieldType !== GadgetFieldType.HasMany &&
        field.fieldType !== GadgetFieldType.BelongsTo);
    // Filter out fields that are not supported by the form
    return subset.filter((field) => acceptedAutoTableFieldTypes.has(field.fieldType));
};
export const acceptedAutoTableFieldTypes = new Set([
    FieldType.Id,
    FieldType.Boolean,
    FieldType.Color,
    FieldType.Computed,
    FieldType.DateTime,
    FieldType.Email,
    FieldType.EncryptedString,
    FieldType.Enum,
    FieldType.File,
    FieldType.Json,
    FieldType.Number,
    FieldType.RichText,
    FieldType.RoleAssignments,
    FieldType.String,
    FieldType.Url,
    FieldType.RichText,
    // Relationships
    FieldType.BelongsTo,
    FieldType.HasMany,
    FieldType.HasOne,
]);
/**
 * Retrieve the roles available in the Gadget app from the backend
 * @internal
 */
export const useRolesMetadata = () => {
    const [{ data, fetching, error }] = useGadgetQuery({
        query: RolesMetadataQuery,
    });
    return {
        roles: data?.gadgetMeta.roles,
        fetching,
        error: error ? ErrorWrapper.forClientSideError(error) : undefined,
    };
};
export const isActionMetadata = (metadata) => {
    return "action" in metadata;
};
//# sourceMappingURL=metadata.js.map