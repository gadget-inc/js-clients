import type { ActionFunction, GadgetRecord, GlobalActionFunction } from "@gadgetinc/api-client-core";
import type { ReactNode } from "react";
import type { AnyActionWithId, RecordIdentifier } from "src/use-action-form/types.js";
import type { ActionMetadata, FieldMetadata, GlobalActionMetadata } from "../metadata.js";
import type { FieldValues } from "../useActionForm.js";
import { type OptionsType } from "../utils.js";
/** The props that any <AutoForm/> component accepts */
export type AutoFormProps<GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>, ExtraFormVariables extends FieldValues = Record<string, unknown>, DefaultValues = ActionFunc["variablesType"] & ExtraFormVariables> = {
    /** Which action this fom will run on submit */
    action: ActionFunc;
    /** A record for this form to act on */
    record?: GadgetRecord<any>;
    /** An allowlist of fields to render within the form. Only these fields will be rendered as inputs. */
    include?: string[];
    /** A denylist of fields to render within the form. Every field except these fields will be rendered as inputs. */
    exclude?: string[];
    /** A set of field values to pre-populate the form with on load. Only applies to create forms. */
    defaultValues?: DefaultValues;
    /** The label to use for the submit button at the bottom of the form */
    submitLabel?: ReactNode;
    /** What to show the user once the form has been submitted successfully */
    successContent?: ReactNode;
} & (ActionFunc extends AnyActionWithId<GivenOptions> ? {
    /**
     * The record identifier to run this action on, if it already exists.
     * Should be undefined for create actions, or a record ID (or finder) for update / etc actions
     **/
    findBy?: RecordIdentifier;
} : {});
/**
 * React hook for getting the validation schema for a list of fields
 */
export declare const useValidationResolver: (metadata: ActionMetadata | GlobalActionMetadata | undefined) => import("../useActionForm.js").Resolver<{
    [x: string]: any;
}> | undefined;
/**
 * React hook for getting a list of fields to use in a form (given include/exclude options)
 */
export declare const useFormFields: (metadata: ActionMetadata | GlobalActionMetadata | undefined | null, options: {
    include?: string[];
    exclude?: string[];
}) => readonly {
    path: string;
    metadata: FieldMetadata;
}[];
/**
 * Internal React hook for sharing logic between different `AutoForm` components.
 * @internal
 */
export declare const useAutoForm: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends GlobalActionFunction<any> | ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: AutoFormProps<GivenOptions, SchemaT, ActionFunc, any, any>) => {
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
                        defaultDisplayField: {
                            __typename?: "GadgetModelField" | undefined;
                            apiIdentifier: string;
                        };
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
                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                    relatedModel?: {
                        __typename?: "GadgetModel" | undefined;
                        apiIdentifier: string;
                        namespace?: string[] | null | undefined;
                        defaultDisplayField: {
                            __typename?: "GadgetModelField" | undefined;
                            apiIdentifier: string;
                        };
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
                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                    relatedModel?: {
                        __typename?: "GadgetModel" | undefined;
                        apiIdentifier: string;
                        namespace?: string[] | null | undefined;
                        defaultDisplayField: {
                            __typename?: "GadgetModelField" | undefined;
                            apiIdentifier: string;
                        };
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
                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                                defaultDisplayField: {
                                    __typename?: "GadgetModelField" | undefined;
                                    apiIdentifier: string;
                                };
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
                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                            relatedModel?: {
                                __typename?: "GadgetModel" | undefined;
                                apiIdentifier: string;
                                namespace?: string[] | null | undefined;
                                defaultDisplayField: {
                                    __typename?: "GadgetModelField" | undefined;
                                    apiIdentifier: string;
                                };
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
                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                            relatedModel?: {
                                __typename?: "GadgetModel" | undefined;
                                apiIdentifier: string;
                                namespace?: string[] | null | undefined;
                                defaultDisplayField: {
                                    __typename?: "GadgetModelField" | undefined;
                                    apiIdentifier: string;
                                };
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
                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                                        defaultDisplayField: {
                                            __typename?: "GadgetModelField" | undefined;
                                            apiIdentifier: string;
                                        };
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
                                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                    relatedModel?: {
                                        __typename?: "GadgetModel" | undefined;
                                        apiIdentifier: string;
                                        namespace?: string[] | null | undefined;
                                        defaultDisplayField: {
                                            __typename?: "GadgetModelField" | undefined;
                                            apiIdentifier: string;
                                        };
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
                                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                    relatedModel?: {
                                        __typename?: "GadgetModel" | undefined;
                                        apiIdentifier: string;
                                        namespace?: string[] | null | undefined;
                                        defaultDisplayField: {
                                            __typename?: "GadgetModelField" | undefined;
                                            apiIdentifier: string;
                                        };
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
                                    fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                                                defaultDisplayField: {
                                                    __typename?: "GadgetModelField" | undefined;
                                                    apiIdentifier: string;
                                                };
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
                                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                            relatedModel?: {
                                                __typename?: "GadgetModel" | undefined;
                                                apiIdentifier: string;
                                                namespace?: string[] | null | undefined;
                                                defaultDisplayField: {
                                                    __typename?: "GadgetModelField" | undefined;
                                                    apiIdentifier: string;
                                                };
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
                                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                            relatedModel?: {
                                                __typename?: "GadgetModel" | undefined;
                                                apiIdentifier: string;
                                                namespace?: string[] | null | undefined;
                                                defaultDisplayField: {
                                                    __typename?: "GadgetModelField" | undefined;
                                                    apiIdentifier: string;
                                                };
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
                                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                                            fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
        };
    } | {
        __typename?: "GadgetGlobalAction" | undefined;
        name: string;
        apiIdentifier: string;
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
                    defaultDisplayField: {
                        __typename?: "GadgetModelField" | undefined;
                        apiIdentifier: string;
                    };
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
                fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                relatedModel?: {
                    __typename?: "GadgetModel" | undefined;
                    apiIdentifier: string;
                    namespace?: string[] | null | undefined;
                    defaultDisplayField: {
                        __typename?: "GadgetModelField" | undefined;
                        apiIdentifier: string;
                    };
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
                fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                relatedModel?: {
                    __typename?: "GadgetModel" | undefined;
                    apiIdentifier: string;
                    namespace?: string[] | null | undefined;
                    defaultDisplayField: {
                        __typename?: "GadgetModelField" | undefined;
                        apiIdentifier: string;
                    };
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
                fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                            defaultDisplayField: {
                                __typename?: "GadgetModelField" | undefined;
                                apiIdentifier: string;
                            };
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
                        fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                        fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                        fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                        fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                        relatedModel?: {
                            __typename?: "GadgetModel" | undefined;
                            apiIdentifier: string;
                            namespace?: string[] | null | undefined;
                            defaultDisplayField: {
                                __typename?: "GadgetModelField" | undefined;
                                apiIdentifier: string;
                            };
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
                        fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                        relatedModel?: {
                            __typename?: "GadgetModel" | undefined;
                            apiIdentifier: string;
                            namespace?: string[] | null | undefined;
                            defaultDisplayField: {
                                __typename?: "GadgetModelField" | undefined;
                                apiIdentifier: string;
                            };
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
                        fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                                    defaultDisplayField: {
                                        __typename?: "GadgetModelField" | undefined;
                                        apiIdentifier: string;
                                    };
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
                                fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                                fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                                fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                                fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                relatedModel?: {
                                    __typename?: "GadgetModel" | undefined;
                                    apiIdentifier: string;
                                    namespace?: string[] | null | undefined;
                                    defaultDisplayField: {
                                        __typename?: "GadgetModelField" | undefined;
                                        apiIdentifier: string;
                                    };
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
                                fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                relatedModel?: {
                                    __typename?: "GadgetModel" | undefined;
                                    apiIdentifier: string;
                                    namespace?: string[] | null | undefined;
                                    defaultDisplayField: {
                                        __typename?: "GadgetModelField" | undefined;
                                        apiIdentifier: string;
                                    };
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
                                fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                                            defaultDisplayField: {
                                                __typename?: "GadgetModelField" | undefined;
                                                apiIdentifier: string;
                                            };
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
                                        fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                                        fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                                        fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                                        fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                        relatedModel?: {
                                            __typename?: "GadgetModel" | undefined;
                                            apiIdentifier: string;
                                            namespace?: string[] | null | undefined;
                                            defaultDisplayField: {
                                                __typename?: "GadgetModelField" | undefined;
                                                apiIdentifier: string;
                                            };
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
                                        fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
                                        relatedModel?: {
                                            __typename?: "GadgetModel" | undefined;
                                            apiIdentifier: string;
                                            namespace?: string[] | null | undefined;
                                            defaultDisplayField: {
                                                __typename?: "GadgetModelField" | undefined;
                                                apiIdentifier: string;
                                            };
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
                                        fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
                                        fieldType: import("../internal/gql/graphql.js").GadgetFieldType;
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
    originalFormMethods: import("../useActionForm.js").UseFormReturn<any, any>;
};
