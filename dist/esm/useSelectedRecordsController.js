import { IndexTableSelectionType } from "@shopify/polaris";
import { useEffect, useState } from "react";
import { uniq } from "./utils.js";
export const useSelectedRecordsController = (props) => {
    const { currentPageIds } = props;
    const [selectedRecordsIds, setSelectedRecordsIds] = useState([]);
    const selected = {
        recordIds: selectedRecordsIds,
        clearAll: () => setSelectedRecordsIds([]),
        selectCurrentPage: () => setSelectedRecordsIds(currentPageIds),
        selectIds: (ids) => setSelectedRecordsIds(uniq([...selectedRecordsIds, ...ids])),
        deselectIds: (ids) => setSelectedRecordsIds(selectedRecordsIds.filter((i) => !ids.includes(i))),
    };
    useEffect(() => {
        setSelectedRecordsIds(selectedRecordsIds.filter((i) => currentPageIds.includes(i)));
    }, [currentPageIds.join(",")]);
    const onSelectionChange = (selectionType, toggleType, selection, position) => {
        switch (selectionType) {
            case IndexTableSelectionType.Single: {
                const selectedId = [`${selection}`];
                toggleType ? selected.selectIds(selectedId) : selected.deselectIds(selectedId);
                break;
            }
            case IndexTableSelectionType.Page: {
                toggleType ? selected.selectCurrentPage() : selected.clearAll();
                break;
            }
            case IndexTableSelectionType.Multi: {
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
            case IndexTableSelectionType.All: // Do not allow selection outside of the current page
            case IndexTableSelectionType.Range: // Do not allow selection outside of the current page
            default:
                break;
        }
    };
    return { ...selected, onSelectionChange };
};
//# sourceMappingURL=useSelectedRecordsController.js.map