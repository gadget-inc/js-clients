"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelectedRecordsController = void 0;
const polaris_1 = require("@shopify/polaris");
const react_1 = require("react");
const utils_js_1 = require("./utils.js");
const useSelectedRecordsController = (props) => {
    const { currentPageIds } = props;
    const [selectedRecordsIds, setSelectedRecordsIds] = (0, react_1.useState)([]);
    const selected = {
        recordIds: selectedRecordsIds,
        clearAll: () => setSelectedRecordsIds([]),
        selectCurrentPage: () => setSelectedRecordsIds(currentPageIds),
        selectIds: (ids) => setSelectedRecordsIds((0, utils_js_1.uniq)([...selectedRecordsIds, ...ids])),
        deselectIds: (ids) => setSelectedRecordsIds(selectedRecordsIds.filter((i) => !ids.includes(i))),
    };
    (0, react_1.useEffect)(() => {
        setSelectedRecordsIds(selectedRecordsIds.filter((i) => currentPageIds.includes(i)));
    }, [currentPageIds.join(",")]);
    const onSelectionChange = (selectionType, toggleType, selection, position) => {
        switch (selectionType) {
            case polaris_1.IndexTableSelectionType.Single: {
                const selectedId = [`${selection}`];
                toggleType ? selected.selectIds(selectedId) : selected.deselectIds(selectedId);
                break;
            }
            case polaris_1.IndexTableSelectionType.Page: {
                toggleType ? selected.selectCurrentPage() : selected.clearAll();
                break;
            }
            case polaris_1.IndexTableSelectionType.Multi: {
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
            case polaris_1.IndexTableSelectionType.All: // Do not allow selection outside of the current page
            case polaris_1.IndexTableSelectionType.Range: // Do not allow selection outside of the current page
            default:
                break;
        }
    };
    return { ...selected, onSelectionChange };
};
exports.useSelectedRecordsController = useSelectedRecordsController;
//# sourceMappingURL=useSelectedRecordsController.js.map