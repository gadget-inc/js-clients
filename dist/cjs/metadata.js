"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRolesMetadata = exports.filterFieldList = exports.useActionMetadata = exports.useModelMetadata = exports.FieldType = void 0;
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
      ... on GadgetHasManyConfig {
        relatedModel {
          apiIdentifier
          namespace
        }
      }
      ... on GadgetBelongsToConfig {
        relatedModel {
          apiIdentifier
          namespace
        }
      }
      ... on GadgetEnumConfig {
        allowMultiple
        options {
          name
          color
        }
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
        action(apiIdentifier: $action) {
          name
          apiIdentifier
          inputFields {
            ...FieldMetadata
            ...SubFields
          }
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
/**
 * Retrieve a given Gadget model's metadata from the backend
 * @internal
 */
const useActionMetadata = (actionFunction) => {
    const api = (0, GadgetProvider_js_1.useApi)();
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
    const [{ data, fetching, error }] = (0, useGadgetQuery_js_1.useGadgetQuery)({
        query: ModelActionMetadataQuery,
        variables: {
            modelApiIdentifier: actionFunction.modelApiIdentifier,
            modelNamespace: actionFunction.namespace,
            action: actionName,
        },
    });
    if (data) {
        (0, api_client_core_1.assert)(data.gadgetMeta.model?.action, "no model metadata found from Gadget API");
    }
    return {
        metadata: data ? data.gadgetMeta.model : data,
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
    if (options?.fields) {
        return options.fields.map((apiIdentifier) => {
            const field = fields.find((field) => field.apiIdentifier === apiIdentifier);
            if (!field)
                throw new Error(`form trying to include field ${apiIdentifier} that doesn't exist on the model`);
            return field;
        });
    }
    if (options?.include) {
        const includes = new Set(options.include);
        subset = subset.filter((field) => includes.has(field.apiIdentifier));
    }
    if (options?.select) {
        const includes = new Set(Object.keys(options.select).filter((key) => options.select[key]));
        subset = subset.filter((field) => includes.has(field.apiIdentifier));
    }
    if (options?.exclude) {
        const excludes = new Set(options.exclude);
        subset = subset.filter((field) => !excludes.has(field.apiIdentifier));
    }
    // if no explicit selection has been given, filter down to the field types we know we have support for
    const explicitSet = options?.fields ?? options?.include ?? options?.exclude ?? options?.select;
    if (!explicitSet) {
        subset = subset.filter((field) => {
            switch (field.fieldType) {
                case exports.FieldType.String:
                case exports.FieldType.Number:
                case exports.FieldType.Email:
                case exports.FieldType.Password:
                case exports.FieldType.EncryptedString:
                case exports.FieldType.Color:
                case exports.FieldType.Url:
                case exports.FieldType.Boolean:
                case exports.FieldType.DateTime:
                case exports.FieldType.Json:
                case exports.FieldType.Enum:
                case exports.FieldType.File:
                case exports.FieldType.RoleAssignments:
                case exports.FieldType.BelongsTo:
                case exports.FieldType.HasMany:
                    return true;
                default:
                    return false;
            }
        });
    }
    return subset;
};
exports.filterFieldList = filterFieldList;
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
//# sourceMappingURL=metadata.js.map