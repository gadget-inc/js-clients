"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTable = void 0;
const react_1 = require("react");
const graphql_js_1 = require("./internal/gql/graphql.js");
const metadata_js_1 = require("./metadata.js");
const useList_js_1 = require("./useList.js");
const utils_js_1 = require("./utils.js");
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
    const fieldSelectionMap = (0, react_1.useMemo)(() => {
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
            if ((0, utils_js_1.isRelatedFieldColumn)(column)) {
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
    const [{ data, fetching: dataFetching, error: dataError, page, search, selection }, refresh] = (0, useList_js_1.useList)(manager, {
        ...options,
        sort: sort,
        select: fieldSelectionMap ? { ...fieldSelectionMap, id: true } : undefined,
        pause: !metadata, // Don't fetch data until metadata is loaded
    });
    const fields = (0, react_1.useMemo)(() => (0, metadata_js_1.filterAutoTableFieldList)(metadata?.fields, {
        ...options,
        include: fieldSelectionMap && Object.keys(fieldSelectionMap),
    }), [fieldSelectionMap, metadata?.fields, options]);
    const sortColumn = (0, react_1.useCallback)((colName, direction) => {
        if (direction) {
            setSort({ [colName]: direction });
        }
        else {
            setSort(undefined);
        }
    }, []);
    const columns = (0, react_1.useMemo)(() => {
        const columnsMap = options?.columns &&
            new Map(options.columns.map((column) => {
                if ((0, utils_js_1.isRelatedFieldColumn)(column)) {
                    return [column.field, column.relatedField];
                }
                else {
                    return [column, undefined];
                }
            }));
        const result = fields.map((field) => {
            let relatedField;
            const relatedFieldColumn = columnsMap?.get(field.apiIdentifier);
            if (relatedFieldColumn) {
                if (field.fieldType !== graphql_js_1.GadgetFieldType.HasOne &&
                    field.fieldType !== graphql_js_1.GadgetFieldType.BelongsTo &&
                    field.fieldType !== graphql_js_1.GadgetFieldType.HasMany) {
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
                    isCustomCell: false,
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
                isCustomCell: false,
            };
        });
        if (options?.columns) {
            // Add custom cell columns
            for (const custom of options.columns) {
                if (!(0, utils_js_1.isCustomCellColumn)(custom))
                    continue;
                result.push({
                    name: custom.name,
                    apiIdentifier: custom.name,
                    isCustomCell: true,
                    getValue: (record) => custom.render(record),
                    sortable: false,
                });
            }
        }
        return result;
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
            sort: sortColumn,
            selection,
        },
        refresh,
    ];
};
exports.useTable = useTable;
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