import type { ActionFunction, GadgetRecord } from "@gadgetinc/api-client-core";
import type { ReactNode } from "react";
import type { RecordIdentifier } from "src/use-action-form/types.js";
import type { ActionMetadata, FieldMetadata } from "../metadata.js";
import { type OptionsType } from "../utils.js";
/** The props that any <AutoForm/> component accepts */
export type AutoFormProps<GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>, Options extends ActionFunc["optionsType"]> = {
    /** Which action this fom will run on submit */
    action: ActionFunc;
    /** How to find the record this form will act on */
    findBy?: RecordIdentifier;
    /** A record for this form to act on */
    record?: GadgetRecord<any>;
    /** An allowlist of fields to render within the form. Only these fields will be rendered as inputs. */
    include?: string[];
    /** An allowlist of fields to render within the form. Only these fields will be rendered as inputs. */
    fields?: string[];
    /** A denylist of fields to render within the form. Every field except these fields will be rendered as inputs. */
    exclude?: string[];
    /** The label to use for the submit button at the bottom of the form */
    submitLabel?: ReactNode;
    /** What to show the user once the form has been submitted successfully */
    successContent?: ReactNode;
};
/**
 * React hook for getting the validation schema for a list of fields
 */
export declare const useValidationResolver: (metadata: ActionMetadata | undefined) => import("react-hook-form/dist/types/resolvers.js").Resolver<{
    [x: string]: any;
}> | undefined;
/**
 * React hook for getting a list of fields to use in a form (given include/exclude options)
 */
export declare const useFormFields: (metadata: ActionMetadata | undefined | null, options: {
    include?: string[];
    exclude?: string[];
    fields?: string[];
    select?: Record<string, any>;
}) => readonly {
    path: string;
    metadata: FieldMetadata;
}[];
/**
 * Internal React hook for sharing logic between different `AutoForm` components.
 * @internal
 */
export declare const useAutoForm: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>, Options extends ActionFunc["optionsType"]>(props: AutoFormProps<GivenOptions, SchemaT, ActionFunc, Options>) => {
    metadata: {
        __typename?: "GadgetModel" | undefined;
        name: string;
        action: {
            __typename?: "GadgetAction" | undefined;
            name: string;
            apiIdentifier: string;
            operatesWithRecordIdentity: boolean;
            inputFields: {
                __typename?: "GadgetObjectField" | undefined;
                name: string;
                apiIdentifier: string;
                fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                requiredArgumentForInput: boolean;
                configuration: {
                    __typename: "GadgetBelongsToConfig";
                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                    relatedModel?: {
                        __typename?: "GadgetModel" | undefined;
                        apiIdentifier: string;
                        namespace?: string[] | null | undefined;
                    } | null | undefined;
                } | {
                    __typename: "GadgetDateTimeConfig";
                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                } | {
                    __typename: "GadgetEnumConfig";
                    allowMultiple: boolean;
                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                    options: {
                        __typename?: "GadgetEnumOption" | undefined;
                        name: string;
                        color: string;
                    }[];
                } | {
                    __typename: "GadgetGenericFieldConfig";
                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                } | {
                    __typename: "GadgetHasManyConfig";
                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                    relatedModel?: {
                        __typename?: "GadgetModel" | undefined;
                        apiIdentifier: string;
                        namespace?: string[] | null | undefined;
                    } | null | undefined;
                } | {
                    __typename: "GadgetHasOneConfig";
                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                } | {
                    __typename: "GadgetObjectFieldConfig";
                    name?: string | null | undefined;
                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                    fields: {
                        __typename?: "GadgetModelField" | undefined;
                        sortable: boolean;
                        filterable: boolean;
                        name: string;
                        apiIdentifier: string;
                        fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                        requiredArgumentForInput: boolean;
                        configuration: {
                            __typename: "GadgetBelongsToConfig";
                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                            relatedModel?: {
                                __typename?: "GadgetModel" | undefined;
                                apiIdentifier: string;
                                namespace?: string[] | null | undefined;
                            } | null | undefined;
                        } | {
                            __typename: "GadgetDateTimeConfig";
                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                        } | {
                            __typename: "GadgetEnumConfig";
                            allowMultiple: boolean;
                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                            options: {
                                __typename?: "GadgetEnumOption" | undefined;
                                name: string;
                                color: string;
                            }[];
                        } | {
                            __typename: "GadgetGenericFieldConfig";
                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                        } | {
                            __typename: "GadgetHasManyConfig";
                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                            relatedModel?: {
                                __typename?: "GadgetModel" | undefined;
                                apiIdentifier: string;
                                namespace?: string[] | null | undefined;
                            } | null | undefined;
                        } | {
                            __typename: "GadgetHasOneConfig";
                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                        } | {
                            __typename: "GadgetObjectFieldConfig";
                            name?: string | null | undefined;
                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                            fields: {
                                __typename?: "GadgetModelField" | undefined;
                                sortable: boolean;
                                filterable: boolean;
                                name: string;
                                apiIdentifier: string;
                                fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                requiredArgumentForInput: boolean;
                                configuration: {
                                    __typename: "GadgetBelongsToConfig";
                                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                    relatedModel?: {
                                        __typename?: "GadgetModel" | undefined;
                                        apiIdentifier: string;
                                        namespace?: string[] | null | undefined;
                                    } | null | undefined;
                                } | {
                                    __typename: "GadgetDateTimeConfig";
                                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                } | {
                                    __typename: "GadgetEnumConfig";
                                    allowMultiple: boolean;
                                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                    options: {
                                        __typename?: "GadgetEnumOption" | undefined;
                                        name: string;
                                        color: string;
                                    }[];
                                } | {
                                    __typename: "GadgetGenericFieldConfig";
                                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                } | {
                                    __typename: "GadgetHasManyConfig";
                                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                    relatedModel?: {
                                        __typename?: "GadgetModel" | undefined;
                                        apiIdentifier: string;
                                        namespace?: string[] | null | undefined;
                                    } | null | undefined;
                                } | {
                                    __typename: "GadgetHasOneConfig";
                                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                } | {
                                    __typename: "GadgetObjectFieldConfig";
                                    name?: string | null | undefined;
                                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                    fields: {
                                        __typename?: "GadgetModelField" | undefined;
                                        sortable: boolean;
                                        filterable: boolean;
                                        name: string;
                                        apiIdentifier: string;
                                        fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                        requiredArgumentForInput: boolean;
                                        configuration: {
                                            __typename: "GadgetBelongsToConfig";
                                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                            relatedModel?: {
                                                __typename?: "GadgetModel" | undefined;
                                                apiIdentifier: string;
                                                namespace?: string[] | null | undefined;
                                            } | null | undefined;
                                        } | {
                                            __typename: "GadgetDateTimeConfig";
                                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                        } | {
                                            __typename: "GadgetEnumConfig";
                                            allowMultiple: boolean;
                                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                            options: {
                                                __typename?: "GadgetEnumOption" | undefined;
                                                name: string;
                                                color: string;
                                            }[];
                                        } | {
                                            __typename: "GadgetGenericFieldConfig";
                                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                        } | {
                                            __typename: "GadgetHasManyConfig";
                                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                            relatedModel?: {
                                                __typename?: "GadgetModel" | undefined;
                                                apiIdentifier: string;
                                                namespace?: string[] | null | undefined;
                                            } | null | undefined;
                                        } | {
                                            __typename: "GadgetHasOneConfig";
                                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                        } | {
                                            __typename: "GadgetObjectFieldConfig";
                                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                        };
                                    }[];
                                };
                            }[];
                        };
                    }[];
                };
            }[];
        };
    } | undefined;
    fetchingMetadata: boolean;
    metadataError: import("../utils.js").ErrorWrapper | undefined;
    fields: readonly {
        path: string;
        metadata: FieldMetadata;
    }[];
    submit: import("src/use-action-form/types.js").UseActionFormSubmit<ActionFunc>;
    formError: Error | import("../utils.js").ErrorWrapper | null | undefined;
    isSubmitSuccessful: boolean;
    isLoading: boolean;
    originalFormMethods: import("react-hook-form/dist/types/form.js").UseFormReturn<{
        [x: string]: any;
    }, any>;
};
