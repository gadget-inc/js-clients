import { ControllerRenderProps, type Control } from "react-hook-form";
export declare const numberOfRecordsToLoad = 25;
export declare const useRelationshipInputController: (props: {
    field: string;
    control?: Control<any>;
    optionLabel?: string | ((record: Record<string, any>) => string);
}) => {
    relatedModel: {
        options: any[];
        error: import("../../utils.js").ErrorWrapper | undefined;
        hasNextPage: boolean;
        isLoadingRelatedRecords: boolean;
    };
    selection: {
        id: string | undefined;
        label: string;
        error: import("../../utils.js").ErrorWrapper | undefined;
        set: (selectedId?: string) => void;
    };
    pagination: {
        resetPagination: () => void;
        loadNextPageOfRecords: () => void;
    };
    search: {
        value: string | undefined;
        set: (search?: string) => void;
    };
    path: string;
    isHasMany: boolean;
    fieldProps: ControllerRenderProps<any, string>;
    fieldError: import("react-hook-form").FieldError | undefined;
    metadata: import("../../internal/gql/graphql.js").FieldMetadataFragment;
};
