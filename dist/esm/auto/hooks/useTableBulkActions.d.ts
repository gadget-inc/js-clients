import React from "react";
import { TableOptions } from "../../useTableUtils/types.js";
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
    render?: (recordIds: string[], records: any[]) => React.ReactNode;
};
export type BulkActionOption = {
    humanizedName: string;
    selectModelAction: () => void;
    apiIdentifier: string;
    callback?: (recordIds: string[], records: any[]) => any;
};
export declare const useTableBulkActions: (props: {
    model: any;
    actions: TableOptions["actions"];
    excludeActions: TableOptions["excludeActions"];
}) => {
    selectedModelActionDetails: ModelActionDetails | undefined;
    bulkActionOptions: BulkActionOption[];
};
