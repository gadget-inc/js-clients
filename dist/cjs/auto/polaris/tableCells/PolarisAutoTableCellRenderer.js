"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoTableCellRenderer = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const metadata_js_1 = require("../../../metadata.js");
const PolarisAutoTableBooleanCell_js_1 = require("./PolarisAutoTableBooleanCell.js");
const PolarisAutoTableDateTimeCell_js_1 = require("./PolarisAutoTableDateTimeCell.js");
const PolarisAutoTableFileCell_js_1 = require("./PolarisAutoTableFileCell.js");
const PolarisAutoTablePasswordCell_js_1 = require("./PolarisAutoTablePasswordCell.js");
const PolarisAutoTableTagCell_js_1 = require("./PolarisAutoTableTagCell.js");
const PolarisAutoTableTextCell_js_1 = require("./PolarisAutoTableTextCell.js");
const PolarisAutoTableCellRenderer = (props) => {
    const { column, value } = props;
    if (value === null || value === undefined) {
        // Don't render anything for null values
        return null;
    }
    switch (column.fieldType) {
        case metadata_js_1.FieldType.Id:
        case metadata_js_1.FieldType.String:
        case metadata_js_1.FieldType.Number:
        case metadata_js_1.FieldType.Email:
        case metadata_js_1.FieldType.Url:
        case metadata_js_1.FieldType.RichText:
        case metadata_js_1.FieldType.Json: {
            return react_1.default.createElement(PolarisAutoTableTextCell_js_1.PolarisAutoTableTextCell, { value: value });
        }
        case metadata_js_1.FieldType.Password:
        case metadata_js_1.FieldType.EncryptedString: {
            return react_1.default.createElement(PolarisAutoTablePasswordCell_js_1.PolarisAutoTablePasswordCell, null);
        }
        case metadata_js_1.FieldType.RoleAssignments:
        case metadata_js_1.FieldType.Enum: {
            return react_1.default.createElement(PolarisAutoTableTagCell_js_1.PolarisAutoTableTagCell, { value: value });
        }
        case metadata_js_1.FieldType.DateTime: {
            return react_1.default.createElement(PolarisAutoTableDateTimeCell_js_1.PolarisAutoTableDateTimeCell, { value: value });
        }
        case metadata_js_1.FieldType.Boolean: {
            return react_1.default.createElement(PolarisAutoTableBooleanCell_js_1.PolarisAutoTableBooleanCell, { value: !!value });
        }
        case metadata_js_1.FieldType.File: {
            return react_1.default.createElement(PolarisAutoTableFileCell_js_1.PolarisAutoTableFileCell, { value: value });
        }
        case metadata_js_1.FieldType.HasOne: {
            const { __typename, ...rest } = value;
            if (!column.relatedField)
                return null;
            return react_1.default.createElement(exports.PolarisAutoTableCellRenderer, { column: column.relatedField, value: rest[column.relatedField.apiIdentifier] });
        }
        case metadata_js_1.FieldType.HasMany: {
            const { edges } = value;
            if (!column.relatedField)
                return null;
            return react_1.default.createElement(PolarisAutoTableTagCell_js_1.PolarisAutoTableTagCell, { value: edges.map((edge) => String(edge.node[column.relatedField.apiIdentifier])) });
        }
        case metadata_js_1.FieldType.BelongsTo: {
            const { __typename, ...rest } = value;
            if (!column.relatedField)
                return null;
            return react_1.default.createElement(exports.PolarisAutoTableCellRenderer, { column: column.relatedField, value: rest[column.relatedField.apiIdentifier] });
        }
        default:
            return null;
    }
};
exports.PolarisAutoTableCellRenderer = PolarisAutoTableCellRenderer;
//# sourceMappingURL=PolarisAutoTableCellRenderer.js.map