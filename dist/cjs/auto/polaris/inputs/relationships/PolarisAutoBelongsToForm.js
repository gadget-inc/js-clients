"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoBelongsToForm = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importStar(require("react"));
const useActionForm_js_1 = require("../../../../useActionForm.js");
const utils_js_1 = require("../../../../utils.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useAutoRelationship_js_1 = require("../../../hooks/useAutoRelationship.js");
const useBelongsToController_js_1 = require("../../../hooks/useBelongsToController.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const RelatedModelOptions_js_1 = require("./RelatedModelOptions.js");
const utils_js_2 = require("./utils.js");
exports.PolarisAutoBelongsToForm = (0, AutoInput_js_1.autoRelationshipForm)((props) => {
    const { field } = props;
    const { path, metadata } = (0, useAutoRelationship_js_1.useAutoRelationship)({ field });
    const { setValue, getValues, formState: { defaultValues, submitCount, isSubmitSuccessful }, } = (0, useActionForm_js_1.useFormContext)();
    const { record, relatedModelOptions } = (0, useBelongsToController_js_1.useBelongsToController)(props);
    const [actionsOpen, setActionsOpen] = (0, react_1.useState)(false);
    const [searchOpen, setSearchOpen] = (0, react_1.useState)(false);
    const [modalOpen, setModalOpen] = (0, react_1.useState)(false);
    const { search, searchFilterOptions, pagination, relatedModel: { records, fetching: isLoading }, } = relatedModelOptions;
    const relationshipContext = (0, useAutoRelationship_js_1.useRelationshipContext)();
    const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;
    const primaryLabel = (0, useRelatedModel_js_1.useOptionLabelForField)(field, props.primaryLabel);
    const hasRecord = !!(record && !("_unlink" in record && record._unlink));
    const recordOption = record ? (0, useRelatedModel_js_1.getRecordAsOption)(record, primaryLabel, props.secondaryLabel, props.tertiaryLabel) : null;
    const defaultRecordId = (0, utils_js_1.get)(defaultValues, path)?.id;
    // if the child record is created we need to set the id to the default record id
    // that comes from the response to the action mutation
    (0, react_1.useEffect)(() => {
        if (isSubmitSuccessful && record && !record.id && !("_link" in record) && !("_unlink" in record) && defaultRecordId) {
            setValue(path + ".id", defaultRecordId);
        }
    }, [record, defaultRecordId, path, setValue, submitCount, isSubmitSuccessful]);
    const parentName = metadata.name ?? "Unknown";
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.BlockStack, { gap: "300" },
            react_1.default.createElement(polaris_1.InlineGrid, { columns: "1fr auto" },
                react_1.default.createElement(polaris_1.Text, { as: "h2", variant: "headingSm" }, parentName),
                hasRecord && (react_1.default.createElement(polaris_1.Popover, { active: actionsOpen, activator: react_1.default.createElement(polaris_1.Button, { onClick: () => setActionsOpen((prev) => !prev), icon: polaris_icons_1.MenuHorizontalIcon }), onClose: () => setActionsOpen(false) },
                    react_1.default.createElement(polaris_1.ActionList, { actionRole: "menuitem", items: [
                            {
                                content: `Edit ${parentName.toLocaleLowerCase()}`,
                                onAction: () => {
                                    setModalOpen(true);
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
            hasRecord ? (props.renderSelectedRecord ? (props.renderSelectedRecord(record)) : (react_1.default.createElement(polaris_1.InlineStack, { align: "space-between" },
                react_1.default.createElement(polaris_1.BlockStack, { gap: "200" },
                    (0, utils_js_2.renderOptionLabel)(recordOption.label, "primary"),
                    recordOption.secondaryLabel && (0, utils_js_2.renderOptionLabel)(recordOption.secondaryLabel, "secondary")),
                recordOption.tertiaryLabel && (0, utils_js_2.renderOptionLabel)(recordOption.tertiaryLabel, "tertiary")))) : (react_1.default.createElement(RelatedModelOptions_js_1.RelatedModelOptionsPopover, { active: searchOpen, activator: react_1.default.createElement(RelatedModelOptions_js_1.RelatedModelOptionsSearch, { modelName: parentName, value: search.value, onChange: search.set, onFocus: () => setSearchOpen(true) }), onClose: () => setSearchOpen(false), onScrolledToBottom: pagination.loadNextPage, actions: [
                    react_1.default.createElement(polaris_1.Listbox.Action, { key: "add-new-record", value: "add-new-record", divider: true },
                        react_1.default.createElement(polaris_1.InlineStack, { gap: "200" },
                            react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.PlusCircleIcon }),
                            "Add ",
                            parentName)),
                ], options: searchFilterOptions, records: records, onSelect: (record) => {
                    if (record.id === "add-new-record") {
                        setModalOpen(true);
                    }
                    else {
                        setValue(path, { ...record, _link: record.id });
                    }
                }, isLoading: isLoading, autoSelection: polaris_1.AutoSelection.None }))),
        react_1.default.createElement(polaris_1.Modal, { open: modalOpen, onClose: () => setModalOpen(false), title: `Add ${parentName}` },
            react_1.default.createElement(useAutoRelationship_js_1.RelationshipContext.Provider, { value: { transformPath: (path) => pathPrefix + "." + path } },
                react_1.default.createElement(polaris_1.Modal.Section, null, props.children),
                react_1.default.createElement(polaris_1.Modal.Section, null,
                    react_1.default.createElement("div", { style: { float: "right", paddingBottom: "16px" } },
                        react_1.default.createElement(polaris_1.ButtonGroup, null,
                            react_1.default.createElement(polaris_1.Button, { variant: "secondary", onClick: () => setModalOpen(false) }, "Cancel"),
                            react_1.default.createElement(polaris_1.Button, { variant: "primary", onClick: () => {
                                    const { _unlink, _link, id: recordId, ...rest } = getValues(path);
                                    if (recordId) {
                                        setValue(path, { ...rest, id: recordId });
                                    }
                                    else {
                                        setValue(path, rest);
                                    }
                                    setModalOpen(false);
                                } }, "Save"))))))));
});
//# sourceMappingURL=PolarisAutoBelongsToForm.js.map