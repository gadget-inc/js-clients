export declare enum SelectionType {
    All = "all",
    Page = "page",
    Multi = "multi",
    Single = "single",
    Range = "range"
}
export type RecordSelection = {
    recordIds: string[];
    clearAll: () => void;
    selectCurrentPage: () => void;
    selectIds: (ids: string[]) => void;
    deselectIds: (ids: string[]) => void;
    onSelectionChange: (selectionType: SelectionType, toggleType: boolean, selection?: string | [number, number], position?: number) => void;
};
export declare const useSelectedRecordsController: (props: {
    currentPageIds: string[];
}) => {
    onSelectionChange: (selectionType: SelectionType, toggleType: boolean, selection?: string | [number, number], position?: number) => void;
    recordIds: string[];
    clearAll: () => void;
    selectCurrentPage: () => void;
    selectIds: (ids: string[]) => void;
    deselectIds: (ids: string[]) => void;
};
