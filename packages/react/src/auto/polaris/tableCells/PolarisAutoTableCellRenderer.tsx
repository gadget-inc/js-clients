import React from "react";
import type { GadgetFieldType } from "../../../internal/gql/graphql.js";
import { FieldType } from "../../../metadata.js";
import type { ColumnValueType, HasManyValueType, ValueWithTypename } from "../../../utils.js";
import { PolarisAutoTableBooleanCell } from "./PolarisAutoTableBooleanCell.js";
import { PolarisAutoTableDateTimeCell } from "./PolarisAutoTableDateTimeCell.js";
import { PolarisAutoTableFileCell } from "./PolarisAutoTableFileCell.js";
import { PolarisAutoTablePasswordCell } from "./PolarisAutoTablePasswordCell.js";
import { PolarisAutoTableTagCell } from "./PolarisAutoTableTagCell.js";
import { PolarisAutoTableTextCell } from "./PolarisAutoTableTextCell.js";

export const PolarisAutoTableCellRenderer = (props: {
  column: {
    fieldType: GadgetFieldType;
    relatedField?: {
      apiIdentifier: string;
      fieldType: GadgetFieldType;
    };
  };
  value: ColumnValueType;
}) => {
  const { column, value } = props;

  if (value === null || value === undefined) {
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
      return <PolarisAutoTableTextCell value={value} />;
    }

    case FieldType.Password:
    case FieldType.EncryptedString: {
      return <PolarisAutoTablePasswordCell />;
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
      const { __typename, ...rest } = value as ValueWithTypename;
      if (!column.relatedField) return null;
      return <PolarisAutoTableCellRenderer column={column.relatedField} value={rest[column.relatedField.apiIdentifier]} />;
    }

    case FieldType.HasMany: {
      const { edges } = value as HasManyValueType;
      if (!column.relatedField) return null;
      return <PolarisAutoTableTagCell value={edges.map((edge) => String(edge.node[column.relatedField!.apiIdentifier]))} />;
    }

    case FieldType.BelongsTo: {
      const { __typename, ...rest } = value as ValueWithTypename;
      if (!column.relatedField) return null;
      return <PolarisAutoTableCellRenderer column={column.relatedField} value={rest[column.relatedField.apiIdentifier]} />;
    }

    default:
      return null;
  }
};
