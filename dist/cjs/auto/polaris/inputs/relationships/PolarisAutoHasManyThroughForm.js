"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoHasManyThroughForm = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importStar(require("react"));
const useHasManyThroughForm_js_1 = require("../../../../useHasManyThroughForm.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useAutoRelationship_js_1 = require("../../../hooks/useAutoRelationship.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const RelatedModelOptions_js_1 = require("./RelatedModelOptions.js");
const utils_js_1 = require("./utils.js");
exports.PolarisAutoHasManyThroughForm = (0, AutoInput_js_1.autoRelationshipForm)((props) => {
    const [addingSibling, setAddingSibling] = (0, react_1.useState)(false);
    const { append, remove, joinRecords, primaryLabel, hasChildForm, listboxId, pathPrefix, metaDataPathPrefix, siblingModelName, siblingRecordsLoading, siblingRecords, siblingPagination, search, joinModelField, joinModelApiIdentifier, siblingModelOptions, inverseRelatedModelField, fieldArray, } = (0, useHasManyThroughForm_js_1.useHasManyThroughForm)(props);
    return (react_1.default.createElement(polaris_1.BlockStack, { gap: "200" },
        react_1.default.createElement(polaris_1.InlineGrid, { columns: "1fr auto" },
            props.label ?? (react_1.default.createElement(polaris_1.Text, { as: "h2", variant: "headingSm" }, siblingModelName)),
            react_1.default.createElement(RelatedModelOptions_js_1.RelatedModelOptionsPopover, { active: addingSibling, activator: react_1.default.createElement(polaris_1.Button, { onClick: () => setAddingSibling((prev) => !prev), disclosure: true },
                    "Add ",
                    siblingModelName ?? "related model"), onClose: () => setAddingSibling(false), onScrolledToBottom: siblingPagination.loadNextPage, search: react_1.default.createElement(RelatedModelOptions_js_1.RelatedModelOptionsSearch, { modelName: siblingModelName, value: search.value, onChange: search.set, ariaControls: listboxId }), options: siblingModelOptions, records: siblingRecords, onSelect: (record) => {
                    inverseRelatedModelField && append({ [inverseRelatedModelField]: { ...record, _link: record.id } });
                }, isLoading: siblingRecordsLoading, autoSelection: polaris_1.AutoSelection.None, renderOption: (option) => react_1.default.createElement(SiblingOption, { option: option }) })),
        joinRecords.length > 0 ? (react_1.default.createElement(polaris_1.BlockStack, { as: "ul" }, joinRecords.map(([fieldKey, idx, record]) => {
            const siblingRecord = inverseRelatedModelField && record[inverseRelatedModelField];
            const siblingOption = (0, useRelatedModel_js_1.getRecordAsOption)(siblingRecord, primaryLabel, props.secondaryLabel, props.tertiaryLabel);
            return (react_1.default.createElement(polaris_1.Box, { key: fieldKey, padding: "300" },
                react_1.default.createElement(polaris_1.InlineGrid, { columns: "1fr auto", gap: "200", alignItems: "center" },
                    react_1.default.createElement(polaris_1.Box, { borderColor: "border", borderWidth: "025", borderRadius: "200" },
                        react_1.default.createElement("div", { style: { display: "flex", padding: "8px" } },
                            react_1.default.createElement(polaris_1.Box, null,
                                react_1.default.createElement(polaris_1.InlineStack, { gap: "200" },
                                    (0, utils_js_1.renderOptionLabel)(siblingOption.label, "primary"),
                                    siblingOption?.tertiaryLabel && (0, utils_js_1.renderOptionLabel)(siblingOption.tertiaryLabel, "tertiary")),
                                siblingOption?.secondaryLabel && (0, utils_js_1.renderOptionLabel)(siblingOption.secondaryLabel, "secondary")),
                            react_1.default.createElement("div", { style: { marginLeft: "auto", alignSelf: "center" } },
                                react_1.default.createElement(polaris_1.Button, { id: `deleteButton_${pathPrefix}.${idx}`, variant: "tertiary", icon: polaris_icons_1.XCircleIcon, onClick: () => remove(idx) }))),
                        hasChildForm && (react_1.default.createElement(polaris_1.Box, { borderColor: "border", borderBlockStartWidth: "025" },
                            react_1.default.createElement(polaris_1.Box, { padding: "200" },
                                react_1.default.createElement(useAutoRelationship_js_1.RelationshipContext.Provider, { value: {
                                        transformPath: (path) => `${joinModelField}.${idx}.${path.replace(`${joinModelApiIdentifier}.`, "")}`,
                                        transformMetadataPath: (path) => `${metaDataPathPrefix}.${path}`,
                                        fieldArray,
                                    } }, props.children))))))));
        }))) : (react_1.default.createElement(polaris_1.Box, { borderColor: "border", borderWidth: "025", borderRadius: "200" },
            react_1.default.createElement(polaris_1.Box, { padding: "300" },
                react_1.default.createElement(polaris_1.InlineStack, { align: "center" },
                    react_1.default.createElement(polaris_1.Text, { as: "p", variant: "bodyMd", tone: "subdued" },
                        "No ",
                        siblingModelName,
                        " yet")))))));
});
const SiblingOption = (props) => {
    const { option } = props;
    return (react_1.default.createElement(polaris_1.Listbox.Action, { key: option.id, value: option.id },
        react_1.default.createElement("div", { style: { display: "flex", gap: "200", width: "100%" } },
            react_1.default.createElement(polaris_1.BlockStack, { gap: "050" },
                (0, utils_js_1.renderOptionLabel)(option.label, "primary"),
                option.secondaryLabel && (0, utils_js_1.renderOptionLabel)(option.secondaryLabel, "secondary")),
            react_1.default.createElement("div", { style: { marginLeft: "auto", alignSelf: "center" } },
                react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.PlusIcon })))));
};
//# sourceMappingURL=PolarisAutoHasManyThroughForm.js.map