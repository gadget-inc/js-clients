"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoBelongsToForm = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importDefault(require("react"));
const useBelongsToForm_js_1 = require("../../../../useBelongsToForm.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useAutoRelationship_js_1 = require("../../../hooks/useAutoRelationship.js");
const SearchableSingleRelatedModelRecordSelector_js_1 = require("./SearchableSingleRelatedModelRecordSelector.js");
const utils_js_1 = require("./utils.js");
exports.PolarisAutoBelongsToForm = (0, AutoInput_js_1.autoRelationshipForm)((props) => {
    const belongsToForm = (0, useBelongsToForm_js_1.useBelongsToForm)(props);
    const { record, actionsOpen, isEditing, setActionsOpen, setIsEditing, pathPrefix, hasRecord, recordOption, relatedModelName: parentName, path, setValue, getValues, metaDataPathPrefix, } = belongsToForm;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.BlockStack, { gap: "300" },
            react_1.default.createElement(polaris_1.InlineGrid, { columns: "1fr auto" },
                props.label ?? (react_1.default.createElement(polaris_1.Text, { as: "h2", variant: "headingSm" }, parentName)),
                hasRecord && (react_1.default.createElement(polaris_1.Popover, { active: actionsOpen, activator: react_1.default.createElement(polaris_1.Button, { onClick: () => setActionsOpen((prev) => !prev), icon: polaris_icons_1.MenuHorizontalIcon }), onClose: () => setActionsOpen(false) },
                    react_1.default.createElement(polaris_1.ActionList, { actionRole: "menuitem", items: [
                            {
                                content: `Edit ${parentName.toLocaleLowerCase()}`,
                                onAction: () => {
                                    setIsEditing(true);
                                    setActionsOpen(false);
                                },
                            },
                            {
                                content: `Remove ${parentName.toLocaleLowerCase()}`,
                                onAction: () => {
                                    const { __typename, ...rest } = record;
                                    const nulledValues = Object.fromEntries(Object.keys(rest).map((key) => [key, null]));
                                    setValue(path, { ...nulledValues, __typename, _unlink: true });
                                    setActionsOpen(false);
                                },
                                destructive: true,
                            },
                        ] })))),
            hasRecord ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(polaris_1.Divider, null),
                react_1.default.createElement(polaris_1.InlineStack, { align: "space-between" },
                    react_1.default.createElement(polaris_1.BlockStack, { gap: "200" },
                        (0, utils_js_1.renderOptionLabel)(recordOption.primary, "primary"),
                        recordOption.secondary && (0, utils_js_1.renderOptionLabel)(recordOption.secondary, "secondary")),
                    recordOption.tertiary && (0, utils_js_1.renderOptionLabel)(recordOption.tertiary, "tertiary")))) : (react_1.default.createElement(SearchableSingleRelatedModelRecordSelector_js_1.SearchableSingleRelatedModelRecordSelector, { form: belongsToForm }))),
        react_1.default.createElement(polaris_1.Modal, { open: isEditing, onClose: () => setIsEditing(false), title: `Add ${parentName}` },
            react_1.default.createElement(useAutoRelationship_js_1.RelationshipContext.Provider, { value: { transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path } },
                react_1.default.createElement(polaris_1.Modal.Section, null, props.children),
                react_1.default.createElement(polaris_1.Modal.Section, null,
                    react_1.default.createElement("div", { style: { float: "right", paddingBottom: "16px" } },
                        react_1.default.createElement(polaris_1.ButtonGroup, null,
                            react_1.default.createElement(polaris_1.Button, { variant: "secondary", onClick: () => setIsEditing(false) }, "Cancel"),
                            react_1.default.createElement(polaris_1.Button, { variant: "primary", onClick: () => {
                                    const { _unlink, _link, id: recordId, ...rest } = getValues(path);
                                    if (recordId) {
                                        setValue(path, { ...rest, id: recordId });
                                    }
                                    else {
                                        setValue(path, rest);
                                    }
                                    setIsEditing(false);
                                } }, "Save"))))))));
});
//# sourceMappingURL=PolarisAutoBelongsToForm.js.map