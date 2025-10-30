import { assert } from "@gadgetinc/client-hooks";
import type { ActionFunction, AnyClient, AnyErrorWrapper, GlobalActionFunction } from "@gadgetinc/core";
import type { ResultOf } from "@graphql-typed-document-node/core";
import type { DocumentNode } from "graphql";
import { useApi, useCoreImplementation, useQuery as useGadgetQuery } from "./hooks.js";
import { graphql } from "./internal/gql/gql.js";
import { GadgetFieldType, type FieldMetadataFragment as FieldMetadataFragmentType } from "./internal/gql/graphql.js";
import { getModelManager, groupPaths } from "./utils.js";

/**
 * The enum of all possible field types in Gadget's type system
 * @internal
 */
export const FieldType = GadgetFieldType;

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: Exclude<T[P], null> };
type Clarify<T> = T extends Record<string, unknown> ? { [Key in keyof T]: T[Key] } : T;

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
        joinModelHasManyFieldApiIdentifier
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
        searchable
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
          isUpsertMetaAction
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

type MapConfigurationKey<T, K extends string, NewType> = T extends any
  ? {
      [P in keyof T]: P extends K ? NewType : T[P];
    }
  : never;

type MapUnionConfigurationKey<U, K extends string, NewType> = U extends any ? MapConfigurationKey<U, K, NewType> : never;

/**
 * The metadata blob retrieved for one field from the backend
 * Uses this weird typescript type to augment the raw GraphQL return type with the effect of the treeification which points to rich related model metadata
 */
export interface FieldMetadata {
  __typename?: "GadgetModelField" | "GadgetObjectField";
  name: string;
  apiIdentifier: string;
  fieldType: GadgetFieldType;
  requiredArgumentForInput: boolean;
  sortable?: boolean;
  filterable?: boolean;
  configuration: MapUnionConfigurationKey<
    MapUnionConfigurationKey<FieldMetadataFragmentType["configuration"], "relatedModel", ModelMetadata>,
    "joinModel",
    ModelMetadata
  > & {
    fields?: FieldMetadata[];
  };
}

/**
 * The metadata blob retrieved for one model from the backend
 */
export type ModelMetadata = Clarify<
  Omit<Exclude<ResultOf<typeof ModelMetadataQuery>["gadgetMeta"]["modelAndRelatedModels"][number], null | undefined>, "fields"> & {
    fields: FieldMetadata[];
  }
>;

/**
 * The metadata blob retrieved for one model action from the backend
 */
export type ActionMetadata = Clarify<
  Omit<
    Exclude<Exclude<ResultOf<typeof ModelActionMetadataQuery>["gadgetMeta"]["model"], null | undefined>["action"], null | undefined>,
    "inputFields"
  > & {
    inputFields: FieldMetadata[];
  }
>;

/**
 * The metadata blob retrieved for one model with one specific action from the backend
 */
export type ModelWithOneActionMetadata = Clarify<
  Omit<Exclude<ResultOf<typeof ModelActionMetadataQuery>["gadgetMeta"]["model"], null | undefined>, "action"> & { action: ActionMetadata }
>;

export type GlobalActionMetadata = Clarify<
  Omit<Exclude<ResultOf<typeof GlobalActionMetadataQuery>["gadgetMeta"]["globalAction"], null | undefined>, "inputFields"> & {
    inputFields: FieldMetadata[];
  }
>;

/** The gadget metaschema returns models as a flat list of models to avoid infinite recursion. Re-build the circular references among all the related models client side here */
const treeifyModelMetadata = <T extends { key: string; fields: FieldMetadata[]; action?: ActionMetadata }>(models: T[]): T => {
  const modelsByKey: Record<string, T> = {};
  for (const model of models) {
    modelsByKey[model.key] = model;
  }

  const setupRelatedModelReference = (fields: FieldMetadata[]) => {
    for (const field of fields) {
      if ("relatedModel" in field.configuration && field.configuration.relatedModel) {
        (field.configuration as any).relatedModel = modelsByKey[field.configuration.relatedModel.key];
      }

      if ("joinModel" in field.configuration && field.configuration.joinModel) {
        (field.configuration as any).joinModel = modelsByKey[field.configuration.joinModel.key];
      }

      if (field.configuration.__typename == "GadgetObjectFieldConfig" && "fields" in field.configuration) {
        setupRelatedModelReference(field.configuration.fields as FieldMetadata[]);
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
export const useModelMetadata = (
  apiIdentifier: string,
  namespace: string[]
): { metadata: ModelMetadata | undefined; fetching: boolean; error: AnyErrorWrapper | undefined } => {
  const coreImplementation = useCoreImplementation();
  const [{ data, fetching, error }] = useGadgetQuery({
    query: ModelMetadataQuery,
    variables: {
      apiIdentifier,
      namespace,
    },
  });

  return {
    metadata: data
      ? assert(
          treeifyModelMetadata(data.gadgetMeta.modelAndRelatedModels as unknown as ModelMetadata[]),
          "no model metadata found in response from Gadget API"
        )
      : data,
    fetching,
    error: error ? coreImplementation.wrapClientSideError(error) : undefined,
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
): { metadata: ModelWithOneActionMetadata | GlobalActionMetadata | undefined; fetching: boolean; error: AnyErrorWrapper | undefined } => {
  const api = useApi();
  const coreImplementation = useCoreImplementation();

  let query: DocumentNode;
  let variables: Record<string, any>;

  if (actionFunction.type === "globalAction") {
    query = GlobalActionMetadataQuery;
    variables = {
      apiIdentifier: getGlobalActionApiIdentifier(api, actionFunction),
      namespace: actionFunction.namespace,
    };
  } else if (actionFunction.type === "action") {
    query = ModelActionMetadataQuery;
    const modelManager = assert(
      getModelManager(api, coreImplementation, actionFunction.modelApiIdentifier, actionFunction.namespace),
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
      // Fallback to string parsing if the action name is not found
      actionName = actionFunction.operationName.slice(0, -actionFunction.modelApiIdentifier.length);
      if (!actionName || !(actionName in modelManager)) {
        throw new Error("action function not found on model manager");
      }
    }
    variables = {
      modelApiIdentifier: actionFunction.modelApiIdentifier,
      modelNamespace: actionFunction.namespace,
      action: actionName,
    };
  } else {
    throw new Error(`Invalid action function type`);
  }

  const [{ data, fetching, error }] = useGadgetQuery({
    query,
    variables,
  });

  let metadata: ModelWithOneActionMetadata | GlobalActionMetadata | undefined = undefined;

  if (data && !error) {
    if ("globalAction" in data.gadgetMeta) {
      metadata = assert(
        (data as ResultOf<typeof GlobalActionMetadataQuery>).gadgetMeta.globalAction,
        "no global action metadata found from Gadget API"
      ) as GlobalActionMetadata;
    } else {
      const typedData = data as ResultOf<typeof ModelActionMetadataQuery>;
      assert(typedData.gadgetMeta.model?.action, "no model metadata found from Gadget API");

      // merge fields fetched from one spot with action fetched from the other spot
      const mainModel = {
        ...typedData.gadgetMeta.model,
        ...typedData.gadgetMeta.modelAndRelatedModels[0],
      };

      const models: ModelMetadata[] = [mainModel, ...typedData.gadgetMeta.modelAndRelatedModels.slice(1)] as any;
      metadata = treeifyModelMetadata(models) as unknown as ModelWithOneActionMetadata;
    }
  }

  return {
    metadata,
    fetching,
    error: error ? coreImplementation.wrapClientSideError(error) : undefined,
  };
};

/**
 * @internal
 */
export const buildAutoFormFieldList = (
  fields: FieldMetadata[] | undefined,
  options?: { include?: string[]; exclude?: string[]; isUpsertAction?: boolean }
): [string, FieldMetadata][] => {
  if (!fields) {
    return [];
  }

  let subset: [string, FieldMetadata][] = fields.map((field) => [field.apiIdentifier, field]);

  if (options?.include && options?.exclude) {
    throw new Error("Cannot use both 'include' and 'exclude' options at the same time");
  }

  if (options?.include) {
    // When including fields, the order will match the order of the `include` array
    subset = [];
    const includeGroups = groupPaths(options.include);

    for (const [rootApiIdentifier, childIdentifiers] of Object.entries(includeGroups)) {
      const metadataField = fields.find((field) => field.apiIdentifier === rootApiIdentifier);
      if (metadataField) {
        subset.push([rootApiIdentifier, metadataField]);

        if (
          childIdentifiers.length > 0 &&
          "relatedModel" in metadataField.configuration &&
          metadataField.configuration.relatedModel?.fields
        ) {
          const childFields = buildAutoFormFieldList(metadataField.configuration.relatedModel.fields, {
            include: childIdentifiers,
          });
          subset.push(
            ...childFields.map(
              ([childApiIdentifier, childField]) => [`${rootApiIdentifier}.${childApiIdentifier}`, childField] as [string, FieldMetadata]
            )
          );
        }

        if (childIdentifiers.length > 0 && "joinModel" in metadataField.configuration && metadataField.configuration.joinModel?.fields) {
          const joinGroup = groupPaths(childIdentifiers);

          for (const [joinRootApiIdentifier, joinChildIdentifiers] of Object.entries(joinGroup)) {
            if (metadataField.configuration.joinModel.apiIdentifier === joinRootApiIdentifier) {
              const joinFields = buildAutoFormFieldList(metadataField.configuration.joinModel.fields, {
                include: joinChildIdentifiers,
              });

              subset.push(
                ...joinFields.map(
                  ([childApiIdentifier, childField]) =>
                    [`${rootApiIdentifier}.${joinRootApiIdentifier}.${childApiIdentifier}`, childField] as [string, FieldMetadata]
                )
              );
            }
          }
        }
      }
    }
  }

  if (options?.exclude) {
    const excludes = new Set(options.exclude);
    subset = subset.filter(([_, field]) => !excludes.has(field.apiIdentifier));
  }

  // Filter out fields that are not supported by the form
  const validFieldTypeSubset = subset.filter(([_, field]) =>
    options?.isUpsertAction ? isAcceptedUpsertFieldType(field) : isAcceptedFieldType(field)
  );

  return options?.include
    ? validFieldTypeSubset // Everything explicitly included is valid
    : validFieldTypeSubset.filter(([_, field]) => isNotRelatedToSpecialModelFilter(field)); // Without explicit includes, filter out relationships to special models
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
  FieldType.HasManyThrough,
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
  const coreImplementation = useCoreImplementation();

  return {
    roles: data?.gadgetMeta.roles,
    fetching,
    error: error ? coreImplementation.wrapClientSideError(error) : undefined,
  };
};

export const isModelActionMetadata = (
  metadata: ModelWithOneActionMetadata | GlobalActionMetadata
): metadata is ModelWithOneActionMetadata => {
  return "action" in metadata;
};
