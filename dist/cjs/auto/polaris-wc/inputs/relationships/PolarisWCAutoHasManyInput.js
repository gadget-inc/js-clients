"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoHasManyInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const AutoInput_js_1 = require("../../../AutoInput.js");
const useHasManyController_js_1 = require("../../../hooks/useHasManyController.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const PolarisWCDismissibleBadge_js_1 = require("../../commonComponents/PolarisWCDismissibleBadge.js");
const PolarisWCCombobox_js_1 = require("../PolarisWCCombobox.js");
const PolarisWCRelatedModelOptions_js_1 = require("./PolarisWCRelatedModelOptions.js");
/**
 * A hasMany field input component for use within <AutoForm></AutoForm> components using Polaris Web Components.
 * This component is used to configure relationships with records from a related model
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoHasManyInput field="children" label="Related children" />
 * </AutoForm>
 * ```
 * @param props.field - The hasMany field API identifier
 * @param props.label - The label of the hasMany field input component
 * @param props.optionLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The hasMany field input component
 */
exports.PolarisWCAutoHasManyInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { field, label, placeholder } = props;
    const { fieldMetadata: { metadata }, relatedModelOptions: { options, searchFilterOptions, search, pagination, relatedModel }, selectedRecords, errorMessage, isLoading, onSelectRecord, onRemoveRecord, } = (0, useHasManyController_js_1.useHasManyInputController)(props);
    const optionLabel = (0, useRelatedModel_js_1.useOptionLabelForField)(field, props.optionLabel);
    const selectedRecordIds = (0, react_1.useMemo)(() => {
        return selectedRecords.map((record) => record.id).filter((id) => !!id);
    }, [selectedRecords]);
    // Ensure label is always a string for the web component
    const inputLabel = typeof label === "string" ? label : typeof metadata.name === "string" ? metadata.name : "";
    const verticalContent = (0, react_1.useMemo)(() => {
        if (selectedRecords.length === 0)
            return undefined;
        const recordOptions = (0, useRelatedModel_js_1.getRecordsAsOptions)(selectedRecords, { primary: optionLabel });
        return (react_1.default.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "6px" } }, recordOptions.map((option) => (react_1.default.createElement(PolarisWCDismissibleBadge_js_1.PolarisWCDismissibleBadge, { key: `option${option.id}`, onDismiss: () => {
                const record = selectedRecords.find((r) => r.id === option.id);
                onRemoveRecord(record ?? { id: option.id });
            } }, option.primary ?? `id: ${option.id}`)))));
    }, [selectedRecords, onRemoveRecord, optionLabel]);
    return (react_1.default.createElement(PolarisWCCombobox_js_1.PolarisWCCombobox, { label: inputLabel, placeholder: placeholder ?? "Search", value: search.value, onChange: search.set, onScrolledToBottom: pagination.loadNextPage, allowMultiple: true, willLoadMoreOptions: pagination.hasNextPage && options.length >= useRelatedModel_js_1.optionRecordsToLoadCount, error: errorMessage, verticalContent: verticalContent },
        react_1.default.createElement(PolarisWCRelatedModelOptions_js_1.PolarisWCRelatedModelOptions, { onSelect: onSelectRecord, records: relatedModel.records, options: searchFilterOptions, checkSelected: (id) => selectedRecordIds.includes(id), errorMessage: errorMessage, isLoading: isLoading, showCheckbox: true, canLoadMore: pagination.hasNextPage && options.length >= useRelatedModel_js_1.optionRecordsToLoadCount, onLoadMore: pagination.loadNextPage })));
});
//# sourceMappingURL=PolarisWCAutoHasManyInput.js.map