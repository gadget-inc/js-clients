"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoHasManyThroughForm = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importStar(require("react"));
const useActionForm_js_1 = require("../../../../useActionForm.js");
const AutoForm_js_1 = require("../../..//AutoForm.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useAutoRelationship_js_1 = require("../../../hooks/useAutoRelationship.js");
const useHasManyThroughController_js_1 = require("../../../hooks/useHasManyThroughController.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const RelatedModelOptions_js_1 = require("./RelatedModelOptions.js");
const utils_js_1 = require("./utils.js");
exports.PolarisAutoHasManyThroughForm = (0, AutoInput_js_1.autoRelationshipForm)((props) => {
    const { field, children } = props;
    const { metadata } = (0, useAutoRelationship_js_1.useAutoRelationship)({ field });
    const { setValue } = (0, useActionForm_js_1.useFormContext)();
    const childPaths = children && (0, AutoForm_js_1.extractPathsFromChildren)(children);
    const hasChildForm = childPaths && childPaths.length > 0;
    const { fieldArrayPath, fieldArray, records, relatedModelOptions, inverseRelatedModelField, joinModelField, joinModelApiIdentifier } = (0, useHasManyThroughController_js_1.useHasManyThroughController)(props);
    const { fields, append, remove } = fieldArray;
    const relationshipContext = (0, useAutoRelationship_js_1.useRelationshipContext)();
    const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;
    const metaDataPathPrefix = relationshipContext?.transformMetadataPath
        ? relationshipContext.transformMetadataPath(props.field)
        : pathPrefix;
    (0, react_1.useEffect)(() => {
        for (const [index, field] of fields.entries()) {
            if (inverseRelatedModelField &&
                field[inverseRelatedModelField] &&
                field[inverseRelatedModelField].id &&
                !("_link" in field)) {
                // use setValue so that we don't trigger a re-render
                setValue(`${fieldArrayPath}.${index}.${inverseRelatedModelField}._link`, field[inverseRelatedModelField].id);
            }
        }
    }, [setValue, inverseRelatedModelField, fields, fieldArrayPath]);
    const [addingSibling, setAddingSibling] = (0, react_1.useState)(false);
    const listboxId = `HasManyThroughListboxInPopover-${field}`;
    if (metadata?.configuration.__typename !== "GadgetHasManyThroughConfig") {
        throw new Error("PolarisAutoHasManyThroughForm can only be used for HasManyThrough fields");
    }
    const { search, searchFilterOptions: siblingModelOptions, relatedModel: { fetching: siblingRecordsLoading, records: siblingRecords }, pagination: siblingPagination, } = relatedModelOptions;
    const siblingModelName = metadata.name ?? "Unknown";
    const joinRecords = (0, react_1.useMemo)(() => {
        return fields.flatMap((field, idx) => {
            const record = records[idx];
            if (!record) {
                return [];
            }
            return [[field._fieldArrayKey, idx, record]];
        });
    }, [fields, records]);
    const primaryLabel = (0, useRelatedModel_js_1.useOptionLabelForField)(field, props.primaryLabel);
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