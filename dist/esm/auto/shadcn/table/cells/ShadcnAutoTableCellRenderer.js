import * as React from "react";
import { FieldType } from "../../../../metadata.js";
import { makeShadcnAutoTableBooleanCell } from "./ShadcnAutoTableBooleanCell.js";
import { makeShadcnAutoTableDateTimeCell } from "./ShadcnAutoTableDateTimeCell.js";
import { makeShadcnAutoTableEncryptedStringCell } from "./ShadcnAutoTableEncryptedStringCell.js";
import { makeShadcnAutoTableFileCell } from "./ShadcnAutoTableFileCell.js";
import { makeShadcnAutoTableTagCell } from "./ShadcnAutoTableTagCell.js";
import { makeShadcnAutoTableTextCell } from "./ShadcnAutoTableTextCell.js";
export const makeShadcnAutoTableCellRenderer = (elements) => {
    const ShadcnAutoTableBooleanCell = makeShadcnAutoTableBooleanCell(elements);
    const ShadcnAutoTableDateTimeCell = makeShadcnAutoTableDateTimeCell(elements);
    const ShadcnAutoTableEncryptedStringCell = makeShadcnAutoTableEncryptedStringCell(elements);
    const ShadcnAutoTableFileCell = makeShadcnAutoTableFileCell(elements);
    const ShadcnAutoTableTagCell = makeShadcnAutoTableTagCell(elements);
    const ShadcnAutoTableTextCell = makeShadcnAutoTableTextCell(elements);
    function ShadcnAutoTableCellRenderer(props) {
        const { column, value } = props;
        if (value === null || value === undefined) {
            // Don't render anything for null values
            return null;
        }
        if (column.relationshipType === FieldType.HasMany || column.relationshipType === FieldType.HasManyThrough) {
            return React.createElement(ShadcnAutoTableTagCell, { value: value });
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
                return React.createElement(ShadcnAutoTableTextCell, { value: value });
            }
            case FieldType.EncryptedString: {
                return React.createElement(ShadcnAutoTableEncryptedStringCell, { value: value });
            }
            case FieldType.RoleAssignments:
            case FieldType.Enum: {
                return React.createElement(ShadcnAutoTableTagCell, { value: value });
            }
            case FieldType.DateTime: {
                return React.createElement(ShadcnAutoTableDateTimeCell, { value: value, includeTime: column.includeTime ?? true });
            }
            case FieldType.Boolean: {
                return React.createElement(ShadcnAutoTableBooleanCell, { value: value });
            }
            case FieldType.File: {
                return React.createElement(ShadcnAutoTableFileCell, { value: value });
            }
            default:
                return null;
        }
    }
    return ShadcnAutoTableCellRenderer;
};
//# sourceMappingURL=ShadcnAutoTableCellRenderer.js.map