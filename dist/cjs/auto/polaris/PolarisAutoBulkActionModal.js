"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoBulkActionModal = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importStar(require("react"));
const useTableBulkActions_js_1 = require("../hooks/useTableBulkActions.js");
const PolarisAutoBulkActionModal = (props) => {
    const { model, modelActionDetails, ids } = props;
    const { actionIsLoaded, closeAndClear, isBulkGadgetAction, modalTitle, showModal } = (0, useTableBulkActions_js_1.useAutoTableBulkActionModal)(props);
    if (!actionIsLoaded || !isBulkGadgetAction || !modelActionDetails) {
        return null;
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.Modal, { onClose: closeAndClear, title: modalTitle, open: showModal },
            react_1.default.createElement(GadgetBulkActionModalContent, { model: model, modelActionDetails: modelActionDetails, actionLabel: modalTitle, ids: ids, close: closeAndClear }))));
};
exports.PolarisAutoBulkActionModal = PolarisAutoBulkActionModal;
/**
 * Modal content for executing Gadget bulk actions
 */
const GadgetBulkActionModalContent = (props) => {
    const { ids, close } = props;
    const { hasRun, actionResultMessage, fetching, hasError, runAction } = (0, useTableBulkActions_js_1.useGadgetBulkActionModalContent)(props);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.Modal.Section, null,
            fetching && react_1.default.createElement(CenteredSpinner, null),
            !fetching &&
                (hasRun ? (react_1.default.createElement(polaris_1.Banner, { title: actionResultMessage, tone: hasError ? "critical" : "success" })) : (react_1.default.createElement(RunActionConfirmationText, { count: ids.length })))),
        react_1.default.createElement(polaris_1.Modal.Section, null,
            react_1.default.createElement("div", { style: { float: "right", paddingBottom: "16px" } },
                react_1.default.createElement(polaris_1.ButtonGroup, null,
                    react_1.default.createElement(polaris_1.Button, { variant: "secondary", onClick: close }, "Close"),
                    ((!hasError && !hasRun) || fetching) && (react_1.default.createElement(polaris_1.Button, { variant: "primary", onClick: runAction, loading: fetching }, "Run")))))));
};
const CenteredSpinner = () => (react_1.default.createElement("div", { style: { textAlign: "center", width: "100%" } },
    react_1.default.createElement(polaris_1.Spinner, { accessibilityLabel: "Spinner example", size: "large" })));
const RunActionConfirmationText = (props) => {
    const { count } = props;
    return (0, react_1.useMemo)(() => react_1.default.createElement(polaris_1.Text, { as: "p" }, (0, useTableBulkActions_js_1.getRunActionConfirmationText)(count)), [count]);
};
//# sourceMappingURL=PolarisAutoBulkActionModal.js.map