import { OptionLabel } from "../interfaces/AutoRelationshipInputProps.js";
export declare const optionRecordsToLoadCount = 25;
export declare const selectedRecordsToLoadCount = 25;
export declare const useRelatedModelOptions: (props: {
    field: string;
    optionLabel?: OptionLabel;
}) => {
    options: any[];
    searchFilterOptions: any[];
    selected: {
        records: never[] | undefined;
        fetching: boolean;
        error: import("../../utils.js").ErrorWrapper | undefined;
    };
    relatedModel: {
        records: any[];
        error: import("../../utils.js").ErrorWrapper | undefined;
        fetching: boolean;
    };
    pagination: {
        clearPagination: () => void;
        loadNextPage: () => void;
        hasNextPage: boolean;
    };
    search: {
        value: string | undefined;
        set: (search?: string) => void;
    };
};
export declare const getRecordsAsOptions: (records: Record<string, any>[], optionLabel: OptionLabel) => {
    id: any;
    label: string;
}[];
/**
 * For getting the selected record in a BelongsTo relationship
 * Returns the selected record in an array for interoperability with the HasOne/HasMany hook
 *
 * The lookup is done using the `findBy` to lookup on the current model to retrieve the related model record data
 */
export declare const useLinkedChildModelRelatedModelRecords: (props: {
    belongsToFieldApiId: string;
    currentRecordId?: string;
    currentModel: {
        apiIdentifier: string;
        namespace?: string[] | string | null;
    };
}) => {
    selected: {
        records: never[] | undefined;
        fetching: boolean;
        error: import("../../utils.js").ErrorWrapper | undefined;
    };
};
/**
 * For getting the related child model records in a HasOne/HasMany relationship
 */
export declare const useLinkedParentModelRelatedModelRecords: (props: {
    relatedModel: {
        apiIdentifier: string;
        namespace?: string[] | string | null;
        inverseFieldApiIdentifier: string;
    };
    currentRecordId?: string;
}) => {
    selected: {
        records: import("@gadgetinc/api-client-core").GadgetRecordList<never> | undefined;
        fetching: boolean;
        error: import("../../utils.js").ErrorWrapper | undefined;
    };
};
export declare const useAllRelatedModelRecords: (props: {
    optionLabel?: OptionLabel;
    relatedModel: {
        apiIdentifier: string;
        namespace?: string[] | string | null;
    };
}) => {
    relatedModel: {
        records: any[];
        error: import("../../utils.js").ErrorWrapper | undefined;
        fetching: boolean;
    };
    pagination: {
        clearPagination: () => void;
        loadNextPage: () => void;
        hasNextPage: boolean;
    };
    search: {
        value: string | undefined;
        set: (search?: string) => void;
    };
};
