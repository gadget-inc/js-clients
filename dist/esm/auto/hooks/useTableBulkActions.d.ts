import type { TableOptions } from "../../use-table/types.js";
export type ModelActionDetails = {
    isGadgetAction: true;
    apiIdentifier: string;
    isDeleter: boolean;
    isBulk: boolean;
    acceptsModelInput: boolean;
    variables?: any;
} | {
    isGadgetAction: false;
    apiIdentifier: string;
};
export type BulkActionOption = {
    promoted: boolean;
    humanizedName: string;
    selectModelAction?: () => void;
    apiIdentifier: string;
    action?: (records: any[]) => any;
};
export declare const useTableBulkActions: (props: {
    model: any;
    actions: TableOptions["actions"];
    excludeActions: TableOptions["excludeActions"];
}) => {
    selectedModelActionDetails: ModelActionDetails | undefined;
    bulkActionOptions: BulkActionOption[];
};
