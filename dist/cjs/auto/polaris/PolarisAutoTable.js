"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoTable = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const pluralize_1 = tslib_1.__importDefault(require("pluralize"));
const react_1 = tslib_1.__importStar(require("react"));
const useTable_js_1 = require("../../useTable.js");
const PolarisAutoTableCellRenderer_js_1 = require("./tableCells/PolarisAutoTableCellRenderer.js");
const PolarisSkeletonTable = (props) => {
    const count = Array.from(Array(props.columns));
    return (react_1.default.createElement(polaris_1.DataTable, { columnContentTypes: count.map(() => "text"), headings: count.map((i) => (react_1.default.createElement(polaris_1.Box, { width: "100px", key: i },
            react_1.default.createElement(polaris_1.SkeletonBodyText, { lines: 1 })))), rows: Array.from(Array(3)).map((_) => count.map((i) => react_1.default.createElement(polaris_1.SkeletonBodyText, { key: i, lines: 1 }))) }));
};
/**
 * Renders a table of records from the backend automatically for a given model using Polaris
 */
const PolarisAutoTable = (props) => {
    const { onClick } = props;
    const [{ rows, columns, metadata, fetching, error, page, search }, refresh] = (0, useTable_js_1.useTable)(props.model, {
        select: props.select,
        columns: props.columns,
        pageSize: props.pageSize,
        live: props.live,
    });
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
    if (!error && ((fetching && !rows) || !columns)) {
        return react_1.default.createElement(PolarisSkeletonTable, { columns: 3 });
    }
    const resourceName = {
        singular: metadata?.name ?? "",
        plural: metadata ? (0, pluralize_1.default)(metadata.name) : "",
    };
    return (react_1.default.createElement(polaris_1.BlockStack, null,
        react_1.default.createElement(polaris_1.IndexFilters, { filteringAccessibilityTooltip: "Search and filter (F)", mode: mode, setMode: setMode, appliedFilters: [], filters: [], onClearAll: () => undefined, tabs: [], selected: 1, loading: fetching, cancelAction: {
                onAction: () => search.clear(),
            }, 
            // Search
            queryValue: search.value, onQueryChange: search.set, onQueryClear: search.clear, disabled: !!error }),
        error && (react_1.default.createElement(polaris_1.Box, { paddingBlockStart: "200", paddingBlockEnd: "1000" },
            react_1.default.createElement(polaris_1.Banner, { title: error.message, tone: "critical" }))),
        react_1.default.createElement(polaris_1.IndexTable, { ...polarisTableProps, resourceName: resourceName, emptyState: react_1.default.createElement(polaris_1.EmptySearchResult, { title: `No ${resourceName.plural} yet`, description: "", withIllustration: true }), loading: fetching, hasMoreItems: page.hasNextPage, itemCount: error
                ? 1 // Don't show the empty state if there's an error
                : rows?.length ?? 0, pagination: {
                hasNext: page.hasNextPage,
                hasPrevious: page.hasPreviousPage,
                onNext: page.goToNextPage,
                onPrevious: page.goToPreviousPage,
            } }, rows &&
            columns &&
            rows.map((row, index) => (react_1.default.createElement(polaris_1.IndexTable.Row, { key: row.id, id: row.id, position: index, onClick: onClick ? onClickCallback(row) : undefined }, columns.map((column) => (react_1.default.createElement(polaris_1.IndexTable.Cell, { key: column.apiIdentifier },
                react_1.default.createElement("div", { style: { maxWidth: "200px" } }, column.isCustomCell ? (column.getValue(row)) : (react_1.default.createElement(PolarisAutoTableCellRenderer_js_1.PolarisAutoTableCellRenderer, { column: column, value: row[column.apiIdentifier] }))))))))))));
};
exports.PolarisAutoTable = PolarisAutoTable;
//# sourceMappingURL=PolarisAutoTable.js.map