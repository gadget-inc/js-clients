import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import type { ResultOf } from "@graphql-typed-document-node/core";
import { GadgetFieldType } from "./internal/gql/graphql.js";
import { ErrorWrapper } from "./utils.js";
/**
 * The enum of all possible field types in Gadget's type system
 * @internal
 */
export declare const FieldType: typeof GadgetFieldType;
type WithRequired<T, K extends keyof T> = T & {
    [P in K]-?: Exclude<T[P], null>;
};
type Clarify<T> = T extends Record<string, unknown> ? {
    [Key in keyof T]: T[Key];
} : T;
declare const FieldMetadataFragment: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./internal/gql/graphql.js").FieldMetadataFragment, unknown>;
declare const ModelMetadataQuery: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./internal/gql/graphql.js").GetModelMetadataQuery, import("./internal/gql/graphql.js").Exact<{
    apiIdentifier: string;
    namespace?: import("./internal/gql/graphql.js").InputMaybe<string | string[]> | undefined;
    includeRelatedFields: boolean;
}>>;
declare const ModelActionMetadataQuery: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./internal/gql/graphql.js").ModelActionMetadataQuery, import("./internal/gql/graphql.js").Exact<{
    modelApiIdentifier: string;
    modelNamespace?: import("./internal/gql/graphql.js").InputMaybe<string | string[]> | undefined;
    action: string;
    includeRelatedFields: boolean;
}>>;
/**
 * Global actions don't have related fields, but $includeRelatedFields needed for the fragment
 */
declare const GlobalActionMetadataQuery: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./internal/gql/graphql.js").GlobalActionMetadataQuery, import("./internal/gql/graphql.js").Exact<{
    apiIdentifier: string;
    namespace?: import("./internal/gql/graphql.js").InputMaybe<string | string[]> | undefined;
    includeRelatedFields?: import("./internal/gql/graphql.js").InputMaybe<boolean> | undefined;
}>>;
export type ModelMetadata = Exclude<ResultOf<typeof ModelMetadataQuery>["gadgetMeta"]["model"], null | undefined>;
export type ActionMetadata = Clarify<WithRequired<Exclude<ResultOf<typeof ModelActionMetadataQuery>["gadgetMeta"]["model"], null | undefined>, "action">>;
export type GlobalActionMetadata = Clarify<Exclude<ResultOf<typeof GlobalActionMetadataQuery>["gadgetMeta"]["globalAction"], null | undefined>>;
export type FieldMetadata = ResultOf<typeof FieldMetadataFragment>;
/**
 * Retrieve a given Gadget model's metadata from the backend
 * @internal
 */
export declare const useModelMetadata: (apiIdentifier: string, namespace: string[]) => {
    metadata: {
        __typename?: "GadgetModel" | undefined;
        apiIdentifier: string;
        namespace?: string[] | null | undefined;
        name: string;
        fields: {
            __typename?: "GadgetModelField" | undefined;
            sortable: boolean;
            filterable: boolean;
            name: string;
            apiIdentifier: string;
            fieldType: GadgetFieldType;
            requiredArgumentForInput: boolean;
            configuration: {
                __typename: "GadgetBelongsToConfig";
                fieldType: GadgetFieldType;
                relatedModel?: {
                    __typename?: "GadgetModel" | undefined;
                    key: string;
                    apiIdentifier: string;
                    namespace?: string[] | null | undefined;
                    defaultDisplayField: {
                        __typename?: "GadgetModelField" | undefined;
                        name: string;
                        apiIdentifier: string;
                        fieldType: GadgetFieldType;
                    };
                    fields?: {
                        __typename?: "GadgetModelField" | undefined;
                        name: string;
                        apiIdentifier: string;
                        fieldType: GadgetFieldType;
                    }[] | undefined;
                } | null | undefined;
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetDateTimeConfig";
                includeTime: boolean;
                fieldType: GadgetFieldType;
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetEnumConfig";
                allowMultiple: boolean;
                allowOther: boolean;
                fieldType: GadgetFieldType;
                options: {
                    __typename?: "GadgetEnumOption" | undefined;
                    name: string;
                    color: string;
                }[];
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetGenericFieldConfig";
                fieldType: GadgetFieldType;
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetHasManyConfig";
                fieldType: GadgetFieldType;
                relatedModel?: {
                    __typename?: "GadgetModel" | undefined;
                    key: string;
                    apiIdentifier: string;
                    namespace?: string[] | null | undefined;
                    defaultDisplayField: {
                        __typename?: "GadgetModelField" | undefined;
                        name: string;
                        apiIdentifier: string;
                        fieldType: GadgetFieldType;
                    };
                    fields?: {
                        __typename?: "GadgetModelField" | undefined;
                        name: string;
                        apiIdentifier: string;
                        fieldType: GadgetFieldType;
                    }[] | undefined;
                } | null | undefined;
                inverseField?: {
                    __typename?: "GadgetModelField" | undefined;
                    apiIdentifier: string;
                } | null | undefined;
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetHasOneConfig";
                fieldType: GadgetFieldType;
                relatedModel?: {
                    __typename?: "GadgetModel" | undefined;
                    key: string;
                    apiIdentifier: string;
                    namespace?: string[] | null | undefined;
                    defaultDisplayField: {
                        __typename?: "GadgetModelField" | undefined;
                        name: string;
                        apiIdentifier: string;
                        fieldType: GadgetFieldType;
                    };
                    fields?: {
                        __typename?: "GadgetModelField" | undefined;
                        name: string;
                        apiIdentifier: string;
                        fieldType: GadgetFieldType;
                    }[] | undefined;
                } | null | undefined;
                inverseField?: {
                    __typename?: "GadgetModelField" | undefined;
                    apiIdentifier: string;
                } | null | undefined;
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetNumberConfig";
                decimals?: number | null | undefined;
                fieldType: GadgetFieldType;
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetObjectFieldConfig";
                fieldType: GadgetFieldType;
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            };
        }[];
    } | undefined;
    fetching: boolean;
    error: ErrorWrapper | undefined;
};
/**
 * Retrieve a given Gadget model action's metadata from the backend
 * @internal
 */
export declare const useActionMetadata: (actionFunction: ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>) => {
    metadata: {
        __typename?: "GadgetModel" | undefined;
        name: string;
        apiIdentifier: string;
        defaultRecord: any;
        action: {
            __typename?: "GadgetAction" | undefined;
            name: string;
            apiIdentifier: string;
            operatesWithRecordIdentity: boolean;
            isDeleteAction: boolean;
            inputFields: {
                __typename?: "GadgetObjectField" | undefined;
                name: string;
                apiIdentifier: string;
                fieldType: GadgetFieldType;
                requiredArgumentForInput: boolean;
                configuration: {
                    __typename: "GadgetBelongsToConfig";
                    fieldType: GadgetFieldType;
                    relatedModel?: {
                        __typename?: "GadgetModel" | undefined;
                        key: string;
                        apiIdentifier: string;
                        namespace?: string[] | null | undefined;
                        defaultDisplayField: {
                            __typename?: "GadgetModelField" | undefined;
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                        };
                        fields?: {
                            __typename?: "GadgetModelField" | undefined;
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                        }[] | undefined;
                    } | null | undefined;
                    validations: ({
                        __typename: "GadgetGenericFieldValidation";
                        name: string;
                        specID: string;
                    } | {
                        __typename: "GadgetOnlyImageFileFieldValidation";
                        name: string;
                        specID: string;
                        allowAnimatedImages: boolean;
                    } | {
                        __typename: "GadgetRangeFieldValidation";
                        name: string;
                        specID: string;
                        min?: number | null | undefined;
                        max?: number | null | undefined;
                    } | {
                        __typename: "GadgetRegexFieldValidation";
                        name: string;
                        specID: string;
                        pattern?: string | null | undefined;
                    } | null)[];
                } | {
                    __typename: "GadgetDateTimeConfig";
                    includeTime: boolean;
                    fieldType: GadgetFieldType;
                    validations: ({
                        __typename: "GadgetGenericFieldValidation";
                        name: string;
                        specID: string;
                    } | {
                        __typename: "GadgetOnlyImageFileFieldValidation";
                        name: string;
                        specID: string;
                        allowAnimatedImages: boolean;
                    } | {
                        __typename: "GadgetRangeFieldValidation";
                        name: string;
                        specID: string;
                        min?: number | null | undefined;
                        max?: number | null | undefined;
                    } | {
                        __typename: "GadgetRegexFieldValidation";
                        name: string;
                        specID: string;
                        pattern?: string | null | undefined;
                    } | null)[];
                } | {
                    __typename: "GadgetEnumConfig";
                    allowMultiple: boolean;
                    allowOther: boolean;
                    fieldType: GadgetFieldType;
                    options: {
                        __typename?: "GadgetEnumOption" | undefined;
                        name: string;
                        color: string;
                    }[];
                    validations: ({
                        __typename: "GadgetGenericFieldValidation";
                        name: string;
                        specID: string;
                    } | {
                        __typename: "GadgetOnlyImageFileFieldValidation";
                        name: string;
                        specID: string;
                        allowAnimatedImages: boolean;
                    } | {
                        __typename: "GadgetRangeFieldValidation";
                        name: string;
                        specID: string;
                        min?: number | null | undefined;
                        max?: number | null | undefined;
                    } | {
                        __typename: "GadgetRegexFieldValidation";
                        name: string;
                        specID: string;
                        pattern?: string | null | undefined;
                    } | null)[];
                } | {
                    __typename: "GadgetGenericFieldConfig";
                    fieldType: GadgetFieldType;
                    validations: ({
                        __typename: "GadgetGenericFieldValidation";
                        name: string;
                        specID: string;
                    } | {
                        __typename: "GadgetOnlyImageFileFieldValidation";
                        name: string;
                        specID: string;
                        allowAnimatedImages: boolean;
                    } | {
                        __typename: "GadgetRangeFieldValidation";
                        name: string;
                        specID: string;
                        min?: number | null | undefined;
                        max?: number | null | undefined;
                    } | {
                        __typename: "GadgetRegexFieldValidation";
                        name: string;
                        specID: string;
                        pattern?: string | null | undefined;
                    } | null)[];
                } | {
                    __typename: "GadgetHasManyConfig";
                    fieldType: GadgetFieldType;
                    relatedModel?: {
                        __typename?: "GadgetModel" | undefined;
                        key: string;
                        apiIdentifier: string;
                        namespace?: string[] | null | undefined;
                        defaultDisplayField: {
                            __typename?: "GadgetModelField" | undefined;
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                        };
                        fields?: {
                            __typename?: "GadgetModelField" | undefined;
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                        }[] | undefined;
                    } | null | undefined;
                    inverseField?: {
                        __typename?: "GadgetModelField" | undefined;
                        apiIdentifier: string;
                    } | null | undefined;
                    validations: ({
                        __typename: "GadgetGenericFieldValidation";
                        name: string;
                        specID: string;
                    } | {
                        __typename: "GadgetOnlyImageFileFieldValidation";
                        name: string;
                        specID: string;
                        allowAnimatedImages: boolean;
                    } | {
                        __typename: "GadgetRangeFieldValidation";
                        name: string;
                        specID: string;
                        min?: number | null | undefined;
                        max?: number | null | undefined;
                    } | {
                        __typename: "GadgetRegexFieldValidation";
                        name: string;
                        specID: string;
                        pattern?: string | null | undefined;
                    } | null)[];
                } | {
                    __typename: "GadgetHasOneConfig";
                    fieldType: GadgetFieldType;
                    relatedModel?: {
                        __typename?: "GadgetModel" | undefined;
                        key: string;
                        apiIdentifier: string;
                        namespace?: string[] | null | undefined;
                        defaultDisplayField: {
                            __typename?: "GadgetModelField" | undefined;
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                        };
                        fields?: {
                            __typename?: "GadgetModelField" | undefined;
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                        }[] | undefined;
                    } | null | undefined;
                    inverseField?: {
                        __typename?: "GadgetModelField" | undefined;
                        apiIdentifier: string;
                    } | null | undefined;
                    validations: ({
                        __typename: "GadgetGenericFieldValidation";
                        name: string;
                        specID: string;
                    } | {
                        __typename: "GadgetOnlyImageFileFieldValidation";
                        name: string;
                        specID: string;
                        allowAnimatedImages: boolean;
                    } | {
                        __typename: "GadgetRangeFieldValidation";
                        name: string;
                        specID: string;
                        min?: number | null | undefined;
                        max?: number | null | undefined;
                    } | {
                        __typename: "GadgetRegexFieldValidation";
                        name: string;
                        specID: string;
                        pattern?: string | null | undefined;
                    } | null)[];
                } | {
                    __typename: "GadgetNumberConfig";
                    decimals?: number | null | undefined;
                    fieldType: GadgetFieldType;
                    validations: ({
                        __typename: "GadgetGenericFieldValidation";
                        name: string;
                        specID: string;
                    } | {
                        __typename: "GadgetOnlyImageFileFieldValidation";
                        name: string;
                        specID: string;
                        allowAnimatedImages: boolean;
                    } | {
                        __typename: "GadgetRangeFieldValidation";
                        name: string;
                        specID: string;
                        min?: number | null | undefined;
                        max?: number | null | undefined;
                    } | {
                        __typename: "GadgetRegexFieldValidation";
                        name: string;
                        specID: string;
                        pattern?: string | null | undefined;
                    } | null)[];
                } | {
                    __typename: "GadgetObjectFieldConfig";
                    name?: string | null | undefined;
                    fieldType: GadgetFieldType;
                    fields: {
                        __typename?: "GadgetModelField" | undefined;
                        sortable: boolean;
                        filterable: boolean;
                        name: string;
                        apiIdentifier: string;
                        fieldType: GadgetFieldType;
                        requiredArgumentForInput: boolean;
                        configuration: {
                            __typename: "GadgetBelongsToConfig";
                            fieldType: GadgetFieldType;
                            relatedModel?: {
                                __typename?: "GadgetModel" | undefined;
                                key: string;
                                apiIdentifier: string;
                                namespace?: string[] | null | undefined;
                                defaultDisplayField: {
                                    __typename?: "GadgetModelField" | undefined;
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                };
                                fields?: {
                                    __typename?: "GadgetModelField" | undefined;
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                }[] | undefined;
                            } | null | undefined;
                            validations: ({
                                __typename: "GadgetGenericFieldValidation";
                                name: string;
                                specID: string;
                            } | {
                                __typename: "GadgetOnlyImageFileFieldValidation";
                                name: string;
                                specID: string;
                                allowAnimatedImages: boolean;
                            } | {
                                __typename: "GadgetRangeFieldValidation";
                                name: string;
                                specID: string;
                                min?: number | null | undefined;
                                max?: number | null | undefined;
                            } | {
                                __typename: "GadgetRegexFieldValidation";
                                name: string;
                                specID: string;
                                pattern?: string | null | undefined;
                            } | null)[];
                        } | {
                            __typename: "GadgetDateTimeConfig";
                            includeTime: boolean;
                            fieldType: GadgetFieldType;
                            validations: ({
                                __typename: "GadgetGenericFieldValidation";
                                name: string;
                                specID: string;
                            } | {
                                __typename: "GadgetOnlyImageFileFieldValidation";
                                name: string;
                                specID: string;
                                allowAnimatedImages: boolean;
                            } | {
                                __typename: "GadgetRangeFieldValidation";
                                name: string;
                                specID: string;
                                min?: number | null | undefined;
                                max?: number | null | undefined;
                            } | {
                                __typename: "GadgetRegexFieldValidation";
                                name: string;
                                specID: string;
                                pattern?: string | null | undefined;
                            } | null)[];
                        } | {
                            __typename: "GadgetEnumConfig";
                            allowMultiple: boolean;
                            allowOther: boolean;
                            fieldType: GadgetFieldType;
                            options: {
                                __typename?: "GadgetEnumOption" | undefined;
                                name: string;
                                color: string;
                            }[];
                            validations: ({
                                __typename: "GadgetGenericFieldValidation";
                                name: string;
                                specID: string;
                            } | {
                                __typename: "GadgetOnlyImageFileFieldValidation";
                                name: string;
                                specID: string;
                                allowAnimatedImages: boolean;
                            } | {
                                __typename: "GadgetRangeFieldValidation";
                                name: string;
                                specID: string;
                                min?: number | null | undefined;
                                max?: number | null | undefined;
                            } | {
                                __typename: "GadgetRegexFieldValidation";
                                name: string;
                                specID: string;
                                pattern?: string | null | undefined;
                            } | null)[];
                        } | {
                            __typename: "GadgetGenericFieldConfig";
                            fieldType: GadgetFieldType;
                            validations: ({
                                __typename: "GadgetGenericFieldValidation";
                                name: string;
                                specID: string;
                            } | {
                                __typename: "GadgetOnlyImageFileFieldValidation";
                                name: string;
                                specID: string;
                                allowAnimatedImages: boolean;
                            } | {
                                __typename: "GadgetRangeFieldValidation";
                                name: string;
                                specID: string;
                                min?: number | null | undefined;
                                max?: number | null | undefined;
                            } | {
                                __typename: "GadgetRegexFieldValidation";
                                name: string;
                                specID: string;
                                pattern?: string | null | undefined;
                            } | null)[];
                        } | {
                            __typename: "GadgetHasManyConfig";
                            fieldType: GadgetFieldType;
                            relatedModel?: {
                                __typename?: "GadgetModel" | undefined;
                                key: string;
                                apiIdentifier: string;
                                namespace?: string[] | null | undefined;
                                defaultDisplayField: {
                                    __typename?: "GadgetModelField" | undefined;
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                };
                                fields?: {
                                    __typename?: "GadgetModelField" | undefined;
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                }[] | undefined;
                            } | null | undefined;
                            inverseField?: {
                                __typename?: "GadgetModelField" | undefined;
                                apiIdentifier: string;
                            } | null | undefined;
                            validations: ({
                                __typename: "GadgetGenericFieldValidation";
                                name: string;
                                specID: string;
                            } | {
                                __typename: "GadgetOnlyImageFileFieldValidation";
                                name: string;
                                specID: string;
                                allowAnimatedImages: boolean;
                            } | {
                                __typename: "GadgetRangeFieldValidation";
                                name: string;
                                specID: string;
                                min?: number | null | undefined;
                                max?: number | null | undefined;
                            } | {
                                __typename: "GadgetRegexFieldValidation";
                                name: string;
                                specID: string;
                                pattern?: string | null | undefined;
                            } | null)[];
                        } | {
                            __typename: "GadgetHasOneConfig";
                            fieldType: GadgetFieldType;
                            relatedModel?: {
                                __typename?: "GadgetModel" | undefined;
                                key: string;
                                apiIdentifier: string;
                                namespace?: string[] | null | undefined;
                                defaultDisplayField: {
                                    __typename?: "GadgetModelField" | undefined;
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                };
                                fields?: {
                                    __typename?: "GadgetModelField" | undefined;
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                }[] | undefined;
                            } | null | undefined;
                            inverseField?: {
                                __typename?: "GadgetModelField" | undefined;
                                apiIdentifier: string;
                            } | null | undefined;
                            validations: ({
                                __typename: "GadgetGenericFieldValidation";
                                name: string;
                                specID: string;
                            } | {
                                __typename: "GadgetOnlyImageFileFieldValidation";
                                name: string;
                                specID: string;
                                allowAnimatedImages: boolean;
                            } | {
                                __typename: "GadgetRangeFieldValidation";
                                name: string;
                                specID: string;
                                min?: number | null | undefined;
                                max?: number | null | undefined;
                            } | {
                                __typename: "GadgetRegexFieldValidation";
                                name: string;
                                specID: string;
                                pattern?: string | null | undefined;
                            } | null)[];
                        } | {
                            __typename: "GadgetNumberConfig";
                            decimals?: number | null | undefined;
                            fieldType: GadgetFieldType;
                            validations: ({
                                __typename: "GadgetGenericFieldValidation";
                                name: string;
                                specID: string;
                            } | {
                                __typename: "GadgetOnlyImageFileFieldValidation";
                                name: string;
                                specID: string;
                                allowAnimatedImages: boolean;
                            } | {
                                __typename: "GadgetRangeFieldValidation";
                                name: string;
                                specID: string;
                                min?: number | null | undefined;
                                max?: number | null | undefined;
                            } | {
                                __typename: "GadgetRegexFieldValidation";
                                name: string;
                                specID: string;
                                pattern?: string | null | undefined;
                            } | null)[];
                        } | {
                            __typename: "GadgetObjectFieldConfig";
                            name?: string | null | undefined;
                            fieldType: GadgetFieldType;
                            fields: {
                                __typename?: "GadgetModelField" | undefined;
                                sortable: boolean;
                                filterable: boolean;
                                name: string;
                                apiIdentifier: string;
                                fieldType: GadgetFieldType;
                                requiredArgumentForInput: boolean;
                                configuration: {
                                    __typename: "GadgetBelongsToConfig";
                                    fieldType: GadgetFieldType;
                                    relatedModel?: {
                                        __typename?: "GadgetModel" | undefined;
                                        key: string;
                                        apiIdentifier: string;
                                        namespace?: string[] | null | undefined;
                                        defaultDisplayField: {
                                            __typename?: "GadgetModelField" | undefined;
                                            name: string;
                                            apiIdentifier: string;
                                            fieldType: GadgetFieldType;
                                        };
                                        fields?: {
                                            __typename?: "GadgetModelField" | undefined;
                                            name: string;
                                            apiIdentifier: string;
                                            fieldType: GadgetFieldType;
                                        }[] | undefined;
                                    } | null | undefined;
                                    validations: ({
                                        __typename: "GadgetGenericFieldValidation";
                                        name: string;
                                        specID: string;
                                    } | {
                                        __typename: "GadgetOnlyImageFileFieldValidation";
                                        name: string;
                                        specID: string;
                                        allowAnimatedImages: boolean;
                                    } | {
                                        __typename: "GadgetRangeFieldValidation";
                                        name: string;
                                        specID: string;
                                        min?: number | null | undefined;
                                        max?: number | null | undefined;
                                    } | {
                                        __typename: "GadgetRegexFieldValidation";
                                        name: string;
                                        specID: string;
                                        pattern?: string | null | undefined;
                                    } | null)[];
                                } | {
                                    __typename: "GadgetDateTimeConfig";
                                    includeTime: boolean;
                                    fieldType: GadgetFieldType;
                                    validations: ({
                                        __typename: "GadgetGenericFieldValidation";
                                        name: string;
                                        specID: string;
                                    } | {
                                        __typename: "GadgetOnlyImageFileFieldValidation";
                                        name: string;
                                        specID: string;
                                        allowAnimatedImages: boolean;
                                    } | {
                                        __typename: "GadgetRangeFieldValidation";
                                        name: string;
                                        specID: string;
                                        min?: number | null | undefined;
                                        max?: number | null | undefined;
                                    } | {
                                        __typename: "GadgetRegexFieldValidation";
                                        name: string;
                                        specID: string;
                                        pattern?: string | null | undefined;
                                    } | null)[];
                                } | {
                                    __typename: "GadgetEnumConfig";
                                    allowMultiple: boolean;
                                    allowOther: boolean;
                                    fieldType: GadgetFieldType;
                                    options: {
                                        __typename?: "GadgetEnumOption" | undefined;
                                        name: string;
                                        color: string;
                                    }[];
                                    validations: ({
                                        __typename: "GadgetGenericFieldValidation";
                                        name: string;
                                        specID: string;
                                    } | {
                                        __typename: "GadgetOnlyImageFileFieldValidation";
                                        name: string;
                                        specID: string;
                                        allowAnimatedImages: boolean;
                                    } | {
                                        __typename: "GadgetRangeFieldValidation";
                                        name: string;
                                        specID: string;
                                        min?: number | null | undefined;
                                        max?: number | null | undefined;
                                    } | {
                                        __typename: "GadgetRegexFieldValidation";
                                        name: string;
                                        specID: string;
                                        pattern?: string | null | undefined;
                                    } | null)[];
                                } | {
                                    __typename: "GadgetGenericFieldConfig";
                                    fieldType: GadgetFieldType;
                                    validations: ({
                                        __typename: "GadgetGenericFieldValidation";
                                        name: string;
                                        specID: string;
                                    } | {
                                        __typename: "GadgetOnlyImageFileFieldValidation";
                                        name: string;
                                        specID: string;
                                        allowAnimatedImages: boolean;
                                    } | {
                                        __typename: "GadgetRangeFieldValidation";
                                        name: string;
                                        specID: string;
                                        min?: number | null | undefined;
                                        max?: number | null | undefined;
                                    } | {
                                        __typename: "GadgetRegexFieldValidation";
                                        name: string;
                                        specID: string;
                                        pattern?: string | null | undefined;
                                    } | null)[];
                                } | {
                                    __typename: "GadgetHasManyConfig";
                                    fieldType: GadgetFieldType;
                                    relatedModel?: {
                                        __typename?: "GadgetModel" | undefined;
                                        key: string;
                                        apiIdentifier: string;
                                        namespace?: string[] | null | undefined;
                                        defaultDisplayField: {
                                            __typename?: "GadgetModelField" | undefined;
                                            name: string;
                                            apiIdentifier: string;
                                            fieldType: GadgetFieldType;
                                        };
                                        fields?: {
                                            __typename?: "GadgetModelField" | undefined;
                                            name: string;
                                            apiIdentifier: string;
                                            fieldType: GadgetFieldType;
                                        }[] | undefined;
                                    } | null | undefined;
                                    inverseField?: {
                                        __typename?: "GadgetModelField" | undefined;
                                        apiIdentifier: string;
                                    } | null | undefined;
                                    validations: ({
                                        __typename: "GadgetGenericFieldValidation";
                                        name: string;
                                        specID: string;
                                    } | {
                                        __typename: "GadgetOnlyImageFileFieldValidation";
                                        name: string;
                                        specID: string;
                                        allowAnimatedImages: boolean;
                                    } | {
                                        __typename: "GadgetRangeFieldValidation";
                                        name: string;
                                        specID: string;
                                        min?: number | null | undefined;
                                        max?: number | null | undefined;
                                    } | {
                                        __typename: "GadgetRegexFieldValidation";
                                        name: string;
                                        specID: string;
                                        pattern?: string | null | undefined;
                                    } | null)[];
                                } | {
                                    __typename: "GadgetHasOneConfig";
                                    fieldType: GadgetFieldType;
                                    relatedModel?: {
                                        __typename?: "GadgetModel" | undefined;
                                        key: string;
                                        apiIdentifier: string;
                                        namespace?: string[] | null | undefined;
                                        defaultDisplayField: {
                                            __typename?: "GadgetModelField" | undefined;
                                            name: string;
                                            apiIdentifier: string;
                                            fieldType: GadgetFieldType;
                                        };
                                        fields?: {
                                            __typename?: "GadgetModelField" | undefined;
                                            name: string;
                                            apiIdentifier: string;
                                            fieldType: GadgetFieldType;
                                        }[] | undefined;
                                    } | null | undefined;
                                    inverseField?: {
                                        __typename?: "GadgetModelField" | undefined;
                                        apiIdentifier: string;
                                    } | null | undefined;
                                    validations: ({
                                        __typename: "GadgetGenericFieldValidation";
                                        name: string;
                                        specID: string;
                                    } | {
                                        __typename: "GadgetOnlyImageFileFieldValidation";
                                        name: string;
                                        specID: string;
                                        allowAnimatedImages: boolean;
                                    } | {
                                        __typename: "GadgetRangeFieldValidation";
                                        name: string;
                                        specID: string;
                                        min?: number | null | undefined;
                                        max?: number | null | undefined;
                                    } | {
                                        __typename: "GadgetRegexFieldValidation";
                                        name: string;
                                        specID: string;
                                        pattern?: string | null | undefined;
                                    } | null)[];
                                } | {
                                    __typename: "GadgetNumberConfig";
                                    decimals?: number | null | undefined;
                                    fieldType: GadgetFieldType;
                                    validations: ({
                                        __typename: "GadgetGenericFieldValidation";
                                        name: string;
                                        specID: string;
                                    } | {
                                        __typename: "GadgetOnlyImageFileFieldValidation";
                                        name: string;
                                        specID: string;
                                        allowAnimatedImages: boolean;
                                    } | {
                                        __typename: "GadgetRangeFieldValidation";
                                        name: string;
                                        specID: string;
                                        min?: number | null | undefined;
                                        max?: number | null | undefined;
                                    } | {
                                        __typename: "GadgetRegexFieldValidation";
                                        name: string;
                                        specID: string;
                                        pattern?: string | null | undefined;
                                    } | null)[];
                                } | {
                                    __typename: "GadgetObjectFieldConfig";
                                    name?: string | null | undefined;
                                    fieldType: GadgetFieldType;
                                    fields: {
                                        __typename?: "GadgetModelField" | undefined;
                                        sortable: boolean;
                                        filterable: boolean;
                                        name: string;
                                        apiIdentifier: string;
                                        fieldType: GadgetFieldType;
                                        requiredArgumentForInput: boolean;
                                        configuration: {
                                            __typename: "GadgetBelongsToConfig";
                                            fieldType: GadgetFieldType;
                                            relatedModel?: {
                                                __typename?: "GadgetModel" | undefined;
                                                key: string;
                                                apiIdentifier: string;
                                                namespace?: string[] | null | undefined;
                                                defaultDisplayField: {
                                                    __typename?: "GadgetModelField" | undefined;
                                                    name: string;
                                                    apiIdentifier: string;
                                                    fieldType: GadgetFieldType;
                                                };
                                                fields?: {
                                                    __typename?: "GadgetModelField" | undefined;
                                                    name: string;
                                                    apiIdentifier: string;
                                                    fieldType: GadgetFieldType;
                                                }[] | undefined;
                                            } | null | undefined;
                                            validations: ({
                                                __typename: "GadgetGenericFieldValidation";
                                                name: string;
                                                specID: string;
                                            } | {
                                                __typename: "GadgetOnlyImageFileFieldValidation";
                                                name: string;
                                                specID: string;
                                                allowAnimatedImages: boolean;
                                            } | {
                                                __typename: "GadgetRangeFieldValidation";
                                                name: string;
                                                specID: string;
                                                min?: number | null | undefined;
                                                max?: number | null | undefined;
                                            } | {
                                                __typename: "GadgetRegexFieldValidation";
                                                name: string;
                                                specID: string;
                                                pattern?: string | null | undefined;
                                            } | null)[];
                                        } | {
                                            __typename: "GadgetDateTimeConfig";
                                            includeTime: boolean;
                                            fieldType: GadgetFieldType;
                                            validations: ({
                                                __typename: "GadgetGenericFieldValidation";
                                                name: string;
                                                specID: string;
                                            } | {
                                                __typename: "GadgetOnlyImageFileFieldValidation";
                                                name: string;
                                                specID: string;
                                                allowAnimatedImages: boolean;
                                            } | {
                                                __typename: "GadgetRangeFieldValidation";
                                                name: string;
                                                specID: string;
                                                min?: number | null | undefined;
                                                max?: number | null | undefined;
                                            } | {
                                                __typename: "GadgetRegexFieldValidation";
                                                name: string;
                                                specID: string;
                                                pattern?: string | null | undefined;
                                            } | null)[];
                                        } | {
                                            __typename: "GadgetEnumConfig";
                                            allowMultiple: boolean;
                                            allowOther: boolean;
                                            fieldType: GadgetFieldType;
                                            options: {
                                                __typename?: "GadgetEnumOption" | undefined;
                                                name: string;
                                                color: string;
                                            }[];
                                            validations: ({
                                                __typename: "GadgetGenericFieldValidation";
                                                name: string;
                                                specID: string;
                                            } | {
                                                __typename: "GadgetOnlyImageFileFieldValidation";
                                                name: string;
                                                specID: string;
                                                allowAnimatedImages: boolean;
                                            } | {
                                                __typename: "GadgetRangeFieldValidation";
                                                name: string;
                                                specID: string;
                                                min?: number | null | undefined;
                                                max?: number | null | undefined;
                                            } | {
                                                __typename: "GadgetRegexFieldValidation";
                                                name: string;
                                                specID: string;
                                                pattern?: string | null | undefined;
                                            } | null)[];
                                        } | {
                                            __typename: "GadgetGenericFieldConfig";
                                            fieldType: GadgetFieldType;
                                            validations: ({
                                                __typename: "GadgetGenericFieldValidation";
                                                name: string;
                                                specID: string;
                                            } | {
                                                __typename: "GadgetOnlyImageFileFieldValidation";
                                                name: string;
                                                specID: string;
                                                allowAnimatedImages: boolean;
                                            } | {
                                                __typename: "GadgetRangeFieldValidation";
                                                name: string;
                                                specID: string;
                                                min?: number | null | undefined;
                                                max?: number | null | undefined;
                                            } | {
                                                __typename: "GadgetRegexFieldValidation";
                                                name: string;
                                                specID: string;
                                                pattern?: string | null | undefined;
                                            } | null)[];
                                        } | {
                                            __typename: "GadgetHasManyConfig";
                                            fieldType: GadgetFieldType;
                                            relatedModel?: {
                                                __typename?: "GadgetModel" | undefined;
                                                key: string;
                                                apiIdentifier: string;
                                                namespace?: string[] | null | undefined;
                                                defaultDisplayField: {
                                                    __typename?: "GadgetModelField" | undefined;
                                                    name: string;
                                                    apiIdentifier: string;
                                                    fieldType: GadgetFieldType;
                                                };
                                                fields?: {
                                                    __typename?: "GadgetModelField" | undefined;
                                                    name: string;
                                                    apiIdentifier: string;
                                                    fieldType: GadgetFieldType;
                                                }[] | undefined;
                                            } | null | undefined;
                                            inverseField?: {
                                                __typename?: "GadgetModelField" | undefined;
                                                apiIdentifier: string;
                                            } | null | undefined;
                                            validations: ({
                                                __typename: "GadgetGenericFieldValidation";
                                                name: string;
                                                specID: string;
                                            } | {
                                                __typename: "GadgetOnlyImageFileFieldValidation";
                                                name: string;
                                                specID: string;
                                                allowAnimatedImages: boolean;
                                            } | {
                                                __typename: "GadgetRangeFieldValidation";
                                                name: string;
                                                specID: string;
                                                min?: number | null | undefined;
                                                max?: number | null | undefined;
                                            } | {
                                                __typename: "GadgetRegexFieldValidation";
                                                name: string;
                                                specID: string;
                                                pattern?: string | null | undefined;
                                            } | null)[];
                                        } | {
                                            __typename: "GadgetHasOneConfig";
                                            fieldType: GadgetFieldType;
                                            relatedModel?: {
                                                __typename?: "GadgetModel" | undefined;
                                                key: string;
                                                apiIdentifier: string;
                                                namespace?: string[] | null | undefined;
                                                defaultDisplayField: {
                                                    __typename?: "GadgetModelField" | undefined;
                                                    name: string;
                                                    apiIdentifier: string;
                                                    fieldType: GadgetFieldType;
                                                };
                                                fields?: {
                                                    __typename?: "GadgetModelField" | undefined;
                                                    name: string;
                                                    apiIdentifier: string;
                                                    fieldType: GadgetFieldType;
                                                }[] | undefined;
                                            } | null | undefined;
                                            inverseField?: {
                                                __typename?: "GadgetModelField" | undefined;
                                                apiIdentifier: string;
                                            } | null | undefined;
                                            validations: ({
                                                __typename: "GadgetGenericFieldValidation";
                                                name: string;
                                                specID: string;
                                            } | {
                                                __typename: "GadgetOnlyImageFileFieldValidation";
                                                name: string;
                                                specID: string;
                                                allowAnimatedImages: boolean;
                                            } | {
                                                __typename: "GadgetRangeFieldValidation";
                                                name: string;
                                                specID: string;
                                                min?: number | null | undefined;
                                                max?: number | null | undefined;
                                            } | {
                                                __typename: "GadgetRegexFieldValidation";
                                                name: string;
                                                specID: string;
                                                pattern?: string | null | undefined;
                                            } | null)[];
                                        } | {
                                            __typename: "GadgetNumberConfig";
                                            decimals?: number | null | undefined;
                                            fieldType: GadgetFieldType;
                                            validations: ({
                                                __typename: "GadgetGenericFieldValidation";
                                                name: string;
                                                specID: string;
                                            } | {
                                                __typename: "GadgetOnlyImageFileFieldValidation";
                                                name: string;
                                                specID: string;
                                                allowAnimatedImages: boolean;
                                            } | {
                                                __typename: "GadgetRangeFieldValidation";
                                                name: string;
                                                specID: string;
                                                min?: number | null | undefined;
                                                max?: number | null | undefined;
                                            } | {
                                                __typename: "GadgetRegexFieldValidation";
                                                name: string;
                                                specID: string;
                                                pattern?: string | null | undefined;
                                            } | null)[];
                                        } | {
                                            __typename: "GadgetObjectFieldConfig";
                                            fieldType: GadgetFieldType;
                                            validations: ({
                                                __typename: "GadgetGenericFieldValidation";
                                                name: string;
                                                specID: string;
                                            } | {
                                                __typename: "GadgetOnlyImageFileFieldValidation";
                                                name: string;
                                                specID: string;
                                                allowAnimatedImages: boolean;
                                            } | {
                                                __typename: "GadgetRangeFieldValidation";
                                                name: string;
                                                specID: string;
                                                min?: number | null | undefined;
                                                max?: number | null | undefined;
                                            } | {
                                                __typename: "GadgetRegexFieldValidation";
                                                name: string;
                                                specID: string;
                                                pattern?: string | null | undefined;
                                            } | null)[];
                                        };
                                    }[];
                                    validations: ({
                                        __typename: "GadgetGenericFieldValidation";
                                        name: string;
                                        specID: string;
                                    } | {
                                        __typename: "GadgetOnlyImageFileFieldValidation";
                                        name: string;
                                        specID: string;
                                        allowAnimatedImages: boolean;
                                    } | {
                                        __typename: "GadgetRangeFieldValidation";
                                        name: string;
                                        specID: string;
                                        min?: number | null | undefined;
                                        max?: number | null | undefined;
                                    } | {
                                        __typename: "GadgetRegexFieldValidation";
                                        name: string;
                                        specID: string;
                                        pattern?: string | null | undefined;
                                    } | null)[];
                                };
                            }[];
                            validations: ({
                                __typename: "GadgetGenericFieldValidation";
                                name: string;
                                specID: string;
                            } | {
                                __typename: "GadgetOnlyImageFileFieldValidation";
                                name: string;
                                specID: string;
                                allowAnimatedImages: boolean;
                            } | {
                                __typename: "GadgetRangeFieldValidation";
                                name: string;
                                specID: string;
                                min?: number | null | undefined;
                                max?: number | null | undefined;
                            } | {
                                __typename: "GadgetRegexFieldValidation";
                                name: string;
                                specID: string;
                                pattern?: string | null | undefined;
                            } | null)[];
                        };
                    }[];
                    validations: ({
                        __typename: "GadgetGenericFieldValidation";
                        name: string;
                        specID: string;
                    } | {
                        __typename: "GadgetOnlyImageFileFieldValidation";
                        name: string;
                        specID: string;
                        allowAnimatedImages: boolean;
                    } | {
                        __typename: "GadgetRangeFieldValidation";
                        name: string;
                        specID: string;
                        min?: number | null | undefined;
                        max?: number | null | undefined;
                    } | {
                        __typename: "GadgetRegexFieldValidation";
                        name: string;
                        specID: string;
                        pattern?: string | null | undefined;
                    } | null)[];
                };
            }[];
            triggers?: {
                __typename?: "GadgetTrigger" | undefined;
                specID: string;
            }[] | null | undefined;
        };
    } | {
        __typename?: "GadgetGlobalAction" | undefined;
        name: string;
        apiIdentifier: string;
        inputFields: {
            __typename?: "GadgetObjectField" | undefined;
            name: string;
            apiIdentifier: string;
            fieldType: GadgetFieldType;
            requiredArgumentForInput: boolean;
            configuration: {
                __typename: "GadgetBelongsToConfig";
                fieldType: GadgetFieldType;
                relatedModel?: {
                    __typename?: "GadgetModel" | undefined;
                    key: string;
                    apiIdentifier: string;
                    namespace?: string[] | null | undefined;
                    defaultDisplayField: {
                        __typename?: "GadgetModelField" | undefined;
                        name: string;
                        apiIdentifier: string;
                        fieldType: GadgetFieldType;
                    };
                    fields?: {
                        __typename?: "GadgetModelField" | undefined;
                        name: string;
                        apiIdentifier: string;
                        fieldType: GadgetFieldType;
                    }[] | undefined;
                } | null | undefined;
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetDateTimeConfig";
                includeTime: boolean;
                fieldType: GadgetFieldType;
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetEnumConfig";
                allowMultiple: boolean;
                allowOther: boolean;
                fieldType: GadgetFieldType;
                options: {
                    __typename?: "GadgetEnumOption" | undefined;
                    name: string;
                    color: string;
                }[];
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetGenericFieldConfig";
                fieldType: GadgetFieldType;
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetHasManyConfig";
                fieldType: GadgetFieldType;
                relatedModel?: {
                    __typename?: "GadgetModel" | undefined;
                    key: string;
                    apiIdentifier: string;
                    namespace?: string[] | null | undefined;
                    defaultDisplayField: {
                        __typename?: "GadgetModelField" | undefined;
                        name: string;
                        apiIdentifier: string;
                        fieldType: GadgetFieldType;
                    };
                    fields?: {
                        __typename?: "GadgetModelField" | undefined;
                        name: string;
                        apiIdentifier: string;
                        fieldType: GadgetFieldType;
                    }[] | undefined;
                } | null | undefined;
                inverseField?: {
                    __typename?: "GadgetModelField" | undefined;
                    apiIdentifier: string;
                } | null | undefined;
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetHasOneConfig";
                fieldType: GadgetFieldType;
                relatedModel?: {
                    __typename?: "GadgetModel" | undefined;
                    key: string;
                    apiIdentifier: string;
                    namespace?: string[] | null | undefined;
                    defaultDisplayField: {
                        __typename?: "GadgetModelField" | undefined;
                        name: string;
                        apiIdentifier: string;
                        fieldType: GadgetFieldType;
                    };
                    fields?: {
                        __typename?: "GadgetModelField" | undefined;
                        name: string;
                        apiIdentifier: string;
                        fieldType: GadgetFieldType;
                    }[] | undefined;
                } | null | undefined;
                inverseField?: {
                    __typename?: "GadgetModelField" | undefined;
                    apiIdentifier: string;
                } | null | undefined;
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetNumberConfig";
                decimals?: number | null | undefined;
                fieldType: GadgetFieldType;
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetObjectFieldConfig";
                name?: string | null | undefined;
                fieldType: GadgetFieldType;
                fields: {
                    __typename?: "GadgetModelField" | undefined;
                    sortable: boolean;
                    filterable: boolean;
                    name: string;
                    apiIdentifier: string;
                    fieldType: GadgetFieldType;
                    requiredArgumentForInput: boolean;
                    configuration: {
                        __typename: "GadgetBelongsToConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                            __typename?: "GadgetModel" | undefined;
                            key: string;
                            apiIdentifier: string;
                            namespace?: string[] | null | undefined;
                            defaultDisplayField: {
                                __typename?: "GadgetModelField" | undefined;
                                name: string;
                                apiIdentifier: string;
                                fieldType: GadgetFieldType;
                            };
                            fields?: {
                                __typename?: "GadgetModelField" | undefined;
                                name: string;
                                apiIdentifier: string;
                                fieldType: GadgetFieldType;
                            }[] | undefined;
                        } | null | undefined;
                        validations: ({
                            __typename: "GadgetGenericFieldValidation";
                            name: string;
                            specID: string;
                        } | {
                            __typename: "GadgetOnlyImageFileFieldValidation";
                            name: string;
                            specID: string;
                            allowAnimatedImages: boolean;
                        } | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null | undefined;
                            max?: number | null | undefined;
                        } | {
                            __typename: "GadgetRegexFieldValidation";
                            name: string;
                            specID: string;
                            pattern?: string | null | undefined;
                        } | null)[];
                    } | {
                        __typename: "GadgetDateTimeConfig";
                        includeTime: boolean;
                        fieldType: GadgetFieldType;
                        validations: ({
                            __typename: "GadgetGenericFieldValidation";
                            name: string;
                            specID: string;
                        } | {
                            __typename: "GadgetOnlyImageFileFieldValidation";
                            name: string;
                            specID: string;
                            allowAnimatedImages: boolean;
                        } | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null | undefined;
                            max?: number | null | undefined;
                        } | {
                            __typename: "GadgetRegexFieldValidation";
                            name: string;
                            specID: string;
                            pattern?: string | null | undefined;
                        } | null)[];
                    } | {
                        __typename: "GadgetEnumConfig";
                        allowMultiple: boolean;
                        allowOther: boolean;
                        fieldType: GadgetFieldType;
                        options: {
                            __typename?: "GadgetEnumOption" | undefined;
                            name: string;
                            color: string;
                        }[];
                        validations: ({
                            __typename: "GadgetGenericFieldValidation";
                            name: string;
                            specID: string;
                        } | {
                            __typename: "GadgetOnlyImageFileFieldValidation";
                            name: string;
                            specID: string;
                            allowAnimatedImages: boolean;
                        } | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null | undefined;
                            max?: number | null | undefined;
                        } | {
                            __typename: "GadgetRegexFieldValidation";
                            name: string;
                            specID: string;
                            pattern?: string | null | undefined;
                        } | null)[];
                    } | {
                        __typename: "GadgetGenericFieldConfig";
                        fieldType: GadgetFieldType;
                        validations: ({
                            __typename: "GadgetGenericFieldValidation";
                            name: string;
                            specID: string;
                        } | {
                            __typename: "GadgetOnlyImageFileFieldValidation";
                            name: string;
                            specID: string;
                            allowAnimatedImages: boolean;
                        } | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null | undefined;
                            max?: number | null | undefined;
                        } | {
                            __typename: "GadgetRegexFieldValidation";
                            name: string;
                            specID: string;
                            pattern?: string | null | undefined;
                        } | null)[];
                    } | {
                        __typename: "GadgetHasManyConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                            __typename?: "GadgetModel" | undefined;
                            key: string;
                            apiIdentifier: string;
                            namespace?: string[] | null | undefined;
                            defaultDisplayField: {
                                __typename?: "GadgetModelField" | undefined;
                                name: string;
                                apiIdentifier: string;
                                fieldType: GadgetFieldType;
                            };
                            fields?: {
                                __typename?: "GadgetModelField" | undefined;
                                name: string;
                                apiIdentifier: string;
                                fieldType: GadgetFieldType;
                            }[] | undefined;
                        } | null | undefined;
                        inverseField?: {
                            __typename?: "GadgetModelField" | undefined;
                            apiIdentifier: string;
                        } | null | undefined;
                        validations: ({
                            __typename: "GadgetGenericFieldValidation";
                            name: string;
                            specID: string;
                        } | {
                            __typename: "GadgetOnlyImageFileFieldValidation";
                            name: string;
                            specID: string;
                            allowAnimatedImages: boolean;
                        } | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null | undefined;
                            max?: number | null | undefined;
                        } | {
                            __typename: "GadgetRegexFieldValidation";
                            name: string;
                            specID: string;
                            pattern?: string | null | undefined;
                        } | null)[];
                    } | {
                        __typename: "GadgetHasOneConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                            __typename?: "GadgetModel" | undefined;
                            key: string;
                            apiIdentifier: string;
                            namespace?: string[] | null | undefined;
                            defaultDisplayField: {
                                __typename?: "GadgetModelField" | undefined;
                                name: string;
                                apiIdentifier: string;
                                fieldType: GadgetFieldType;
                            };
                            fields?: {
                                __typename?: "GadgetModelField" | undefined;
                                name: string;
                                apiIdentifier: string;
                                fieldType: GadgetFieldType;
                            }[] | undefined;
                        } | null | undefined;
                        inverseField?: {
                            __typename?: "GadgetModelField" | undefined;
                            apiIdentifier: string;
                        } | null | undefined;
                        validations: ({
                            __typename: "GadgetGenericFieldValidation";
                            name: string;
                            specID: string;
                        } | {
                            __typename: "GadgetOnlyImageFileFieldValidation";
                            name: string;
                            specID: string;
                            allowAnimatedImages: boolean;
                        } | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null | undefined;
                            max?: number | null | undefined;
                        } | {
                            __typename: "GadgetRegexFieldValidation";
                            name: string;
                            specID: string;
                            pattern?: string | null | undefined;
                        } | null)[];
                    } | {
                        __typename: "GadgetNumberConfig";
                        decimals?: number | null | undefined;
                        fieldType: GadgetFieldType;
                        validations: ({
                            __typename: "GadgetGenericFieldValidation";
                            name: string;
                            specID: string;
                        } | {
                            __typename: "GadgetOnlyImageFileFieldValidation";
                            name: string;
                            specID: string;
                            allowAnimatedImages: boolean;
                        } | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null | undefined;
                            max?: number | null | undefined;
                        } | {
                            __typename: "GadgetRegexFieldValidation";
                            name: string;
                            specID: string;
                            pattern?: string | null | undefined;
                        } | null)[];
                    } | {
                        __typename: "GadgetObjectFieldConfig";
                        name?: string | null | undefined;
                        fieldType: GadgetFieldType;
                        fields: {
                            __typename?: "GadgetModelField" | undefined;
                            sortable: boolean;
                            filterable: boolean;
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                            requiredArgumentForInput: boolean;
                            configuration: {
                                __typename: "GadgetBelongsToConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                    __typename?: "GadgetModel" | undefined;
                                    key: string;
                                    apiIdentifier: string;
                                    namespace?: string[] | null | undefined;
                                    defaultDisplayField: {
                                        __typename?: "GadgetModelField" | undefined;
                                        name: string;
                                        apiIdentifier: string;
                                        fieldType: GadgetFieldType;
                                    };
                                    fields?: {
                                        __typename?: "GadgetModelField" | undefined;
                                        name: string;
                                        apiIdentifier: string;
                                        fieldType: GadgetFieldType;
                                    }[] | undefined;
                                } | null | undefined;
                                validations: ({
                                    __typename: "GadgetGenericFieldValidation";
                                    name: string;
                                    specID: string;
                                } | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                } | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null | undefined;
                                    max?: number | null | undefined;
                                } | {
                                    __typename: "GadgetRegexFieldValidation";
                                    name: string;
                                    specID: string;
                                    pattern?: string | null | undefined;
                                } | null)[];
                            } | {
                                __typename: "GadgetDateTimeConfig";
                                includeTime: boolean;
                                fieldType: GadgetFieldType;
                                validations: ({
                                    __typename: "GadgetGenericFieldValidation";
                                    name: string;
                                    specID: string;
                                } | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                } | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null | undefined;
                                    max?: number | null | undefined;
                                } | {
                                    __typename: "GadgetRegexFieldValidation";
                                    name: string;
                                    specID: string;
                                    pattern?: string | null | undefined;
                                } | null)[];
                            } | {
                                __typename: "GadgetEnumConfig";
                                allowMultiple: boolean;
                                allowOther: boolean;
                                fieldType: GadgetFieldType;
                                options: {
                                    __typename?: "GadgetEnumOption" | undefined;
                                    name: string;
                                    color: string;
                                }[];
                                validations: ({
                                    __typename: "GadgetGenericFieldValidation";
                                    name: string;
                                    specID: string;
                                } | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                } | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null | undefined;
                                    max?: number | null | undefined;
                                } | {
                                    __typename: "GadgetRegexFieldValidation";
                                    name: string;
                                    specID: string;
                                    pattern?: string | null | undefined;
                                } | null)[];
                            } | {
                                __typename: "GadgetGenericFieldConfig";
                                fieldType: GadgetFieldType;
                                validations: ({
                                    __typename: "GadgetGenericFieldValidation";
                                    name: string;
                                    specID: string;
                                } | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                } | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null | undefined;
                                    max?: number | null | undefined;
                                } | {
                                    __typename: "GadgetRegexFieldValidation";
                                    name: string;
                                    specID: string;
                                    pattern?: string | null | undefined;
                                } | null)[];
                            } | {
                                __typename: "GadgetHasManyConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                    __typename?: "GadgetModel" | undefined;
                                    key: string;
                                    apiIdentifier: string;
                                    namespace?: string[] | null | undefined;
                                    defaultDisplayField: {
                                        __typename?: "GadgetModelField" | undefined;
                                        name: string;
                                        apiIdentifier: string;
                                        fieldType: GadgetFieldType;
                                    };
                                    fields?: {
                                        __typename?: "GadgetModelField" | undefined;
                                        name: string;
                                        apiIdentifier: string;
                                        fieldType: GadgetFieldType;
                                    }[] | undefined;
                                } | null | undefined;
                                inverseField?: {
                                    __typename?: "GadgetModelField" | undefined;
                                    apiIdentifier: string;
                                } | null | undefined;
                                validations: ({
                                    __typename: "GadgetGenericFieldValidation";
                                    name: string;
                                    specID: string;
                                } | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                } | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null | undefined;
                                    max?: number | null | undefined;
                                } | {
                                    __typename: "GadgetRegexFieldValidation";
                                    name: string;
                                    specID: string;
                                    pattern?: string | null | undefined;
                                } | null)[];
                            } | {
                                __typename: "GadgetHasOneConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                    __typename?: "GadgetModel" | undefined;
                                    key: string;
                                    apiIdentifier: string;
                                    namespace?: string[] | null | undefined;
                                    defaultDisplayField: {
                                        __typename?: "GadgetModelField" | undefined;
                                        name: string;
                                        apiIdentifier: string;
                                        fieldType: GadgetFieldType;
                                    };
                                    fields?: {
                                        __typename?: "GadgetModelField" | undefined;
                                        name: string;
                                        apiIdentifier: string;
                                        fieldType: GadgetFieldType;
                                    }[] | undefined;
                                } | null | undefined;
                                inverseField?: {
                                    __typename?: "GadgetModelField" | undefined;
                                    apiIdentifier: string;
                                } | null | undefined;
                                validations: ({
                                    __typename: "GadgetGenericFieldValidation";
                                    name: string;
                                    specID: string;
                                } | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                } | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null | undefined;
                                    max?: number | null | undefined;
                                } | {
                                    __typename: "GadgetRegexFieldValidation";
                                    name: string;
                                    specID: string;
                                    pattern?: string | null | undefined;
                                } | null)[];
                            } | {
                                __typename: "GadgetNumberConfig";
                                decimals?: number | null | undefined;
                                fieldType: GadgetFieldType;
                                validations: ({
                                    __typename: "GadgetGenericFieldValidation";
                                    name: string;
                                    specID: string;
                                } | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                } | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null | undefined;
                                    max?: number | null | undefined;
                                } | {
                                    __typename: "GadgetRegexFieldValidation";
                                    name: string;
                                    specID: string;
                                    pattern?: string | null | undefined;
                                } | null)[];
                            } | {
                                __typename: "GadgetObjectFieldConfig";
                                name?: string | null | undefined;
                                fieldType: GadgetFieldType;
                                fields: {
                                    __typename?: "GadgetModelField" | undefined;
                                    sortable: boolean;
                                    filterable: boolean;
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                    requiredArgumentForInput: boolean;
                                    configuration: {
                                        __typename: "GadgetBelongsToConfig";
                                        fieldType: GadgetFieldType;
                                        relatedModel?: {
                                            __typename?: "GadgetModel" | undefined;
                                            key: string;
                                            apiIdentifier: string;
                                            namespace?: string[] | null | undefined;
                                            defaultDisplayField: {
                                                __typename?: "GadgetModelField" | undefined;
                                                name: string;
                                                apiIdentifier: string;
                                                fieldType: GadgetFieldType;
                                            };
                                            fields?: {
                                                __typename?: "GadgetModelField" | undefined;
                                                name: string;
                                                apiIdentifier: string;
                                                fieldType: GadgetFieldType;
                                            }[] | undefined;
                                        } | null | undefined;
                                        validations: ({
                                            __typename: "GadgetGenericFieldValidation";
                                            name: string;
                                            specID: string;
                                        } | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                        } | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null | undefined;
                                            max?: number | null | undefined;
                                        } | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null | undefined;
                                        } | null)[];
                                    } | {
                                        __typename: "GadgetDateTimeConfig";
                                        includeTime: boolean;
                                        fieldType: GadgetFieldType;
                                        validations: ({
                                            __typename: "GadgetGenericFieldValidation";
                                            name: string;
                                            specID: string;
                                        } | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                        } | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null | undefined;
                                            max?: number | null | undefined;
                                        } | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null | undefined;
                                        } | null)[];
                                    } | {
                                        __typename: "GadgetEnumConfig";
                                        allowMultiple: boolean;
                                        allowOther: boolean;
                                        fieldType: GadgetFieldType;
                                        options: {
                                            __typename?: "GadgetEnumOption" | undefined;
                                            name: string;
                                            color: string;
                                        }[];
                                        validations: ({
                                            __typename: "GadgetGenericFieldValidation";
                                            name: string;
                                            specID: string;
                                        } | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                        } | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null | undefined;
                                            max?: number | null | undefined;
                                        } | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null | undefined;
                                        } | null)[];
                                    } | {
                                        __typename: "GadgetGenericFieldConfig";
                                        fieldType: GadgetFieldType;
                                        validations: ({
                                            __typename: "GadgetGenericFieldValidation";
                                            name: string;
                                            specID: string;
                                        } | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                        } | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null | undefined;
                                            max?: number | null | undefined;
                                        } | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null | undefined;
                                        } | null)[];
                                    } | {
                                        __typename: "GadgetHasManyConfig";
                                        fieldType: GadgetFieldType;
                                        relatedModel?: {
                                            __typename?: "GadgetModel" | undefined;
                                            key: string;
                                            apiIdentifier: string;
                                            namespace?: string[] | null | undefined;
                                            defaultDisplayField: {
                                                __typename?: "GadgetModelField" | undefined;
                                                name: string;
                                                apiIdentifier: string;
                                                fieldType: GadgetFieldType;
                                            };
                                            fields?: {
                                                __typename?: "GadgetModelField" | undefined;
                                                name: string;
                                                apiIdentifier: string;
                                                fieldType: GadgetFieldType;
                                            }[] | undefined;
                                        } | null | undefined;
                                        inverseField?: {
                                            __typename?: "GadgetModelField" | undefined;
                                            apiIdentifier: string;
                                        } | null | undefined;
                                        validations: ({
                                            __typename: "GadgetGenericFieldValidation";
                                            name: string;
                                            specID: string;
                                        } | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                        } | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null | undefined;
                                            max?: number | null | undefined;
                                        } | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null | undefined;
                                        } | null)[];
                                    } | {
                                        __typename: "GadgetHasOneConfig";
                                        fieldType: GadgetFieldType;
                                        relatedModel?: {
                                            __typename?: "GadgetModel" | undefined;
                                            key: string;
                                            apiIdentifier: string;
                                            namespace?: string[] | null | undefined;
                                            defaultDisplayField: {
                                                __typename?: "GadgetModelField" | undefined;
                                                name: string;
                                                apiIdentifier: string;
                                                fieldType: GadgetFieldType;
                                            };
                                            fields?: {
                                                __typename?: "GadgetModelField" | undefined;
                                                name: string;
                                                apiIdentifier: string;
                                                fieldType: GadgetFieldType;
                                            }[] | undefined;
                                        } | null | undefined;
                                        inverseField?: {
                                            __typename?: "GadgetModelField" | undefined;
                                            apiIdentifier: string;
                                        } | null | undefined;
                                        validations: ({
                                            __typename: "GadgetGenericFieldValidation";
                                            name: string;
                                            specID: string;
                                        } | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                        } | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null | undefined;
                                            max?: number | null | undefined;
                                        } | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null | undefined;
                                        } | null)[];
                                    } | {
                                        __typename: "GadgetNumberConfig";
                                        decimals?: number | null | undefined;
                                        fieldType: GadgetFieldType;
                                        validations: ({
                                            __typename: "GadgetGenericFieldValidation";
                                            name: string;
                                            specID: string;
                                        } | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                        } | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null | undefined;
                                            max?: number | null | undefined;
                                        } | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null | undefined;
                                        } | null)[];
                                    } | {
                                        __typename: "GadgetObjectFieldConfig";
                                        fieldType: GadgetFieldType;
                                        validations: ({
                                            __typename: "GadgetGenericFieldValidation";
                                            name: string;
                                            specID: string;
                                        } | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                        } | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null | undefined;
                                            max?: number | null | undefined;
                                        } | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null | undefined;
                                        } | null)[];
                                    };
                                }[];
                                validations: ({
                                    __typename: "GadgetGenericFieldValidation";
                                    name: string;
                                    specID: string;
                                } | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                } | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null | undefined;
                                    max?: number | null | undefined;
                                } | {
                                    __typename: "GadgetRegexFieldValidation";
                                    name: string;
                                    specID: string;
                                    pattern?: string | null | undefined;
                                } | null)[];
                            };
                        }[];
                        validations: ({
                            __typename: "GadgetGenericFieldValidation";
                            name: string;
                            specID: string;
                        } | {
                            __typename: "GadgetOnlyImageFileFieldValidation";
                            name: string;
                            specID: string;
                            allowAnimatedImages: boolean;
                        } | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null | undefined;
                            max?: number | null | undefined;
                        } | {
                            __typename: "GadgetRegexFieldValidation";
                            name: string;
                            specID: string;
                            pattern?: string | null | undefined;
                        } | null)[];
                    };
                }[];
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            };
        }[];
        triggers?: {
            __typename?: "GadgetTrigger" | undefined;
            specID: string;
        }[] | null | undefined;
    } | undefined;
    fetching: boolean;
    error: ErrorWrapper | undefined;
};
/**
 * @internal
 */
export declare const filterAutoFormFieldList: (fields: FieldMetadata[] | undefined, options?: {
    include?: string[];
    exclude?: string[];
}) => FieldMetadata[];
export declare const filterAutoTableFieldList: (fields: FieldMetadata[]) => import("./internal/gql/graphql.js").FieldMetadataFragment[];
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
export declare const isActionMetadata: (metadata: ActionMetadata | GlobalActionMetadata) => metadata is {
    __typename?: "GadgetModel" | undefined;
    name: string;
    apiIdentifier: string;
    defaultRecord: any;
    action: {
        __typename?: "GadgetAction" | undefined;
        name: string;
        apiIdentifier: string;
        operatesWithRecordIdentity: boolean;
        isDeleteAction: boolean;
        inputFields: {
            __typename?: "GadgetObjectField" | undefined;
            name: string;
            apiIdentifier: string;
            fieldType: GadgetFieldType;
            requiredArgumentForInput: boolean;
            configuration: {
                __typename: "GadgetBelongsToConfig";
                fieldType: GadgetFieldType;
                relatedModel?: {
                    __typename?: "GadgetModel" | undefined;
                    key: string;
                    apiIdentifier: string;
                    namespace?: string[] | null | undefined;
                    defaultDisplayField: {
                        __typename?: "GadgetModelField" | undefined;
                        name: string;
                        apiIdentifier: string;
                        fieldType: GadgetFieldType;
                    };
                    fields?: {
                        __typename?: "GadgetModelField" | undefined;
                        name: string;
                        apiIdentifier: string;
                        fieldType: GadgetFieldType;
                    }[] | undefined;
                } | null | undefined;
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetDateTimeConfig";
                includeTime: boolean;
                fieldType: GadgetFieldType;
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetEnumConfig";
                allowMultiple: boolean;
                allowOther: boolean;
                fieldType: GadgetFieldType;
                options: {
                    __typename?: "GadgetEnumOption" | undefined;
                    name: string;
                    color: string;
                }[];
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetGenericFieldConfig";
                fieldType: GadgetFieldType;
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetHasManyConfig";
                fieldType: GadgetFieldType;
                relatedModel?: {
                    __typename?: "GadgetModel" | undefined;
                    key: string;
                    apiIdentifier: string;
                    namespace?: string[] | null | undefined;
                    defaultDisplayField: {
                        __typename?: "GadgetModelField" | undefined;
                        name: string;
                        apiIdentifier: string;
                        fieldType: GadgetFieldType;
                    };
                    fields?: {
                        __typename?: "GadgetModelField" | undefined;
                        name: string;
                        apiIdentifier: string;
                        fieldType: GadgetFieldType;
                    }[] | undefined;
                } | null | undefined;
                inverseField?: {
                    __typename?: "GadgetModelField" | undefined;
                    apiIdentifier: string;
                } | null | undefined;
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetHasOneConfig";
                fieldType: GadgetFieldType;
                relatedModel?: {
                    __typename?: "GadgetModel" | undefined;
                    key: string;
                    apiIdentifier: string;
                    namespace?: string[] | null | undefined;
                    defaultDisplayField: {
                        __typename?: "GadgetModelField" | undefined;
                        name: string;
                        apiIdentifier: string;
                        fieldType: GadgetFieldType;
                    };
                    fields?: {
                        __typename?: "GadgetModelField" | undefined;
                        name: string;
                        apiIdentifier: string;
                        fieldType: GadgetFieldType;
                    }[] | undefined;
                } | null | undefined;
                inverseField?: {
                    __typename?: "GadgetModelField" | undefined;
                    apiIdentifier: string;
                } | null | undefined;
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetNumberConfig";
                decimals?: number | null | undefined;
                fieldType: GadgetFieldType;
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            } | {
                __typename: "GadgetObjectFieldConfig";
                name?: string | null | undefined;
                fieldType: GadgetFieldType;
                fields: {
                    __typename?: "GadgetModelField" | undefined;
                    sortable: boolean;
                    filterable: boolean;
                    name: string;
                    apiIdentifier: string;
                    fieldType: GadgetFieldType;
                    requiredArgumentForInput: boolean;
                    configuration: {
                        __typename: "GadgetBelongsToConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                            __typename?: "GadgetModel" | undefined;
                            key: string;
                            apiIdentifier: string;
                            namespace?: string[] | null | undefined;
                            defaultDisplayField: {
                                __typename?: "GadgetModelField" | undefined;
                                name: string;
                                apiIdentifier: string;
                                fieldType: GadgetFieldType;
                            };
                            fields?: {
                                __typename?: "GadgetModelField" | undefined;
                                name: string;
                                apiIdentifier: string;
                                fieldType: GadgetFieldType;
                            }[] | undefined;
                        } | null | undefined;
                        validations: ({
                            __typename: "GadgetGenericFieldValidation";
                            name: string;
                            specID: string;
                        } | {
                            __typename: "GadgetOnlyImageFileFieldValidation";
                            name: string;
                            specID: string;
                            allowAnimatedImages: boolean;
                        } | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null | undefined;
                            max?: number | null | undefined;
                        } | {
                            __typename: "GadgetRegexFieldValidation";
                            name: string;
                            specID: string;
                            pattern?: string | null | undefined;
                        } | null)[];
                    } | {
                        __typename: "GadgetDateTimeConfig";
                        includeTime: boolean;
                        fieldType: GadgetFieldType;
                        validations: ({
                            __typename: "GadgetGenericFieldValidation";
                            name: string;
                            specID: string;
                        } | {
                            __typename: "GadgetOnlyImageFileFieldValidation";
                            name: string;
                            specID: string;
                            allowAnimatedImages: boolean;
                        } | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null | undefined;
                            max?: number | null | undefined;
                        } | {
                            __typename: "GadgetRegexFieldValidation";
                            name: string;
                            specID: string;
                            pattern?: string | null | undefined;
                        } | null)[];
                    } | {
                        __typename: "GadgetEnumConfig";
                        allowMultiple: boolean;
                        allowOther: boolean;
                        fieldType: GadgetFieldType;
                        options: {
                            __typename?: "GadgetEnumOption" | undefined;
                            name: string;
                            color: string;
                        }[];
                        validations: ({
                            __typename: "GadgetGenericFieldValidation";
                            name: string;
                            specID: string;
                        } | {
                            __typename: "GadgetOnlyImageFileFieldValidation";
                            name: string;
                            specID: string;
                            allowAnimatedImages: boolean;
                        } | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null | undefined;
                            max?: number | null | undefined;
                        } | {
                            __typename: "GadgetRegexFieldValidation";
                            name: string;
                            specID: string;
                            pattern?: string | null | undefined;
                        } | null)[];
                    } | {
                        __typename: "GadgetGenericFieldConfig";
                        fieldType: GadgetFieldType;
                        validations: ({
                            __typename: "GadgetGenericFieldValidation";
                            name: string;
                            specID: string;
                        } | {
                            __typename: "GadgetOnlyImageFileFieldValidation";
                            name: string;
                            specID: string;
                            allowAnimatedImages: boolean;
                        } | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null | undefined;
                            max?: number | null | undefined;
                        } | {
                            __typename: "GadgetRegexFieldValidation";
                            name: string;
                            specID: string;
                            pattern?: string | null | undefined;
                        } | null)[];
                    } | {
                        __typename: "GadgetHasManyConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                            __typename?: "GadgetModel" | undefined;
                            key: string;
                            apiIdentifier: string;
                            namespace?: string[] | null | undefined;
                            defaultDisplayField: {
                                __typename?: "GadgetModelField" | undefined;
                                name: string;
                                apiIdentifier: string;
                                fieldType: GadgetFieldType;
                            };
                            fields?: {
                                __typename?: "GadgetModelField" | undefined;
                                name: string;
                                apiIdentifier: string;
                                fieldType: GadgetFieldType;
                            }[] | undefined;
                        } | null | undefined;
                        inverseField?: {
                            __typename?: "GadgetModelField" | undefined;
                            apiIdentifier: string;
                        } | null | undefined;
                        validations: ({
                            __typename: "GadgetGenericFieldValidation";
                            name: string;
                            specID: string;
                        } | {
                            __typename: "GadgetOnlyImageFileFieldValidation";
                            name: string;
                            specID: string;
                            allowAnimatedImages: boolean;
                        } | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null | undefined;
                            max?: number | null | undefined;
                        } | {
                            __typename: "GadgetRegexFieldValidation";
                            name: string;
                            specID: string;
                            pattern?: string | null | undefined;
                        } | null)[];
                    } | {
                        __typename: "GadgetHasOneConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                            __typename?: "GadgetModel" | undefined;
                            key: string;
                            apiIdentifier: string;
                            namespace?: string[] | null | undefined;
                            defaultDisplayField: {
                                __typename?: "GadgetModelField" | undefined;
                                name: string;
                                apiIdentifier: string;
                                fieldType: GadgetFieldType;
                            };
                            fields?: {
                                __typename?: "GadgetModelField" | undefined;
                                name: string;
                                apiIdentifier: string;
                                fieldType: GadgetFieldType;
                            }[] | undefined;
                        } | null | undefined;
                        inverseField?: {
                            __typename?: "GadgetModelField" | undefined;
                            apiIdentifier: string;
                        } | null | undefined;
                        validations: ({
                            __typename: "GadgetGenericFieldValidation";
                            name: string;
                            specID: string;
                        } | {
                            __typename: "GadgetOnlyImageFileFieldValidation";
                            name: string;
                            specID: string;
                            allowAnimatedImages: boolean;
                        } | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null | undefined;
                            max?: number | null | undefined;
                        } | {
                            __typename: "GadgetRegexFieldValidation";
                            name: string;
                            specID: string;
                            pattern?: string | null | undefined;
                        } | null)[];
                    } | {
                        __typename: "GadgetNumberConfig";
                        decimals?: number | null | undefined;
                        fieldType: GadgetFieldType;
                        validations: ({
                            __typename: "GadgetGenericFieldValidation";
                            name: string;
                            specID: string;
                        } | {
                            __typename: "GadgetOnlyImageFileFieldValidation";
                            name: string;
                            specID: string;
                            allowAnimatedImages: boolean;
                        } | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null | undefined;
                            max?: number | null | undefined;
                        } | {
                            __typename: "GadgetRegexFieldValidation";
                            name: string;
                            specID: string;
                            pattern?: string | null | undefined;
                        } | null)[];
                    } | {
                        __typename: "GadgetObjectFieldConfig";
                        name?: string | null | undefined;
                        fieldType: GadgetFieldType;
                        fields: {
                            __typename?: "GadgetModelField" | undefined;
                            sortable: boolean;
                            filterable: boolean;
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                            requiredArgumentForInput: boolean;
                            configuration: {
                                __typename: "GadgetBelongsToConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                    __typename?: "GadgetModel" | undefined;
                                    key: string;
                                    apiIdentifier: string;
                                    namespace?: string[] | null | undefined;
                                    defaultDisplayField: {
                                        __typename?: "GadgetModelField" | undefined;
                                        name: string;
                                        apiIdentifier: string;
                                        fieldType: GadgetFieldType;
                                    };
                                    fields?: {
                                        __typename?: "GadgetModelField" | undefined;
                                        name: string;
                                        apiIdentifier: string;
                                        fieldType: GadgetFieldType;
                                    }[] | undefined;
                                } | null | undefined;
                                validations: ({
                                    __typename: "GadgetGenericFieldValidation";
                                    name: string;
                                    specID: string;
                                } | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                } | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null | undefined;
                                    max?: number | null | undefined;
                                } | {
                                    __typename: "GadgetRegexFieldValidation";
                                    name: string;
                                    specID: string;
                                    pattern?: string | null | undefined;
                                } | null)[];
                            } | {
                                __typename: "GadgetDateTimeConfig";
                                includeTime: boolean;
                                fieldType: GadgetFieldType;
                                validations: ({
                                    __typename: "GadgetGenericFieldValidation";
                                    name: string;
                                    specID: string;
                                } | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                } | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null | undefined;
                                    max?: number | null | undefined;
                                } | {
                                    __typename: "GadgetRegexFieldValidation";
                                    name: string;
                                    specID: string;
                                    pattern?: string | null | undefined;
                                } | null)[];
                            } | {
                                __typename: "GadgetEnumConfig";
                                allowMultiple: boolean;
                                allowOther: boolean;
                                fieldType: GadgetFieldType;
                                options: {
                                    __typename?: "GadgetEnumOption" | undefined;
                                    name: string;
                                    color: string;
                                }[];
                                validations: ({
                                    __typename: "GadgetGenericFieldValidation";
                                    name: string;
                                    specID: string;
                                } | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                } | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null | undefined;
                                    max?: number | null | undefined;
                                } | {
                                    __typename: "GadgetRegexFieldValidation";
                                    name: string;
                                    specID: string;
                                    pattern?: string | null | undefined;
                                } | null)[];
                            } | {
                                __typename: "GadgetGenericFieldConfig";
                                fieldType: GadgetFieldType;
                                validations: ({
                                    __typename: "GadgetGenericFieldValidation";
                                    name: string;
                                    specID: string;
                                } | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                } | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null | undefined;
                                    max?: number | null | undefined;
                                } | {
                                    __typename: "GadgetRegexFieldValidation";
                                    name: string;
                                    specID: string;
                                    pattern?: string | null | undefined;
                                } | null)[];
                            } | {
                                __typename: "GadgetHasManyConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                    __typename?: "GadgetModel" | undefined;
                                    key: string;
                                    apiIdentifier: string;
                                    namespace?: string[] | null | undefined;
                                    defaultDisplayField: {
                                        __typename?: "GadgetModelField" | undefined;
                                        name: string;
                                        apiIdentifier: string;
                                        fieldType: GadgetFieldType;
                                    };
                                    fields?: {
                                        __typename?: "GadgetModelField" | undefined;
                                        name: string;
                                        apiIdentifier: string;
                                        fieldType: GadgetFieldType;
                                    }[] | undefined;
                                } | null | undefined;
                                inverseField?: {
                                    __typename?: "GadgetModelField" | undefined;
                                    apiIdentifier: string;
                                } | null | undefined;
                                validations: ({
                                    __typename: "GadgetGenericFieldValidation";
                                    name: string;
                                    specID: string;
                                } | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                } | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null | undefined;
                                    max?: number | null | undefined;
                                } | {
                                    __typename: "GadgetRegexFieldValidation";
                                    name: string;
                                    specID: string;
                                    pattern?: string | null | undefined;
                                } | null)[];
                            } | {
                                __typename: "GadgetHasOneConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                    __typename?: "GadgetModel" | undefined;
                                    key: string;
                                    apiIdentifier: string;
                                    namespace?: string[] | null | undefined;
                                    defaultDisplayField: {
                                        __typename?: "GadgetModelField" | undefined;
                                        name: string;
                                        apiIdentifier: string;
                                        fieldType: GadgetFieldType;
                                    };
                                    fields?: {
                                        __typename?: "GadgetModelField" | undefined;
                                        name: string;
                                        apiIdentifier: string;
                                        fieldType: GadgetFieldType;
                                    }[] | undefined;
                                } | null | undefined;
                                inverseField?: {
                                    __typename?: "GadgetModelField" | undefined;
                                    apiIdentifier: string;
                                } | null | undefined;
                                validations: ({
                                    __typename: "GadgetGenericFieldValidation";
                                    name: string;
                                    specID: string;
                                } | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                } | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null | undefined;
                                    max?: number | null | undefined;
                                } | {
                                    __typename: "GadgetRegexFieldValidation";
                                    name: string;
                                    specID: string;
                                    pattern?: string | null | undefined;
                                } | null)[];
                            } | {
                                __typename: "GadgetNumberConfig";
                                decimals?: number | null | undefined;
                                fieldType: GadgetFieldType;
                                validations: ({
                                    __typename: "GadgetGenericFieldValidation";
                                    name: string;
                                    specID: string;
                                } | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                } | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null | undefined;
                                    max?: number | null | undefined;
                                } | {
                                    __typename: "GadgetRegexFieldValidation";
                                    name: string;
                                    specID: string;
                                    pattern?: string | null | undefined;
                                } | null)[];
                            } | {
                                __typename: "GadgetObjectFieldConfig";
                                name?: string | null | undefined;
                                fieldType: GadgetFieldType;
                                fields: {
                                    __typename?: "GadgetModelField" | undefined;
                                    sortable: boolean;
                                    filterable: boolean;
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                    requiredArgumentForInput: boolean;
                                    configuration: {
                                        __typename: "GadgetBelongsToConfig";
                                        fieldType: GadgetFieldType;
                                        relatedModel?: {
                                            __typename?: "GadgetModel" | undefined;
                                            key: string;
                                            apiIdentifier: string;
                                            namespace?: string[] | null | undefined;
                                            defaultDisplayField: {
                                                __typename?: "GadgetModelField" | undefined;
                                                name: string;
                                                apiIdentifier: string;
                                                fieldType: GadgetFieldType;
                                            };
                                            fields?: {
                                                __typename?: "GadgetModelField" | undefined;
                                                name: string;
                                                apiIdentifier: string;
                                                fieldType: GadgetFieldType;
                                            }[] | undefined;
                                        } | null | undefined;
                                        validations: ({
                                            __typename: "GadgetGenericFieldValidation";
                                            name: string;
                                            specID: string;
                                        } | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                        } | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null | undefined;
                                            max?: number | null | undefined;
                                        } | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null | undefined;
                                        } | null)[];
                                    } | {
                                        __typename: "GadgetDateTimeConfig";
                                        includeTime: boolean;
                                        fieldType: GadgetFieldType;
                                        validations: ({
                                            __typename: "GadgetGenericFieldValidation";
                                            name: string;
                                            specID: string;
                                        } | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                        } | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null | undefined;
                                            max?: number | null | undefined;
                                        } | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null | undefined;
                                        } | null)[];
                                    } | {
                                        __typename: "GadgetEnumConfig";
                                        allowMultiple: boolean;
                                        allowOther: boolean;
                                        fieldType: GadgetFieldType;
                                        options: {
                                            __typename?: "GadgetEnumOption" | undefined;
                                            name: string;
                                            color: string;
                                        }[];
                                        validations: ({
                                            __typename: "GadgetGenericFieldValidation";
                                            name: string;
                                            specID: string;
                                        } | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                        } | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null | undefined;
                                            max?: number | null | undefined;
                                        } | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null | undefined;
                                        } | null)[];
                                    } | {
                                        __typename: "GadgetGenericFieldConfig";
                                        fieldType: GadgetFieldType;
                                        validations: ({
                                            __typename: "GadgetGenericFieldValidation";
                                            name: string;
                                            specID: string;
                                        } | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                        } | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null | undefined;
                                            max?: number | null | undefined;
                                        } | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null | undefined;
                                        } | null)[];
                                    } | {
                                        __typename: "GadgetHasManyConfig";
                                        fieldType: GadgetFieldType;
                                        relatedModel?: {
                                            __typename?: "GadgetModel" | undefined;
                                            key: string;
                                            apiIdentifier: string;
                                            namespace?: string[] | null | undefined;
                                            defaultDisplayField: {
                                                __typename?: "GadgetModelField" | undefined;
                                                name: string;
                                                apiIdentifier: string;
                                                fieldType: GadgetFieldType;
                                            };
                                            fields?: {
                                                __typename?: "GadgetModelField" | undefined;
                                                name: string;
                                                apiIdentifier: string;
                                                fieldType: GadgetFieldType;
                                            }[] | undefined;
                                        } | null | undefined;
                                        inverseField?: {
                                            __typename?: "GadgetModelField" | undefined;
                                            apiIdentifier: string;
                                        } | null | undefined;
                                        validations: ({
                                            __typename: "GadgetGenericFieldValidation";
                                            name: string;
                                            specID: string;
                                        } | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                        } | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null | undefined;
                                            max?: number | null | undefined;
                                        } | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null | undefined;
                                        } | null)[];
                                    } | {
                                        __typename: "GadgetHasOneConfig";
                                        fieldType: GadgetFieldType;
                                        relatedModel?: {
                                            __typename?: "GadgetModel" | undefined;
                                            key: string;
                                            apiIdentifier: string;
                                            namespace?: string[] | null | undefined;
                                            defaultDisplayField: {
                                                __typename?: "GadgetModelField" | undefined;
                                                name: string;
                                                apiIdentifier: string;
                                                fieldType: GadgetFieldType;
                                            };
                                            fields?: {
                                                __typename?: "GadgetModelField" | undefined;
                                                name: string;
                                                apiIdentifier: string;
                                                fieldType: GadgetFieldType;
                                            }[] | undefined;
                                        } | null | undefined;
                                        inverseField?: {
                                            __typename?: "GadgetModelField" | undefined;
                                            apiIdentifier: string;
                                        } | null | undefined;
                                        validations: ({
                                            __typename: "GadgetGenericFieldValidation";
                                            name: string;
                                            specID: string;
                                        } | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                        } | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null | undefined;
                                            max?: number | null | undefined;
                                        } | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null | undefined;
                                        } | null)[];
                                    } | {
                                        __typename: "GadgetNumberConfig";
                                        decimals?: number | null | undefined;
                                        fieldType: GadgetFieldType;
                                        validations: ({
                                            __typename: "GadgetGenericFieldValidation";
                                            name: string;
                                            specID: string;
                                        } | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                        } | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null | undefined;
                                            max?: number | null | undefined;
                                        } | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null | undefined;
                                        } | null)[];
                                    } | {
                                        __typename: "GadgetObjectFieldConfig";
                                        fieldType: GadgetFieldType;
                                        validations: ({
                                            __typename: "GadgetGenericFieldValidation";
                                            name: string;
                                            specID: string;
                                        } | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                        } | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null | undefined;
                                            max?: number | null | undefined;
                                        } | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null | undefined;
                                        } | null)[];
                                    };
                                }[];
                                validations: ({
                                    __typename: "GadgetGenericFieldValidation";
                                    name: string;
                                    specID: string;
                                } | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                } | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null | undefined;
                                    max?: number | null | undefined;
                                } | {
                                    __typename: "GadgetRegexFieldValidation";
                                    name: string;
                                    specID: string;
                                    pattern?: string | null | undefined;
                                } | null)[];
                            };
                        }[];
                        validations: ({
                            __typename: "GadgetGenericFieldValidation";
                            name: string;
                            specID: string;
                        } | {
                            __typename: "GadgetOnlyImageFileFieldValidation";
                            name: string;
                            specID: string;
                            allowAnimatedImages: boolean;
                        } | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null | undefined;
                            max?: number | null | undefined;
                        } | {
                            __typename: "GadgetRegexFieldValidation";
                            name: string;
                            specID: string;
                            pattern?: string | null | undefined;
                        } | null)[];
                    };
                }[];
                validations: ({
                    __typename: "GadgetGenericFieldValidation";
                    name: string;
                    specID: string;
                } | {
                    __typename: "GadgetOnlyImageFileFieldValidation";
                    name: string;
                    specID: string;
                    allowAnimatedImages: boolean;
                } | {
                    __typename: "GadgetRangeFieldValidation";
                    name: string;
                    specID: string;
                    min?: number | null | undefined;
                    max?: number | null | undefined;
                } | {
                    __typename: "GadgetRegexFieldValidation";
                    name: string;
                    specID: string;
                    pattern?: string | null | undefined;
                } | null)[];
            };
        }[];
        triggers?: {
            __typename?: "GadgetTrigger" | undefined;
            specID: string;
        }[] | null | undefined;
    };
};
export {};
