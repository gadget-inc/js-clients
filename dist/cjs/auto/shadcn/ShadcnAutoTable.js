"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAutoTable = void 0;
const tslib_1 = require("tslib");
const pluralize_1 = tslib_1.__importDefault(require("pluralize"));
const React = tslib_1.__importStar(require("react"));
const react_1 = require("react");
const useTable_js_1 = require("../../useTable.js");
const AutoTableValidators_js_1 = require("../AutoTableValidators.js");
const defaultTableCellStyle_js_1 = require("../shared/defaultTableCellStyle.js");
const ShadcnAutoTablePagination_js_1 = require("./table/ShadcnAutoTablePagination.js");
const ShadcnAutoTableSearch_js_1 = require("./table/ShadcnAutoTableSearch.js");
const ShadcnAutoTableCellRenderer_js_1 = require("./table/cells/ShadcnAutoTableCellRenderer.js");
/**
 * Renders a table for a model automatically using Shadcn
 */
const makeAutoTable = (elements) => {
    const { Alert, Skeleton, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } = elements;
    const ShadcnAutoTableCellRenderer = (0, ShadcnAutoTableCellRenderer_js_1.makeShadcnAutoTableCellRenderer)(elements);
    const ShadcnAutoTablePagination = (0, ShadcnAutoTablePagination_js_1.makeShadcnAutoTablePagination)(elements);
    const ShadcnAutoTableSearch = (0, ShadcnAutoTableSearch_js_1.makeShadcnAutoTableSearch)(elements);
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
        const onClickCallback = (0, react_1.useCallback)((row, rawRecord) => {
            return () => onClick?.(row, rawRecord);
        }, [onClick]);
        const resourceName = (0, react_1.useMemo)(() => props.resourceName ?? {
            singular: metadata?.name ?? "",
            plural: metadata ? (0, pluralize_1.default)(metadata.name) : "",
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
                    React.createElement(TableBody, null, rows?.length ? (rows.map((row) => (React.createElement(TableRow, { key: row.id, "data-state": "selected" }, columns.map((column) => (React.createElement(TableCell, { key: column.identifier, style: { ...defaultTableCellStyle_js_1.defaultCellStyle, ...column.style } }, column.type == "CustomRenderer" ? row[column.identifier] : (React.createElement(ShadcnAutoTableCellRenderer, { column: column, value: row[column.identifier] }))))))))) : (React.createElement(TableRow, null,
                        React.createElement(TableCell, { colSpan: columns.length, className: "h-24 text-center" }, `No ${resourceName.plural} yet`))))),
                paginate && React.createElement(ShadcnAutoTablePagination, { page: page }))));
    }
    return (props) => {
        const { model } = props;
        (0, AutoTableValidators_js_1.validateAutoTableProps)(model);
        const componentKey = `${[model.findMany.namespace, model.findMany.modelApiIdentifier].join("_")}AutoTable`;
        return (React.createElement(React.Fragment, null,
            React.createElement(ShadcnAutoTableComponent, { key: componentKey, ...props })));
    };
};
exports.makeAutoTable = makeAutoTable;
//# sourceMappingURL=ShadcnAutoTable.js.map