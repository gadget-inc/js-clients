import type { GadgetRecord } from "@gadgetinc/api-client-core";
import type { FieldMetadataFragment } from "../internal/gql/graphql.js";
import { GadgetFieldType } from "../internal/gql/graphql.js";
import type { ModelMetadata } from "../metadata.js";
import type { TableColumn, TableOptions, TableRow } from "./types.js";
export declare const getTableData: (props: {
    columns?: TableColumn[];
    data?: GadgetRecord<any>[];
    metadata?: ModelMetadata;
}) => {
    rows: TableRow[];
    columns: TableColumn[];
    data: any[];
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
                    apiIdentifier: string;
                    namespace?: string[] | null | undefined;
                    defaultDisplayField: {
                        __typename?: "GadgetModelField" | undefined;
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
                    apiIdentifier: string;
                    namespace?: string[] | null | undefined;
                    defaultDisplayField: {
                        __typename?: "GadgetModelField" | undefined;
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
                    apiIdentifier: string;
                    namespace?: string[] | null | undefined;
                    defaultDisplayField: {
                        __typename?: "GadgetModelField" | undefined;
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
    };
} | {
    rows: null;
    columns: null;
    data: null;
    metadata: null;
};
export declare const getTableRows: (props: {
    data: GadgetRecord<any>[];
    columns: TableColumn[];
}) => TableRow[];
export declare const getTableColumns: (fields: FieldMetadataFragment[], columns: TableOptions["columns"]) => TableColumn[];
