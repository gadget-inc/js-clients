import type { FieldSelection, GadgetRecord } from "@gadgetinc/api-client-core";
import type { FieldMetadataFragment } from "../internal/gql/graphql.js";
import { GadgetFieldType } from "../internal/gql/graphql.js";
import { acceptedAutoTableFieldTypes, filterAutoTableFieldList } from "../metadata.js";
import { convertToCellDetailColumn, isCustomCellRendererColumn, maybeGetRelationshipFromColumnPath } from "../utils.js";
import type { TableColumn, TableOptions, TableRow } from "./types.js";

type ColumnsOption = Exclude<TableOptions["columns"], undefined>;

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
  fieldType: GadgetFieldType,
  existingSelection: any
): FieldSelection => {
  const innerSelection: FieldSelection = {
    id: true,
    [relatedFieldApiIdentifier]: true,
  };

  if (fieldType === GadgetFieldType.HasOne || fieldType === GadgetFieldType.BelongsTo) {
    return {
      ...(innerSelection ?? {}),
      ...existingSelection,
    };
  } else if (fieldType === GadgetFieldType.HasMany) {
    return {
      edges: {
        node: {
          ...(existingSelection?.edges?.node ?? {}),
          ...innerSelection,
        },
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

  for (const targetColumn of spec.targetColumns) {
    if (isCustomCellRendererColumn(targetColumn)) {
      selectionMap = {
        ...selectionMap,
        ...spec.defaultSelection,
      };
      continue;
    }

    const { field: columnPath } = convertToCellDetailColumn(targetColumn);
    const relationship = maybeGetRelationshipFromColumnPath(columnPath);
    const field = _getFieldMetadataByApiIdentifier(spec, relationship ? relationship.apiIdentifier : columnPath);

    if (!acceptedAutoTableFieldTypes.has(field.fieldType)) {
      throw new Error(`Field '${columnPath}' cannot be shown in the table`);
    }

    const relatedModel = maybeGetRelatedModelFromRelationshipField(field);

    if (relationship) {
      if (
        (field.fieldType === GadgetFieldType.HasOne || field.fieldType === GadgetFieldType.BelongsTo) &&
        relationship.__expectHasManyRelationship
      ) {
        throw new Error(
          `Field '${columnPath}' is a has one or belongs to relationship, but the column path expects the field to be a has many relationship`
        );
      }

      if (field.fieldType === GadgetFieldType.HasMany && !relationship.__expectHasManyRelationship) {
        throw new Error(
          `Field '${columnPath}' is a has many relationship, but the column path expects the field to be a has one or belongs to relationship`
        );
      }

      const relatedField = relatedModel?.fields?.find((field) => field.apiIdentifier === relationship.relatedField);
      if (!relatedField) {
        throw new Error(`Related field '${relationship.relatedField}' does not exist in the related model`);
      }
      selectionMap[relationship.apiIdentifier] = getInnerSelectionForRelationshipField(
        relationship.apiIdentifier,
        relationship.relatedField,
        field.fieldType,
        selectionMap[relationship.apiIdentifier]
      );
    } else {
      if (relatedModel) {
        selectionMap[columnPath] = getInnerSelectionForRelationshipField(
          columnPath,
          relatedModel.defaultDisplayField.apiIdentifier,
          field.fieldType,
          selectionMap[columnPath]
        );
      } else {
        selectionMap[columnPath] = spec.defaultSelection[columnPath] ?? true;
      }
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
    if (isCustomCellRendererColumn(targetColumn)) {
      columns.push({
        name: targetColumn.header,
        apiIdentifier: targetColumn.header,
        getValue: (record) => targetColumn.render({ record }),
        isCustomCell: true,
        sortable: false,
      });
      continue;
    }

    const { field: columnPath, header, sortable } = convertToCellDetailColumn(targetColumn);
    const relationship = maybeGetRelationshipFromColumnPath(columnPath);
    const field = _getFieldMetadataByApiIdentifier(spec, relationship ? relationship.apiIdentifier : columnPath);

    const relatedModel = maybeGetRelatedModelFromRelationshipField(field);
    const relatedField = relationship
      ? relatedModel?.fields?.find((field) => field.apiIdentifier === relationship.relatedField)
      : relatedModel
      ? {
          name: relatedModel.defaultDisplayField.name,
          apiIdentifier: relatedModel.defaultDisplayField.apiIdentifier,
          fieldType: relatedModel.defaultDisplayField.fieldType,
        }
      : undefined;

    columns.push({
      name: header ?? field.name,
      apiIdentifier: field.apiIdentifier,
      fieldType: field.fieldType,
      sortable: sortable ?? ("sortable" in field && field.sortable),
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
    if (isCustomCellRendererColumn(targetColumn)) {
      row[targetColumn.header] = targetColumn.render({ record });
      continue;
    }

    const { field: columnPath } = convertToCellDetailColumn(targetColumn);
    const relationship = maybeGetRelationshipFromColumnPath(columnPath);
    row[relationship?.apiIdentifier ?? columnPath] = record[relationship?.apiIdentifier ?? columnPath];
  }

  return row;
};
