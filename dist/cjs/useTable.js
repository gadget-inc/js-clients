"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTable = void 0;
const react_1 = require("react");
const metadata_js_1 = require("./metadata.js");
const useList_js_1 = require("./useList.js");
const helpers_js_1 = require("./useTableUtils/helpers.js");
/**
 * Headless React hook for powering a table showing a page of Gadget records from the backend, optionally sorted, filtered, searched, and selected from. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be a `GadgetRecordList` object holding the list of returned records and pagination info.
 *
 * @param manager Gadget model manager to use
 * @param options options for filtering and searching records, and selecting the fields in each record of the result
 *
 * @example
 *
 * ```
 * TODO
 * ```
 */
const useTable = (manager, options) => {
    const namespace = manager.findMany.namespace;
    const namespaceAsArray = namespace ? (Array.isArray(namespace) ? namespace : [namespace]) : [];
    const { metadata, fetching: fetchingMetadata, error: metadataError, } = (0, metadata_js_1.useModelMetadata)(manager.findMany.modelApiIdentifier, namespaceAsArray);
    const [sort, setSort] = (0, react_1.useState)(options?.sort);
    const sortColumn = (0, react_1.useCallback)((colName, direction) => {
        if (direction) {
            setSort({ [colName]: direction });
        }
        else {
            setSort(undefined);
        }
    }, []);
    const tableSpec = (0, react_1.useMemo)(() => metadata && (0, helpers_js_1.getTableSpec)(metadata.fields, options?.columns, options?.excludeColumns, manager.findMany.defaultSelection), [manager.findMany.defaultSelection, metadata, options?.columns, options?.excludeColumns]);
    const selectionMap = (0, react_1.useMemo)(() => tableSpec && (0, helpers_js_1.getTableSelectionMap)(tableSpec), [tableSpec]);
    const [{ data, fetching: dataFetching, error: dataError, page, search, selection }, refresh] = (0, useList_js_1.useList)(manager, {
        ...options,
        sort: sort,
        filter: options?.filter,
        select: selectionMap,
        pause: !metadata, // Don't fetch data until metadata is loaded
    });
    const tableData = (0, react_1.useMemo)(() => {
        return tableSpec && data && metadata
            ? {
                rows: (0, helpers_js_1.getTableRows)(tableSpec, data),
                columns: (0, helpers_js_1.getTableColumns)(tableSpec),
                data,
                metadata,
            }
            : {
                rows: null,
                columns: null,
                data: null,
                metadata: null,
            };
    }, [data, metadata, tableSpec]);
    const isAwaitingDebouncedSearchValue = search.value != search.debouncedValue;
    const fetching = dataFetching || fetchingMetadata || isAwaitingDebouncedSearchValue;
    const error = dataError || metadataError;
    return [
        {
            ...tableData,
            page,
            fetching,
            error,
            search,
            sort: sortColumn,
            selection,
        },
        refresh,
    ];
};
exports.useTable = useTable;
//# sourceMappingURL=useTable.js.map