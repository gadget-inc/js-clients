"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoTable = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const pluralize_1 = tslib_1.__importDefault(require("pluralize"));
const react_1 = tslib_1.__importStar(require("react"));
const useTable_js_1 = require("../../useTable.js");
const PolarisErrorDisplay_js_1 = require("./PolarisErrorDisplay.js");
const PolarisSkeletonTable = (props) => {
    const count = Array.from(Array(props.columns));
    return (react_1.default.createElement(polaris_1.DataTable, { columnContentTypes: count.map(() => "text"), headings: count.map((i) => (react_1.default.createElement(polaris_1.SkeletonBodyText, { key: i, lines: 1 }))), rows: Array.from(Array(3)).map((_) => count.map((i) => react_1.default.createElement(polaris_1.SkeletonBodyText, { key: i, lines: 1 }))) }));
};
/**
 * Renders a table of records from the backend automatically for a given model using Polaris
 */
const PolarisAutoTable = (props) => {
    const [{ rows, columns, metadata, fetching, page, error }, refresh] = (0, useTable_js_1.useTable)(props.model, {
        select: props.select,
    });
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
    if (error) {
        return react_1.default.createElement(PolarisErrorDisplay_js_1.PolarisErrorDisplay, { error: error, retry: refresh });
    }
    if ((fetching && !rows) || !columns) {
        return react_1.default.createElement(PolarisSkeletonTable, { columns: polarisTableProps.headings.length });
    }
    const resourceName = {
        singular: metadata?.name ?? "",
        plural: metadata ? (0, pluralize_1.default)(metadata.name) : "",
    };
    return (react_1.default.createElement(polaris_1.BlockStack, null,
        react_1.default.createElement(polaris_1.IndexTable, { ...polarisTableProps, resourceName: resourceName, emptyState: react_1.default.createElement(polaris_1.EmptySearchResult, { title: `No ${resourceName.plural} yet`, description: "", withIllustration: true }), loading: fetching, hasMoreItems: page.hasNextPage, itemCount: rows?.length ?? 0 }, rows &&
            columns &&
            rows.map((row, index) => (react_1.default.createElement(polaris_1.IndexTable.Row, { key: row.id, id: row.id, position: index }, columns.map((column) => (react_1.default.createElement(polaris_1.IndexTable.Cell, { key: column.apiIdentifier }, row[column.apiIdentifier]))))))),
        react_1.default.createElement(polaris_1.Pagination, { hasNext: page.hasNextPage, hasPrevious: page.hasPreviousPage, onNext: page.goToNextPage, onPrevious: page.goToPreviousPage })));
};
exports.PolarisAutoTable = PolarisAutoTable;
//# sourceMappingURL=PolarisAutoTable.js.map