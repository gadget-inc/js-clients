import React from "react";
import { FieldType } from "../../../metadata.js";
import type { ColumnValueType, HasManyValueType, ValueWithTypename } from "../../../utils.js";
import { PolarisAutoTableBooleanCell } from "./PolarisAutoTableBooleanCell.js";
import { PolarisAutoTableDateTimeCell } from "./PolarisAutoTableDateTimeCell.js";
import { PolarisAutoTableEncryptedStringCell } from "./PolarisAutoTableEncryptedStringCell.js";
import { PolarisAutoTableFileCell } from "./PolarisAutoTableFileCell.js";
import { PolarisAutoTableTagCell } from "./PolarisAutoTableTagCell.js";
import { PolarisAutoTableTextCell } from "./PolarisAutoTableTextCell.js";
import type { ColumnType } from "src/useTableUtils/types.js";

export const PolarisAutoTableCellRenderer = (props: {
  column: {
    type: ColumnType;
    relatedField?: {
      field: string;
      type: ColumnType;
    };
  };
  value: ColumnValueType;
}) => {
  const { column, value } = props;

  if (value === null || value === undefined) {
    // Don't render anything for null values
    return null;
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
      return <PolarisAutoTableDateTimeCell value={value as any} />;
    }

    case FieldType.Boolean: {
      return <PolarisAutoTableBooleanCell value={!!value} />;
    }

    case FieldType.File: {
      return <PolarisAutoTableFileCell value={value as any} />;
    }

    case FieldType.HasOne: {
      if (!column.relatedField) return null;
      return (
        <PolarisAutoTableCellRenderer
          column={column.relatedField}
          value={(value as ValueWithTypename)[column.relatedField.field]}
        />
      );
    }

    case FieldType.HasMany: {
      const { edges } = value as HasManyValueType;
      if (!column.relatedField) return null;
      return <PolarisAutoTableTagCell value={edges.map((edge) => String(edge.node[column.relatedField!.field]))} />;
    }

    case FieldType.BelongsTo: {
      if (!column.relatedField) return null;
      return (
        <PolarisAutoTableCellRenderer
          column={column.relatedField}
          value={(value as ValueWithTypename)[column.relatedField.field]}
        />
      );
    }

    default:
      return null;
  }
};
