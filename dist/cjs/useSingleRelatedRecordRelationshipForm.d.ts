/// <reference types="react" />
import { type useRelatedModelOptions } from "./auto/hooks/useRelatedModel.js";
import type { AutoRelationshipFormProps } from "./auto/interfaces/AutoRelationshipInputProps.js";
export declare const useSingleRelatedRecordRelationshipForm: (props: AutoRelationshipFormProps & {
    relationshipController: {
        record: Record<string, any> | undefined;
        relatedModelOptions: ReturnType<typeof useRelatedModelOptions>;
    };
}) => {
    actionsOpen: boolean;
    defaultRecordId: any;
    getValues: import("react-hook-form/dist/types/form.js").UseFormGetValues<import("react-hook-form/dist/types/fields.js").FieldValues>;
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
    setIsEditing: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setSearchOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setValue: import("react-hook-form/dist/types/form.js").UseFormSetValue<import("react-hook-form/dist/types/fields.js").FieldValues>;
};
