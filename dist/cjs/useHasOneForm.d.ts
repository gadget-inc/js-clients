/// <reference types="react" />
import type { AutoRelationshipFormProps } from "./auto/interfaces/AutoRelationshipInputProps.js";
export declare const useHasOneForm: (props: AutoRelationshipFormProps) => {
    confirmEdit: () => void;
    removeRecord: () => void;
    setIsEditing: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    startCreatingRecord: () => void;
    hasRecord: boolean;
    isCreatingRecord: boolean;
    actionsOpen: boolean;
    defaultRecordId: any;
    getValues: import("react-hook-form").UseFormGetValues<import("react-hook-form").FieldValues>;
    isEditing: boolean;
    /**
     * Unlinks existing related records and removes created & selected records from the form state
     */
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
    record: Record<string, any> | undefined;
    recordOption: import("./auto/interfaces/AutoRelationshipInputProps.js").DisplayedRecordOption | null;
    records: any[];
    relatedModelName: string;
    relatedModelOptions: {
        options: import("./auto/interfaces/AutoRelationshipInputProps.js").DisplayedRecordOption[];
        searchFilterOptions: import("./auto/interfaces/AutoRelationshipInputProps.js").DisplayedRecordOption[];
        relatedModel: {
            records: any[];
            error: import("./utils.js").ErrorWrapper | undefined;
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
    setSearchOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setValue: import("react-hook-form").UseFormSetValue<import("react-hook-form").FieldValues>;
};
