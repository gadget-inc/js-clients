/// <reference types="react" />
import type { OptionLabel } from "./auto/interfaces/AutoRelationshipInputProps.js";
export declare const useHasOneForm: (props: {
    field: string;
    primaryLabel?: OptionLabel;
    secondaryLabel?: OptionLabel;
    tertiaryLabel?: OptionLabel;
}) => {
    path: string;
    metadata: import("./metadata.js").FieldMetadata;
    setValue: import("react-hook-form/dist/types/form.js").UseFormSetValue<import("react-hook-form/dist/types/fields.js").FieldValues>;
    record: Record<string, any> | undefined;
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
    actionsOpen: boolean;
    setActionsOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    searchOpen: boolean;
    setSearchOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    modalOpen: boolean;
    setModalOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    search: {
        value: string;
        set: (search?: string | undefined) => void;
    };
    searchFilterOptions: import("./auto/interfaces/AutoRelationshipInputProps.js").Option[];
    pagination: {
        clearPagination: () => void;
        loadNextPage: () => void;
        hasNextPage: boolean;
    };
    records: any[];
    isLoading: boolean;
    pathPrefix: string;
    metaDataPathPrefix: string;
    hasRecord: boolean;
    recordOption: import("./auto/interfaces/AutoRelationshipInputProps.js").Option | null;
    childName: string;
    defaultRecordId: any;
    primaryLabel: OptionLabel;
    secondaryLabel: OptionLabel | undefined;
    tertiaryLabel: OptionLabel | undefined;
    getValues: import("react-hook-form/dist/types/form.js").UseFormGetValues<import("react-hook-form/dist/types/fields.js").FieldValues>;
};
