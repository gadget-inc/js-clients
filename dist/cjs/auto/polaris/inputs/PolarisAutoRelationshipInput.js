"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedModelOptions = exports.PolarisAutoRelationshipInput = exports.PolarisAutoBelongsToInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importDefault(require("react"));
const useRelationshipInputController_js_1 = require("../../hooks/useRelationshipInputController.js");
const PolarisAutoBelongsToInput = (props) => {
    return react_1.default.createElement(exports.PolarisAutoRelationshipInput, { ...props });
};
exports.PolarisAutoBelongsToInput = PolarisAutoBelongsToInput;
const PolarisAutoRelationshipInput = (props) => {
    const { field, control, optionLabel } = props;
    const { path, isHasMany, relatedModel, metadata, pagination, search, selection } = (0, useRelationshipInputController_js_1.useRelationshipInputController)({
        field: field,
        control: control,
        optionLabel: optionLabel,
    });
    if (isHasMany) {
        // TODO - Update to account for HasMany relationship. Multiselect functionality and more advanced hook
        return null;
    }
    const selectedRecordTag = (react_1.default.createElement(polaris_1.Tag, { onRemove: () => selection.set(undefined) },
        react_1.default.createElement("p", { style: { color: selection.error ? "red" : undefined }, id: `${selection.id}_${selection.label}` }, selection.label)));
    return (react_1.default.createElement(polaris_1.Combobox, { activator: react_1.default.createElement(polaris_1.Combobox.TextField, { prefix: react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.SearchIcon }), onChange: search.set, value: search.value, label: metadata.name, name: path, placeholder: "Search", autoComplete: "off", verticalContent: selection.id && selectedRecordTag }), onScrolledToBottom: pagination.loadNextPageOfRecords, onClose: pagination.resetPagination, willLoadMoreOptions: relatedModel.hasNextPage && relatedModel.options.length >= useRelationshipInputController_js_1.numberOfRecordsToLoad },
        react_1.default.createElement(exports.RelatedModelOptions, { relatedModel: relatedModel, selection: selection })));
};
exports.PolarisAutoRelationshipInput = PolarisAutoRelationshipInput;
const RelatedModelOptions = (props) => {
    const { relatedModel, selection } = props;
    return (react_1.default.createElement(polaris_1.Listbox, { onSelect: (recordId) => selection.set(selection.id === recordId ? undefined : recordId) },
        relatedModel.options.length ? (relatedModel.options.map((option) => (react_1.default.createElement(SelectableOption, { ...option, selected: selection.id === option.recordId, key: option.recordId })))) : (react_1.default.createElement(NoRecordsMessage, null)),
        relatedModel.isLoadingRelatedRecords && react_1.default.createElement(polaris_1.Listbox.Loading, { accessibilityLabel: "Loading" })));
};
exports.RelatedModelOptions = RelatedModelOptions;
const SelectableOption = (props) => {
    const { label, recordId, selected } = props;
    return (react_1.default.createElement(polaris_1.Listbox.Option, { key: recordId, value: recordId, selected: selected }, label));
};
const NoRecordsMessage = () => (react_1.default.createElement("div", { style: { padding: "16px" } },
    react_1.default.createElement(polaris_1.Text, { as: "p", tone: "subdued" }, "No records found")));
//# sourceMappingURL=PolarisAutoRelationshipInput.js.map