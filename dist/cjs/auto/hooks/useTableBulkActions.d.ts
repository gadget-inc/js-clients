export declare const useTableBulkActions: (props: {
    model: any;
}) => {
    selectedModelActionDetails: ModelActionDetails | undefined;
    bulkActionOptions: {
        humanizedName: string;
        selectModelAction: () => void;
    }[];
};
export type ModelActionDetails = {
    apiIdentifier: string;
    operationName: string;
    isDeleter: boolean;
    isBulk: boolean;
    acceptsModelInput: boolean;
    variables: any;
};
