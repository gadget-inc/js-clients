"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathListToSelection = exports.fieldMetadataArrayToFieldMetadataTree = exports.getTableColumns = exports.getTableRows = exports.getTableSelectionMap = exports.getTableSpec = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
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
        // Select all fields available for the table
        const defaultSelectionKeys = new Set(Object.keys(defaultSelection));
        spec.targetColumns = (0, metadata_js_1.filterAutoTableFieldList)(fieldMetadataArray.filter((field) => defaultSelectionKeys.has(field.apiIdentifier))).map((field) => field.apiIdentifier);
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
        const firstPathSegment = columnPath.split(".")[0];
        let pointer = 0;
        for (let i = 0; i < columnPathSegments.length; i++) {
            if (i < pointer) {
                continue;
            }
            pointer = i + 1;
            const currentColumnPath = columnPathSegments.slice(0, i + 1).join(".");
            const isLastColumnPath = i === columnPathSegments.length - 1;
            const fieldMetadata = maybeGetFieldMetadataByColumnPath(spec.fieldMetadataTree, currentColumnPath);
            if (!fieldMetadata) {
                if (i >= 1) {
                    const errorMessages = getFieldSelectionErrorMessage(columnPathSegments.slice(i).join("."));
                    const firstField = getFieldMetadataByColumnPath(spec.fieldMetadataTree, firstPathSegment);
                    if (isHasOneOrBelongsToField(firstField)) {
                        throw new Error(errorMessages.RELATED_HAS_ONE_OR_BELONGS_TO_FIELD_NOT_EXIST);
                    }
                    if (isHasManyOrHasManyThroughField(firstField)) {
                        throw new Error(errorMessages.RELATED_HAS_MANY_FIELD_NOT_EXIST);
                    }
                }
                throw new Error(getFieldSelectionErrorMessage(currentColumnPath).NOT_EXIST);
            }
            const isHasOneOrBelongsTo = isHasOneOrBelongsToField(fieldMetadata);
            const isHasMany = isHasManyOrHasManyThroughField(fieldMetadata);
            if (!metadata_js_1.acceptedAutoTableFieldTypes.has(fieldMetadata.fieldType)) {
                throw new Error(`Field '${columnPath}' cannot be shown in the table`);
            }
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
                    if (columnPathSegments[i + 1] === "edges" && columnPathSegments[i + 2] === "node" && columnPathSegments[i + 3]) {
                        // Skip `edges.node` segment
                        pointer = i + 3;
                        continue;
                    }
                    throw new Error(getFieldSelectionErrorMessage(columnPathSegments.slice(i + 1).join(".")).RELATED_HAS_MANY_FIELD_NOT_EXIST);
                }
            }
            (0, utils_js_1.set)(selectionMap, currentColumnPath, getNonRelationshipSelectionValue(fieldMetadata));
        }
    }
    return selectionMap;
};
exports.getTableSelectionMap = getTableSelectionMap;
const getTableRows = (spec, columns, records) => {
    return records.map((record, recordIndex) => recordToRow(spec, columns, record, recordIndex));
};
exports.getTableRows = getTableRows;
const getTableColumns = (spec) => {
    const columns = [];
    for (const [i, targetColumn] of spec.targetColumns.entries()) {
        if (isCustomCellColumn(targetColumn)) {
            const identifier = crypto.randomUUID();
            columns.push({
                identifier,
                render: targetColumn.render,
                header: targetColumn.header,
                field: targetColumn.header,
                type: "CustomRenderer",
                sortable: false,
                style: targetColumn.style,
            });
            continue;
        }
        const { header, field: columnPath, sortable, style } = getCellDetailColumnByColumnValue(targetColumn);
        const { firstField, targetField, isHasManyOrHasManyThrough, isHasOneOrBelongsTo } = getFieldInformationByColumnPath(spec.fieldMetadataTree, columnPath);
        const column = {
            identifier: columnPath,
            header: header ?? firstField.name,
            field: columnPath,
            type: targetField.fieldType,
            sortable: isColumnSortable({
                fieldMetadata: { ...targetField, apiIdentifier: columnPath },
                sortable,
                isRelationshipField: isHasOneOrBelongsTo || isHasManyOrHasManyThrough,
            }),
            style,
        };
        // The column path doesn't specify a related field, so we need to get the default display field
        if (isHasOneOrBelongsTo || isHasManyOrHasManyThrough) {
            const defaultRelatedField = maybeGetDefaultDisplayFieldMetadata(spec.fieldMetadataTree, columnPath);
            if (defaultRelatedField) {
                column.type = defaultRelatedField.fieldType;
                column.sortable = isColumnSortable({
                    fieldMetadata: { ...defaultRelatedField, apiIdentifier: columnPath },
                    sortable,
                    isRelationshipField: true,
                });
            }
            column.relationshipType = firstField.fieldType;
        }
        if (targetField.configuration?.__typename === "GadgetDateTimeConfig") {
            column.includeTime = targetField.configuration.includeTime;
        }
        columns.push(column);
    }
    return columns;
};
exports.getTableColumns = getTableColumns;
const recordToRow = (spec, columns, record, recordIndex) => {
    const row = {
        id: record.id,
    };
    for (const column of columns) {
        if (column.type === "CustomRenderer") {
            const CellComponent = column.render;
            if (!CellComponent) {
                throw new Error(`Custom cell renderer for column with header'${column.header}' is invalid`);
            }
            row[column.identifier] = react_1.default.createElement(CellComponent, { record: record, index: recordIndex });
            continue;
        }
    }
    for (const targetColumn of spec.targetColumns) {
        if (isCustomCellColumn(targetColumn)) {
            continue;
        }
        const { field: columnPath } = getCellDetailColumnByColumnValue(targetColumn);
        const { firstPathSegment, targetField, isHasManyOrHasManyThrough, isHasOneOrBelongsTo } = getFieldInformationByColumnPath(spec.fieldMetadataTree, columnPath);
        // The column path doesn't specify a related field, so we need to get the default display field
        if (isHasOneOrBelongsTo || isHasManyOrHasManyThrough) {
            const relatedField = maybeGetDefaultDisplayFieldMetadata(spec.fieldMetadataTree, columnPath) ?? targetField;
            if (isHasManyOrHasManyThrough) {
                row[columnPath] = (0, utils_js_1.get)(record, firstPathSegment)?.edges.map((edge) => edge.node[relatedField.apiIdentifier]);
            }
            else {
                row[columnPath] = (0, utils_js_1.get)(record, firstPathSegment)?.[relatedField.apiIdentifier];
            }
        }
        else {
            row[columnPath] = (0, utils_js_1.get)(record, columnPath);
        }
    }
    return row;
};
const getFieldInformationByColumnPath = (fieldMetadataTree, columnPath) => {
    const firstPathSegment = columnPath.split(".")[0];
    const firstField = getFieldMetadataByColumnPath(fieldMetadataTree, firstPathSegment);
    const targetField = getFieldMetadataByColumnPath(fieldMetadataTree, columnPath);
    const isHasOneOrBelongsTo = isHasOneOrBelongsToField(firstField);
    const isHasManyOrHasManyThrough = isHasManyOrHasManyThroughField(firstField);
    return {
        firstPathSegment,
        firstField,
        targetField,
        isHasOneOrBelongsTo,
        isHasManyOrHasManyThrough,
    };
};
const isCustomCellColumn = (value) => {
    return typeof value === "object" && value !== null && "render" in value;
};
const getCellDetailColumnByColumnValue = (column) => {
    if (typeof column === "string") {
        return { field: column };
    }
    if (typeof column === "object" && column !== null && "field" in column && typeof column.field === "string") {
        return column;
    }
    throw new Error(`Invalid column value: ${JSON.stringify(column)}`);
};
const isColumnSortable = (props) => {
    const { fieldMetadata, sortable, isRelationshipField } = props;
    const isGadgetFieldSortable = isRelationshipField !== true && "sortable" in fieldMetadata && !!fieldMetadata.sortable;
    if (sortable && !isGadgetFieldSortable) {
        throw new Error(`Field '${fieldMetadata.apiIdentifier}' is not sortable`);
    }
    return sortable ?? isGadgetFieldSortable;
};
const mergeColumnPathByFieldType = (columnPath, newSegment, field) => {
    if (isHasManyOrHasManyThroughField(field)) {
        return `${columnPath}.edges.node.${newSegment}`;
    }
    return `${columnPath}.${newSegment}`;
};
const isHasOneOrBelongsToField = (field) => {
    return field.fieldType === graphql_js_1.GadgetFieldType.HasOne || field.fieldType === graphql_js_1.GadgetFieldType.BelongsTo;
};
const isHasManyField = (field) => {
    return field.fieldType === graphql_js_1.GadgetFieldType.HasMany;
};
const isHasManyThroughField = (field) => {
    return field.fieldType === graphql_js_1.GadgetFieldType.HasManyThrough;
};
const isHasManyOrHasManyThroughField = (field) => {
    return isHasManyField(field) || isHasManyThroughField(field);
};
const isRelationshipField = (field) => {
    return isHasOneOrBelongsToField(field) || isHasManyOrHasManyThroughField(field);
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
/**
 * This turns the flat list of field metadata returned by the backend into a nested tree of field metadata.
 * The paths in the object are precomputed to a fixed max depth, for easy lookups later in the table code
 */
const fieldMetadataArrayToFieldMetadataTree = (fieldMetadataArray, depth = 0) => {
    depth += 1;
    const map = {};
    const getRelatedModelFields = (field) => {
        if (!("configuration" in field))
            return [];
        return field.configuration.relatedModel?.fields ?? [];
    };
    for (const field of fieldMetadataArray) {
        map[field.apiIdentifier] = {};
        if (isHasOneOrBelongsToField(field) && depth < 3) {
            map[field.apiIdentifier] = {
                $field: field,
                ...(0, exports.fieldMetadataArrayToFieldMetadataTree)(getRelatedModelFields(field), depth),
            };
        }
        else if (isHasManyOrHasManyThroughField(field) && depth < 3) {
            map[field.apiIdentifier] = {
                $field: field,
                edges: {
                    node: (0, exports.fieldMetadataArrayToFieldMetadataTree)(getRelatedModelFields(field), depth),
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
const maybeGetFieldMetadataByColumnPath = (fieldMetadataTree, columnPath) => {
    const field = (0, utils_js_1.get)(fieldMetadataTree, columnPath);
    return field ? ("$field" in field ? field.$field : field) : undefined;
};
const getFieldMetadataByColumnPath = (fieldMetadataTree, columnPath) => {
    const field = maybeGetFieldMetadataByColumnPath(fieldMetadataTree, columnPath);
    if (!field) {
        throw new Error(getFieldSelectionErrorMessage(columnPath).NOT_EXIST);
    }
    return field;
};
const maybeGetRelatedModelFromRelationshipField = (field) => {
    if ((isHasOneOrBelongsToField(field) || isHasManyOrHasManyThroughField(field)) && "configuration" in field) {
        return field.configuration.relatedModel;
    }
};
const getFieldSelectionErrorMessage = (columnPath) => {
    return {
        NOT_EXIST: `Field '${columnPath}' does not exist in the model`,
        RELATED_HAS_MANY_FIELD_NOT_EXIST: `Field '${columnPath}' does not exist in the related model. hasMany fields require 'edges.node' segment before the related field.`,
        RELATED_HAS_ONE_OR_BELONGS_TO_FIELD_NOT_EXIST: `Field '${columnPath}' does not exist in the related model`,
    };
};
const groupPaths = (paths) => {
    const pathGroups = {};
    for (const path of paths) {
        const [rootSegment, ...childSegments] = path.split(".");
        pathGroups[rootSegment] ?? (pathGroups[rootSegment] = []);
        if (childSegments.length) {
            pathGroups[rootSegment].push(childSegments.join("."));
        }
    }
    return pathGroups;
};
const pathListToSelection = (modelIdentifier, pathList, fieldMetadataArray) => {
    const selection = {
        id: true,
    };
    const pathGroups = groupPaths(pathList);
    for (const [rootPath, childPaths] of Object.entries(pathGroups)) {
        const field = fieldMetadataArray.find((metadata) => metadata.apiIdentifier == rootPath);
        if (!field) {
            throw new Error(`No metadata found for ${rootPath}`);
        }
        if (isRelationshipField(field)) {
            const configuration = field.configuration;
            if (configuration && "joinModel" in configuration && configuration.joinModel) {
                const joinModel = configuration.joinModel;
                const relatedModel = configuration.relatedModel;
                const joinModelHasManyFieldApiIdentifier = configuration.joinModelHasManyFieldApiIdentifier;
                const joinModelPaths = childPaths
                    .filter((path) => path.startsWith(`${joinModel.apiIdentifier}.`))
                    .map((path) => {
                    return path.replace(`${joinModel.apiIdentifier}.`, "");
                });
                const relatedModelPaths = childPaths.filter((path) => !path.startsWith(`${joinModel.apiIdentifier}.`));
                let relatedSelection = {};
                if (relatedModel) {
                    relatedSelection = {
                        id: true,
                        [relatedModel.defaultDisplayField.apiIdentifier]: true,
                        ...(childPaths.length && relatedModel.fields ? (0, exports.pathListToSelection)(rootPath, relatedModelPaths, relatedModel.fields) : {}),
                    };
                }
                selection[joinModelHasManyFieldApiIdentifier] = {
                    edges: {
                        node: {
                            id: true,
                            [joinModel.defaultDisplayField.apiIdentifier]: true,
                            ...(joinModelPaths.length && joinModel.fields
                                ? (0, exports.pathListToSelection)(joinModel.apiIdentifier, joinModelPaths, joinModel.fields)
                                : {}),
                            [configuration.inverseRelatedModelField.apiIdentifier]: relatedSelection,
                        },
                    },
                };
            }
            else if (configuration && "relatedModel" in configuration && configuration.relatedModel) {
                const relatedModel = configuration.relatedModel;
                const relatedSelection = {
                    id: true,
                    [relatedModel?.defaultDisplayField.apiIdentifier]: true,
                    ...(childPaths.length && relatedModel.fields ? (0, exports.pathListToSelection)(rootPath, childPaths, relatedModel.fields) : {}),
                };
                if (isHasManyField(field)) {
                    selection[field.apiIdentifier] = {
                        edges: {
                            node: relatedSelection,
                        },
                    };
                }
                else {
                    selection[field.apiIdentifier] = relatedSelection;
                }
            }
        }
        else {
            selection[field.apiIdentifier] = getNonRelationshipSelectionValue(field);
        }
    }
    return selection;
};
exports.pathListToSelection = pathListToSelection;
//# sourceMappingURL=helpers.js.map