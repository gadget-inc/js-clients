"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTableColumns = exports.getTableRows = exports.getTableSelectionMap = exports.getTableSpec = void 0;
const graphql_js_1 = require("../internal/gql/graphql.js");
const metadata_js_1 = require("../metadata.js");
const utils_js_1 = require("../utils.js");
const getColumnApiIdentifier = (column) => {
    if (typeof column === "string") {
        return column;
    }
    else if ((0, utils_js_1.isRelatedFieldColumn)(column)) {
        return column.field;
    }
    else {
        return column.name;
    }
};
const maybeGetRelatedModelFromRelationshipField = (field) => {
    if (field.configuration.__typename === "GadgetBelongsToConfig" ||
        field.configuration.__typename === "GadgetHasOneConfig" ||
        field.configuration.__typename === "GadgetHasManyConfig") {
        return field.configuration.relatedModel;
    }
};
const getInnerSelectionForRelationshipField = (fieldApiIdentifier, relatedFieldApiIdentifier, fieldType) => {
    const innerSelection = {
        id: true,
        [relatedFieldApiIdentifier]: true,
    };
    if (fieldType === graphql_js_1.GadgetFieldType.HasOne || fieldType === graphql_js_1.GadgetFieldType.BelongsTo) {
        return innerSelection;
    }
    else if (fieldType === graphql_js_1.GadgetFieldType.HasMany) {
        return {
            edges: {
                node: innerSelection,
            },
        };
    }
    throw new Error(`Field '${fieldApiIdentifier}' is not a relationship field`);
};
const getTableSpec = (fieldMetadataArray, columns, excludeColumns, defaultSelection) => {
    const spec = {
        targetColumns: [],
        fieldMetadataMap: new Map(fieldMetadataArray.map((field) => [field.apiIdentifier, field])),
        defaultSelection,
    };
    if (columns && excludeColumns) {
        throw new Error("Cannot use both 'columns' and 'excludeColumns' options at the same time");
    }
    if (columns) {
        spec.targetColumns = columns;
    }
    else if (excludeColumns) {
        const excludeSet = new Set(excludeColumns);
        spec.targetColumns = (0, metadata_js_1.filterAutoTableFieldList)(fieldMetadataArray)
            .filter((field) => !excludeSet.has(field.apiIdentifier))
            .map((field) => field.apiIdentifier);
    }
    else {
        spec.targetColumns = (0, metadata_js_1.filterAutoTableFieldList)(fieldMetadataArray).map((field) => field.apiIdentifier);
    }
    return spec;
};
exports.getTableSpec = getTableSpec;
const getTableSelectionMap = (spec) => {
    let selectionMap = {
        id: true,
    };
    for (const column of spec.targetColumns) {
        if ((0, utils_js_1.isCustomCellColumn)(column)) {
            selectionMap = {
                ...selectionMap,
                ...spec.defaultSelection,
            };
            continue;
        }
        const columnApiIdentifier = getColumnApiIdentifier(column);
        const field = _getFieldMetadataByApiIdentifier(spec, (0, utils_js_1.isRelatedFieldColumn)(column) ? column.field : column);
        if (!metadata_js_1.acceptedAutoTableFieldTypes.has(field.fieldType)) {
            throw new Error(`Field '${columnApiIdentifier}' cannot be shown in the table`);
        }
        const relatedModel = maybeGetRelatedModelFromRelationshipField(field);
        if (typeof column === "string") {
            if (relatedModel) {
                selectionMap[column] = getInnerSelectionForRelationshipField(column, relatedModel.defaultDisplayField.apiIdentifier, field.fieldType);
            }
            else {
                selectionMap[column] = spec.defaultSelection[column] ?? true;
            }
        }
        else if ((0, utils_js_1.isRelatedFieldColumn)(column)) {
            const relatedField = relatedModel?.fields?.find((field) => field.apiIdentifier === column.relatedField);
            if (!relatedField) {
                throw new Error(`Related field '${column.relatedField}' does not exist in the related model`);
            }
            selectionMap[column.field] = getInnerSelectionForRelationshipField(column.field, column.relatedField, field.fieldType);
        }
    }
    return selectionMap;
};
exports.getTableSelectionMap = getTableSelectionMap;
const getTableRows = (spec, records) => {
    return records.map((record) => _recordToRow(spec, record));
};
exports.getTableRows = getTableRows;
const getTableColumns = (spec) => {
    const columns = [];
    for (const targetColumn of spec.targetColumns) {
        if ((0, utils_js_1.isCustomCellColumn)(targetColumn)) {
            columns.push({
                name: targetColumn.name,
                apiIdentifier: targetColumn.name,
                getValue: (record) => targetColumn.render(record),
                isCustomCell: true,
                sortable: false,
            });
            continue;
        }
        const field = _getFieldMetadataByApiIdentifier(spec, (0, utils_js_1.isRelatedFieldColumn)(targetColumn) ? targetColumn.field : targetColumn);
        const relatedModel = maybeGetRelatedModelFromRelationshipField(field);
        const relatedField = (0, utils_js_1.isRelatedFieldColumn)(targetColumn)
            ? relatedModel?.fields?.find((field) => field.apiIdentifier === targetColumn.relatedField)
            : relatedModel
                ? {
                    name: relatedModel.defaultDisplayField.name,
                    apiIdentifier: relatedModel.defaultDisplayField.apiIdentifier,
                    fieldType: relatedModel.defaultDisplayField.fieldType,
                }
                : undefined;
        columns.push({
            name: field.name,
            apiIdentifier: field.apiIdentifier,
            fieldType: field.fieldType,
            sortable: "sortable" in field && field.sortable,
            getValue: (record) => record[field.apiIdentifier],
            isCustomCell: false,
            relatedField: relatedField
                ? {
                    name: relatedField.name,
                    apiIdentifier: relatedField.apiIdentifier,
                    fieldType: relatedField.fieldType,
                    sortable: "sortable" in field && field.sortable,
                    getValue: (record) => record[field.apiIdentifier],
                    isCustomCell: false,
                }
                : undefined,
        });
    }
    return columns;
};
exports.getTableColumns = getTableColumns;
const _getFieldMetadataByApiIdentifier = (spec, apiIdentifier) => {
    const field = spec.fieldMetadataMap.get(apiIdentifier);
    if (!field) {
        throw new Error(`Field '${apiIdentifier}' does not exist in the model`);
    }
    return field;
};
const _recordToRow = (spec, record) => {
    const row = {
        id: record.id,
    };
    for (const targetColumn of spec.targetColumns) {
        const columnApiIdentifier = getColumnApiIdentifier(targetColumn);
        if ((0, utils_js_1.isCustomCellColumn)(targetColumn)) {
            row[columnApiIdentifier] = targetColumn.render(record);
            continue;
        }
        row[columnApiIdentifier] = record[columnApiIdentifier];
    }
    return row;
};
//# sourceMappingURL=helpers.js.map