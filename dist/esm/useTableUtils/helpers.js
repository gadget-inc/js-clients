import { GadgetFieldType } from "../internal/gql/graphql.js";
import { acceptedAutoTableFieldTypes, filterAutoTableFieldList } from "../metadata.js";
import { get, set } from "../utils.js";
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
        spec.targetColumns = filterAutoTableFieldList(fieldMetadataArray).map((field) => field.apiIdentifier);
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
        let pointer = 0;
        for (let i = 0; i < columnPathSegments.length; i++) {
            if (i < pointer) {
                continue;
            }
            pointer = i + 1;
            const currentColumnPath = columnPathSegments.slice(0, i + 1).join(".");
            const isLastColumnPath = i === columnPathSegments.length - 1;
            const fieldMetadata = getFieldMetadataByColumnPath(spec.fieldMetadataTree, currentColumnPath);
            if (!acceptedAutoTableFieldTypes.has(fieldMetadata.fieldType)) {
                throw new Error(`Field '${columnPath}' cannot be shown in the table`);
            }
            const isHasOneOrBelongsTo = isHasOneOrBelongsToField(fieldMetadata);
            const isHasMany = isHasManyField(fieldMetadata);
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
                    // Skip `edges.node` segment
                    pointer = i + 3;
                    continue;
                }
            }
            set(selectionMap, currentColumnPath, getNonRelationshipSelectionValue(fieldMetadata));
        }
    }
    return selectionMap;
};
export const getTableRows = (spec, records) => {
    return records.map((record) => recordToRow(spec, record));
};
export const getTableColumns = (spec) => {
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
        const { firstField, targetField, isHasMany, isHasOneOrBelongsTo } = getFieldInformationByColumnPath(spec.fieldMetadataTree, columnPath);
        const column = {
            header: header ?? firstField.name,
            field: columnPath,
            type: targetField.fieldType,
            sortable: isColumnSortable(targetField, sortable),
        };
        // The column path doesn't specify a related field, so we need to get the default display field
        if (isHasOneOrBelongsTo || isHasMany) {
            const defaultRelatedField = maybeGetDefaultDisplayFieldMetadata(spec.fieldMetadataTree, columnPath);
            if (defaultRelatedField) {
                column.type = defaultRelatedField.fieldType;
                column.sortable = isColumnSortable(defaultRelatedField, sortable);
            }
            column.relationshipType = firstField.fieldType;
        }
        columns.push(column);
    }
    return columns;
};
const recordToRow = (spec, record) => {
    const row = {
        id: record.id,
    };
    for (const targetColumn of spec.targetColumns) {
        if (isCustomCellColumn(targetColumn)) {
            row[targetColumn.name] = targetColumn.render({ record });
            continue;
        }
        const { field: columnPath } = getCellDetailColumnByColumnValue(targetColumn);
        const { firstPathSegment, targetField, isHasMany, isHasOneOrBelongsTo } = getFieldInformationByColumnPath(spec.fieldMetadataTree, columnPath);
        // The column path doesn't specify a related field, so we need to get the default display field
        if (isHasOneOrBelongsTo || isHasMany) {
            const relatedField = maybeGetDefaultDisplayFieldMetadata(spec.fieldMetadataTree, columnPath) ?? targetField;
            if (isHasMany) {
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
    const isHasMany = isHasManyField(firstField);
    return {
        firstPathSegment,
        firstField,
        targetField,
        isHasOneOrBelongsTo,
        isHasMany,
    };
};
const isCustomCellColumn = (value) => {
    return typeof value === "object" && value !== null && "name" in value && "render" in value;
};
const getCellDetailColumnByColumnValue = (column) => {
    return typeof column === "string" ? { field: column } : column;
};
const isColumnSortable = (fieldMetadata, sortable) => {
    return sortable ?? ("sortable" in fieldMetadata && fieldMetadata.sortable);
};
const mergeColumnPathByFieldType = (columnPath, newSegment, field) => {
    if (isHasManyField(field)) {
        return `${columnPath}.edges.node.${newSegment}`;
    }
    return `${columnPath}.${newSegment}`;
};
const isHasOneOrBelongsToField = (field) => {
    return field.fieldType === GadgetFieldType.HasOne || field.fieldType === GadgetFieldType.BelongsTo;
};
const isHasManyField = (field) => {
    return field.fieldType === GadgetFieldType.HasMany;
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
export const fieldMetadataArrayToFieldMetadataTree = (fieldMetadataArray) => {
    const map = {};
    const getRelatedModelFields = (field) => {
        if (!("configuration" in field))
            return [];
        return field.configuration.relatedModel?.fields ?? [];
    };
    for (const field of fieldMetadataArray) {
        map[field.apiIdentifier] = {};
        if (isHasOneOrBelongsToField(field)) {
            map[field.apiIdentifier] = {
                $field: field,
                ...fieldMetadataArrayToFieldMetadataTree(getRelatedModelFields(field)),
            };
        }
        else if (isHasManyField(field)) {
            map[field.apiIdentifier] = {
                $field: field,
                edges: {
                    node: fieldMetadataArrayToFieldMetadataTree(getRelatedModelFields(field)),
                },
            };
        }
        else {
            map[field.apiIdentifier] = field;
        }
    }
    return map;
};
const getFieldMetadataByColumnPath = (fieldMetadataTree, columnPath) => {
    let field = get(fieldMetadataTree, columnPath);
    if (!field) {
        throw new Error(`Field '${columnPath}' does not exist in the model`);
    }
    field = "$field" in field ? field.$field : field;
    return field;
};
const maybeGetRelatedModelFromRelationshipField = (field) => {
    if ((isHasOneOrBelongsToField(field) || isHasManyField(field)) && "configuration" in field) {
        return field.configuration.relatedModel;
    }
};
//# sourceMappingURL=helpers.js.map