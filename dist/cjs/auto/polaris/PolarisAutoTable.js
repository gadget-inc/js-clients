"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoTable = void 0;
const polaris_1 = require("@shopify/polaris");
const react_1 = __importStar(require("react"));
const metadata_js_1 = require("../../metadata.js");
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
        const columnContentTypes = Array(columns?.length ?? 0);
        const headings = Array(columns?.length ?? 0);
        const sortable = Array(columns?.length ?? 0);
        if (columns) {
            for (const column of columns) {
                columnContentTypes.push(column.fieldType == metadata_js_1.FieldType.Number ? "numeric" : "text");
                headings.push(column.name);
                sortable.push(column.sortable);
            }
        }
        return { columnContentTypes, headings, sortable };
    }, [metadata]);
    if (fetching && !rows) {
        return react_1.default.createElement(PolarisSkeletonTable, { columns: polarisTableProps.headings.length });
    }
    if (error) {
        return react_1.default.createElement(PolarisErrorDisplay_js_1.PolarisErrorDisplay, { error: error, retry: refresh });
    }
    const rowsArray = rows && columns ? rows.map((row) => columns.map((column) => row[column.apiIdentifier])) : [];
    return (react_1.default.createElement(polaris_1.DataTable, { ...polarisTableProps, rows: rowsArray, footerContent: react_1.default.createElement(polaris_1.Pagination, { hasNext: page.hasNextPage, hasPrevious: page.hasPreviousPage, onNext: page.goToNextPage, onPrevious: page.goToPreviousPage }) }));
};
exports.PolarisAutoTable = PolarisAutoTable;
//# sourceMappingURL=PolarisAutoTable.js.map