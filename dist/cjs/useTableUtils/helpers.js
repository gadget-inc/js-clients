"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldMetadataArrayToFieldMetadataTree = exports.getTableColumns = exports.getTableRows = exports.getTableSelectionMap = exports.getTableSpec = void 0;
const graphql_js_1 = require("../internal/gql/graphql.js");
const metadata_js_1 = require("../metadata.js");
const utils_js_1 = require("../utils.js");
const getTableSpec = (fieldMetadataArray, columns, excludeColumns, defaultSelection) => {
    const spec = {
        targetColumns: [],
        fieldMetadataTree: (0, exports.fieldMetadataArrayToFieldMetadataTree)(fieldMetadataArray),
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
    for (const targetColumn of spec.targetColumns) {
        if (isCustomCellColumn(targetColumn)) {
            selectionMap = {
                ...selectionMap,
                ...spec.defaultSelection,
            };
            continue;
        }
        const { field: columnPath } = getCellDetailColumnByColumnValue(targetColumn);
        const columnPathSegments = columnPath.split(".");
        let pointer = 0;
        for (let i = 0; i < columnPathSegments.length; i++) {
            if (i < pointer) {
                continue;
            }
            pointer = i + 1;
            const currentColumnPath = columnPathSegments.slice(0, i + 1).join(".");
            const isLastColumnPath = i === columnPathSegments.length - 1;
            const fieldMetadata = getFieldMetadataByColumnPath(spec.fieldMetadataTree, currentColumnPath);
            if (!metadata_js_1.acceptedAutoTableFieldTypes.has(fieldMetadata.fieldType)) {
                throw new Error(`Field '${columnPath}' cannot be shown in the table`);
            }
            const isHasOneOrBelongsTo = isHasOneOrBelongsToField(fieldMetadata);
            const isHasMany = isHasManyField(fieldMetadata);
            if (isHasOneOrBelongsTo || isHasMany) {
                const idColumnPath = mergeColumnPathByFieldType(currentColumnPath, "id", fieldMetadata);
                (0, utils_js_1.set)(selectionMap, idColumnPath, true);
                // Since we are walking through the column path,
                // we only need to get the default display field if the current field is a relationship field and it doesn't specify a related field.
                const defaultRelatedField = isLastColumnPath
                    ? maybeGetDefaultDisplayFieldMetadata(spec.fieldMetadataTree, currentColumnPath)
                    : undefined;
                if (defaultRelatedField) {
                    (0, utils_js_1.set)(selectionMap, mergeColumnPathByFieldType(currentColumnPath, defaultRelatedField.apiIdentifier, fieldMetadata), getNonRelationshipSelectionValue(defaultRelatedField));
                    continue;
                }
                if (isHasOneOrBelongsTo) {
                    continue;
                }
                else {
                    // Skip `edges.node` segment
                    pointer = i + 3;
                    continue;
                }
            }
            (0, utils_js_1.set)(selectionMap, currentColumnPath, getNonRelationshipSelectionValue(fieldMetadata));
        }
    }
    return selectionMap;
};
exports.getTableSelectionMap = getTableSelectionMap;
const getTableRows = (spec, records) => {
    return records.map((record) => recordToRow(spec, record));
};
exports.getTableRows = getTableRows;
const getTableColumns = (spec) => {
    const columns = [];
    for (const targetColumn of spec.targetColumns) {
        if (isCustomCellColumn(targetColumn)) {
            columns.push({
                header: targetColumn.name,
                field: targetColumn.name,
                type: "CustomRenderer",
                sortable: false,
            });
            continue;
        }
        const { header, field: columnPath, sortable } = getCellDetailColumnByColumnValue(targetColumn);
        const fieldMetadata = getFieldMetadataByColumnPath(spec.fieldMetadataTree, columnPath);
        const column = {
            header: header ?? fieldMetadata.name,
            field: columnPath,
            type: fieldMetadata.fieldType,
            sortable: sortable ?? ("sortable" in fieldMetadata && fieldMetadata.sortable),
        };
        const isHasOneOrBelongsTo = isHasOneOrBelongsToField(fieldMetadata);
        const isHasMany = isHasManyField(fieldMetadata);
        // The column path doesn't specify a related field, so we need to get the default display field
        if (isHasOneOrBelongsTo || isHasMany) {
            const defaultRelatedField = maybeGetDefaultDisplayFieldMetadata(spec.fieldMetadataTree, columnPath);
            if (defaultRelatedField) {
                column.type = defaultRelatedField.fieldType;
                column.relationshipType = fieldMetadata.fieldType;
                column.sortable = sortable ?? ("sortable" in defaultRelatedField && defaultRelatedField.sortable);
            }
        }
        else if (maybeDecodeHasManyParentRelationshipByColumnPath(columnPath)) {
            column.relationshipType = graphql_js_1.GadgetFieldType.HasMany;
        }
        columns.push(column);
    }
    return columns;
};
exports.getTableColumns = getTableColumns;
const recordToRow = (spec, record) => {
    const row = {
        id: record.id,
    };
    for (const targetColumn of spec.targetColumns) {
        if (isCustomCellColumn(targetColumn)) {
            row[targetColumn.name] = targetColumn.render(record);
            continue;
        }
        const { field: columnPath } = getCellDetailColumnByColumnValue(targetColumn);
        const columnPathSegments = columnPath.split(".");
        const fieldMetadata = getFieldMetadataByColumnPath(spec.fieldMetadataTree, columnPath);
        const isHasOneOrBelongsTo = isHasOneOrBelongsToField(fieldMetadata);
        const isHasMany = isHasManyField(fieldMetadata);
        const hasManyParent = maybeDecodeHasManyParentRelationshipByColumnPath(columnPath);
        // The column path doesn't specify a related field, so we need to get the default display field
        if (isHasOneOrBelongsTo || isHasMany) {
            const defaultRelatedField = maybeGetDefaultDisplayFieldMetadata(spec.fieldMetadataTree, columnPath);
            if (defaultRelatedField) {
                if (isHasMany) {
                    row[columnPath] = (0, utils_js_1.get)(record, columnPath)?.edges.map((edge) => edge.node[defaultRelatedField.apiIdentifier]);
                }
                else {
                    row[columnPath] = (0, utils_js_1.get)(record, columnPath)?.[defaultRelatedField.apiIdentifier];
                }
            }
        }
        else if (hasManyParent) {
            row[columnPath] = (0, utils_js_1.get)(record, hasManyParent)?.edges.map((edge) => edge.node[columnPathSegments[columnPathSegments.length - 1]]);
        }
        else {
            row[columnPath] = (0, utils_js_1.get)(record, columnPath);
        }
    }
    return row;
};
const isCustomCellColumn = (value) => {
    return typeof value === "object" && value !== null && "name" in value && "render" in value;
};
const getCellDetailColumnByColumnValue = (column) => {
    return typeof column === "string" ? { field: column } : column;
};
const maybeDecodeHasManyParentRelationshipByColumnPath = (columnPath) => {
    const segments = columnPath.split(".");
    if (segments.length < 4 || segments[segments.length - 3] !== "edges" || segments[segments.length - 2] !== "node")
        return;
    return segments.slice(0, segments.length - 3).join(".");
    // return segments.length >= 4 && segments[segments.length - 3] === "edges" && segments[segments.length - 2] === "node";
};
const mergeColumnPathByFieldType = (columnPath, newSegment, field) => {
    if (field.fieldType === graphql_js_1.GadgetFieldType.HasMany) {
        return `${columnPath}.edges.node.${newSegment}`;
    }
    else {
        return `${columnPath}.${newSegment}`;
    }
};
const richTextSelection = {
    markdown: true,
    truncatedHTML: true,
};
const fileSelection = {
    url: true,
    mimeType: true,
    fileName: true,
};
const roleAssignmentsSelection = {
    key: true,
    name: true,
};
const isHasOneOrBelongsToField = (field) => {
    return field.fieldType === graphql_js_1.GadgetFieldType.HasOne || field.fieldType === graphql_js_1.GadgetFieldType.BelongsTo;
};
const isHasManyField = (field) => {
    return field.fieldType === graphql_js_1.GadgetFieldType.HasMany;
};
const getNonRelationshipSelectionValue = (field) => {
    switch (field.fieldType) {
        case graphql_js_1.GadgetFieldType.RichText:
            return richTextSelection;
        case graphql_js_1.GadgetFieldType.File:
            return fileSelection;
        case graphql_js_1.GadgetFieldType.RoleAssignments:
            return roleAssignmentsSelection;
        default:
            return true;
    }
};
const maybeGetDefaultDisplayFieldMetadata = (fieldMetadataTree, columnPath) => {
    const field = getFieldMetadataByColumnPath(fieldMetadataTree, columnPath);
    const relatedModel = maybeGetRelatedModelFromRelationshipField(field);
    if (relatedModel) {
        const newColumnPath = mergeColumnPathByFieldType(columnPath, relatedModel.defaultDisplayField.apiIdentifier, field);
        return getFieldMetadataByColumnPath(fieldMetadataTree, newColumnPath);
    }
};
const fieldMetadataArrayToFieldMetadataTree = (fieldMetadataArray) => {
    const map = {};
    for (const field of fieldMetadataArray) {
        map[field.apiIdentifier] = {};
        if (field.configuration.__typename === "GadgetHasOneConfig" || field.configuration.__typename === "GadgetBelongsToConfig") {
            map[field.apiIdentifier] = {
                $field: field,
                ...(0, exports.fieldMetadataArrayToFieldMetadataTree)((field.configuration.relatedModel?.fields ?? [])),
            };
        }
        else if (field.configuration.__typename === "GadgetHasManyConfig") {
            map[field.apiIdentifier] = {
                $field: field,
                edges: {
                    node: (0, exports.fieldMetadataArrayToFieldMetadataTree)((field.configuration.relatedModel?.fields ?? [])),
                },
            };
        }
        else {
            map[field.apiIdentifier] = field;
        }
    }
    return map;
};
exports.fieldMetadataArrayToFieldMetadataTree = fieldMetadataArrayToFieldMetadataTree;
const getFieldMetadataByColumnPath = (fieldMetadataTree, columnPath) => {
    let field = (0, utils_js_1.get)(fieldMetadataTree, columnPath);
    if (!field) {
        throw new Error(`Field '${columnPath}' does not exist in the model`);
    }
    field = "$field" in field ? field.$field : field;
    return field;
};
const maybeGetRelatedModelFromRelationshipField = (field) => {
    if (field.configuration.__typename === "GadgetBelongsToConfig" ||
        field.configuration.__typename === "GadgetHasOneConfig" ||
        field.configuration.__typename === "GadgetHasManyConfig") {
        return field.configuration.relatedModel;
    }
};
//# sourceMappingURL=helpers.js.map