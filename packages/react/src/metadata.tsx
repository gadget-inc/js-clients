import type { ActionFunction, AnyClient, GlobalActionFunction } from "@gadgetinc/api-client-core";
import { assert } from "@gadgetinc/api-client-core";
import type { ResultOf } from "@graphql-typed-document-node/core";
import { DocumentNode } from "graphql";
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

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: Exclude<T[P], null> };
type Clarify<T> = T extends Record<string, unknown> ? { [Key in keyof T]: T[Key] } : T;

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

const ModelMetadataQuery = graphql(/* GraphQL */ `
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

export type ModelMetadata = Exclude<ResultOf<typeof ModelMetadataQuery>["gadgetMeta"]["model"], null | undefined>;
export type ActionMetadata = Clarify<
  WithRequired<Exclude<ResultOf<typeof ModelActionMetadataQuery>["gadgetMeta"]["model"], null | undefined>, "action">
>;
export type GlobalActionMetadata = Clarify<
  Exclude<ResultOf<typeof GlobalActionMetadataQuery>["gadgetMeta"]["globalAction"], null | undefined>
>;

export type FieldMetadata = ResultOf<typeof FieldMetadataFragment>;

/**
 * Retrieve a given Gadget model's metadata from the backend
 * @internal
 */
export const useModelMetadata = (apiIdentifier: string, namespace: string[]) => {
  const [{ data, fetching, error }] = useGadgetQuery({
    query: ModelMetadataQuery,
    variables: { apiIdentifier, namespace },
  });

  return {
    metadata: data ? assert(data.gadgetMeta.model, "no model metadata found from Gadget API") : data,
    fetching,
    error: error ? ErrorWrapper.forClientSideError(error) : undefined,
  };
};

const getGlobalActionApiIdentifier = (api: AnyClient, fn: GlobalActionFunction<any>) => {
  let cursor: any = api;
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
export const useActionMetadata = (actionFunction: ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>) => {
  const api = useApi();

  let query: DocumentNode;
  let variables: Record<string, any>;

  if (actionFunction.type === "globalAction") {
    query = GlobalActionMetadataQuery;
    variables = {
      apiIdentifier: getGlobalActionApiIdentifier(api, actionFunction),
      namespace: actionFunction.namespace,
    };
  } else {
    query = ModelActionMetadataQuery;
    const modelManager = assert(
      getModelManager(api, actionFunction.modelApiIdentifier, actionFunction.namespace),
      "no model manager found for action function"
    );
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

  const [{ data, fetching, error }] = useGadgetQuery({
    query,
    variables,
  });

  let metadata: ActionMetadata | GlobalActionMetadata | undefined = undefined;

  if (data && !error) {
    if (actionFunction.type === "globalAction") {
      metadata = assert(data.gadgetMeta.globalAction, "no global action metadata found from Gadget API");
    } else {
      metadata = data.gadgetMeta.model as ActionMetadata;
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
export const filterAutoFormFieldList = (
  fields: FieldMetadata[] | undefined,
  options?: { include?: string[]; exclude?: string[] }
): FieldMetadata[] => {
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
      throw new Error(
        `The following required fields are missing from the include list: ${missingRequiredFields
          .map((field) => field.apiIdentifier)
          .join(", ")}`
      );
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
  return subset.filter((field) => acceptedAutoFormFieldTypes.has(field.fieldType));
};

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

export const filterAutoTableFieldList = (fields: FieldMetadata[] | undefined, options?: { include?: string[] }) => {
  if (!fields) {
    return [];
  }

  let subset = fields;

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

  // Filter out fields that are not supported by the form
  return subset.filter((field) => acceptedAutoTableFieldTypes.has(field.fieldType));
};

const acceptedAutoTableFieldTypes = new Set([
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
  FieldType.Password,
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

export const isActionMetadata = (metadata: ActionMetadata | GlobalActionMetadata): metadata is ActionMetadata => {
  return "action" in metadata;
};
