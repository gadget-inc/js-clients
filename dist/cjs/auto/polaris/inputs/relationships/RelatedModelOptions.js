"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedModelOptions = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const PolarisListMessages_js_1 = require("./PolarisListMessages.js");
const RelatedModelOptions = (props) => {
    const { checkSelected, onSelect, isLoading, errorMessage, options, records, actions } = props;
    const listBoxOptions = [
        ...(actions ?? []),
        ...options.map((option) => {
            return props.renderOption ? (props.renderOption(option)) : (react_1.default.createElement(PolarisListMessages_js_1.SelectableOption, { ...option, selected: checkSelected?.(option.id) ?? false, key: option.id }));
        }),
    ];
    return (react_1.default.createElement(polaris_1.Listbox, { autoSelection: props.autoSelection, onSelect: (id) => {
            const record = records?.find((record) => record.id === id) ?? { id };
            const { createdAt: _createdAt, updatedAt: _updatedAt, ...recordWithoutTimestamps } = record;
            onSelect(recordWithoutTimestamps);
        } },
        listBoxOptions.length ? (listBoxOptions) : errorMessage ? (react_1.default.createElement(PolarisListMessages_js_1.ListMessage, { message: (0, PolarisListMessages_js_1.getErrorMessage)(errorMessage) })) : (react_1.default.createElement(PolarisListMessages_js_1.NoRecordsMessage, null)),
        isLoading && react_1.default.createElement(polaris_1.Listbox.Loading, { accessibilityLabel: "Loading" })));
};
exports.RelatedModelOptions = RelatedModelOptions;
//# sourceMappingURL=RelatedModelOptions.js.map