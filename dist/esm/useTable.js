import { useCallback, useMemo, useState } from "react";
import { filterAutoTableFieldList, useModelMetadata } from "./metadata.js";
import { useList } from "./useList.js";
import { getTableColumns, getTableData } from "./useTableUtils/helpers.js";
import { isRelatedFieldColumn } from "./utils.js";
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
    const [sort, setSort] = useState(options?.sort);
    const sortColumn = useCallback((colName, direction) => {
        if (direction) {
            setSort({ [colName]: direction });
        }
        else {
            setSort(undefined);
        }
    }, []);
    const fieldSelectionMap = useMemo(() => {
        if (options?.select)
            return options.select;
        if (!options?.columns)
            return undefined; // Use the default selection
        const selectionMap = {};
        if (!metadata)
            return selectionMap;
        for (const column of options.columns) {
            if (typeof column === "string") {
                selectionMap[column] = true;
                continue;
            }
            if (isRelatedFieldColumn(column)) {
                // We need to find the related model field from the metadata
                // to determine whether the field is a has-one or has-many relationship,
                // and build the correct selection map for it.
                const fieldMetadata = metadata.fields.find((field) => field.apiIdentifier === column.field);
                if (!fieldMetadata) {
                    throw new Error(`Field '${column.field}' not found in metadata`);
                }
                if (fieldMetadata.configuration.__typename === "GadgetHasOneConfig" ||
                    fieldMetadata.configuration.__typename === "GadgetBelongsToConfig") {
                    selectionMap[column.field] = {
                        [column.relatedField]: true,
                    };
                }
                else {
                    selectionMap[column.field] = {
                        edges: {
                            node: {
                                [column.relatedField]: true,
                            },
                        },
                    };
                }
            }
        }
        return selectionMap;
    }, [metadata, options?.columns, options?.select]);
    const [{ data, fetching: dataFetching, error: dataError, page, search, selection }, refresh] = useList(manager, {
        ...options,
        sort: sort,
        filter: options?.filter,
        select: fieldSelectionMap ? { ...fieldSelectionMap, id: true } : undefined,
        pause: !metadata, // Don't fetch data until metadata is loaded
    });
    const fields = useMemo(() => filterAutoTableFieldList(metadata?.fields, {
        ...options,
        include: fieldSelectionMap && Object.keys(fieldSelectionMap),
    }), [fieldSelectionMap, metadata?.fields, options]);
    const columns = useMemo(() => {
        return getTableColumns(fields, options?.columns);
    }, [fields, options?.columns]);
    const isAwaitingDebouncedSearchValue = search.value != search.debouncedValue;
    const fetching = dataFetching || fetchingMetadata || isAwaitingDebouncedSearchValue;
    const error = dataError || metadataError;
    const tableData = useMemo(() => getTableData({ metadata, data, columns }), [metadata, data, columns]);
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
//# sourceMappingURL=useTable.js.map