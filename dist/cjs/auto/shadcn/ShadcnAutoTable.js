"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAutoTable = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_1 = require("react");
const useSelectedRecordsController_js_1 = require("../../useSelectedRecordsController.js");
const useTable_js_1 = require("../../useTable.js");
const AutoTableValidators_js_1 = require("../AutoTableValidators.js");
const useHover_js_1 = require("../hooks/useHover.js");
const useTableBulkActions_js_1 = require("../hooks/useTableBulkActions.js");
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
        const { columns, sort, canSelectRecords, selection, rows } = props;
        const [isHovered, hoverProps] = (0, useHover_js_1.useHover)();
        return (React.createElement(React.Fragment, null,
            React.createElement(TableRow, { ...hoverProps, className: "bg-background hover:bg-muted" },
                canSelectRecords && (React.createElement(TableHead, { className: `sticky left-0 z-30 bg-${isHovered ? "muted" : "background"}` },
                    React.createElement(AutoTableSelectAllCheckbox, { selection: selection, rows: rows }))),
                columns.map((column, i) => (React.createElement(AutoTableColumnHeader, { key: column.identifier, column: column, sort: sort, canSelectRecords: canSelectRecords, isRowHovered: isHovered, shouldBeSticky: i === 0 }))))));
    }
    function AutoTableColumnHeader(props) {
        const { column, sort, canSelectRecords, shouldBeSticky, isRowHovered } = props;
        const [isHovered, hoverProps] = (0, useHover_js_1.useHover)();
        const ColumnHeaderLabel = (React.createElement(React.Fragment, null,
            React.createElement(Label, null, column.header),
            React.createElement(ShadcnAutoTableColumnSortIndicator, { column: column, sortState: sort, isHovered: isHovered })));
        const stickyClass = shouldBeSticky ? `sticky left-${canSelectRecords ? "6" : "0"} z-10` : "";
        return (React.createElement(React.Fragment, null,
            React.createElement(TableHead, { key: column.identifier, className: `${stickyClass} bg-${isRowHovered ? "muted" : "background"}` },
                React.createElement("div", { className: `flex flex-row items-center gap-2 z-10 ` }, column.sortable ? (React.createElement(Button, { variant: "ghost", size: "sm", className: "cursor-pointer", onClick: () => sort.handleColumnSort(column.field), ...hoverProps }, ColumnHeaderLabel)) : (ColumnHeaderLabel)))));
    }
    const getCellBackgroundColor = (isSticky, isSelected, isHovered) => {
        if (isSticky) {
            // unselected sticky gets regular background regardless of hover. Since the hover is partial opacity, we need to overlay it over the normal BG color to make it match the rest of the cell
            return isSelected ? "bg-muted" : "bg-background";
        }
        return isSelected ? "bg-muted" : isHovered ? "bg-muted/50" : "bg-background";
    };
    function AutoTableSingleRowCheckbox(props) {
        const { row, isSelected, toggleRecordSelection, isHovered } = props;
        return (React.createElement(TableCell, { className: `sticky left-0 ${getCellBackgroundColor(true, isSelected, isHovered)}` },
            React.createElement(Checkbox, { id: `AutoTableSingleRowCheckbox-${row.id}`, checked: isSelected, className: "z-100", onClick: (e) => {
                    toggleRecordSelection(row.id);
                    e.stopPropagation();
                } }),
            !isSelected && isHovered && React.createElement("div", { className: `absolute inset-0 bg-muted/50 z-0` })));
    }
    function AutoTableRowData(props) {
        const { row, columns, canSelectRecords, isSelected, isHovered } = props;
        const rowComponent = (0, react_1.useMemo)(() => {
            return (React.createElement(React.Fragment, null, columns.map((column, i) => {
                const isSticky = i === 0;
                return (React.createElement(TableCell, { key: column.identifier, style: column.style, className: `${isSticky ? `sticky left-${canSelectRecords ? "6" : "0"} z-10` : ``} max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap ${getCellBackgroundColor(isSticky, isSelected, isHovered)}` },
                    isSticky && !isSelected && isHovered && React.createElement("div", { className: `absolute inset-0 bg-muted/50` }),
                    column.type == "CustomRenderer" ? row[column.identifier] : (React.createElement(ShadcnAutoTableCellRenderer, { column: column, value: row[column.identifier] }))));
            })));
        }, [canSelectRecords, columns.map((c) => c.identifier).join(","), Object.values(row).join(","), isSelected, isHovered]);
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
            React.createElement(ShadcnAutoTableBulkActionModal, { model: props.model, modelActionDetails: selectedModelActionDetails, ids: selection.recordIds, clearSelection: selection.clearAll }),
            React.createElement("div", { className: "flex flex-row gap-2 items-center mb-2" },
                searchable && React.createElement(ShadcnAutoTableSearch, { search: search }),
                hasSelectedRecords && (React.createElement("div", { className: "ml-auto" },
                    React.createElement("div", { className: "flex flex-row ml-auto gap-2 items-center" },
                        React.createElement(Label, { className: "ml-2" }, `${selection.recordIds.length} selected`),
                        React.createElement(ShadcnAutoTableBulkActionSelector, { bulkActionOptions: bulkActionOptions, selection: selection, rows: rows }))))),
            React.createElement(Table, { className: "w-full border-collapse" },
                React.createElement(TableHeader, { className: "sticky top-0 bg-background z-20" },
                    React.createElement(AutoTableColumnHeaders, { columns: columns, sort: sort, canSelectRecords: canSelectRecords, selection: selection, rows: rows })),
                React.createElement(TableBody, { className: "bg-background" }, rows?.length > 0 &&
                    rows.map((row, index) => (React.createElement(AutoTableRow, { key: row.id, row: row, columns: columns, canSelectRecords: canSelectRecords, toggleRecordSelection: toggleRecordSelection, onClick: onClick ? onClickCallback(row, rawRecords?.[index]) : () => toggleRecordSelection(row.id), isSelected: selection.recordIds.includes(row.id) }))))),
            rows?.length === 0 && (React.createElement(React.Fragment, null, props.emptyState ?? React.createElement("div", { className: "h-24 text-center flex items-center justify-center" }, `No results`))),
            paginate && React.createElement(ShadcnAutoTablePagination, { page: page })));
    }
    const AutoTableRow = (props) => {
        const { row, columns, canSelectRecords, onClick, toggleRecordSelection, isSelected } = props;
        const [isHovered, hoverProps] = (0, useHover_js_1.useHover)();
        return (React.createElement(TableRow, { key: row.id, className: `${canSelectRecords || onClick ? "cursor-pointer" : ""} `, "data-state": isSelected ? "selected" : undefined, onClick: onClick, ...hoverProps },
            canSelectRecords && (React.createElement(AutoTableSingleRowCheckbox, { row: row, isSelected: isSelected, toggleRecordSelection: toggleRecordSelection, isHovered: isHovered })),
            React.createElement(AutoTableRowData, { row: row, columns: columns, canSelectRecords: canSelectRecords, isSelected: isSelected, isHovered: isHovered })));
    };
    return (props) => {
        const { model } = props;
        (0, AutoTableValidators_js_1.validateAutoTableProps)(model);
        const componentKey = `${[model.findMany.namespace, model.findMany.modelApiIdentifier].join("_")}AutoTable`;
        return React.createElement(ShadcnAutoTableComponent, { key: componentKey, ...props });
    };
};
exports.makeAutoTable = makeAutoTable;
//# sourceMappingURL=ShadcnAutoTable.js.map