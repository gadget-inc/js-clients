/// <reference types="react" resolution-mode="require"/>
import type { OptionLabel } from "./auto/interfaces/AutoRelationshipInputProps.js";
export declare const useBelongsToForm: (props: {
    field: string;
    children: React.ReactNode;
    primaryLabel?: OptionLabel;
    secondaryLabel?: OptionLabel;
    tertiaryLabel?: OptionLabel;
}) => {
    record: any;
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
    searchOpen: boolean;
    modalOpen: boolean;
    primaryLabel: OptionLabel;
    hasRecord: boolean;
    recordOption: import("./auto/interfaces/AutoRelationshipInputProps.js").Option | null;
    parentName: string;
    metadata: import("./metadata.js").FieldMetadata;
    defaultRecordId: any;
    path: string;
    pathPrefix: string;
    setValue: import("./useActionForm.js").UseFormSetValue<import("./useActionForm.js").FieldValues>;
    getValues: import("./useActionForm.js").UseFormGetValues<import("./useActionForm.js").FieldValues>;
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
    setActionsOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setSearchOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setModalOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    metaDataPathPrefix: string;
};
