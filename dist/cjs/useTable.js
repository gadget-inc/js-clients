"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTable = void 0;
const react_1 = require("react");
const AutoTableValidators_js_1 = require("./auto/AutoTableValidators.js");
const metadata_js_1 = require("./metadata.js");
const helpers_js_1 = require("./use-table/helpers.js");
const useList_js_1 = require("./useList.js");
const getNextDirection = (sortDirection) => {
    switch (sortDirection) {
        case "Descending":
            return "Ascending";
        case "Ascending":
            return undefined;
        case undefined:
        default:
            return "Descending";
    }
};
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
    (0, AutoTableValidators_js_1.validateAutoTableProps)(manager);
    const namespace = manager.findMany.namespace;
    const namespaceAsArray = namespace ? (Array.isArray(namespace) ? namespace : [namespace]) : [];
    const { metadata, fetching: fetchingMetadata, error: metadataError, } = (0, metadata_js_1.useModelMetadata)(manager.findMany.modelApiIdentifier, namespaceAsArray);
    (0, AutoTableValidators_js_1.validateAutoTableOptions)({ options, metadata });
    const isSearchable = !!(options?.searchable ?? (metadata ? metadata.searchable : false));
    const [sort, setSort] = (0, react_1.useState)(options?.initialSort);
    const [sortColumnApiIdentifier, setSortColumnApiIdentifier] = (0, react_1.useState)(options?.initialSort ? Object.keys(options.initialSort)[0] : undefined);
    const [sortDirection, setSortDirection] = (0, react_1.useState)(options?.initialSort ? Object.values(options.initialSort)[0] : undefined);
    const sortColumn = (0, react_1.useCallback)((colName, direction) => {
        if (direction) {
            setSort({ [colName]: direction });
        }
        else {
            setSort(undefined);
        }
    }, []);
    const handleColumnSort = (0, react_1.useCallback)((columnApiIdentifier) => {
        const nextDirection = columnApiIdentifier !== sortColumnApiIdentifier ? "Descending" : getNextDirection(sortDirection);
        setSortDirection(nextDirection);
        setSortColumnApiIdentifier(nextDirection ? columnApiIdentifier : undefined);
        sortColumn(columnApiIdentifier, nextDirection);
    }, [sortColumnApiIdentifier, sortDirection]);
    const tableSpec = (0, react_1.useMemo)(() => metadata && (0, helpers_js_1.getTableSpec)(metadata.fields, options?.columns, options?.excludeColumns, manager.findMany.defaultSelection), [manager.findMany.defaultSelection, metadata, options?.columns, options?.excludeColumns]);
    const selectionMap = (0, react_1.useMemo)(() => options?.select ?? (tableSpec && (0, helpers_js_1.getTableSelectionMap)(tableSpec)), [options?.select, tableSpec]);
    const [{ data, fetching: dataFetching, error: dataError, page, search, selection }, refresh] = (0, useList_js_1.useList)(manager, {
        ...options,
        sort: sort,
        filter: options?.filter,
        select: selectionMap,
        pause: !metadata, // Don't fetch data until metadata is loaded
    });
    const tableData = (0, react_1.useMemo)(() => {
        if (tableSpec && data && metadata) {
            const columns = (0, helpers_js_1.getTableColumns)(tableSpec);
            const rows = (0, helpers_js_1.getTableRows)(tableSpec, columns, data);
            return {
                rows,
                columns,
                data,
                metadata,
            };
        }
        else {
            return {
                rows: null,
                columns: null,
                data: null,
                metadata: null,
            };
        }
    }, [data, metadata, tableSpec]);
    const isAwaitingDebouncedSearchValue = search.value != search.debouncedValue;
    const fetching = dataFetching || fetchingMetadata || isAwaitingDebouncedSearchValue;
    const error = dataError || metadataError;
    const sortState = {
        column: sortColumnApiIdentifier ?? "",
        direction: sortDirection ?? "Ascending",
        handleColumnSort,
        setSort: sortColumn,
    };
    return [
        {
            ...tableData,
            page,
            fetching,
            error,
            search: isSearchable ? search : undefined,
            sort: sortState,
            selection,
        },
        refresh,
    ];
};
exports.useTable = useTable;
//# sourceMappingURL=useTable.js.map