import { Banner, BlockStack, Box, DataTable, EmptySearchResult, IndexFilters, IndexTable, SkeletonBodyText, useSetIndexFiltersMode, } from "@shopify/polaris";
import pluralize from "pluralize";
import React, { useCallback, useMemo } from "react";
import { useTable } from "../../useTable.js";
import { PolarisAutoTableCellRenderer } from "./tableCells/PolarisAutoTableCellRenderer.js";
const PolarisSkeletonTable = (props) => {
    const count = Array.from(Array(props.columns));
    return (React.createElement(DataTable, { columnContentTypes: count.map(() => "text"), headings: count.map((i) => (React.createElement(Box, { width: "100px", key: i },
            React.createElement(SkeletonBodyText, { lines: 1 })))), rows: Array.from(Array(3)).map((_) => count.map((i) => React.createElement(SkeletonBodyText, { key: i, lines: 1 }))) }));
};
/**
 * Renders a table of records from the backend automatically for a given model using Polaris
 */
export const PolarisAutoTable = (props) => {
    const { onClick } = props;
    const [{ rows, columns, metadata, fetching, error, page, search }, refresh] = useTable(props.model, {
        select: props.select,
        columns: props.columns,
        pageSize: props.pageSize,
        live: props.live,
    });
    const onClickCallback = useCallback((row) => {
        return () => onClick?.(row);
    }, [onClick]);
    const { mode, setMode } = useSetIndexFiltersMode();
    const polarisTableProps = useMemo(() => {
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
        return React.createElement(PolarisSkeletonTable, { columns: 3 });
    }
    const resourceName = {
        singular: metadata?.name ?? "",
        plural: metadata ? pluralize(metadata.name) : "",
    };
    return (React.createElement(BlockStack, null,
        React.createElement(IndexFilters, { filteringAccessibilityTooltip: "Search and filter (F)", mode: mode, setMode: setMode, appliedFilters: [], filters: [], onClearAll: () => undefined, tabs: [], selected: 1, loading: fetching, cancelAction: {
                onAction: () => search.clear(),
            }, 
            // Search
            queryValue: search.value, onQueryChange: search.set, onQueryClear: search.clear, disabled: !!error }),
        error && (React.createElement(Box, { paddingBlockStart: "200", paddingBlockEnd: "1000" },
            React.createElement(Banner, { title: error.message, tone: "critical" }))),
        React.createElement(IndexTable, { ...polarisTableProps, resourceName: resourceName, emptyState: React.createElement(EmptySearchResult, { title: `No ${resourceName.plural} yet`, description: "", withIllustration: true }), loading: fetching, hasMoreItems: page.hasNextPage, itemCount: error
                ? 1 // Don't show the empty state if there's an error
                : rows?.length ?? 0, pagination: {
                hasNext: page.hasNextPage,
                hasPrevious: page.hasPreviousPage,
                onNext: page.goToNextPage,
                onPrevious: page.goToPreviousPage,
            } }, rows &&
            columns &&
            rows.map((row, index) => (React.createElement(IndexTable.Row, { key: row.id, id: row.id, position: index, onClick: onClick ? onClickCallback(row) : undefined }, columns.map((column) => (React.createElement(IndexTable.Cell, { key: column.apiIdentifier },
                React.createElement("div", { style: { maxWidth: "200px" } },
                    React.createElement(PolarisAutoTableCellRenderer, { column: column, value: row[column.apiIdentifier] })))))))))));
};
//# sourceMappingURL=PolarisAutoTable.js.map