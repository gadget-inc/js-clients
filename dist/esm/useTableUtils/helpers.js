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
            column.relationshipType = GadgetFieldType.HasMany;
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
                    row[columnPath] = get(record, columnPath)?.edges.map((edge) => edge.node[defaultRelatedField.apiIdentifier]);
                }
                else {
                    row[columnPath] = get(record, columnPath)?.[defaultRelatedField.apiIdentifier];
                }
            }
        }
        else if (hasManyParent) {
            row[columnPath] = get(record, hasManyParent)?.edges.map((edge) => edge.node[columnPathSegments[columnPathSegments.length - 1]]);
        }
        else {
            row[columnPath] = get(record, columnPath);
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
    if (field.fieldType === GadgetFieldType.HasMany) {
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
    return field.fieldType === GadgetFieldType.HasOne || field.fieldType === GadgetFieldType.BelongsTo;
};
const isHasManyField = (field) => {
    return field.fieldType === GadgetFieldType.HasMany;
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
    for (const field of fieldMetadataArray) {
        map[field.apiIdentifier] = {};
        if (field.configuration.__typename === "GadgetHasOneConfig" || field.configuration.__typename === "GadgetBelongsToConfig") {
            map[field.apiIdentifier] = {
                $field: field,
                ...fieldMetadataArrayToFieldMetadataTree((field.configuration.relatedModel?.fields ?? [])),
            };
        }
        else if (field.configuration.__typename === "GadgetHasManyConfig") {
            map[field.apiIdentifier] = {
                $field: field,
                edges: {
                    node: fieldMetadataArrayToFieldMetadataTree((field.configuration.relatedModel?.fields ?? [])),
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
    if (field.configuration.__typename === "GadgetBelongsToConfig" ||
        field.configuration.__typename === "GadgetHasOneConfig" ||
        field.configuration.__typename === "GadgetHasManyConfig") {
        return field.configuration.relatedModel;
    }
};
//# sourceMappingURL=helpers.js.map