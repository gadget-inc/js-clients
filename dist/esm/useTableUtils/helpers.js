import { GadgetFieldType } from "../internal/gql/graphql.js";
import { acceptedAutoTableFieldTypes, filterAutoTableFieldList } from "../metadata.js";
import { isCustomCellColumn, isRelatedFieldColumn } from "../utils.js";
const getColumnApiIdentifier = (column) => {
    if (typeof column === "string") {
        return column;
    }
    else if (isRelatedFieldColumn(column)) {
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
    if (fieldType === GadgetFieldType.HasOne || fieldType === GadgetFieldType.BelongsTo) {
        return innerSelection;
    }
    else if (fieldType === GadgetFieldType.HasMany) {
        return {
            edges: {
                node: innerSelection,
            },
        };
    }
    throw new Error(`Field '${fieldApiIdentifier}' is not a relationship field`);
};
export const getTableSpec = (fieldMetadataArray, columns, excludeColumns, defaultSelection) => {
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
    for (const column of spec.targetColumns) {
        if (isCustomCellColumn(column)) {
            selectionMap = {
                ...selectionMap,
                ...spec.defaultSelection,
            };
            continue;
        }
        const columnApiIdentifier = getColumnApiIdentifier(column);
        const field = _getFieldMetadataByApiIdentifier(spec, isRelatedFieldColumn(column) ? column.field : column);
        if (!acceptedAutoTableFieldTypes.has(field.fieldType)) {
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
        else if (isRelatedFieldColumn(column)) {
            const relatedField = relatedModel?.fields?.find((field) => field.apiIdentifier === column.relatedField);
            if (!relatedField) {
                throw new Error(`Related field '${column.relatedField}' does not exist in the related model`);
            }
            selectionMap[column.field] = getInnerSelectionForRelationshipField(column.field, column.relatedField, field.fieldType);
        }
    }
    return selectionMap;
};
export const getTableRows = (spec, records) => {
    return records.map((record) => _recordToRow(spec, record));
};
export const getTableColumns = (spec) => {
    const columns = [];
    for (const targetColumn of spec.targetColumns) {
        if (isCustomCellColumn(targetColumn)) {
            columns.push({
                name: targetColumn.name,
                apiIdentifier: targetColumn.name,
                getValue: (record) => targetColumn.render(record),
                isCustomCell: true,
                sortable: false,
            });
            continue;
        }
        const field = _getFieldMetadataByApiIdentifier(spec, isRelatedFieldColumn(targetColumn) ? targetColumn.field : targetColumn);
        const relatedModel = maybeGetRelatedModelFromRelationshipField(field);
        const relatedField = isRelatedFieldColumn(targetColumn)
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
        if (isCustomCellColumn(targetColumn)) {
            row[columnApiIdentifier] = targetColumn.render(record);
            continue;
        }
        row[columnApiIdentifier] = record[columnApiIdentifier];
    }
    return row;
};
//# sourceMappingURL=helpers.js.map