import pluralize from "pluralize";
import * as React from "react";
import { useCallback, useMemo } from "react";
import { useTable } from "../../useTable.js";
import { validateAutoTableProps } from "../AutoTableValidators.js";
import { defaultCellStyle } from "../shared/defaultTableCellStyle.js";
import { makeShadcnAutoTablePagination } from "./table/ShadcnAutoTablePagination.js";
import { makeShadcnAutoTableSearch } from "./table/ShadcnAutoTableSearch.js";
import { makeShadcnAutoTableCellRenderer } from "./table/cells/ShadcnAutoTableCellRenderer.js";
/**
 * Renders a table for a model automatically using Shadcn
 */
export const makeAutoTable = (elements) => {
    const { Alert, Skeleton, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } = elements;
    const ShadcnAutoTableCellRenderer = makeShadcnAutoTableCellRenderer(elements);
    const ShadcnAutoTablePagination = makeShadcnAutoTablePagination(elements);
    const ShadcnAutoTableSearch = makeShadcnAutoTableSearch(elements);
    function ShadcnAutoTableComponent(props) {
        const { onClick, searchable = true, paginate = true } = props;
        const [methods, refresh] = useTable(props.model, {
            select: props.select,
            columns: props.columns,
            excludeColumns: props.excludeColumns,
            pageSize: props.pageSize,
            live: props.live,
            initialSort: props.initialSort,
            filter: props.filter,
            search: props.searchValue,
        });
        const { columns, rows, page, search, fetching, // TODO - add a loading state
        error, // TODO - add an error state
        selection, // TODO - add record selection and bulk action system
        sort, // TODO - add column sorting
        metadata, data: rawRecords, // TODO - use this to get direct record access in callbacks
         } = methods;
        const handleColumnSort = (headingIndex) => {
            if (columns) {
                const columnApiIdentifier = columns[headingIndex].field;
                sort.handleColumnSort(columnApiIdentifier);
            }
        };
        const onClickCallback = useCallback((row, rawRecord) => {
            return () => onClick?.(row, rawRecord);
        }, [onClick]);
        const resourceName = useMemo(() => props.resourceName ?? {
            singular: metadata?.name ?? "",
            plural: metadata ? pluralize(metadata.name) : "",
        }, [props.resourceName, metadata]);
        if (error) {
            return React.createElement(Alert, null, "Error");
        }
        if ((fetching && !rows) || !columns) {
            return React.createElement(Skeleton, null);
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "rounded-md border" },
                searchable && React.createElement(ShadcnAutoTableSearch, { search: search }),
                React.createElement(Table, null,
                    React.createElement(TableHeader, null,
                        React.createElement(TableRow, null, columns.map((column) => {
                            return React.createElement(TableHead, { key: column.identifier }, column.header);
                        }))),
                    React.createElement(TableBody, null, rows?.length ? (rows.map((row) => (React.createElement(TableRow, { key: row.id, "data-state": "selected" }, columns.map((column) => (React.createElement(TableCell, { key: column.identifier, style: { ...defaultCellStyle, ...column.style } }, column.type == "CustomRenderer" ? row[column.identifier] : (React.createElement(ShadcnAutoTableCellRenderer, { column: column, value: row[column.identifier] }))))))))) : (React.createElement(TableRow, null,
                        React.createElement(TableCell, { colSpan: columns.length, className: "h-24 text-center" }, `No ${resourceName.plural} yet`))))),
                paginate && React.createElement(ShadcnAutoTablePagination, { page: page }))));
    }
    return (props) => {
        const { model } = props;
        validateAutoTableProps(model);
        const componentKey = `${[model.findMany.namespace, model.findMany.modelApiIdentifier].join("_")}AutoTable`;
        return (React.createElement(React.Fragment, null,
            React.createElement(ShadcnAutoTableComponent, { key: componentKey, ...props })));
    };
};
//# sourceMappingURL=ShadcnAutoTable.js.map