import { useEffect, useState } from "react";
import { uniq } from "./utils.js";

export enum SelectionType {
  All = "all",
  Page = "page",
  Multi = "multi",
  Single = "single",
  Range = "range",
}

export type RecordSelection = {
  recordIds: string[];
  clearAll: () => void;
  selectCurrentPage: () => void;
  selectIds: (ids: string[]) => void;
  deselectIds: (ids: string[]) => void;
  onSelectionChange: (selectionType: SelectionType, toggleType: boolean, selection?: string | [number, number], position?: number) => void;
};

export const useSelectedRecordsController = (props: { currentPageIds: string[] }) => {
  const { currentPageIds } = props;
  const [selectedRecordsIds, setSelectedRecordsIds] = useState<string[]>([]);

  const selected = {
    recordIds: selectedRecordsIds,
    clearAll: () => setSelectedRecordsIds([]),
    selectCurrentPage: () => setSelectedRecordsIds(currentPageIds),
    selectIds: (ids: string[]) => setSelectedRecordsIds(uniq([...selectedRecordsIds, ...ids])),
    deselectIds: (ids: string[]) => setSelectedRecordsIds(selectedRecordsIds.filter((i) => !ids.includes(i))),
  };

  useEffect(() => {
    setSelectedRecordsIds(selectedRecordsIds.filter((i) => currentPageIds.includes(i)));
  }, [currentPageIds.join(",")]);

  const onSelectionChange = (
    selectionType: SelectionType,
    toggleType: boolean,
    selection?: string | [number, number],
    position?: number
  ) => {
    switch (selectionType) {
      case SelectionType.Single: {
        const selectedId = [`${selection}`];
        toggleType ? selected.selectIds(selectedId) : selected.deselectIds(selectedId);
        break;
      }
      case SelectionType.Page: {
        toggleType ? selected.selectCurrentPage() : selected.clearAll();
        break;
      }
      case SelectionType.Multi: {
        // During a multiselect, the row indexes are returned instead of the record ids
        if (!Array.isArray(selection)) {
          throw new Error("Expected an array of indexes for multi-select");
        }
        const selectedIds = [];
        for (let i = selection[0]; i <= selection[1]; i++) {
          selectedIds.push(currentPageIds[i]);
        }
        toggleType ? selected.selectIds(selectedIds) : selected.deselectIds(selectedIds);
        break;
      }
      case SelectionType.All: // Do not allow selection outside of the current page
      case SelectionType.Range: // Do not allow selection outside of the current page
      default:
        break;
    }
  };

  return { ...selected, onSelectionChange };
};
