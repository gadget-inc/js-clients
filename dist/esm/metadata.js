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
const _FieldMetadataFragment = graphql(/* GraphQL */ `
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
          name
          apiIdentifier
          namespace
        }
        inverseField {
          apiIdentifier
        }
        joinModel {
          key
          apiIdentifier
          namespace
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
          name
          apiIdentifier
          namespace
        }
        inverseField {
          apiIdentifier
        }
      }
      ... on GadgetHasOneConfig {
        relatedModel {
          key
          name
          apiIdentifier
          namespace
        }
        inverseField {
          apiIdentifier
        }
      }
      ... on GadgetBelongsToConfig {
        relatedModel {
          key
          name
          apiIdentifier
          namespace
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
  query GetModelMetadata($apiIdentifier: String!, $namespace: [String!]) {
    gadgetMeta {
      modelAndRelatedModels(apiIdentifier: $apiIdentifier, namespace: $namespace) {
        key
        apiIdentifier
        namespace
        name
        fields {
          ...FieldMetadata
        }
        defaultDisplayField {
          name
          apiIdentifier
          fieldType
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
  query ModelActionMetadata($modelApiIdentifier: String!, $modelNamespace: [String!], $action: String!) {
    gadgetMeta {
      modelAndRelatedModels(apiIdentifier: $modelApiIdentifier, namespace: $modelNamespace) {
        key
        name
        namespace
        apiIdentifier
        defaultRecord
        fields {
          ...FieldMetadata
          ...SubFields
        }
        defaultDisplayField {
          name
          apiIdentifier
          fieldType
        }
      }
      model(apiIdentifier: $modelApiIdentifier, namespace: $modelNamespace) {
        key
        name
        namespace
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
const GlobalActionMetadataQuery = graphql(/* GraphQL */ `
  query GlobalActionMetadata($apiIdentifier: String!, $namespace: [String!]) {
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
/** The gadget metaschema returns models as a flat list of models to avoid infinite recursion. Re-build the circular references among all the related models client side here */
const treeifyModelMetadata = (models) => {
    const modelsByKey = {};
    for (const model of models) {
        modelsByKey[model.key] = model;
    }
    const setupRelatedModelReference = (fields) => {
        for (const field of fields) {
            if ("relatedModel" in field.configuration && field.configuration.relatedModel) {
                field.configuration.relatedModel = modelsByKey[field.configuration.relatedModel.key];
            }
            if (field.configuration.__typename == "GadgetObjectFieldConfig" && "fields" in field.configuration) {
                setupRelatedModelReference(field.configuration.fields);
            }
        }
    };
    for (const model of models) {
        setupRelatedModelReference(model.fields);
        if ("action" in model && model.action) {
            setupRelatedModelReference(model.action.inputFields);
        }
    }
    return models[0];
};
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
        },
    });
    return {
        metadata: data
            ? assert(treeifyModelMetadata(data.gadgetMeta.modelAndRelatedModels), "no model metadata found in response from Gadget API")
            : data,
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
            // Fallback to string parsing if the action name is not found
            try {
                actionName = actionFunction.operationName.slice(0, -actionFunction.modelApiIdentifier.length);
                if (!actionName)
                    throw new Error("action function not found on model manager");
            }
            catch (e) {
                throw new Error("action function not found on model manager");
            }
        }
        variables = {
            modelApiIdentifier: actionFunction.modelApiIdentifier,
            modelNamespace: actionFunction.namespace,
            action: actionName,
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
        if ("globalAction" in data.gadgetMeta) {
            metadata = assert(data.gadgetMeta.globalAction, "no global action metadata found from Gadget API");
        }
        else {
            const typedData = data;
            assert(typedData.gadgetMeta.model?.action, "no model metadata found from Gadget API");
            // merge fields fetched from one spot with action fetched from the other spot
            const mainModel = {
                ...typedData.gadgetMeta.model,
                ...typedData.gadgetMeta.modelAndRelatedModels[0],
            };
            const models = [mainModel, ...typedData.gadgetMeta.modelAndRelatedModels.slice(1)];
            metadata = treeifyModelMetadata(models);
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
    // Remove `hasMany` fields that emerge from `hasManyThrough` fields that are not actually model fields
    subset = subset.filter((field) => !isJoinModelHasManyField(field));
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
const isJoinModelHasManyField = (field) => field.fieldType === FieldType.HasMany &&
    field.configuration.__typename === "GadgetHasManyConfig" &&
    field.configuration.isJoinModelHasManyField;
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
    FieldType.HasManyThrough,
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
export const isModelActionMetadata = (metadata) => {
    return "action" in metadata;
};
//# sourceMappingURL=metadata.js.map