"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isActionMetadata = exports.useRolesMetadata = exports.acceptedAutoTableFieldTypes = exports.filterAutoTableFieldList = exports.filterAutoFormFieldList = exports.useActionMetadata = exports.useModelMetadata = exports.FieldType = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const GadgetProvider_js_1 = require("./GadgetProvider.js");
const gql_js_1 = require("./internal/gql/gql.js");
const graphql_js_1 = require("./internal/gql/graphql.js");
const useGadgetQuery_js_1 = require("./useGadgetQuery.js");
const utils_js_1 = require("./utils.js");
/**
 * The enum of all possible field types in Gadget's type system
 * @internal
 */
exports.FieldType = graphql_js_1.GadgetFieldType;
const RelatedModelFieldFragment = (0, gql_js_1.graphql)(/* GraphQL */ `
  fragment RelatedModelFieldFragment on GadgetModelField {
    name
    apiIdentifier
    fieldType
  }
`);
const FieldMetadataFragment = (0, gql_js_1.graphql)(/* GraphQL */ `
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
      ... on GadgetHasManyThroughConfig {
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
        joinModel {
          key
          apiIdentifier
          namespace
          defaultDisplayField {
            name
            apiIdentifier
            fieldType
          }
        }
        inverseJoinModelField {
          apiIdentifier
        }
        inverseRelatedModelField {
          apiIdentifier
        }
      }
      ... on GadgetHasManyConfig {
        isJoinModelHasManyField
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
const ModelMetadataQuery = (0, gql_js_1.graphql)(/* GraphQL */ `
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
const _SubFieldsFragment = (0, gql_js_1.graphql)(/* GraphQL */ `
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
const ModelActionMetadataQuery = (0, gql_js_1.graphql)(/* GraphQL */ `
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
const GlobalActionMetadataQuery = (0, gql_js_1.graphql)(/* GraphQL */ `
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
const RolesMetadataQuery = (0, gql_js_1.graphql)(/* GraphQL */ `
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
const useModelMetadata = (apiIdentifier, namespace) => {
    const [{ data, fetching, error }] = (0, useGadgetQuery_js_1.useGadgetQuery)({
        query: ModelMetadataQuery,
        variables: {
            apiIdentifier,
            namespace,
            includeRelatedFields: true,
        },
    });
    return {
        metadata: data ? (0, api_client_core_1.assert)(data.gadgetMeta.model, "no model metadata found from Gadget API") : data,
        fetching,
        error: error ? utils_js_1.ErrorWrapper.forClientSideError(error) : undefined,
    };
};
exports.useModelMetadata = useModelMetadata;
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
const useActionMetadata = (actionFunction) => {
    const api = (0, GadgetProvider_js_1.useApi)();
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
        const modelManager = (0, api_client_core_1.assert)((0, utils_js_1.getModelManager)(api, actionFunction.modelApiIdentifier, actionFunction.namespace), "no model manager found for action function");
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
    const [{ data, fetching, error }] = (0, useGadgetQuery_js_1.useGadgetQuery)({
        query,
        variables,
    });
    let metadata = undefined;
    if (data && !error) {
        if (actionFunction.type === "globalAction") {
            metadata = (0, api_client_core_1.assert)(data.gadgetMeta.globalAction, "no global action metadata found from Gadget API");
        }
        else {
            metadata = data.gadgetMeta.model;
            (0, api_client_core_1.assert)(metadata?.action, "no model metadata found from Gadget API");
        }
    }
    return {
        metadata,
        fetching,
        error: error ? utils_js_1.ErrorWrapper.forClientSideError(error) : undefined,
    };
};
exports.useActionMetadata = useActionMetadata;
/**
 * @internal
 */
const filterAutoFormFieldList = (fields, options) => {
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
    // Remove `hasMany` fields that emerge from `hasManyThrough` fields that are not actually model fields
    subset = subset.filter((field) => !isJoinModelHasManyField(field));
    // Filter out fields that are not supported by the form
    const validFieldTypeSubset = subset.filter(options?.isUpsertAction ? isAcceptedUpsertFieldType : isAcceptedFieldType);
    return options?.include
        ? validFieldTypeSubset // Everything explicitly included is valid
        : validFieldTypeSubset.filter(isNotRelatedToSpecialModelFilter); // Without explicit includes, filter out relationships to special models
};
exports.filterAutoFormFieldList = filterAutoFormFieldList;
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
const isAcceptedUpsertFieldType = (field) => field.fieldType === exports.FieldType.Id || isAcceptedFieldType(field);
const isJoinModelHasManyField = (field) => field.fieldType === exports.FieldType.HasMany &&
    field.configuration.__typename === "GadgetHasManyConfig" &&
    field.configuration.isJoinModelHasManyField;
const acceptedAutoFormFieldTypes = new Set([
    exports.FieldType.Boolean,
    exports.FieldType.Color,
    exports.FieldType.Computed, // Not rendered as an input
    exports.FieldType.DateTime,
    exports.FieldType.Email,
    exports.FieldType.EncryptedString,
    exports.FieldType.Enum,
    exports.FieldType.File,
    exports.FieldType.Json,
    exports.FieldType.Number,
    exports.FieldType.Password,
    exports.FieldType.RichText,
    exports.FieldType.RoleAssignments,
    exports.FieldType.String,
    exports.FieldType.Url,
    exports.FieldType.Vector, // Not rendered as an input
    exports.FieldType.RichText,
    // Relationships
    exports.FieldType.BelongsTo,
    exports.FieldType.HasMany,
    exports.FieldType.HasOne,
]);
const filterAutoTableFieldList = (fields) => {
    let subset = fields;
    // Don't include relationships in the table by default
    subset = subset.filter((field) => field.fieldType !== graphql_js_1.GadgetFieldType.HasOne &&
        field.fieldType !== graphql_js_1.GadgetFieldType.HasMany &&
        field.fieldType !== graphql_js_1.GadgetFieldType.BelongsTo);
    // Filter out fields that are not supported by the form
    return subset.filter((field) => exports.acceptedAutoTableFieldTypes.has(field.fieldType));
};
exports.filterAutoTableFieldList = filterAutoTableFieldList;
exports.acceptedAutoTableFieldTypes = new Set([
    exports.FieldType.Id,
    exports.FieldType.Boolean,
    exports.FieldType.Color,
    exports.FieldType.Computed,
    exports.FieldType.DateTime,
    exports.FieldType.Email,
    exports.FieldType.EncryptedString,
    exports.FieldType.Enum,
    exports.FieldType.File,
    exports.FieldType.Json,
    exports.FieldType.Number,
    exports.FieldType.RichText,
    exports.FieldType.RoleAssignments,
    exports.FieldType.String,
    exports.FieldType.Url,
    exports.FieldType.RichText,
    // Relationships
    exports.FieldType.BelongsTo,
    exports.FieldType.HasMany,
    exports.FieldType.HasManyThrough,
    exports.FieldType.HasOne,
]);
/**
 * Retrieve the roles available in the Gadget app from the backend
 * @internal
 */
const useRolesMetadata = () => {
    const [{ data, fetching, error }] = (0, useGadgetQuery_js_1.useGadgetQuery)({
        query: RolesMetadataQuery,
    });
    return {
        roles: data?.gadgetMeta.roles,
        fetching,
        error: error ? utils_js_1.ErrorWrapper.forClientSideError(error) : undefined,
    };
};
exports.useRolesMetadata = useRolesMetadata;
const isActionMetadata = (metadata) => {
    return "action" in metadata;
};
exports.isActionMetadata = isActionMetadata;
//# sourceMappingURL=metadata.js.map