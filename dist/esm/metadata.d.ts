import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import { ErrorWrapper } from "@gadgetinc/api-client-core";
import type { ResultOf } from "@graphql-typed-document-node/core";
import { GadgetFieldType, type FieldMetadataFragment as FieldMetadataFragmentType } from "./internal/gql/graphql.js";
/**
 * The enum of all possible field types in Gadget's type system
 * @internal
 */
export declare const FieldType: typeof GadgetFieldType;
type Clarify<T> = T extends Record<string, unknown> ? {
    [Key in keyof T]: T[Key];
} : T;
declare const ModelMetadataQuery: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./internal/gql/graphql.js").GetModelMetadataQuery, import("./internal/gql/graphql.js").Exact<{
    apiIdentifier: string;
    namespace?: import("./internal/gql/graphql.js").InputMaybe<string | string[]> | undefined;
}>>;
declare const ModelActionMetadataQuery: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./internal/gql/graphql.js").ModelActionMetadataQuery, import("./internal/gql/graphql.js").Exact<{
    modelApiIdentifier: string;
    modelNamespace?: import("./internal/gql/graphql.js").InputMaybe<string | string[]> | undefined;
    action: string;
}>>;
declare const GlobalActionMetadataQuery: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./internal/gql/graphql.js").GlobalActionMetadataQuery, import("./internal/gql/graphql.js").Exact<{
    apiIdentifier: string;
    namespace?: import("./internal/gql/graphql.js").InputMaybe<string | string[]> | undefined;
}>>;
type MapConfigurationKey<T, K extends string, NewType> = T extends any ? {
    [P in keyof T]: P extends K ? NewType : T[P];
} : never;
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
    configuration: MapUnionConfigurationKey<MapUnionConfigurationKey<FieldMetadataFragmentType["configuration"], "relatedModel", ModelMetadata>, "joinModel", ModelMetadata> & {
        fields?: FieldMetadata[];
    };
}
/**
 * The metadata blob retrieved for one model from the backend
 */
export type ModelMetadata = Clarify<Omit<Exclude<ResultOf<typeof ModelMetadataQuery>["gadgetMeta"]["modelAndRelatedModels"][number], null | undefined>, "fields"> & {
    fields: FieldMetadata[];
}>;
/**
 * The metadata blob retrieved for one model action from the backend
 */
export type ActionMetadata = Clarify<Omit<Exclude<Exclude<ResultOf<typeof ModelActionMetadataQuery>["gadgetMeta"]["model"], null | undefined>["action"], null | undefined>, "inputFields"> & {
    inputFields: FieldMetadata[];
}>;
/**
 * The metadata blob retrieved for one model with one specific action from the backend
 */
export type ModelWithOneActionMetadata = Clarify<Omit<Exclude<ResultOf<typeof ModelActionMetadataQuery>["gadgetMeta"]["model"], null | undefined>, "action"> & {
    action: ActionMetadata;
}>;
export type GlobalActionMetadata = Clarify<Omit<Exclude<ResultOf<typeof GlobalActionMetadataQuery>["gadgetMeta"]["globalAction"], null | undefined>, "inputFields"> & {
    inputFields: FieldMetadata[];
}>;
/**
 * Retrieve a given Gadget model's metadata from the backend
 * @internal
 */
export declare const useModelMetadata: (apiIdentifier: string, namespace: string[]) => {
    metadata: ModelMetadata | undefined;
    fetching: boolean;
    error: ErrorWrapper | undefined;
};
/**
 * Retrieve a given Gadget model action's metadata from the backend
 * @internal
 */
export declare const useActionMetadata: (actionFunction: ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>) => {
    metadata: ModelWithOneActionMetadata | GlobalActionMetadata | undefined;
    fetching: boolean;
    error: ErrorWrapper | undefined;
};
/**
 * @internal
 */
export declare const buildAutoFormFieldList: (fields: FieldMetadata[] | undefined, options?: {
    include?: string[];
    exclude?: string[];
    isUpsertAction?: boolean;
}) => [string, FieldMetadata][];
export declare const filterAutoTableFieldList: (fields: FieldMetadata[]) => FieldMetadata[];
export declare const acceptedAutoTableFieldTypes: Set<GadgetFieldType>;
/**
 * Retrieve the roles available in the Gadget app from the backend
 * @internal
 */
export declare const useRolesMetadata: () => {
    roles: {
        __typename?: "GadgetRole" | undefined;
        name: string;
        key: string;
        selectable: boolean;
    }[] | undefined;
    fetching: boolean;
    error: ErrorWrapper | undefined;
};
export declare const isModelActionMetadata: (metadata: ModelWithOneActionMetadata | GlobalActionMetadata) => metadata is {
    __typename?: "GadgetModel" | undefined;
    key: string;
    namespace?: string[] | null | undefined;
    name: string;
    apiIdentifier: string;
    defaultRecord: any;
    action: ActionMetadata;
};
export {};
