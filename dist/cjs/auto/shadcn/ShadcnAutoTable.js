"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAutoTable = void 0;
const tslib_1 = require("tslib");
const pluralize_1 = tslib_1.__importDefault(require("pluralize"));
const React = tslib_1.__importStar(require("react"));
const react_1 = require("react");
const useSelectedRecordsController_js_1 = require("../../useSelectedRecordsController.js");
const useTable_js_1 = require("../../useTable.js");
const AutoTableValidators_js_1 = require("../AutoTableValidators.js");
const useHover_js_1 = require("../hooks/useHover.js");
const useTableBulkActions_js_1 = require("../hooks/useTableBulkActions.js");
const defaultTableCellStyle_js_1 = require("../shared/defaultTableCellStyle.js");
const ShadcnAutoLoadingIndicator_js_1 = require("./table/ShadcnAutoLoadingIndicator.js");
const ShadcnAutoTableBulkActionModal_js_1 = require("./table/ShadcnAutoTableBulkActionModal.js");
const ShadcnAutoTableBulkActionSelector_js_1 = require("./table/ShadcnAutoTableBulkActionSelector.js");
const ShadcnAutoTableColumnSortIndicator_js_1 = require("./table/ShadcnAutoTableColumnSortIndicator.js");
const ShadcnAutoTablePagination_js_1 = require("./table/ShadcnAutoTablePagination.js");
const ShadcnAutoTableSearch_js_1 = require("./table/ShadcnAutoTableSearch.js");
const ShadcnAutoTableCellRenderer_js_1 = require("./table/cells/ShadcnAutoTableCellRenderer.js");
/**
 * Renders a table for a model automatically using Shadcn
 */
const makeAutoTable = (elements) => {
    const { Alert, Skeleton, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Label, Checkbox, Button } = elements;
    const ShadcnAutoTableCellRenderer = (0, ShadcnAutoTableCellRenderer_js_1.makeShadcnAutoTableCellRenderer)(elements);
    const ShadcnAutoTablePagination = (0, ShadcnAutoTablePagination_js_1.makeShadcnAutoTablePagination)(elements);
    const ShadcnAutoTableSearch = (0, ShadcnAutoTableSearch_js_1.makeShadcnAutoTableSearch)(elements);
    const ShadcnAutoTableColumnSortIndicator = (0, ShadcnAutoTableColumnSortIndicator_js_1.makeShadcnAutoTableColumnSortIndicator)(elements);
    const ShadcnAutoTableBulkActionSelector = (0, ShadcnAutoTableBulkActionSelector_js_1.makeShadcnAutoTableBulkActionSelector)(elements);
    const ShadcnAutoTableBulkActionModal = (0, ShadcnAutoTableBulkActionModal_js_1.makeShadcnAutoTableBulkActionModal)(elements);
    const ShadcnAutoLoadingIndicator = (0, ShadcnAutoLoadingIndicator_js_1.makeShadcnAutoLoadingIndicator)(elements);
    function AutoTableSelectAllCheckbox(props) {
        const { selection, rows } = props;
        return (React.createElement(React.Fragment, null,
            React.createElement(Checkbox, { id: "AutoTableSelectAllCheckbox", checked: selection.recordIds.length === rows?.length && rows?.length > 0
                    ? true
                    : selection.recordIds.length > 0
                        ? "indeterminate"
                        : false, onCheckedChange: (value) => selection.onSelectionChange(useSelectedRecordsController_js_1.SelectionType.Page, !!value), onClick: (e) => e.stopPropagation() })));
    }
    function AutoTableColumnHeaders(props) {
        const { columns, sort } = props;
        return (React.createElement(React.Fragment, null, columns.map((column) => (React.createElement(AutoTableColumnHeader, { key: column.identifier, column: column, sort: sort })))));
    }
    function AutoTableColumnHeader(props) {
        const { column, sort } = props;
        const [isHovered, hoverProps] = (0, useHover_js_1.useHover)();
        const ColumnHeaderLabel = (React.createElement(React.Fragment, null,
            React.createElement(Label, null, column.header),
            React.createElement(ShadcnAutoTableColumnSortIndicator, { column: column, sortState: sort, isHovered: isHovered })));
        return (React.createElement(React.Fragment, null,
            React.createElement(TableHead, { key: column.identifier },
                React.createElement("div", { className: "flex flex-row items-center gap-2" }, column.sortable ? (React.createElement(Button, { variant: "ghost", size: "sm", className: "cursor-pointer", onClick: () => sort.handleColumnSort(column.field), ...hoverProps }, ColumnHeaderLabel)) : (ColumnHeaderLabel)))));
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
        const rowComponent = (0, react_1.useMemo)(() => {
            return (React.createElement(React.Fragment, null, columns.map((column, i) => (React.createElement(TableCell, { key: column.identifier, style: { ...defaultTableCellStyle_js_1.defaultCellStyle, ...column.style } }, column.type == "CustomRenderer" ? row[column.identifier] : (React.createElement(ShadcnAutoTableCellRenderer, { column: column, value: row[column.identifier] })))))));
        }, [JSON.stringify(columns), JSON.stringify(row)]);
        return rowComponent;
    }
    function ShadcnAutoTableComponent(props) {
        const { onClick, searchable = true, paginate = true } = props;
        const [methods, refresh] = (0, useTable_js_1.useTable)(props.model, {
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
        const onClickCallback = (0, react_1.useCallback)((row, rawRecord) => {
            return () => onClick?.(row, rawRecord);
        }, [onClick]);
        const toggleRecordSelection = (0, react_1.useCallback)((rowId) => {
            selection.onSelectionChange(useSelectedRecordsController_js_1.SelectionType.Single, !selection.recordIds.includes(rowId), rowId);
        }, [selection]);
        const resourceName = (0, react_1.useMemo)(() => props.resourceName ?? {
            singular: metadata?.name ?? "",
            plural: metadata ? (0, pluralize_1.default)(metadata.name) : "",
        }, [props.resourceName, metadata]);
        const { bulkActionOptions, selectedModelActionDetails } = (0, useTableBulkActions_js_1.useTableBulkActions)({
            model: props.model,
            actions: props.actions,
            excludeActions: props.excludeActions,
        });
        const canSelectRecords = props.selectable === undefined ? bulkActionOptions.length !== 0 : props.selectable;
        const hasSelectedRecords = selection.recordIds.length > 0;
        if (error) {
            return React.createElement(Alert, null, "Error");
        }
        if ((fetching && !rows) || !columns) {
            return React.createElement(Skeleton, null);
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "flex flex-col gap-2" },
                React.createElement(ShadcnAutoTableBulkActionModal, { model: props.model, modelActionDetails: selectedModelActionDetails, ids: selection.recordIds, clearSelection: selection.clearAll }),
                React.createElement("div", { className: "flex flex-row gap-2 items-center" },
                    searchable && React.createElement(ShadcnAutoTableSearch, { search: search }),
                    hasSelectedRecords && (React.createElement("div", { className: "ml-auto" },
                        React.createElement("div", { className: "flex flex-row ml-auto gap-2 items-center" },
                            React.createElement(Label, { className: "ml-2" }, `${selection.recordIds.length} selected`),
                            React.createElement(ShadcnAutoTableBulkActionSelector, { bulkActionOptions: bulkActionOptions, selection: selection, rows: rows }))))),
                React.createElement(Table, { className: "w-full border-collapse" },
                    React.createElement(TableHeader, { className: "sticky top-0 bg-background z-10" },
                        React.createElement(TableRow, null,
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
        (0, AutoTableValidators_js_1.validateAutoTableProps)(model);
        const componentKey = `${[model.findMany.namespace, model.findMany.modelApiIdentifier].join("_")}AutoTable`;
        return React.createElement(ShadcnAutoTableComponent, { key: componentKey, ...props });
    };
};
exports.makeAutoTable = makeAutoTable;
//# sourceMappingURL=ShadcnAutoTable.js.map