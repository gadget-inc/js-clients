"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoHasOneInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const AutoInput_js_1 = require("../../../AutoInput.js");
const useHasOneController_js_1 = require("../../../hooks/useHasOneController.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const PolarisWCDismissibleBadge_js_1 = require("../../commonComponents/PolarisWCDismissibleBadge.js");
const PolarisWCCombobox_js_1 = require("../PolarisWCCombobox.js");
const PolarisWCRelatedModelOptions_js_1 = require("./PolarisWCRelatedModelOptions.js");
/**
 * A hasOne field input component for use within <AutoForm></AutoForm> components using Polaris Web Components.
 * This component is used to configure relationships with records from a related model
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoHasOneInput field="child" label="Single related child" />
 * </AutoForm>
 * ```
 * @param props.field - The hasOne field API identifier
 * @param props.label - The label of the hasOne field input component
 * @param props.optionLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The hasOne field input component
 */
exports.PolarisWCAutoHasOneInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { field, label, placeholder } = props;
    const { fieldMetadata: { metadata }, relatedModelOptions: { options, searchFilterOptions, search, pagination, relatedModel }, selectedRecord, errorMessage, isLoading, onSelectRecord, onRemoveRecord, } = (0, useHasOneController_js_1.useHasOneInputController)(props);
    const optionLabel = (0, useRelatedModel_js_1.useOptionLabelForField)(field, props.optionLabel);
    const selectedOption = selectedRecord ? (0, useRelatedModel_js_1.getRecordAsOption)(selectedRecord, { primary: optionLabel }) : null;
    const selectedRecordTag = (0, react_1.useMemo)(() => {
        if (!selectedOption)
            return undefined;
        return (react_1.default.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "6px" } },
            react_1.default.createElement(PolarisWCDismissibleBadge_js_1.PolarisWCDismissibleBadge, { onDismiss: () => selectedRecord && onRemoveRecord(selectedRecord), key: `selectedRecordTag_${selectedOption.id}` }, selectedOption.primary ?? `id: ${selectedOption.id}`)));
    }, [selectedOption, selectedRecord, onRemoveRecord]);
    // Ensure label is always a string for the web component
    const inputLabel = typeof label === "string" ? label : typeof metadata.name === "string" ? metadata.name : "";
    return (react_1.default.createElement(PolarisWCCombobox_js_1.PolarisWCCombobox, { label: inputLabel, placeholder: placeholder ?? "Search", value: search.value, onChange: search.set, onScrolledToBottom: pagination.loadNextPage, willLoadMoreOptions: pagination.hasNextPage && options.length >= useRelatedModel_js_1.optionRecordsToLoadCount, error: errorMessage, verticalContent: selectedRecordTag },
        react_1.default.createElement(PolarisWCRelatedModelOptions_js_1.PolarisWCRelatedModelOptions, { isLoading: isLoading, errorMessage: errorMessage, checkSelected: (id) => selectedRecord?.id === id, onSelect: onSelectRecord, records: relatedModel.records, options: searchFilterOptions, canLoadMore: pagination.hasNextPage && options.length >= useRelatedModel_js_1.optionRecordsToLoadCount, onLoadMore: pagination.loadNextPage })));
});
//# sourceMappingURL=PolarisWCAutoHasOneInput.js.map