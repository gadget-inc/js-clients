"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMessage = exports.NoRecordsMessage = exports.ListMessage = exports.SelectableOption = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const SelectableOption = (props) => {
    const { label, id, selected } = props;
    return typeof label === "string" ? (react_1.default.createElement(polaris_1.Listbox.Option, { key: id, value: id, selected: selected }, label)) : (react_1.default.createElement(polaris_1.Listbox.Action, { key: id, value: id, selected: selected }, label));
};
exports.SelectableOption = SelectableOption;
const ListMessage = (props) => (react_1.default.createElement("div", { style: { padding: "16px" } },
    react_1.default.createElement(polaris_1.Text, { as: "p", tone: "subdued" }, props.message)));
exports.ListMessage = ListMessage;
const NoRecordsMessage = () => react_1.default.createElement(exports.ListMessage, { message: "No records found" });
exports.NoRecordsMessage = NoRecordsMessage;
const getErrorMessage = (errorString) => {
    if (errorString.includes("GGT_PERMISSION_DENIED"))
        return `Missing permissions. Cannot read related model`;
    if (errorString.includes("GGT_INVALID_STORED_DATA"))
        return `Invalid records found in related model`;
    return "Cannot retrieve records from related model";
};
exports.getErrorMessage = getErrorMessage;
//# sourceMappingURL=PolarisListMessages.js.map