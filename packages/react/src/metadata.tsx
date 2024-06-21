import type { ActionFunction } from "@gadgetinc/api-client-core";
import { assert } from "@gadgetinc/api-client-core";
import type { ResultOf } from "@graphql-typed-document-node/core";
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

const RolesMetadataQuery = graphql(/* GraphQL */ `
  query RolesMetadata {
    gadgetMeta {
      roles {
        name
        selectable
      }
    }
  }
`);

export type ModelMetadata = Exclude<ResultOf<typeof ModelMetadataQuery>["gadgetMeta"]["model"], null | undefined>;
export type ActionMetadata = Clarify<
  WithRequired<Exclude<ResultOf<typeof ModelActionMetadataQuery>["gadgetMeta"]["model"], null | undefined>, "action">
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

/**
 * Retrieve a given Gadget model's metadata from the backend
 * @internal
 */
export const useActionMetadata = (actionFunction: ActionFunction<any, any, any, any, any>) => {
  const api = useApi();
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

  const [{ data, fetching, error }] = useGadgetQuery({
    query: ModelActionMetadataQuery,
    variables: {
      modelApiIdentifier: actionFunction.modelApiIdentifier,
      modelNamespace: actionFunction.namespace,
      action: actionName,
    },
  });

  if (data) {
    assert(data.gadgetMeta.model?.action, "no model metadata found from Gadget API");
  }

  return {
    metadata: data ? (data.gadgetMeta.model as ActionMetadata) : data,
    fetching,
    error: error ? ErrorWrapper.forClientSideError(error) : undefined,
  };
};

/**
 * @internal
 */
export const filterFieldList = (
  fields: FieldMetadata[] | undefined,
  options?: { include?: string[]; exclude?: string[]; fields?: string[]; select?: Record<string, any> }
): FieldMetadata[] => {
  if (!fields) {
    return [];
  }
  let subset = fields;
  if (options?.fields) {
    return options.fields.map((apiIdentifier) => {
      const field = fields.find((field) => field.apiIdentifier === apiIdentifier);
      if (!field) throw new Error(`form trying to include field ${apiIdentifier} that doesn't exist on the model`);
      return field;
    });
  }
  if (options?.include) {
    const includes = new Set(options.include);
    subset = subset.filter((field) => includes.has(field.apiIdentifier));
  }
  if (options?.select) {
    const includes = new Set(Object.keys(options.select).filter((key) => options.select![key]));
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
        case FieldType.String:
        case FieldType.Number:
        case FieldType.Email:
        case FieldType.Password:
        case FieldType.EncryptedString:
        case FieldType.Color:
        case FieldType.Url:
        case FieldType.Boolean:
        case FieldType.DateTime:
        case FieldType.Json:
        case FieldType.Enum:
        case FieldType.File:
        case FieldType.RoleAssignments:
        case FieldType.BelongsTo:
        case FieldType.HasMany:
          return true;
        default:
          return false;
      }
    });
  }

  return subset;
};

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
