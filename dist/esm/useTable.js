import { useCallback, useMemo, useState } from "react";
import { useModelMetadata } from "./metadata.js";
import { getTableColumns, getTableRows, getTableSelectionMap, getTableSpec } from "./use-table/helpers.js";
import { useList } from "./useList.js";
import { deepMerge } from "./utils.js";
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
export const useTable = (manager, options) => {
    const namespace = manager.findMany.namespace;
    const namespaceAsArray = namespace ? (Array.isArray(namespace) ? namespace : [namespace]) : [];
    const { metadata, fetching: fetchingMetadata, error: metadataError, } = useModelMetadata(manager.findMany.modelApiIdentifier, namespaceAsArray);
    const [sort, setSort] = useState(options?.initialSort);
    const [sortColumnApiIdentifier, setSortColumnApiIdentifier] = useState(options?.initialSort ? Object.keys(options.initialSort)[0] : undefined);
    const [sortDirection, setSortDirection] = useState(options?.initialSort ? Object.values(options.initialSort)[0] : undefined);
    const sortColumn = useCallback((colName, direction) => {
        if (direction) {
            setSort({ [colName]: direction });
        }
        else {
            setSort(undefined);
        }
    }, []);
    const handleColumnSort = useCallback((columnApiIdentifier) => {
        const nextDirection = columnApiIdentifier !== sortColumnApiIdentifier ? "Descending" : getNextDirection(sortDirection);
        setSortDirection(nextDirection);
        setSortColumnApiIdentifier(nextDirection ? columnApiIdentifier : undefined);
        sortColumn(columnApiIdentifier, nextDirection);
    }, [sortColumnApiIdentifier, sortDirection]);
    const tableSpec = useMemo(() => metadata && getTableSpec(metadata.fields, options?.columns, options?.excludeColumns, manager.findMany.defaultSelection), [manager.findMany.defaultSelection, metadata, options?.columns, options?.excludeColumns]);
    const selectionMap = useMemo(() => tableSpec && getTableSelectionMap(tableSpec), [tableSpec]);
    const [{ data, fetching: dataFetching, error: dataError, page, search, selection }, refresh] = useList(manager, {
        ...options,
        sort: sort,
        filter: options?.filter,
        select: deepMerge(options?.select ?? {}, selectionMap),
        pause: !metadata, // Don't fetch data until metadata is loaded
    });
    const tableData = useMemo(() => {
        return tableSpec && data && metadata
            ? {
                rows: getTableRows(tableSpec, data),
                columns: getTableColumns(tableSpec),
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
            search,
            sort: sortState,
            selection,
        },
        refresh,
    ];
};
//# sourceMappingURL=useTable.js.map