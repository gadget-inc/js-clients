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
const RelatedModelOptions_js_1 = require("./RelatedModelOptions.js");
const utils_js_1 = require("./utils.js");
exports.PolarisAutoHasOneForm = (0, AutoInput_js_1.autoRelationshipForm)((props) => {
    const { path, setValue, getValues, record, actionsOpen, setActionsOpen, modalOpen, setModalOpen, searchOpen, setSearchOpen, search, searchFilterOptions, pagination, records, isLoading, pathPrefix, metaDataPathPrefix, hasRecord, recordOption, childName, } = (0, useHasOneForm_js_1.useHasOneForm)(props);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(useAutoRelationship_js_1.RelationshipContext.Provider, { value: {
                transformPath: (path) => pathPrefix + "." + path,
                transformMetadataPath: (path) => metaDataPathPrefix + "." + path,
            } },
            react_1.default.createElement(polaris_1.BlockStack, { gap: "300" },
                react_1.default.createElement(polaris_1.InlineGrid, { columns: "1fr auto" },
                    props.label ?? (react_1.default.createElement(polaris_1.Text, { as: "h2", variant: "headingSm" }, childName)),
                    hasRecord && (react_1.default.createElement(polaris_1.Popover, { active: actionsOpen, activator: react_1.default.createElement(polaris_1.Button, { onClick: () => setActionsOpen((prev) => !prev), icon: polaris_icons_1.MenuHorizontalIcon }), onClose: () => setActionsOpen(false) },
                        react_1.default.createElement(polaris_1.ActionList, { actionRole: "hasOneFormMenuItem", items: [
                                {
                                    content: `Edit ${childName.toLocaleLowerCase()}`,
                                    onAction: () => {
                                        setModalOpen(true);
                                        setActionsOpen(false);
                                    },
                                },
                                {
                                    content: `Remove ${childName.toLocaleLowerCase()}`,
                                    onAction: () => {
                                        if (!record)
                                            return;
                                        const { __typename, id: recordId, ...rest } = record;
                                        const nulledValues = Object.fromEntries(Object.keys(rest).map((key) => [key, null]));
                                        setValue(path, { ...nulledValues, __typename, _unlink: recordId });
                                        setActionsOpen(false);
                                    },
                                    destructive: true,
                                },
                            ] })))),
                hasRecord ? (props.renderSelectedRecord ? (props.renderSelectedRecord(record)) : (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(polaris_1.Divider, null),
                    react_1.default.createElement(polaris_1.InlineStack, { align: "space-between" },
                        react_1.default.createElement(polaris_1.BlockStack, { gap: "200" },
                            (0, utils_js_1.renderOptionLabel)(recordOption.label, "primary"),
                            recordOption.secondaryLabel && (0, utils_js_1.renderOptionLabel)(recordOption.secondaryLabel, "secondary")),
                        recordOption.tertiaryLabel && (0, utils_js_1.renderOptionLabel)(recordOption.tertiaryLabel, "tertiary"))))) : (react_1.default.createElement(RelatedModelOptions_js_1.RelatedModelOptionsPopover, { active: searchOpen, activator: react_1.default.createElement(RelatedModelOptions_js_1.RelatedModelOptionsSearch, { modelName: childName, value: search.value, onChange: search.set, onFocus: () => setSearchOpen(true) }), onClose: () => setSearchOpen(false), onScrolledToBottom: pagination.loadNextPage, actions: [
                        react_1.default.createElement(polaris_1.Listbox.Action, { key: "add-new-record", value: "add-new-record", divider: true },
                            react_1.default.createElement(polaris_1.InlineStack, { gap: "200" },
                                react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.PlusCircleIcon }),
                                "Add ",
                                childName)),
                    ], options: searchFilterOptions, records: records, onSelect: (record) => {
                        if (record.id === "add-new-record") {
                            setModalOpen(true);
                        }
                        else {
                            setValue(path, { ...record, _link: record.id });
                        }
                    }, isLoading: isLoading, autoSelection: polaris_1.AutoSelection.None }))),
            react_1.default.createElement(polaris_1.Modal, { open: modalOpen, onClose: () => setModalOpen(false), title: `Add ${childName}` },
                react_1.default.createElement(polaris_1.Modal.Section, null, props.children),
                react_1.default.createElement(polaris_1.Modal.Section, null,
                    react_1.default.createElement("div", { style: { float: "right", paddingBottom: "16px" } },
                        react_1.default.createElement(polaris_1.ButtonGroup, null,
                            react_1.default.createElement(polaris_1.Button, { variant: "secondary", onClick: () => setModalOpen(false) }, "Cancel"),
                            react_1.default.createElement(polaris_1.Button, { variant: "primary", onClick: () => {
                                    const { _unlink, _link, ...rest } = getValues(path);
                                    setValue(path, rest);
                                    setModalOpen(false);
                                } }, "Save"))))))));
});
//# sourceMappingURL=PolarisAutoHasOneForm.js.map