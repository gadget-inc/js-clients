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
    if (column.relationshipType === FieldType.HasMany || column.relationshipType === FieldType.HasManyThrough) {
        return React.createElement(PolarisAutoTableTagCell, { value: value });
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
            return React.createElement(PolarisAutoTableDateTimeCell, { value: value, includeTime: column.includeTime ?? true });
        }
        case FieldType.Boolean: {
            return React.createElement(PolarisAutoTableBooleanCell, { value: !!value });
        }
        case FieldType.File: {
            return React.createElement(PolarisAutoTableFileCell, { value: value });
        }
        default:
            return null;
    }
};
//# sourceMappingURL=PolarisAutoTableCellRenderer.js.map