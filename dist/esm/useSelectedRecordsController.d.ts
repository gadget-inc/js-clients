import { IndexTableSelectionType } from "@shopify/polaris";
export type RecordSelection = {
    recordIds: string[];
    clearAll: () => void;
    selectCurrentPage: () => void;
    selectIds: (ids: string[]) => void;
    deselectIds: (ids: string[]) => void;
    onSelectionChange: (selectionType: IndexTableSelectionType, toggleType: boolean, selection?: string | [number, number], position?: number) => void;
};
export declare const useSelectedRecordsController: (props: {
    currentPageIds: string[];
}) => {
    onSelectionChange: (selectionType: IndexTableSelectionType, toggleType: boolean, selection?: string | [number, number], position?: number) => void;
    recordIds: string[];
    clearAll: () => void;
    selectCurrentPage: () => void;
    selectIds: (ids: string[]) => void;
    deselectIds: (ids: string[]) => void;
};
