"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedModelOptions = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const PolarisListMessages_js_1 = require("./PolarisListMessages.js");
const RelatedModelOptions = (props) => {
    const { checkSelected, onSelect, isLoading, errorMessage, options } = props;
    return (react_1.default.createElement(polaris_1.Listbox, { onSelect: onSelect },
        options.length ? (options.map((option) => react_1.default.createElement(PolarisListMessages_js_1.SelectableOption, { ...option, selected: checkSelected?.(option.id) ?? false, key: option.id }))) : errorMessage ? (react_1.default.createElement(PolarisListMessages_js_1.ListMessage, { message: (0, PolarisListMessages_js_1.getErrorMessage)(errorMessage) })) : (react_1.default.createElement(PolarisListMessages_js_1.NoRecordsMessage, null)),
        isLoading && react_1.default.createElement(polaris_1.Listbox.Loading, { accessibilityLabel: "Loading" })));
};
exports.RelatedModelOptions = RelatedModelOptions;
//# sourceMappingURL=RelatedModelOptions.js.map