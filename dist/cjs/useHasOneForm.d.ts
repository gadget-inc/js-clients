/// <reference types="react" />
import type { OptionLabel } from "./auto/interfaces/AutoRelationshipInputProps.js";
export declare const useHasOneForm: (props: {
    field: string;
    children: React.ReactNode;
    primaryLabel?: OptionLabel;
    secondaryLabel?: OptionLabel;
    tertiaryLabel?: OptionLabel;
}) => {
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
    primaryLabel: OptionLabel;
    record: Record<string, any> | undefined;
    recordOption: import("./auto/interfaces/AutoRelationshipInputProps.js").Option | null;
    records: any[];
    relatedModelName: string;
    relatedModelOptions: {
        options: import("./auto/interfaces/AutoRelationshipInputProps.js").Option[];
        searchFilterOptions: import("./auto/interfaces/AutoRelationshipInputProps.js").Option[];
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
    searchFilterOptions: import("./auto/interfaces/AutoRelationshipInputProps.js").Option[];
    searchOpen: boolean;
    secondaryLabel: OptionLabel | undefined;
    setActionsOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setSearchOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setValue: import("react-hook-form").UseFormSetValue<import("react-hook-form").FieldValues>;
    tertiaryLabel: OptionLabel | undefined;
};
