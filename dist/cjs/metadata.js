"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isActionMetadata = exports.useRolesMetadata = exports.filterFieldList = exports.useActionMetadata = exports.useModelMetadata = exports.FieldType = void 0;
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
      ... on GadgetHasManyConfig {
        relatedModel {
          apiIdentifier
          namespace
          defaultDisplayField {
            apiIdentifier
          }
        }
        inverseField {
          apiIdentifier
        }
      }
      ... on GadgetHasOneConfig {
        relatedModel {
          apiIdentifier
          namespace
          defaultDisplayField {
            apiIdentifier
          }
        }
        inverseField {
          apiIdentifier
        }
      }
      ... on GadgetBelongsToConfig {
        relatedModel {
          apiIdentifier
          namespace
          defaultDisplayField {
            apiIdentifier
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
  query GetModelMetadata($apiIdentifier: String!, $namespace: [String!]) {
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
  query ModelActionMetadata($modelApiIdentifier: String!, $modelNamespace: [String!], $action: String!) {
    gadgetMeta {
      model(apiIdentifier: $modelApiIdentifier, namespace: $modelNamespace) {
        name
        apiIdentifier
        defaultRecord
        action(apiIdentifier: $action) {
          name
          apiIdentifier
          operatesWithRecordIdentity
          inputFields {
            ...FieldMetadata
            ...SubFields
          }
        }
      }
    }
  }
`);
const GlobalActionMetadataQuery = (0, gql_js_1.graphql)(/* GraphQL */ `
  query GlobalActionMetadata($apiIdentifier: String!, $namespace: [String!]) {
    gadgetMeta {
      globalAction(apiIdentifier: $apiIdentifier, namespace: $namespace) {
        name
        apiIdentifier
        inputFields {
          ...FieldMetadata
          ...SubFields
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
        variables: { apiIdentifier, namespace },
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
        };
    }
    else {
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
        };
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
const filterFieldList = (fields, options) => {
    if (!fields) {
        return [];
    }
    let subset = fields;
    const requiredFields = fields.filter((field) => field.requiredArgumentForInput && field.apiIdentifier !== "id");
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
        //if any of the required fields are not included, throw an error as they must be included
        const missingRequiredFields = requiredFields.filter((field) => !includes.has(field.apiIdentifier));
        if (missingRequiredFields.length) {
            throw new Error(`The following required fields are missing from the include list: ${missingRequiredFields
                .map((field) => field.apiIdentifier)
                .join(", ")}`);
        }
    }
    if (options?.exclude) {
        const excludes = new Set(options.exclude);
        if (options?.include && options.include.some((fieldApiId) => excludes.has(fieldApiId))) {
            throw new Error("Cannot include and exclude the same field");
        }
        options.exclude.forEach((excludedField) => {
            if (requiredFields.some((field) => field.apiIdentifier === excludedField)) {
                throw new Error(`The field ${excludedField} is required and cannot be excluded.`);
            }
        });
        subset = subset.filter((field) => !excludes.has(field.apiIdentifier));
    }
    // Filter out fields that are not supported by the form
    return subset.filter((field) => acceptedFieldTypes.has(field.fieldType));
};
exports.filterFieldList = filterFieldList;
const acceptedFieldTypes = new Set([
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
    // Relationships
    exports.FieldType.BelongsTo,
    exports.FieldType.HasMany,
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