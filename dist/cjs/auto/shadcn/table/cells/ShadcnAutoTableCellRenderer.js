"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoTableCellRenderer = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const metadata_js_1 = require("../../../../metadata.js");
const ShadcnAutoTableBooleanCell_js_1 = require("./ShadcnAutoTableBooleanCell.js");
const ShadcnAutoTableDateTimeCell_js_1 = require("./ShadcnAutoTableDateTimeCell.js");
const ShadcnAutoTableEncryptedStringCell_js_1 = require("./ShadcnAutoTableEncryptedStringCell.js");
const ShadcnAutoTableFileCell_js_1 = require("./ShadcnAutoTableFileCell.js");
const ShadcnAutoTableTagCell_js_1 = require("./ShadcnAutoTableTagCell.js");
const ShadcnAutoTableTextCell_js_1 = require("./ShadcnAutoTableTextCell.js");
const makeShadcnAutoTableCellRenderer = (elements) => {
    const ShadcnAutoTableBooleanCell = (0, ShadcnAutoTableBooleanCell_js_1.makeShadcnAutoTableBooleanCell)(elements);
    const ShadcnAutoTableDateTimeCell = (0, ShadcnAutoTableDateTimeCell_js_1.makeShadcnAutoTableDateTimeCell)(elements);
    const ShadcnAutoTableEncryptedStringCell = (0, ShadcnAutoTableEncryptedStringCell_js_1.makeShadcnAutoTableEncryptedStringCell)(elements);
    const ShadcnAutoTableFileCell = (0, ShadcnAutoTableFileCell_js_1.makeShadcnAutoTableFileCell)(elements);
    const ShadcnAutoTableTagCell = (0, ShadcnAutoTableTagCell_js_1.makeShadcnAutoTableTagCell)(elements);
    const ShadcnAutoTableTextCell = (0, ShadcnAutoTableTextCell_js_1.makeShadcnAutoTableTextCell)(elements);
    function ShadcnAutoTableCellRenderer(props) {
        const { column, value } = props;
        if (value === null || value === undefined) {
            // Don't render anything for null values
            return null;
        }
        if (column.relationshipType === metadata_js_1.FieldType.HasMany || column.relationshipType === metadata_js_1.FieldType.HasManyThrough) {
            return React.createElement(ShadcnAutoTableTagCell, { value: value });
        }
        switch (column.type) {
            case metadata_js_1.FieldType.Id:
            case metadata_js_1.FieldType.String:
            case metadata_js_1.FieldType.Number:
            case metadata_js_1.FieldType.Email:
            case metadata_js_1.FieldType.Computed:
            case metadata_js_1.FieldType.Url:
            case metadata_js_1.FieldType.RichText:
            case metadata_js_1.FieldType.Json: {
                return React.createElement(ShadcnAutoTableTextCell, { value: value });
            }
            case metadata_js_1.FieldType.EncryptedString: {
                return React.createElement(ShadcnAutoTableEncryptedStringCell, { value: value });
            }
            case metadata_js_1.FieldType.RoleAssignments:
            case metadata_js_1.FieldType.Enum: {
                return React.createElement(ShadcnAutoTableTagCell, { value: value });
            }
            case metadata_js_1.FieldType.DateTime: {
                return React.createElement(ShadcnAutoTableDateTimeCell, { value: value, includeTime: column.includeTime ?? true });
            }
            case metadata_js_1.FieldType.Boolean: {
                return React.createElement(ShadcnAutoTableBooleanCell, { value: value });
            }
            case metadata_js_1.FieldType.File: {
                return React.createElement(ShadcnAutoTableFileCell, { value: value });
            }
            default:
                return null;
        }
    }
    return ShadcnAutoTableCellRenderer;
};
exports.makeShadcnAutoTableCellRenderer = makeShadcnAutoTableCellRenderer;
//# sourceMappingURL=ShadcnAutoTableCellRenderer.js.map