"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoHasOneForm = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importDefault(require("react"));
const useHasOneForm_js_1 = require("../../../../useHasOneForm.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useAutoRelationship_js_1 = require("../../../hooks/useAutoRelationship.js");
const SearchableSingleRelatedModelRecordSelector_js_1 = require("./SearchableSingleRelatedModelRecordSelector.js");
const utils_js_1 = require("./utils.js");
exports.PolarisAutoHasOneForm = (0, AutoInput_js_1.autoRelationshipForm)((props) => {
    const hasOneForm = (0, useHasOneForm_js_1.useHasOneForm)(props);
    const { isEditing, setIsEditing, isCreatingRecord, pathPrefix, metaDataPathPrefix, hasRecord, recordOption, relatedModelName, confirmEdit, removeRecord, } = hasOneForm;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(useAutoRelationship_js_1.RelationshipContext.Provider, { value: { transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path } },
            react_1.default.createElement(polaris_1.BlockStack, { gap: "300" },
                react_1.default.createElement(polaris_1.InlineGrid, { columns: "1fr auto" }, props.label ?? (react_1.default.createElement(polaris_1.Text, { as: "h2", variant: "headingSm" }, relatedModelName))),
                hasRecord || isCreatingRecord ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(polaris_1.Box, { borderColor: "border", borderWidth: "025", borderRadius: "200" }, !isEditing ? (react_1.default.createElement(polaris_1.BlockStack, { as: "ul" },
                        react_1.default.createElement(polaris_1.ResourceItem, { id: recordOption.id, onClick: () => setIsEditing(true) },
                            react_1.default.createElement(polaris_1.InlineStack, { align: "space-between" },
                                react_1.default.createElement(polaris_1.BlockStack, { gap: "200" },
                                    (0, utils_js_1.renderOptionLabel)(recordOption.primary, "primary"),
                                    recordOption.secondary && (0, utils_js_1.renderOptionLabel)(recordOption.secondary, "secondary")),
                                recordOption.tertiary && (0, utils_js_1.renderOptionLabel)(recordOption.tertiary, "tertiary"))))) : (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(polaris_1.Box, { padding: "300" },
                            react_1.default.createElement(polaris_1.BlockStack, { gap: "300" },
                                props.children,
                                react_1.default.createElement(polaris_1.InlineStack, { align: "space-between" },
                                    react_1.default.createElement(polaris_1.Button, { tone: "critical", onClick: removeRecord }, "Remove"),
                                    react_1.default.createElement(polaris_1.Button, { variant: "primary", onClick: confirmEdit }, "Confirm"))))))))) : (react_1.default.createElement(EmptyFormComponent, { form: hasOneForm }))))));
});
/**
 * TODO - If this gets enabled fix this:
 *    - Workflow
 *      - existingSelectedRecord
 *      - removeSelection
 *      - reselectTheSameRecordInDropdown
 *      - removeSelection
 *      - send
 *    - Right now, this workflow sends null as the hasOne field value, which does nothing. It should be _unlink
 */
const canSelectExistingRecord = false;
const EmptyFormComponent = (props) => {
    const { form } = props;
    if (canSelectExistingRecord) {
        return react_1.default.createElement(SearchableSingleRelatedModelRecordSelector_js_1.SearchableSingleRelatedModelRecordSelector, { form: form, override: { addNewRecord: form.startCreatingRecord } });
    }
    return react_1.default.createElement(CreateNewChildButton, { form: form });
};
const CreateNewChildButton = (props) => {
    const { relatedModelName, startCreatingRecord } = props.form;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.Box, { borderColor: "border", borderWidth: "025", borderRadius: "200" },
            react_1.default.createElement(polaris_1.BlockStack, { as: "ul" },
                react_1.default.createElement(polaris_1.ResourceItem, { id: "add", onClick: startCreatingRecord },
                    react_1.default.createElement(polaris_1.InlineStack, { align: "start", gap: "200" },
                        react_1.default.createElement(polaris_1.Box, null,
                            react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.PlusCircleIcon })),
                        react_1.default.createElement(polaris_1.Text, { as: "p", variant: "bodyMd", fontWeight: "semibold" },
                            "Add ",
                            relatedModelName)))))));
};
//# sourceMappingURL=PolarisAutoHasOneForm.js.map