import * as React from "react";
import type { TableColumn } from "src/use-table/types.js";
import { FieldType } from "../../../../metadata.js";
import type { ColumnValueType } from "../../../../utils.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnAutoTableBooleanCell } from "./ShadcnAutoTableBooleanCell.js";
import { makeShadcnAutoTableDateTimeCell } from "./ShadcnAutoTableDateTimeCell.js";
import { makeShadcnAutoTableEncryptedStringCell } from "./ShadcnAutoTableEncryptedStringCell.js";
import { makeShadcnAutoTableFileCell } from "./ShadcnAutoTableFileCell.js";
import { makeShadcnAutoTableTagCell } from "./ShadcnAutoTableTagCell.js";
import { makeShadcnAutoTableTextCell } from "./ShadcnAutoTableTextCell.js";

export const makeShadcnAutoTableCellRenderer = (elements: ShadcnElements) => {
  const ShadcnAutoTableBooleanCell = makeShadcnAutoTableBooleanCell(elements);
  const ShadcnAutoTableDateTimeCell = makeShadcnAutoTableDateTimeCell(elements);
  const ShadcnAutoTableEncryptedStringCell = makeShadcnAutoTableEncryptedStringCell(elements);
  const ShadcnAutoTableFileCell = makeShadcnAutoTableFileCell(elements);
  const ShadcnAutoTableTagCell = makeShadcnAutoTableTagCell(elements);
  const ShadcnAutoTableTextCell = makeShadcnAutoTableTextCell(elements);

  function ShadcnAutoTableCellRenderer(props: { column: TableColumn; value: ColumnValueType }) {
    const { column, value } = props;

    if (value === null || value === undefined) {
      // Don't render anything for null values
      return null;
    }

    if (column.relationshipType === FieldType.HasMany || column.relationshipType === FieldType.HasManyThrough) {
      return <ShadcnAutoTableTagCell value={value} />;
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
        return <ShadcnAutoTableTextCell value={value} />;
      }

      case FieldType.EncryptedString: {
        return <ShadcnAutoTableEncryptedStringCell value={value} />;
      }

      case FieldType.RoleAssignments:
      case FieldType.Enum: {
        return <ShadcnAutoTableTagCell value={value} />;
      }

      case FieldType.DateTime: {
        return <ShadcnAutoTableDateTimeCell value={value} includeTime={column.includeTime ?? true} />;
      }

      case FieldType.Boolean: {
        return <ShadcnAutoTableBooleanCell value={value} />;
      }

      case FieldType.File: {
        return <ShadcnAutoTableFileCell value={value as any} />;
      }

      default:
        return null;
    }
  }

  return ShadcnAutoTableCellRenderer;
};
