import type { FieldSelection, GadgetRecord } from "@gadgetinc/api-client-core";
import type { FieldMetadataFragment } from "../internal/gql/graphql.js";
import { GadgetFieldType } from "../internal/gql/graphql.js";
import { acceptedAutoTableFieldTypes, filterAutoTableFieldList } from "../metadata.js";
import { isCustomCellColumn, isRelatedFieldColumn } from "../utils.js";
import type { TableColumn, TableOptions, TableRow } from "./types.js";

type ColumnsOption = Exclude<TableOptions["columns"], undefined>;

const getColumnApiIdentifier = (column: ColumnsOption[number]) => {
  if (typeof column === "string") {
    return column;
  } else if (isRelatedFieldColumn(column)) {
    return column.field;
  } else {
    return column.name;
  }
};

const maybeGetRelatedModelFromRelationshipField = (field: FieldMetadataFragment) => {
  if (
    field.configuration.__typename === "GadgetBelongsToConfig" ||
    field.configuration.__typename === "GadgetHasOneConfig" ||
    field.configuration.__typename === "GadgetHasManyConfig"
  ) {
    return field.configuration.relatedModel;
  }
};

const getInnerSelectionForRelationshipField = (
  fieldApiIdentifier: string,
  relatedFieldApiIdentifier: string,
  fieldType: GadgetFieldType
): FieldSelection => {
  const innerSelection: FieldSelection = {
    id: true,
    [relatedFieldApiIdentifier]: true,
  };

  if (fieldType === GadgetFieldType.HasOne || fieldType === GadgetFieldType.BelongsTo) {
    return innerSelection;
  } else if (fieldType === GadgetFieldType.HasMany) {
    return {
      edges: {
        node: innerSelection,
      },
    };
  }

  throw new Error(`Field '${fieldApiIdentifier}' is not a relationship field`);
};

export type TableSpec = {
  targetColumns: ColumnsOption;
  fieldMetadataMap: Map<string, FieldMetadataFragment>;
  defaultSelection: Record<string, any>;
};

export const getTableSpec = (
  fieldMetadataArray: FieldMetadataFragment[],
  columns: TableOptions["columns"],
  excludeColumns: TableOptions["excludeColumns"],
  defaultSelection: Record<string, any>
) => {
  const spec: TableSpec = {
    targetColumns: [],
    fieldMetadataMap: new Map(fieldMetadataArray.map((field) => [field.apiIdentifier, field])),
    defaultSelection,
  };

  if (columns && excludeColumns) {
    throw new Error("Cannot use both 'columns' and 'excludeColumns' options at the same time");
  }

  if (columns) {
    spec.targetColumns = columns;
  } else if (excludeColumns) {
    const excludeSet = new Set(excludeColumns);
    spec.targetColumns = filterAutoTableFieldList(fieldMetadataArray)
      .filter((field) => !excludeSet.has(field.apiIdentifier))
      .map((field) => field.apiIdentifier);
  } else {
    spec.targetColumns = filterAutoTableFieldList(fieldMetadataArray).map((field) => field.apiIdentifier);
  }

  return spec;
};

export const getTableSelectionMap = (spec: TableSpec) => {
  let selectionMap: FieldSelection = {
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
        selectionMap[column] = getInnerSelectionForRelationshipField(
          column,
          relatedModel.defaultDisplayField.apiIdentifier,
          field.fieldType
        );
      } else {
        selectionMap[column] = spec.defaultSelection[column] ?? true;
      }
    } else if (isRelatedFieldColumn(column)) {
      const relatedField = relatedModel?.fields?.find((field) => field.apiIdentifier === column.relatedField);
      if (!relatedField) {
        throw new Error(`Related field '${column.relatedField}' does not exist in the related model`);
      }
      selectionMap[column.field] = getInnerSelectionForRelationshipField(column.field, column.relatedField, field.fieldType);
    }
  }

  return selectionMap;
};

export const getTableRows = (spec: TableSpec, records: GadgetRecord<any>[]) => {
  return records.map((record) => _recordToRow(spec, record));
};

export const getTableColumns = (spec: TableSpec) => {
  const columns: TableColumn[] = [];
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
      header: field.name,
      field: field.apiIdentifier,
      type: field.fieldType,
      sortable: "sortable" in field && field.sortable,
      relatedField: relatedField
        ? {
            header: relatedField.name,
            field: relatedField.apiIdentifier,
            type: relatedField.fieldType,
            sortable: "sortable" in field && field.sortable,
          }
        : undefined,
    });
  }

  return columns;
};

const _getFieldMetadataByApiIdentifier = (spec: TableSpec, apiIdentifier: string) => {
  const field = spec.fieldMetadataMap.get(apiIdentifier);
  if (!field) {
    throw new Error(`Field '${apiIdentifier}' does not exist in the model`);
  }
  return field;
};

const _recordToRow = (spec: TableSpec, record: GadgetRecord<any>) => {
  const row: TableRow = {
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
