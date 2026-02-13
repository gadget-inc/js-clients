import React from "react";
import { FieldType } from "../../../metadata.js";
import type { TableColumn } from "../../../use-table/types.js";
import type { ColumnValueType } from "../../../utils.js";
import { PolarisWCAutoTableBooleanCell } from "./PolarisWCAutoTableBooleanCell.js";
import { PolarisWCAutoTableDateTimeCell } from "./PolarisWCAutoTableDateTimeCell.js";
import { PolarisWCAutoTableEncryptedStringCell } from "./PolarisWCAutoTableEncryptedStringCell.js";
import { PolarisWCAutoTableFileCell } from "./PolarisWCAutoTableFileCell.js";
import { PolarisWCAutoTableTagCell } from "./PolarisWCAutoTableTagCell.js";
import { PolarisWCAutoTableTextCell } from "./PolarisWCAutoTableTextCell.js";

export const PolarisWCAutoTableCellRenderer = (props: { column: TableColumn; value: ColumnValueType }) => {
  const { column, value } = props;

  if (value === null || value === undefined) {
    // Don't render anything for null values
    return null;
  }

  if (column.relationshipType === FieldType.HasMany || column.relationshipType === FieldType.HasManyThrough) {
    return <PolarisWCAutoTableTagCell value={value as any} />;
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
      return <PolarisWCAutoTableTextCell value={value} />;
    }

    case FieldType.EncryptedString: {
      return <PolarisWCAutoTableEncryptedStringCell value={value} />;
    }

    case FieldType.RoleAssignments:
    case FieldType.Enum: {
      return <PolarisWCAutoTableTagCell value={value as any} />;
    }

    case FieldType.DateTime: {
      return <PolarisWCAutoTableDateTimeCell value={value as any} includeTime={column.includeTime ?? true} />;
    }

    case FieldType.Boolean: {
      return <PolarisWCAutoTableBooleanCell value={!!value} />;
    }

    case FieldType.File: {
      return <PolarisWCAutoTableFileCell value={value as any} />;
    }

    default:
      return null;
  }
};
