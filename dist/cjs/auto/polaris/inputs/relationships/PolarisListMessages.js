"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMessage = exports.NoRecordsMessage = exports.ListMessage = exports.SelectableOption = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_js_1 = require("../../../../utils.js");
Object.defineProperty(exports, "getErrorMessage", { enumerable: true, get: function () { return utils_js_1.getErrorMessage; } });
const SelectableOption = (props) => {
    const { primary, id, selected } = props;
    return !primary ? (react_1.default.createElement(polaris_1.Listbox.Option, { key: id, value: id, selected: selected }, `id: ${id}`)) : typeof primary === "string" ? (react_1.default.createElement(polaris_1.Listbox.Option, { key: id, value: id, selected: selected }, primary)) : (react_1.default.createElement(polaris_1.Listbox.Action, { key: id, value: id, selected: selected }, primary));
};
exports.SelectableOption = SelectableOption;
const ListMessage = (props) => (react_1.default.createElement("div", { style: { padding: "16px" } },
    react_1.default.createElement(polaris_1.Text, { as: "p", tone: "subdued" }, props.message)));
exports.ListMessage = ListMessage;
const NoRecordsMessage = () => react_1.default.createElement(exports.ListMessage, { message: "No results" });
exports.NoRecordsMessage = NoRecordsMessage;
//# sourceMappingURL=PolarisListMessages.js.map