import React from "react";
import { FieldType } from "../../../metadata.js";
import type { ColumnValueType, TableColumn } from "../../../useTable.js";
import { PolarisTableBooleanCell } from "./PolarisTableBooleanCell.js";
import { PolarisTableDateTimeCell } from "./PolarisTableDateTimeCell.js";
import { PolarisTableFileCell } from "./PolarisTableFileCell.js";
import { PolarisTablePasswordCell } from "./PolarisTablePasswordCell.js";
import { PolarisTableTagCell } from "./PolarisTableTagCell.js";
import { PolarisTableTextCell } from "./PolarisTableTextCell.js";

export const PolarisTableCellRenderer = (props: { column: TableColumn; value: ColumnValueType }) => {
  const { column, value } = props;

  if (value === null) {
    // Don't render anything for null values
    return null;
  }

  switch (column.fieldType) {
    case FieldType.String:
    case FieldType.Number:
    case FieldType.Email:
    case FieldType.Url:
    case FieldType.RichText:
    case FieldType.Json: {
      return <PolarisTableTextCell value={value} />;
    }

    case FieldType.Password:
    case FieldType.EncryptedString: {
      return <PolarisTablePasswordCell />;
    }

    case FieldType.RoleAssignments:
    case FieldType.Enum: {
      return <PolarisTableTagCell value={value as any} />;
    }

    case FieldType.DateTime: {
      return <PolarisTableDateTimeCell value={value as any} />;
    }

    case FieldType.Boolean: {
      return <PolarisTableBooleanCell value={!!value} />;
    }

    case FieldType.File: {
      return <PolarisTableFileCell value={value as any} />;
    }

    default:
      return null;
  }
};
