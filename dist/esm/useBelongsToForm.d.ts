/// <reference types="react" resolution-mode="require"/>
import type { AutoRelationshipFormProps } from "./auto/interfaces/AutoRelationshipInputProps.js";
export declare const useBelongsToForm: (props: AutoRelationshipFormProps) => {
    record: any;
    hasRecord: boolean;
    actionsOpen: boolean;
    defaultRecordId: any;
    getValues: import("react-hook-form").UseFormGetValues<import("react-hook-form").FieldValues>;
    isEditing: boolean;
    isLoading: boolean;
    metaDataPathPrefix: string;
    metadata: import("./metadata.js").FieldMetadata;
    pagination: {
        clearPagination: () => void;
        loadNextPage: () => void;
        hasNextPage: boolean;
    };
    path: string;
    pathPrefix: string;
    recordOption: import("./auto/interfaces/AutoRelationshipInputProps.js").DisplayedRecordOption | null;
    records: any[];
    relatedModelName: string;
    relatedModelOptions: {
        options: import("./auto/interfaces/AutoRelationshipInputProps.js").DisplayedRecordOption[];
        searchFilterOptions: import("./auto/interfaces/AutoRelationshipInputProps.js").DisplayedRecordOption[];
        relatedModel: {
            records: any[];
            error: import("@gadgetinc/core").AnyErrorWrapper<Error> | undefined;
            fetching: boolean;
        };
        pagination: {
            clearPagination: () => void;
            loadNextPage: () => void;
            hasNextPage: boolean;
        };
        search: {
            value: string;
            set: (search?: string | undefined) => void;
        };
    };
    search: {
        value: string;
        set: (search?: string | undefined) => void;
    };
    searchFilterOptions: import("./auto/interfaces/AutoRelationshipInputProps.js").DisplayedRecordOption[];
    searchOpen: boolean;
    setActionsOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setIsEditing: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setSearchOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setValue: import("react-hook-form").UseFormSetValue<import("react-hook-form").FieldValues>;
};
