import pluralize from "pluralize";
import * as React from "react";
import { useCallback, useMemo, useRef } from "react";
import { SelectionType } from "../../useSelectedRecordsController.js";
import { useTable } from "../../useTable.js";
import { validateAutoTableProps } from "../AutoTableValidators.js";
import { useHover } from "../hooks/useHover.js";
import { useTableBulkActions } from "../hooks/useTableBulkActions.js";
import { defaultCellStyle } from "../shared/defaultTableCellStyle.js";
import { makeShadcnAutoLoadingIndicator } from "./table/ShadcnAutoLoadingIndicator.js";
import { makeShadcnAutoTableBulkActionModal } from "./table/ShadcnAutoTableBulkActionModal.js";
import { makeShadcnAutoTableBulkActionSelector } from "./table/ShadcnAutoTableBulkActionSelector.js";
import { makeShadcnAutoTableColumnSortIndicator } from "./table/ShadcnAutoTableColumnSortIndicator.js";
import { makeShadcnAutoTablePagination } from "./table/ShadcnAutoTablePagination.js";
import { makeShadcnAutoTableSearch } from "./table/ShadcnAutoTableSearch.js";
import { makeShadcnAutoTableCellRenderer } from "./table/cells/ShadcnAutoTableCellRenderer.js";
/**
 * Renders a table for a model automatically using Shadcn
 */
export const makeAutoTable = (elements) => {
    const { Alert, Skeleton, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Label, Checkbox } = elements;
    const ShadcnAutoTableCellRenderer = makeShadcnAutoTableCellRenderer(elements);
    const ShadcnAutoTablePagination = makeShadcnAutoTablePagination(elements);
    const ShadcnAutoTableSearch = makeShadcnAutoTableSearch(elements);
    const ShadcnAutoTableColumnSortIndicator = makeShadcnAutoTableColumnSortIndicator(elements);
    const ShadcnAutoTableBulkActionSelector = makeShadcnAutoTableBulkActionSelector(elements);
    const ShadcnAutoTableBulkActionModal = makeShadcnAutoTableBulkActionModal(elements);
    const ShadcnAutoLoadingIndicator = makeShadcnAutoLoadingIndicator(elements);
    function AutoTableSelectAllCheckbox(props) {
        const { selection, rows } = props;
        return (React.createElement(React.Fragment, null,
            React.createElement(Checkbox, { id: "AutoTableSelectAllCheckbox", checked: selection.recordIds.length === rows?.length ? true : selection.recordIds.length > 0 ? "indeterminate" : false, onCheckedChange: (value) => selection.onSelectionChange(SelectionType.Page, !!value), onClick: (e) => e.stopPropagation() })));
    }
    function AutoTableColumnHeaders(props) {
        const { columns, sort } = props;
        return (React.createElement(React.Fragment, null, columns.map((column) => (React.createElement(AutoTableColumnHeader, { key: column.identifier, column: column, sort: sort })))));
    }
    function AutoTableColumnHeader(props) {
        const { column, sort } = props;
        const [isHovered, hoverProps] = useHover();
        return (React.createElement(React.Fragment, null,
            React.createElement(TableHead, { key: column.identifier, ...hoverProps },
                React.createElement("div", { className: "flex flex-row items-center gap-2" },
                    React.createElement(Label, null, column.header),
                    React.createElement(ShadcnAutoTableColumnSortIndicator, { column: column, sortState: sort, isHovered: isHovered })))));
    }
    function AutoTableSingleRowCheckbox(props) {
        const { row, selection, toggleRecordSelection } = props;
        return (React.createElement(TableCell, null,
            React.createElement(Checkbox, { id: `AutoTableSingleRowCheckbox-${row.id}`, checked: selection.recordIds.includes(row.id), onClick: (e) => {
                    toggleRecordSelection(row.id);
                    e.stopPropagation();
                } })));
    }
    function AutoTableRowData(props) {
        const { row, columns } = props;
        return (React.createElement(React.Fragment, null, columns.map((column) => (React.createElement(TableCell, { key: column.identifier, style: { ...defaultCellStyle, ...column.style } }, column.type == "CustomRenderer" ? row[column.identifier] : (React.createElement(ShadcnAutoTableCellRenderer, { column: column, value: row[column.identifier] })))))));
    }
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
        selection, sort, metadata, data: rawRecords, } = methods;
        const onClickCallback = useCallback((row, rawRecord) => {
            return () => onClick?.(row, rawRecord);
        }, [onClick]);
        const toggleRecordSelection = useCallback((rowId) => {
            selection.onSelectionChange(SelectionType.Single, !selection.recordIds.includes(rowId), rowId);
        }, [selection]);
        const resourceName = useMemo(() => props.resourceName ?? {
            singular: metadata?.name ?? "",
            plural: metadata ? pluralize(metadata.name) : "",
        }, [props.resourceName, metadata]);
        const { bulkActionOptions, selectedModelActionDetails } = useTableBulkActions({
            model: props.model,
            actions: props.actions,
            excludeActions: props.excludeActions,
        });
        const canSelectRecords = props.selectable === undefined ? bulkActionOptions.length !== 0 : props.selectable;
        const hasSelectedRecords = selection.recordIds.length > 0;
        const tableRef = useRef(null);
        if (error) {
            return React.createElement(Alert, null, "Error");
        }
        if ((fetching && !rows) || !columns) {
            return React.createElement(Skeleton, null);
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "rounded-md border sticky", ref: tableRef },
                React.createElement(ShadcnAutoTableBulkActionModal, { model: props.model, modelActionDetails: selectedModelActionDetails, ids: selection.recordIds, clearSelection: selection.clearAll }),
                searchable && React.createElement(ShadcnAutoTableSearch, { search: search }),
                hasSelectedRecords && (React.createElement("div", { className: "absolute flex flex-row items-center w-[100%] pl-2 bg-white border-b z-10" },
                    React.createElement(AutoTableSelectAllCheckbox, { selection: selection, rows: rows }),
                    React.createElement(Label, { className: "ml-2" }, `${selection.recordIds.length} selected`),
                    React.createElement("div", { className: "flex flex-row ml-auto gap-2 items-center" },
                        React.createElement(ShadcnAutoTableBulkActionSelector, { bulkActionOptions: bulkActionOptions, selection: selection, rows: rows })))),
                React.createElement(Table, null,
                    React.createElement(TableHeader, null,
                        React.createElement(TableRow, { className: `${hasSelectedRecords ? "opacity-0" : ""}` },
                            canSelectRecords && (React.createElement(TableHead, null,
                                React.createElement(AutoTableSelectAllCheckbox, { selection: selection, rows: rows }))),
                            React.createElement(AutoTableColumnHeaders, { columns: columns, sort: sort }))),
                    React.createElement(TableBody, null, rows?.length ? (rows.map((row, index) => (React.createElement(TableRow, { key: row.id, className: `${canSelectRecords || onClick ? "cursor-pointer" : ""}`, "data-state": "selected", onClick: onClick ? onClickCallback(row, rawRecords?.[index]) : () => toggleRecordSelection(row.id) },
                        canSelectRecords && (React.createElement(AutoTableSingleRowCheckbox, { row: row, selection: selection, toggleRecordSelection: toggleRecordSelection })),
                        React.createElement(AutoTableRowData, { row: row, columns: columns }))))) : (React.createElement(TableRow, null,
                        React.createElement(TableCell, { colSpan: columns.length, className: "h-24 text-center" }, props.emptyState ?? `No ${resourceName.plural} yet`))))),
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