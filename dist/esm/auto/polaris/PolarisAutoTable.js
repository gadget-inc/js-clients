import { BlockStack, DataTable, EmptySearchResult, IndexFilters, IndexTable, SkeletonBodyText, useSetIndexFiltersMode, } from "@shopify/polaris";
import pluralize from "pluralize";
import React, { useMemo } from "react";
import { useTable } from "../../useTable.js";
const PolarisSkeletonTable = (props) => {
    const count = Array.from(Array(props.columns));
    return (React.createElement(DataTable, { columnContentTypes: count.map(() => "text"), headings: count.map((i) => (React.createElement(SkeletonBodyText, { key: i, lines: 1 }))), rows: Array.from(Array(3)).map((_) => count.map((i) => React.createElement(SkeletonBodyText, { key: i, lines: 1 }))) }));
};
/**
 * Renders a table of records from the backend automatically for a given model using Polaris
 */
export const PolarisAutoTable = (props) => {
    const [{ rows, columns, metadata, fetching, page, error }, refresh] = useTable(props.model, {
        select: props.select,
    });
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
    if ((fetching && !rows) || !columns) {
        return React.createElement(PolarisSkeletonTable, { columns: polarisTableProps.headings.length });
    }
    const resourceName = {
        singular: metadata?.name ?? "",
        plural: metadata ? pluralize(metadata.name) : "",
    };
    return (React.createElement(BlockStack, null,
        React.createElement(IndexFilters, { mode: mode, setMode: setMode, filters: [], 
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onQueryChange: () => { }, 
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onQueryClear: () => { }, 
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onClearAll: () => { }, tabs: [], selected: 1, loading: fetching }),
        React.createElement(IndexTable, { ...polarisTableProps, resourceName: resourceName, emptyState: React.createElement(EmptySearchResult, { title: `No ${resourceName.plural} yet`, description: "", withIllustration: true }), loading: fetching, hasMoreItems: page.hasNextPage, itemCount: rows?.length ?? 0, pagination: {
                hasNext: page.hasNextPage,
                hasPrevious: page.hasPreviousPage,
                onNext: page.goToNextPage,
                onPrevious: page.goToPreviousPage,
            } }, rows &&
            columns &&
            rows.map((row, index) => (React.createElement(IndexTable.Row, { key: row.id, id: row.id, position: index }, columns.map((column) => (React.createElement(IndexTable.Cell, { key: column.apiIdentifier }, row[column.apiIdentifier])))))))));
};
//# sourceMappingURL=PolarisAutoTable.js.map