"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoHasManyThroughInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importStar(require("react"));
const AutoInput_js_1 = require("../../../AutoInput.js");
const useHasManyThroughController_js_1 = require("../../../hooks/useHasManyThroughController.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const RelatedModelOptions_js_1 = require("./RelatedModelOptions.js");
const SelectedRelatedRecordTags_js_1 = require("./SelectedRelatedRecordTags.js");
/**
 * A hasManyThrough field input component for use within <AutoForm></AutoForm> components
 * This component is used to configure relationships with the sibling model by creating and deleting records in the join model
 * @example
 * ```tsx
 * <AutoForm action={api.student.create}>
 *   <AutoHasManyThroughInput field="courses" />
 * </AutoForm>
 * ```
 * @param props.field - The hasManyThrough field API identifier
 * @param props.label - The label of the hasManyThrough field input component
 * @param props.optionLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The hasManyThrough field input component
 */
exports.PolarisAutoHasManyThroughInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { field, label, placeholder } = props;
    const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, searchFilterOptions, search, pagination, relatedModel }, selectedRecords, errorMessage, isLoading, onRemoveRecord, onSelectRecord, } = (0, useHasManyThroughController_js_1.useHasManyThroughInputController)(props);
    const optionLabel = (0, useRelatedModel_js_1.useOptionLabelForField)(field, props.optionLabel);
    const selectedRecordIds = (0, react_1.useMemo)(() => {
        return selectedRecords.map((record) => record.id).filter((id) => !!id);
    }, [selectedRecords]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.Combobox, { activator: react_1.default.createElement(polaris_1.Combobox.TextField, { onChange: search.set, value: search.value, label: label ?? metadata.name, placeholder: placeholder, name: path, autoComplete: "off", verticalContent: (0, SelectedRelatedRecordTags_js_1.getSelectedRelatedRecordTags)({
                    selectedRecords,
                    onRemoveRecord,
                    optionLabel,
                }) }), onScrolledToBottom: pagination.loadNextPage, allowMultiple: true, willLoadMoreOptions: pagination.hasNextPage && options.length >= useRelatedModel_js_1.optionRecordsToLoadCount },
            react_1.default.createElement(RelatedModelOptions_js_1.RelatedModelOptions, { onSelect: onSelectRecord, records: relatedModel.records, options: searchFilterOptions, checkSelected: (id) => selectedRecordIds.includes(id), errorMessage: errorMessage, isLoading: isLoading }))));
});
//# sourceMappingURL=PolarisAutoHasManyThroughInput.js.map