"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoTable = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const pluralize_1 = tslib_1.__importDefault(require("pluralize"));
const react_1 = tslib_1.__importStar(require("react"));
const useTable_js_1 = require("../../useTable.js");
const AutoTableContext_js_1 = require("../AutoTableContext.js");
const AutoTableValidators_js_1 = require("../AutoTableValidators.js");
const useTableBulkActions_js_1 = require("../hooks/useTableBulkActions.js");
const defaultTableCellStyle_js_1 = require("../shared/defaultTableCellStyle.js");
const PolarisAutoBulkActionModal_js_1 = require("./PolarisAutoBulkActionModal.js");
const PolarisAutoTableCellRenderer_js_1 = require("./tableCells/PolarisAutoTableCellRenderer.js");
const PolarisSkeletonTable = (props) => {
    const count = Array.from(Array(props.columns));
    return (react_1.default.createElement(polaris_1.DataTable, { columnContentTypes: count.map(() => "text"), headings: count.map((i) => (react_1.default.createElement(polaris_1.Box, { width: "100px", key: i },
            react_1.default.createElement(polaris_1.SkeletonBodyText, { lines: 1 })))), rows: Array.from(Array(3)).map((_) => count.map((i) => react_1.default.createElement(polaris_1.SkeletonBodyText, { key: i, lines: 1 }))) }));
};
const gadgetToPolarisDirection = (direction) => {
    if (direction === "Ascending") {
        return "ascending";
    }
    else if (direction === "Descending") {
        return "descending";
    }
    return undefined;
};
const getColumnIndex = (columns, apiIdentifier) => {
    return columns.findIndex((column) => column.field === apiIdentifier);
};
/**
 * Renders a table of records from the backend automatically for a given model using Polaris
 */
const PolarisAutoTable = (props) => {
    const { model } = props;
    (0, AutoTableValidators_js_1.validateAutoTableProps)(model);
    const componentKey = `${[model.findMany.namespace, model.findMany.modelApiIdentifier].join("_")}AutoTable`;
    return react_1.default.createElement(PolarisAutoTableComponent, { key: componentKey, ...props });
};
exports.PolarisAutoTable = PolarisAutoTable;
const PolarisAutoTableComponent = (props) => {
    const { onClick } = props;
    const searchable = props.searchable ?? true;
    const paginate = props.paginate ?? true;
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
    const { columns, rows, page, fetching, error, search, selection, sort, metadata, data: rawRecords } = methods;
    const handleColumnSort = (headingIndex) => {
        if (columns) {
            const columnApiIdentifier = columns[headingIndex].field;
            sort.handleColumnSort(columnApiIdentifier);
        }
    };
    const onClickCallback = (0, react_1.useCallback)((row, rawRecord) => {
        return () => onClick?.(row, rawRecord);
    }, [onClick]);
    const { mode, setMode } = (0, polaris_1.useSetIndexFiltersMode)();
    const polarisTableProps = (0, react_1.useMemo)(() => {
        const headings = [];
        const sortable = [];
        if (columns) {
            for (const column of columns) {
                headings.push({ title: column.header });
                sortable.push(column.sortable);
            }
        }
        return { headings, sortable };
    }, [columns]);
    const { bulkActionOptions, selectedModelActionDetails } = (0, useTableBulkActions_js_1.useTableBulkActions)({
        model: props.model,
        actions: props.actions,
        excludeActions: props.excludeActions,
    });
    const resourceName = props.resourceName ?? {
        singular: metadata?.name ?? "",
        plural: metadata ? (0, pluralize_1.default)(metadata.name) : "",
    };
    const selectedRows = (rows ?? []).filter((row) => selection.recordIds.includes(row.id));
    const promotedBulkActions = (0, react_1.useMemo)(() => bulkActionOptions.filter((option) => option.promoted).map(bulkActionOptionMapper(selectedRows, selection.clearAll)), [bulkActionOptions, selectedRows]);
    const bulkActions = (0, react_1.useMemo)(() => bulkActionOptions.filter((option) => !option.promoted).map(bulkActionOptionMapper(selectedRows, selection.clearAll)), [bulkActionOptions, selectedRows]);
    if (!error && ((fetching && !rows) || !columns)) {
        return react_1.default.createElement(PolarisSkeletonTable, { columns: 3 });
    }
    return (react_1.default.createElement(AutoTableContext_js_1.AutoTableContext.Provider, { value: [methods, refresh] },
        react_1.default.createElement(polaris_1.BlockStack, null,
            react_1.default.createElement(PolarisAutoBulkActionModal_js_1.PolarisAutoBulkActionModal, { model: props.model, modelActionDetails: selectedModelActionDetails, ids: selection.recordIds, clearSelection: selection.clearAll }),
            searchable && (react_1.default.createElement(polaris_1.IndexFilters, { mode: mode, setMode: setMode, appliedFilters: [], filters: [], onClearAll: () => undefined, tabs: [], canCreateNewView: false, selected: 1, loading: fetching, cancelAction: { onAction: () => search.clear() }, disabled: !!error, 
                // Search
                disableKeyboardShortcuts: true, queryValue: search.value, onQueryChange: search.set, onQueryClear: search.clear, queryPlaceholder: "Search", filteringAccessibilityTooltip: "Search" })),
            error && (react_1.default.createElement(polaris_1.Box, { paddingBlockStart: "200", paddingBlockEnd: "1000" },
                react_1.default.createElement(polaris_1.Banner, { title: error.message, tone: "critical" }))),
            react_1.default.createElement(polaris_1.IndexTable, { selectedItemsCount: selection.recordIds.length, ...disablePaginatedSelectAllButton, onSelectionChange: selection.onSelectionChange, ...polarisTableProps, promotedBulkActions: promotedBulkActions.length ? promotedBulkActions : undefined, bulkActions: bulkActions.length ? bulkActions : undefined, resourceName: resourceName, emptyState: props.emptyState ?? react_1.default.createElement(polaris_1.EmptySearchResult, { title: `No results`, description: "", withIllustration: true }), loading: fetching, hasMoreItems: page.hasNextPage, itemCount: error
                    ? 1 // Don't show the empty state if there's an error
                    : rows?.length ?? 0, pagination: paginate
                    ? {
                        hasNext: page.hasNextPage,
                        hasPrevious: page.hasPreviousPage,
                        onNext: page.goToNextPage,
                        onPrevious: page.goToPreviousPage,
                    }
                    : undefined, sortDirection: gadgetToPolarisDirection(sort.direction), sortColumnIndex: columns ? getColumnIndex(columns, sort.column) : undefined, onSort: (headingIndex) => handleColumnSort(headingIndex), selectable: props.selectable === undefined ? bulkActionOptions.length !== 0 : props.selectable, lastColumnSticky: props.lastColumnSticky, hasZebraStriping: props.hasZebraStriping, condensed: props.condensed },
                react_1.default.createElement(PolarisIndexTableCellStyleOverride, null),
                rows &&
                    columns &&
                    rows.map((row, index) => {
                        const rawRecord = rawRecords?.[index];
                        return (react_1.default.createElement(polaris_1.IndexTable.Row, { key: row.id, id: row.id, position: index, onClick: onClick ? onClickCallback(row, rawRecord) : undefined, selected: selection.recordIds.includes(row.id) }, columns.map((column) => (react_1.default.createElement(polaris_1.IndexTable.Cell, { key: column.identifier, className: "Gadget_PolarisAutoTable_IndexTableCell" },
                            react_1.default.createElement("div", { style: { ...defaultTableCellStyle_js_1.defaultCellStyle, ...column.style } }, column.type == "CustomRenderer" ? row[column.identifier] : (react_1.default.createElement(PolarisAutoTableCellRenderer_js_1.PolarisAutoTableCellRenderer, { column: column, value: row[column.identifier] }))))))));
                    }))),
        react_1.default.createElement(PolarisIndexTableCellStyleOverride, null)));
};
const PolarisIndexTableCellStyleOverride = () => {
    // !important to override the default padding from a class that gets applied afterwards
    const css = /*css*/ `
  .Gadget_PolarisAutoTable_IndexTableCell {
    padding: 0px !important; 
  }
`;
    return react_1.default.createElement("style", null, css);
};
const disablePaginatedSelectAllButton = {
    paginatedSelectAllActionText: "", // Empty string to hide the select all button. We only allow selection on the current page
};
const bulkActionOptionMapper = (selectedRows, clearSelection) => {
    return (option) => ({
        id: option.humanizedName,
        destructive: "isDeleter" in option ? option.isDeleter : false,
        content: option.humanizedName,
        onAction: (0, useTableBulkActions_js_1.getBulkActionOptionCallback)(option, selectedRows, clearSelection),
    });
};
//# sourceMappingURL=PolarisAutoTable.js.map