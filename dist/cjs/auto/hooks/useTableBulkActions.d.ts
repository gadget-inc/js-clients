import type { GadgetRecord } from "@gadgetinc/core";
import type { TableOptions, TableRow } from "../../use-table/types.js";
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
export declare const getBulkActionOptionCallback: (props: {
    option: BulkActionOption;
    selectedRows: TableRow[];
    clearSelection: () => void;
    rawRecords: GadgetRecord<any>[] | null;
}) => () => void;
export type AutoBulkActionModal = {
    model: any;
    modelActionDetails?: ModelActionDetails;
    ids: string[];
    clearSelection: () => void;
};
export declare const useAutoTableBulkActionModal: (props: AutoBulkActionModal) => {
    showModal: boolean;
    actionIsLoaded: string | undefined;
    isBulkGadgetAction: any;
    modalTitle: string;
    closeAndClear: () => void;
};
export type GadgetBulkActionModalContentProps = {
    model: any;
    modelActionDetails: ModelActionDetails;
    actionLabel: string;
    ids: string[];
    close: () => void;
};
export declare const ActionSuccessMessage = " completed";
export declare const ActionErrorMessage = " failed";
export declare const getRunActionConfirmationText: (count: number) => string;
export declare const useGadgetBulkActionModalContent: (props: GadgetBulkActionModalContentProps) => {
    hasRun: boolean;
    fetching: boolean;
    hasError: boolean;
    runAction: () => void;
    actionResultMessage: string;
};
