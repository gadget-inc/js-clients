import type { ActionFunction, AnyClient, GlobalActionFunction } from "@gadgetinc/api-client-core";
import { assert } from "@gadgetinc/api-client-core";
import type { ResultOf } from "@graphql-typed-document-node/core";
import type { DocumentNode } from "graphql";
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

const _RelatedModelFieldFragment = graphql(/* GraphQL */ `
  fragment RelatedModelFieldFragmentDepth3 on GadgetModelField {
    ...BaseFieldMetadata
    __typename
  }

  fragment RelatedModelFieldFragmentDepth2 on GadgetModelField {
    ...BaseFieldMetadata
    configuration {
      ... on GadgetHasManyThroughConfig {
        relatedModel {
          fields @include(if: $includeRelatedFields) {
            ...RelatedModelFieldFragmentDepth3
            __typename
          }
        }
      }
      ... on GadgetHasManyConfig {
        relatedModel {
          fields @include(if: $includeRelatedFields) {
            ...RelatedModelFieldFragmentDepth3
            __typename
          }
        }
      }
      ... on GadgetHasOneConfig {
        relatedModel {
          fields @include(if: $includeRelatedFields) {
            ...RelatedModelFieldFragmentDepth3
            __typename
          }
        }
      }
      ... on GadgetBelongsToConfig {
        relatedModel {
          fields @include(if: $includeRelatedFields) {
            ...RelatedModelFieldFragmentDepth3
            __typename
          }
        }
      }
    }
    __typename
  }

  fragment RelatedModelFieldFragmentDepth1 on GadgetModelField {
    ...BaseFieldMetadata
    configuration {
      ... on GadgetHasManyThroughConfig {
        relatedModel {
          fields @include(if: $includeRelatedFields) {
            ...RelatedModelFieldFragmentDepth2
            __typename
          }
        }
      }
      ... on GadgetHasManyConfig {
        relatedModel {
          fields @include(if: $includeRelatedFields) {
            ...RelatedModelFieldFragmentDepth2
            __typename
          }
        }
      }
      ... on GadgetHasOneConfig {
        relatedModel {
          fields @include(if: $includeRelatedFields) {
            ...RelatedModelFieldFragmentDepth2
            __typename
          }
        }
      }
      ... on GadgetBelongsToConfig {
        relatedModel {
          fields @include(if: $includeRelatedFields) {
            ...RelatedModelFieldFragmentDepth2
            __typename
          }
        }
      }
    }
    __typename
  }

  fragment RelatedModelFieldFragment on GadgetModelField {
    ...RelatedModelFieldFragmentDepth1
  }
`);

const FieldMetadataFragment = graphql(/* GraphQL */ `
  fragment BaseFieldMetadata on GadgetField {
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

  fragment FieldMetadata on GadgetField {
    ...BaseFieldMetadata
    configuration {
      ... on GadgetHasManyThroughConfig {
        relatedModel {
          fields @include(if: $includeRelatedFields) {
            ...RelatedModelFieldFragment
          }
        }
      }
      ... on GadgetHasManyConfig {
        relatedModel {
          fields @include(if: $includeRelatedFields) {
            ...RelatedModelFieldFragment
          }
        }
      }
      ... on GadgetHasOneConfig {
        relatedModel {
          fields @include(if: $includeRelatedFields) {
            ...RelatedModelFieldFragment
          }
        }
      }
      ... on GadgetBelongsToConfig {
        relatedModel {
          fields @include(if: $includeRelatedFields) {
            ...RelatedModelFieldFragment
          }
        }
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
export const useActionMetadata = (
  actionFunction: ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>
): { metadata: ActionMetadata | GlobalActionMetadata | undefined; fetching: boolean; error: ErrorWrapper | undefined } => {
  const api = useApi();

  let query: DocumentNode;
  let variables: Record<string, any>;

  if (actionFunction.type === "globalAction") {
    query = GlobalActionMetadataQuery;
    variables = {
      apiIdentifier: getGlobalActionApiIdentifier(api, actionFunction),
      namespace: actionFunction.namespace,
      includeRelatedFields: false,
    };
  } else if (actionFunction.type === "action") {
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
      includeRelatedFields: true,
    };
  } else {
    throw new Error(`Invalid action function type`);
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
  options?: { include?: string[]; exclude?: string[]; isUpsertAction?: boolean }
): FieldMetadata[] => {
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
const isNotRelatedToSpecialModelFilter = (field: FieldMetadata) => {
  const relatedModelKey =
    field.configuration &&
    "relatedModel" in field.configuration &&
    field.configuration.relatedModel &&
    field.configuration.relatedModel.key;
  return typeof relatedModelKey === "string" ? !specialModelKeys.has(relatedModelKey) : true;
};

const specialModelKeys = new Set(["DataModel-Shopify-Shop"]);

const isAcceptedFieldType = (field: FieldMetadata) => acceptedAutoFormFieldTypes.has(field.fieldType);
const isAcceptedUpsertFieldType = (field: FieldMetadata) => field.fieldType === FieldType.Id || isAcceptedFieldType(field);

const isJoinModelHasManyField = (field: FieldMetadata) =>
  field.fieldType === FieldType.HasMany &&
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

export const filterAutoTableFieldList = (fields: FieldMetadata[]) => {
  let subset = fields;

  // Don't include relationships in the table by default
  subset = subset.filter(
    (field) =>
      field.fieldType !== GadgetFieldType.HasOne &&
      field.fieldType !== GadgetFieldType.HasMany &&
      field.fieldType !== GadgetFieldType.BelongsTo
  );

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

export const isActionMetadata = (metadata: ActionMetadata | GlobalActionMetadata): metadata is ActionMetadata => {
  return "action" in metadata;
};
