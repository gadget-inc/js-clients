import React from "react";
import { FieldType } from "../../../metadata.js";
import { PolarisAutoTableBooleanCell } from "./PolarisAutoTableBooleanCell.js";
import { PolarisAutoTableDateTimeCell } from "./PolarisAutoTableDateTimeCell.js";
import { PolarisAutoTableEncryptedStringCell } from "./PolarisAutoTableEncryptedStringCell.js";
import { PolarisAutoTableFileCell } from "./PolarisAutoTableFileCell.js";
import { PolarisAutoTableTagCell } from "./PolarisAutoTableTagCell.js";
import { PolarisAutoTableTextCell } from "./PolarisAutoTableTextCell.js";
export const PolarisAutoTableCellRenderer = (props) => {
    const { column, value } = props;
    if (value === null || value === undefined) {
        // Don't render anything for null values
        return null;
    }
    switch (column.fieldType) {
        case FieldType.Id:
        case FieldType.String:
        case FieldType.Number:
        case FieldType.Email:
        case FieldType.Computed:
        case FieldType.Url:
        case FieldType.RichText:
        case FieldType.Json: {
            return React.createElement(PolarisAutoTableTextCell, { value: value });
        }
        case FieldType.EncryptedString: {
            return React.createElement(PolarisAutoTableEncryptedStringCell, { value: value });
        }
        case FieldType.RoleAssignments:
        case FieldType.Enum: {
            return React.createElement(PolarisAutoTableTagCell, { value: value });
        }
        case FieldType.DateTime: {
            return React.createElement(PolarisAutoTableDateTimeCell, { value: value });
        }
        case FieldType.Boolean: {
            return React.createElement(PolarisAutoTableBooleanCell, { value: !!value });
        }
        case FieldType.File: {
            return React.createElement(PolarisAutoTableFileCell, { value: value });
        }
        case FieldType.HasOne: {
            if (!column.relatedField)
                return null;
            return (React.createElement(PolarisAutoTableCellRenderer, { column: column.relatedField, value: value[column.relatedField.apiIdentifier] }));
        }
        case FieldType.HasMany: {
            const { edges } = value;
            if (!column.relatedField)
                return null;
            return React.createElement(PolarisAutoTableTagCell, { value: edges.map((edge) => String(edge.node[column.relatedField.apiIdentifier])) });
        }
        case FieldType.BelongsTo: {
            if (!column.relatedField)
                return null;
            return (React.createElement(PolarisAutoTableCellRenderer, { column: column.relatedField, value: value[column.relatedField.apiIdentifier] }));
        }
        default:
            return null;
    }
};
//# sourceMappingURL=PolarisAutoTableCellRenderer.js.map