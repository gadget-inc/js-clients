import React from "react";
import type { TableColumn } from "src/useTableUtils/types.js";
import { FieldType } from "../../../metadata.js";
import type { ColumnValueType } from "../../../utils.js";
import { PolarisAutoTableBooleanCell } from "./PolarisAutoTableBooleanCell.js";
import { PolarisAutoTableDateTimeCell } from "./PolarisAutoTableDateTimeCell.js";
import { PolarisAutoTableEncryptedStringCell } from "./PolarisAutoTableEncryptedStringCell.js";
import { PolarisAutoTableFileCell } from "./PolarisAutoTableFileCell.js";
import { PolarisAutoTableTagCell } from "./PolarisAutoTableTagCell.js";
import { PolarisAutoTableTextCell } from "./PolarisAutoTableTextCell.js";

export const PolarisAutoTableCellRenderer = (props: { column: TableColumn; value: ColumnValueType }) => {
  const { column, value } = props;

  if (value === null || value === undefined) {
    // Don't render anything for null values
    return null;
  }

  if (column.relationshipType === FieldType.HasMany) {
    return <PolarisAutoTableTagCell value={value as any} />;
  }

  switch (column.type) {
    case FieldType.Id:
    case FieldType.String:
    case FieldType.Number:
    case FieldType.Email:
    case FieldType.Computed:
    case FieldType.Url:
    case FieldType.RichText:
    case FieldType.Json: {
      return <PolarisAutoTableTextCell value={value} />;
    }

    case FieldType.EncryptedString: {
      return <PolarisAutoTableEncryptedStringCell value={value} />;
    }

    case FieldType.RoleAssignments:
    case FieldType.Enum: {
      return <PolarisAutoTableTagCell value={value as any} />;
    }

    case FieldType.DateTime: {
      return <PolarisAutoTableDateTimeCell value={value as any} includeTime={column.includeTime ?? true} />;
    }

    case FieldType.Boolean: {
      return <PolarisAutoTableBooleanCell value={!!value} />;
    }

    case FieldType.File: {
      return <PolarisAutoTableFileCell value={value as any} />;
    }

    default:
      return null;
  }
};
