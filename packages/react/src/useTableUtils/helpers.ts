import type { GadgetRecord } from "@gadgetinc/api-client-core";
import type { FieldMetadataFragment } from "../internal/gql/graphql.js";
import { GadgetFieldType } from "../internal/gql/graphql.js";
import type { ModelMetadata } from "../metadata.js";
import { isCustomCellColumn, isRelatedFieldColumn } from "../utils.js";
import type { RecordTableColumnValue, TableColumn, TableOptions, TableRow } from "./types.js";

export const getTableData = (props: { columns?: TableColumn[]; data?: GadgetRecord<any>[]; metadata?: ModelMetadata }) => {
  const { columns, data, metadata } = props;

  return metadata && data && columns
    ? {
        rows: getTableRows({ data, columns }),
        columns,
        data,
        metadata,
      }
    : {
        rows: null,
        columns: null,

        data: null,
        metadata: null,
      };
};

export const getTableRows = (props: { data: GadgetRecord<any>[]; columns: TableColumn[] }) => {
  const { columns, data } = props;

  return data.map((record) => {
    const row: TableRow = { id: record.id };
    for (const { apiIdentifier, getValue } of columns) {
      row[apiIdentifier] = getValue(record);
    }
    return row;
  });
};

export const getTableColumns = (fields: FieldMetadataFragment[], columns: TableOptions["columns"]) => {
  const columnsMap = columns && getColumnsMap(columns);

  const result: TableColumn[] = fields.map((field) => {
    let relatedField: RecordTableColumnValue | undefined;
    const relatedFieldColumn = columnsMap?.get(field.apiIdentifier);

    if (relatedFieldColumn) {
      relatedField = getRelatedFieldTableColumn(field, relatedFieldColumn);
    }

    return {
      name: field.name,
      apiIdentifier: field.apiIdentifier,
      fieldType: field.fieldType,
      getValue: (record: GadgetRecord<any>) => {
        return record[field.apiIdentifier];
      },
      sortable: "sortable" in field && field.sortable,
      relatedField,
      isCustomCell: false,
    } satisfies RecordTableColumnValue;
  });

  if (columns) {
    // Add custom cell columns
    for (const column of columns) {
      if (!isCustomCellColumn(column)) continue;
      result.push({
        name: column.name,
        apiIdentifier: column.name,
        isCustomCell: true,
        getValue: (record: GadgetRecord<any>) => column.render(record),
        sortable: false,
      });
    }

    // Sort columns based on the order in the options
    const sortingColumnList = columns.map((column) => {
      if (isRelatedFieldColumn(column)) {
        return column.field;
      }

      if (isCustomCellColumn(column)) {
        return column.name;
      }

      return column;
    });
    result.sort((a, b) => {
      return sortingColumnList.indexOf(a.apiIdentifier) - sortingColumnList.indexOf(b.apiIdentifier);
    });
  }

  return result;
};

const getColumnsMap = (columns: Exclude<TableOptions["columns"], undefined>) => {
  return new Map(
    columns.map((column) => {
      if (isRelatedFieldColumn(column)) {
        return [column.field, column.relatedField];
      } else {
        return [column, undefined];
      }
    })
  );
};

const getRelatedFieldTableColumn = (field: FieldMetadataFragment, relatedFieldColumn: string): RecordTableColumnValue => {
  if (
    field.fieldType !== GadgetFieldType.HasOne &&
    field.fieldType !== GadgetFieldType.BelongsTo &&
    field.fieldType !== GadgetFieldType.HasMany
  ) {
    throw new Error(`Field '${field.apiIdentifier}' is not a relationship field`);
  }

  const relatedFieldMetadata =
    field.configuration.__typename === "GadgetHasOneConfig" ||
    field.configuration.__typename === "GadgetBelongsToConfig" ||
    field.configuration.__typename === "GadgetHasManyConfig"
      ? field.configuration.relatedModel?.fields?.find((relatedField) => relatedField.apiIdentifier === relatedFieldColumn)
      : undefined;

  if (!relatedFieldMetadata) {
    throw new Error(`Related field '${relatedFieldColumn}' not found in metadata`);
  }

  return {
    name: relatedFieldMetadata.name,
    apiIdentifier: relatedFieldMetadata.apiIdentifier,
    fieldType: relatedFieldMetadata.fieldType,
    getValue: (record: GadgetRecord<any>) => {
      return record[field.apiIdentifier]?.[relatedFieldMetadata.apiIdentifier];
    },
    isCustomCell: false,
    sortable: false,
  };
};
