import { useCallback, useMemo, useState } from "react";
import { FieldType, filterFieldList, useModelMetadata } from "./metadata.js";
import { useFindMany } from "./useFindMany.js";
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
    const [cursor, setCursor] = useState(options?.initialCursor);
    const [direction, setDirection] = useState(options?.initialDirection ?? "forward");
    const pageSize = options?.pageSize ?? 50;
    let variables;
    if (direction == "forward") {
        variables = {
            first: pageSize,
            after: cursor,
        };
    }
    else {
        variables = {
            last: pageSize,
            before: cursor,
        };
    }
    const [{ data, fetching: dataFetching, error: dataError }, refresh] = useFindMany(manager, {
        ...options,
        ...variables,
    });
    const { metadata: metadata, fetching: fetchingMetadata, error: metadataError } = useModelMetadata(manager.findMany.modelApiIdentifier);
    const fields = useMemo(() => filterFieldList(metadata?.fields, options), [metadata?.fields, options]);
    const columns = useMemo(() => fields.map((field) => ({
        name: field.name,
        apiIdentifier: field.apiIdentifier,
        fieldType: field.fieldType,
        getValue: (record) => {
            const value = record[field.apiIdentifier];
            switch (field.fieldType) {
                case FieldType.DateTime: {
                    return value.toLocaleString();
                }
                default: {
                    return value;
                }
            }
        },
        sortable: "sortable" in field && field.sortable,
    })), [fields]);
    const goToNextPage = useCallback(() => {
        if (data && data.hasNextPage) {
            setDirection("forward");
            setCursor(data.endCursor);
        }
        else {
            console.warn("can't navigate to next page currently, no next page available");
        }
    }, [data]);
    const goToPreviousPage = useCallback(() => {
        if (data && data.hasPreviousPage) {
            setDirection("backward");
            setCursor(data.startCursor);
        }
        else {
            console.warn("can't navigate to previous page currently, no previous page available");
        }
    }, [data]);
    const fetching = dataFetching || fetchingMetadata;
    const error = dataError || metadataError;
    const page = {
        goToNextPage,
        goToPreviousPage,
        variables,
        pageSize,
        hasNextPage: data?.hasNextPage,
        hasPreviousPage: data?.hasPreviousPage,
    };
    if (metadata && data && columns) {
        const rows = data.map((record) => Object.fromEntries(columns.map((column) => [column.apiIdentifier, column.getValue(record)])));
        return [{ rows, columns, data, metadata, page, fetching, error }, refresh];
    }
    else {
        return [{ rows: null, columns: null, data: null, metadata: null, page, fetching, error }, refresh];
    }
};
//# sourceMappingURL=useTable.js.map