import React from "react";
import { GadgetFieldType } from "../internal/gql/graphql.js";
import { acceptedAutoTableFieldTypes, filterAutoTableFieldList } from "../metadata.js";
import { get, groupPaths, set } from "../utils.js";
export const getTableSpec = (fieldMetadataArray, columns, excludeColumns, defaultSelection) => {
    const spec = {
        targetColumns: [],
        fieldMetadataTree: fieldMetadataArrayToFieldMetadataTree(fieldMetadataArray),
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
        spec.targetColumns = filterAutoTableFieldList(fieldMetadataArray)
            .filter((field) => !excludeSet.has(field.apiIdentifier))
            .map((field) => field.apiIdentifier);
    }
    else {
        // Select all fields available for the table
        const defaultSelectionKeys = new Set(Object.keys(defaultSelection));
        spec.targetColumns = filterAutoTableFieldList(fieldMetadataArray.filter((field) => defaultSelectionKeys.has(field.apiIdentifier))).map((field) => field.apiIdentifier);
    }
    return spec;
};
export const getTableSelectionMap = (spec) => {
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
            if (!acceptedAutoTableFieldTypes.has(fieldMetadata.fieldType)) {
                throw new Error(`Field '${columnPath}' cannot be shown in the table`);
            }
            if (isHasOneOrBelongsTo || isHasMany) {
                const idColumnPath = mergeColumnPathByFieldType(currentColumnPath, "id", fieldMetadata);
                set(selectionMap, idColumnPath, true);
                // Since we are walking through the column path,
                // we only need to get the default display field if the current field is a relationship field and it doesn't specify a related field.
                const defaultRelatedField = isLastColumnPath
                    ? maybeGetDefaultDisplayFieldMetadata(spec.fieldMetadataTree, currentColumnPath)
                    : undefined;
                if (defaultRelatedField) {
                    set(selectionMap, mergeColumnPathByFieldType(currentColumnPath, defaultRelatedField.apiIdentifier, fieldMetadata), getNonRelationshipSelectionValue(defaultRelatedField));
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
            set(selectionMap, currentColumnPath, getNonRelationshipSelectionValue(fieldMetadata));
        }
    }
    return selectionMap;
};
export const getTableRows = (spec, columns, records) => {
    return records.map((record, recordIndex) => recordToRow(spec, columns, record, recordIndex));
};
export const getTableColumns = (spec) => {
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
            row[column.identifier] = React.createElement(CellComponent, { record: record, index: recordIndex });
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
                row[columnPath] = get(record, firstPathSegment)?.edges.map((edge) => edge.node[relatedField.apiIdentifier]);
            }
            else {
                row[columnPath] = get(record, firstPathSegment)?.[relatedField.apiIdentifier];
            }
        }
        else {
            row[columnPath] = get(record, columnPath);
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
const isBelongsToField = (field) => {
    return field.fieldType === GadgetFieldType.BelongsTo;
};
const isHasOneOrBelongsToField = (field) => {
    return field.fieldType === GadgetFieldType.HasOne || isBelongsToField(field);
};
const isHasManyField = (field) => {
    return field.fieldType === GadgetFieldType.HasMany;
};
const isHasManyThroughField = (field) => {
    return field.fieldType === GadgetFieldType.HasManyThrough;
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
        case GadgetFieldType.RichText:
            return richTextSelection;
        case GadgetFieldType.File:
            return fileSelection;
        case GadgetFieldType.RoleAssignments:
            return roleAssignmentsSelection;
        case GadgetFieldType.Password:
            return false; // API error if password fields are selected
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
export const fieldMetadataArrayToFieldMetadataTree = (fieldMetadataArray, depth = 0) => {
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
                ...fieldMetadataArrayToFieldMetadataTree(getRelatedModelFields(field), depth),
            };
        }
        else if (isHasManyOrHasManyThroughField(field) && depth < 3) {
            map[field.apiIdentifier] = {
                $field: field,
                edges: {
                    node: fieldMetadataArrayToFieldMetadataTree(getRelatedModelFields(field), depth),
                },
            };
        }
        else {
            map[field.apiIdentifier] = field;
        }
    }
    return map;
};
const maybeGetFieldMetadataByColumnPath = (fieldMetadataTree, columnPath) => {
    const field = get(fieldMetadataTree, columnPath);
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
/**
 * This function takes a list of field paths and converts them into a structured field selection for a model
 * It handles:
 * - Basic fields
 * - Relationship fields (hasOne, belongsTo, hasMany)
 * - Nested fields through relationships
 * - Join model relationships in hasManyThrough fields
 *
 * The resulting selection object will always include the 'id' field and handles proper nesting
 * of relationship selections including edges/node structure for hasMany relationships.
 */
export const pathListToSelection = (modelIdentifier, pathList, fieldMetadataArray) => {
    const selection = {
        id: true,
    };
    const pathGroups = groupPaths(pathList, false);
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
                        ...(childPaths.length && relatedModel.fields ? pathListToSelection(rootPath, relatedModelPaths, relatedModel.fields) : {}),
                    };
                }
                selection[joinModelHasManyFieldApiIdentifier] = {
                    edges: {
                        node: {
                            id: true,
                            [joinModel.defaultDisplayField.apiIdentifier]: true,
                            ...(joinModelPaths.length && joinModel.fields
                                ? pathListToSelection(joinModel.apiIdentifier, joinModelPaths, joinModel.fields)
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
                    ...(childPaths.length && relatedModel.fields ? pathListToSelection(rootPath, childPaths, relatedModel.fields) : {}),
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
                    if (isBelongsToField(field)) {
                        // Select the raw ID value so dangling belongsTo relationships can be shown
                        selection[`${field.apiIdentifier}Id`] = true;
                    }
                }
            }
        }
        else {
            // Non relationship field
            selection[field.apiIdentifier] = getNonRelationshipSelectionValue(field);
        }
    }
    return selection;
};
//# sourceMappingURL=helpers.js.map