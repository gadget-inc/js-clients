"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoTableCellRenderer = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const metadata_js_1 = require("../../../metadata.js");
const PolarisWCAutoTableBooleanCell_js_1 = require("./PolarisWCAutoTableBooleanCell.js");
const PolarisWCAutoTableDateTimeCell_js_1 = require("./PolarisWCAutoTableDateTimeCell.js");
const PolarisWCAutoTableEncryptedStringCell_js_1 = require("./PolarisWCAutoTableEncryptedStringCell.js");
const PolarisWCAutoTableFileCell_js_1 = require("./PolarisWCAutoTableFileCell.js");
const PolarisWCAutoTableTagCell_js_1 = require("./PolarisWCAutoTableTagCell.js");
const PolarisWCAutoTableTextCell_js_1 = require("./PolarisWCAutoTableTextCell.js");
const PolarisWCAutoTableCellRenderer = (props) => {
    const { column, value } = props;
    if (value === null || value === undefined) {
        // Don't render anything for null values
        return null;
    }
    if (column.relationshipType === metadata_js_1.FieldType.HasMany || column.relationshipType === metadata_js_1.FieldType.HasManyThrough) {
        return react_1.default.createElement(PolarisWCAutoTableTagCell_js_1.PolarisWCAutoTableTagCell, { value: value });
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
            return react_1.default.createElement(PolarisWCAutoTableTextCell_js_1.PolarisWCAutoTableTextCell, { value: value });
        }
        case metadata_js_1.FieldType.EncryptedString: {
            return react_1.default.createElement(PolarisWCAutoTableEncryptedStringCell_js_1.PolarisWCAutoTableEncryptedStringCell, { value: value });
        }
        case metadata_js_1.FieldType.RoleAssignments:
        case metadata_js_1.FieldType.Enum: {
            return react_1.default.createElement(PolarisWCAutoTableTagCell_js_1.PolarisWCAutoTableTagCell, { value: value });
        }
        case metadata_js_1.FieldType.DateTime: {
            return react_1.default.createElement(PolarisWCAutoTableDateTimeCell_js_1.PolarisWCAutoTableDateTimeCell, { value: value, includeTime: column.includeTime ?? true });
        }
        case metadata_js_1.FieldType.Boolean: {
            return react_1.default.createElement(PolarisWCAutoTableBooleanCell_js_1.PolarisWCAutoTableBooleanCell, { value: !!value });
        }
        case metadata_js_1.FieldType.File: {
            return react_1.default.createElement(PolarisWCAutoTableFileCell_js_1.PolarisWCAutoTableFileCell, { value: value });
        }
        default:
            return null;
    }
};
exports.PolarisWCAutoTableCellRenderer = PolarisWCAutoTableCellRenderer;
//# sourceMappingURL=PolarisWCAutoTableCellRenderer.js.map