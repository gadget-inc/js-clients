"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelectedPathsFromOptionLabel = exports.useSelectedPathsFromRecordLabel = void 0;
const react_1 = require("react");
const graphql_js_1 = require("../../internal/gql/graphql.js");
const helpers_js_1 = require("../../use-table/helpers.js");
const AutoRelationshipInputProps_js_1 = require("../interfaces/AutoRelationshipInputProps.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const useSelectedPathsFromRecordLabel = (props) => {
    const { field, recordLabel } = props;
    const { metadata } = (0, useFieldMetadata_js_1.useMaybeFieldMetadata)(field);
    const selectedPaths = (0, react_1.useMemo)(() => {
        if (!recordLabel || !metadata || !(0, helpers_js_1.isRelationshipField)(metadata)) {
            return [];
        }
        const fieldConfig = metadata.configuration;
        const selectedPaths = new Set();
        const defaultFieldsToSelect = fieldConfig.relatedModel?.fields
            .filter((field) => !(0, helpers_js_1.isRelationshipField)(field) && field.fieldType !== graphql_js_1.GadgetFieldType.Password)
            .map((field) => field.apiIdentifier) ?? [];
        (0, AutoRelationshipInputProps_js_1.getOptionLabelsFromRecordLabel)(recordLabel)
            .flatMap((optionLabel) => (0, exports.getSelectedPathsFromOptionLabel)(optionLabel, () => defaultFieldsToSelect))
            .forEach((path) => selectedPaths.add(path));
        return Array.from(selectedPaths);
    }, [recordLabel, metadata]);
    return selectedPaths;
};
exports.useSelectedPathsFromRecordLabel = useSelectedPathsFromRecordLabel;
const getSelectedPathsFromOptionLabel = (optionLabel, getFieldsToSelectOnRecordLabelCallback) => {
    if (!optionLabel) {
        return [];
    }
    if (Array.isArray(optionLabel)) {
        return optionLabel;
    }
    if (typeof optionLabel === "string") {
        return [optionLabel];
    }
    // Callback instead of explicit selection
    return getFieldsToSelectOnRecordLabelCallback?.().filter((field) => !recordLabelCallbackOmittedFields.includes(field)) ?? [];
};
exports.getSelectedPathsFromOptionLabel = getSelectedPathsFromOptionLabel;
const recordLabelCallbackOmittedFields = ["createdAt", "updatedAt"];
//# sourceMappingURL=useSelectedPathsFromRecordLabel.js.map