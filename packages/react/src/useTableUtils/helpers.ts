import type { FieldSelection, GadgetRecord } from "@gadgetinc/api-client-core";
import type { FieldMetadataFragment } from "../internal/gql/graphql.js";
import { GadgetFieldType } from "../internal/gql/graphql.js";
import { acceptedAutoTableFieldTypes, filterAutoTableFieldList } from "../metadata.js";
import { convertToCellDetailColumn, get, isCustomCellRendererColumn, set } from "../utils.js";
import type { RecordTableColumnValue, TableColumn, TableOptions, TableRow } from "./types.js";

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

const mergeColumnPathByFieldType = (columnPath: string, newSegment: string, field: { fieldType: GadgetFieldType }) => {
  if (field.fieldType === GadgetFieldType.HasMany) {
    return `${columnPath}.edges.node.${newSegment}`;
  } else {
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

const getNonRelationshipSelectionValue = (field: FieldMetadataFragment) => {
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

// const getInnerSelectionForRelationshipField = (
//   fieldApiIdentifier: string,
//   relatedFieldApiIdentifier: string,
//   fieldType: GadgetFieldType,
//   existingSelection: any
// ): FieldSelection => {
//   const innerSelection: FieldSelection = {
//     id: true,
//     [relatedFieldApiIdentifier]: true,
//   };

//   if (fieldType === GadgetFieldType.HasOne || fieldType === GadgetFieldType.BelongsTo) {
//     return {
//       ...(innerSelection ?? {}),
//       ...existingSelection,
//     };
//   } else if (fieldType === GadgetFieldType.HasMany) {
//     return {
//       edges: {
//         node: {
//           ...(existingSelection?.edges?.node ?? {}),
//           ...innerSelection,
//         },
//       },
//     };
//   }

//   throw new Error(`Field '${fieldApiIdentifier}' is not a relationship field`);
// };

export type TableSpec = {
  targetColumns: ColumnsOption;
  /** Use the `getFieldMetadataByColumnPath` function to get the field metadata by column path for type safety. */
  fieldMetadataTree: Record<string, any>;
  defaultSelection: Record<string, any>;
};

export const fieldMetadataArrayToFieldMetadataTree = (fieldMetadataArray: FieldMetadataFragment[]) => {
  const map: Record<string, any> = {};

  for (const field of fieldMetadataArray) {
    map[field.apiIdentifier] = {};

    if (field.configuration.__typename === "GadgetHasOneConfig" || field.configuration.__typename === "GadgetBelongsToConfig") {
      map[field.apiIdentifier] = {
        $field: field,
        ...fieldMetadataArrayToFieldMetadataTree((field.configuration.relatedModel?.fields ?? []) as any[]),
      };
    } else if (field.configuration.__typename === "GadgetHasManyConfig") {
      map[field.apiIdentifier] = {
        $field: field,
        edges: {
          node: fieldMetadataArrayToFieldMetadataTree((field.configuration.relatedModel?.fields ?? []) as any[]),
        },
      };
    } else {
      map[field.apiIdentifier] = field;
    }
  }

  return map;
};

const isHasOneOrBelongsToField = (field: FieldMetadataFragment) => {
  return field.fieldType === GadgetFieldType.HasOne || field.fieldType === GadgetFieldType.BelongsTo;
};

const isHasManyField = (field: FieldMetadataFragment) => {
  return field.fieldType === GadgetFieldType.HasMany;
};

const getFieldMetadataByColumnPath = (spec: TableSpec, columnPath: string): FieldMetadataFragment => {
  let field: FieldMetadataFragment | { $field: FieldMetadataFragment } = get(spec.fieldMetadataTree, columnPath);
  field = "$field" in field ? field.$field : field;
  if (!field) {
    throw new Error(`Field '${columnPath}' does not exist in the model`);
  }

  return field;
};

const maybeGetDefaultDisplayFieldMetadata = (spec: TableSpec, columnPath: string) => {
  const field = getFieldMetadataByColumnPath(spec, columnPath);

  const relatedModel = maybeGetRelatedModelFromRelationshipField(field);
  if (relatedModel) {
    const newColumnPath = mergeColumnPathByFieldType(columnPath, relatedModel.defaultDisplayField.apiIdentifier, field);
    return getFieldMetadataByColumnPath(spec, newColumnPath);
  }
};

export const getTableSpec = (
  fieldMetadataArray: FieldMetadataFragment[],
  columns: TableOptions["columns"],
  excludeColumns: TableOptions["excludeColumns"],
  defaultSelection: Record<string, any>
) => {
  const spec: TableSpec = {
    targetColumns: [],
    defaultSelection,
    fieldMetadataTree: fieldMetadataArrayToFieldMetadataTree(fieldMetadataArray),
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
    const columnPathSegments = columnPath.split(".");

    let pointer = 0;
    for (let i = 0; i < columnPathSegments.length; i++) {
      if (i < pointer) {
        continue;
      }

      pointer = i + 1;

      const currentColumnPath = columnPathSegments.slice(0, i + 1).join(".");
      const isLastColumnPath = i === columnPathSegments.length - 1;

      const field = getFieldMetadataByColumnPath(spec, currentColumnPath);

      const isHasOneOrBelongsTo = isHasOneOrBelongsToField(field);
      const isHasMany = isHasManyField(field);

      if (!acceptedAutoTableFieldTypes.has(field.fieldType)) {
        throw new Error(`Field '${columnPath}' cannot be shown in the table`);
      }

      if (isHasOneOrBelongsTo || isHasMany) {
        const idColumnPath = mergeColumnPathByFieldType(currentColumnPath, "id", field);
        set(selectionMap, idColumnPath, true);

        // Since we are walking through the column path,
        // we only need to get the default display field if the current field is a relationship field and it doesn't specify a related field.
        const defaultRelatedField = isLastColumnPath ? maybeGetDefaultDisplayFieldMetadata(spec, currentColumnPath) : undefined;

        if (defaultRelatedField) {
          set(
            selectionMap,
            mergeColumnPathByFieldType(currentColumnPath, defaultRelatedField.apiIdentifier, field),
            getNonRelationshipSelectionValue(defaultRelatedField)
          );
          continue;
        }

        if (isHasOneOrBelongsTo) {
          continue;
        } else {
          // Skip `edges.node` segment
          pointer = i + 3;
          continue;
        }
      }

      set(selectionMap, currentColumnPath, getNonRelationshipSelectionValue(field));
    }
  }

  return selectionMap;
};

export const getTableRows = (targetColumns: ColumnsOption, records: GadgetRecord<any>[]): TableRow[] => {
  return records.map((record) => _recordToRow(targetColumns, record));
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
    const defaultDisplayField = maybeGetDefaultDisplayFieldMetadata(spec, columnPath);

    const field = getFieldMetadataByColumnPath(spec, columnPath);

    const isHasOneOrBelongsTo = isHasOneOrBelongsToField(field);
    const isHasMany = isHasManyField(field);

    let relatedField: RecordTableColumnValue | undefined;
    if ((isHasOneOrBelongsTo || isHasMany) && defaultDisplayField) {
      relatedField = {
        name: defaultDisplayField.name,
        apiIdentifier: defaultDisplayField.apiIdentifier,
        fieldType: defaultDisplayField.fieldType,
        sortable: "sortable" in defaultDisplayField && defaultDisplayField.sortable,
        getValue: (record) => record[field.apiIdentifier],
        isCustomCell: false,
        columnPath: mergeColumnPathByFieldType(columnPath, defaultDisplayField.apiIdentifier, field),
      };
    }

    columns.push({
      name: header ?? field.name,
      apiIdentifier: field.apiIdentifier,
      fieldType: field.fieldType,
      sortable: sortable ?? ("sortable" in field && field.sortable),
      getValue: (record) => record[field.apiIdentifier],
      isCustomCell: false,
      columnPath,
      relatedField,
    });
  }

  return columns;
};

const _recordToRow = (targetColumns: ColumnsOption, record: GadgetRecord<any>) => {
  const row: TableRow = {
    id: record.id,
  };

  for (const targetColumn of targetColumns) {
    if (isCustomCellRendererColumn(targetColumn)) {
      row[targetColumn.header] = targetColumn.render({ record });
      continue;
    }

    const { field: columnPath } = convertToCellDetailColumn(targetColumn);
    if (columnPath.split(".").length > 1) {
      row[columnPath] = get(record, columnPath);
      continue;
    }

    row[columnPath] = record[columnPath];
  }

  console.log("where - row:", row);

  return row;
};
