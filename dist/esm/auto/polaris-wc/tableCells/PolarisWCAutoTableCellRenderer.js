import React from "react";
import { FieldType } from "../../../metadata.js";
import { PolarisWCAutoTableBooleanCell } from "./PolarisWCAutoTableBooleanCell.js";
import { PolarisWCAutoTableDateTimeCell } from "./PolarisWCAutoTableDateTimeCell.js";
import { PolarisWCAutoTableEncryptedStringCell } from "./PolarisWCAutoTableEncryptedStringCell.js";
import { PolarisWCAutoTableFileCell } from "./PolarisWCAutoTableFileCell.js";
import { PolarisWCAutoTableTagCell } from "./PolarisWCAutoTableTagCell.js";
import { PolarisWCAutoTableTextCell } from "./PolarisWCAutoTableTextCell.js";
export const PolarisWCAutoTableCellRenderer = (props) => {
    const { column, value } = props;
    if (value === null || value === undefined) {
        // Don't render anything for null values
        return null;
    }
    if (column.relationshipType === FieldType.HasMany || column.relationshipType === FieldType.HasManyThrough) {
        return React.createElement(PolarisWCAutoTableTagCell, { value: value });
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
            return React.createElement(PolarisWCAutoTableTextCell, { value: value });
        }
        case FieldType.EncryptedString: {
            return React.createElement(PolarisWCAutoTableEncryptedStringCell, { value: value });
        }
        case FieldType.RoleAssignments:
        case FieldType.Enum: {
            return React.createElement(PolarisWCAutoTableTagCell, { value: value });
        }
        case FieldType.DateTime: {
            return React.createElement(PolarisWCAutoTableDateTimeCell, { value: value, includeTime: column.includeTime ?? true });
        }
        case FieldType.Boolean: {
            return React.createElement(PolarisWCAutoTableBooleanCell, { value: !!value });
        }
        case FieldType.File: {
            return React.createElement(PolarisWCAutoTableFileCell, { value: value });
        }
        default:
            return null;
    }
};
//# sourceMappingURL=PolarisWCAutoTableCellRenderer.js.map