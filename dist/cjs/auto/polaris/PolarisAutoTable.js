"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoTable = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const pluralize_1 = tslib_1.__importDefault(require("pluralize"));
const react_1 = tslib_1.__importStar(require("react"));
const useTable_js_1 = require("../../useTable.js");
const useTableBulkActions_js_1 = require("../hooks/useTableBulkActions.js");
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
    return columns.findIndex((column) => column.apiIdentifier === apiIdentifier);
};
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
 * Renders a table of records from the backend automatically for a given model using Polaris
 */
const PolarisAutoTable = (props) => {
    const { onClick } = props;
    const [{ rows, columns, metadata, fetching, error, page, search, sort, selection }, refresh] = (0, useTable_js_1.useTable)(props.model, {
        select: props.select,
        columns: props.columns,
        pageSize: props.pageSize,
        live: props.live,
        sort: props.sort,
        filter: props.filter,
    });
    const [sortColumnApiIdentifier, setSortColumnApiIdentifier] = (0, react_1.useState)(props.sort ? Object.keys(props.sort)[0] : undefined);
    const [sortDirection, setSortDirection] = (0, react_1.useState)(props.sort ? Object.values(props.sort)[0] : undefined);
    const handleColumnSort = (headingIndex) => {
        if (columns) {
            const columnApiIdentifier = columns[headingIndex].apiIdentifier;
            const nextDirection = columnApiIdentifier !== sortColumnApiIdentifier ? "Descending" : getNextDirection(sortDirection);
            setSortDirection(nextDirection);
            setSortColumnApiIdentifier(nextDirection ? columnApiIdentifier : undefined);
            sort(columnApiIdentifier, nextDirection);
        }
    };
    const onClickCallback = (0, react_1.useCallback)((row) => {
        return () => onClick?.(row);
    }, [onClick]);
    const { mode, setMode } = (0, polaris_1.useSetIndexFiltersMode)();
    const polarisTableProps = (0, react_1.useMemo)(() => {
        const headings = [];
        const sortable = [];
        if (columns) {
            for (const column of columns) {
                headings.push({ title: column.name });
                sortable.push(column.sortable);
            }
        }
        return { headings, sortable };
    }, [columns]);
    const { bulkActionOptions, selectedModelActionDetails } = (0, useTableBulkActions_js_1.useTableBulkActions)({ model: props.model });
    if (!error && ((fetching && !rows) || !columns)) {
        return react_1.default.createElement(PolarisSkeletonTable, { columns: 3 });
    }
    const resourceName = {
        singular: metadata?.name ?? "",
        plural: metadata ? (0, pluralize_1.default)(metadata.name) : "",
    };
    return (react_1.default.createElement(polaris_1.BlockStack, null,
        react_1.default.createElement(PolarisAutoBulkActionModal_js_1.PolarisAutoBulkActionModal, { model: props.model, modelActionDetails: selectedModelActionDetails, ids: selection.recordIds }),
        react_1.default.createElement(polaris_1.IndexFilters, { mode: mode, setMode: setMode, appliedFilters: [], filters: [], onClearAll: () => undefined, tabs: [], selected: 1, loading: fetching, cancelAction: { onAction: () => search.clear() }, disabled: !!error, 
            // Search
            queryValue: search.value, onQueryChange: search.set, onQueryClear: search.clear }),
        error && (react_1.default.createElement(polaris_1.Box, { paddingBlockStart: "200", paddingBlockEnd: "1000" },
            react_1.default.createElement(polaris_1.Banner, { title: error.message, tone: "critical" }))),
        react_1.default.createElement(polaris_1.IndexTable, { selectedItemsCount: selection.recordIds.length, ...disablePaginatedSelectAllButton, onSelectionChange: selection.onSelectionChange, ...polarisTableProps, bulkActions: bulkActionOptions.map((option) => ({ content: option.humanizedName, onAction: option.selectModelAction })), resourceName: resourceName, emptyState: react_1.default.createElement(polaris_1.EmptySearchResult, { title: `No ${resourceName.plural} yet`, description: "", withIllustration: true }), loading: fetching, hasMoreItems: page.hasNextPage, itemCount: error
                ? 1 // Don't show the empty state if there's an error
                : rows?.length ?? 0, pagination: {
                hasNext: page.hasNextPage,
                hasPrevious: page.hasPreviousPage,
                onNext: page.goToNextPage,
                onPrevious: page.goToPreviousPage,
            }, sortDirection: gadgetToPolarisDirection(sortDirection), sortColumnIndex: columns ? getColumnIndex(columns, sortColumnApiIdentifier) : undefined, onSort: (headingIndex) => handleColumnSort(headingIndex) }, rows &&
            columns &&
            rows.map((row, index) => (react_1.default.createElement(polaris_1.IndexTable.Row, { key: row.id, id: row.id, position: index, onClick: onClick ? onClickCallback(row) : undefined, selected: selection.recordIds.includes(row.id) }, columns.map((column) => (react_1.default.createElement(polaris_1.IndexTable.Cell, { key: column.apiIdentifier },
                react_1.default.createElement("div", { style: { maxWidth: "200px" } }, column.isCustomCell ? (column.getValue(row)) : (react_1.default.createElement(PolarisAutoTableCellRenderer_js_1.PolarisAutoTableCellRenderer, { column: column, value: row[column.apiIdentifier] }))))))))))));
};
exports.PolarisAutoTable = PolarisAutoTable;
const disablePaginatedSelectAllButton = {
    paginatedSelectAllActionText: "", // Empty string to hide the select all button. We only allow selection on the current page
};
//# sourceMappingURL=PolarisAutoTable.js.map