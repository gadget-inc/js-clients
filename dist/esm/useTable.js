import { useMemo } from "react";
import { GadgetFieldType } from "./internal/gql/graphql.js";
import { filterAutoTableFieldList, useModelMetadata } from "./metadata.js";
import { useList } from "./useList.js";
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
    const [{ data, fetching: dataFetching, error: dataError, page, search }, refresh] = useList(manager, {
        ...options,
        select: fieldSelectionMap ? { ...fieldSelectionMap, id: true } : undefined,
        pause: !metadata, // Don't fetch data until metadata is loaded
    });
    const fields = useMemo(() => filterAutoTableFieldList(metadata?.fields, {
        ...options,
        include: fieldSelectionMap && Object.keys(fieldSelectionMap),
    }), [fieldSelectionMap, metadata?.fields, options]);
    const columns = useMemo(() => {
        const columnsMap = options?.columns &&
            new Map(options.columns.map((column) => {
                if (isRelatedFieldColumn(column)) {
                    return [column.field, column.relatedField];
                }
                else {
                    return [column, undefined];
                }
            }));
        return fields.map((field) => {
            let relatedField;
            const relatedFieldColumn = columnsMap?.get(field.apiIdentifier);
            if (relatedFieldColumn) {
                if (field.fieldType !== GadgetFieldType.HasOne &&
                    field.fieldType !== GadgetFieldType.BelongsTo &&
                    field.fieldType !== GadgetFieldType.HasMany) {
                    throw new Error(`Field '${field.apiIdentifier}' is not a relationship field`);
                }
                const relatedFieldMetadata = field.configuration.__typename === "GadgetHasOneConfig" ||
                    field.configuration.__typename === "GadgetBelongsToConfig" ||
                    field.configuration.__typename === "GadgetHasManyConfig"
                    ? field.configuration.relatedModel?.fields?.find((relatedField) => relatedField.apiIdentifier === relatedFieldColumn)
                    : undefined;
                if (!relatedFieldMetadata) {
                    throw new Error(`Related field '${relatedFieldColumn}' not found in metadata`);
                }
                relatedField = {
                    name: relatedFieldMetadata.name,
                    apiIdentifier: relatedFieldMetadata.apiIdentifier,
                    fieldType: relatedFieldMetadata.fieldType,
                    getValue: (record) => {
                        return record[field.apiIdentifier]?.[relatedFieldMetadata.apiIdentifier];
                    },
                    sortable: false,
                };
            }
            return {
                name: field.name,
                apiIdentifier: field.apiIdentifier,
                fieldType: field.fieldType,
                getValue: (record) => {
                    return record[field.apiIdentifier];
                },
                sortable: "sortable" in field && field.sortable,
                relatedField,
            };
        });
    }, [fields, options?.columns]);
    const isAwaitingDebouncedSearchValue = search.value != search.debouncedValue;
    const fetching = dataFetching || fetchingMetadata || isAwaitingDebouncedSearchValue;
    const error = dataError || metadataError;
    return [
        {
            ...getTableData({ metadata, data, columns }),
            page,
            fetching,
            error,
            search,
        },
        refresh,
    ];
};
const getTableData = (props) => {
    const { columns, data, metadata } = props;
    return metadata && data && columns
        ? {
            rows: getRows({ data, columns }),
            columns,
            data,
            metadata,
        }
        : {
            rows: null,
            columns: null,
            data: null,
            metadata: null,
        };
};
const getRows = (props) => {
    const { columns, data } = props;
    return data.map((record) => {
        const row = { id: record.id };
        for (const { apiIdentifier, getValue } of columns) {
            row[apiIdentifier] = getValue(record);
        }
        return row;
    });
};
//# sourceMappingURL=useTable.js.map