"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoBulkActionModal = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useTableBulkActions_js_1 = require("../../hooks/useTableBulkActions.js");
const PolarisWCModal_js_1 = require("../commonComponents/PolarisWCModal.js");
const PolarisWCAutoBulkActionModal = (props) => {
    const { model, modelActionDetails, ids } = props;
    const { actionIsLoaded, closeAndClear, close, isBulkGadgetAction, modalTitle, showModal } = (0, useTableBulkActions_js_1.useAutoTableBulkActionModal)(props);
    if (!actionIsLoaded || !isBulkGadgetAction || !modelActionDetails) {
        return null;
    }
    return (react_1.default.createElement(PolarisWCModal_js_1.PolarisWCModal, { open: showModal, onOpenChange: (open) => {
            if (!open)
                close();
        }, heading: modalTitle },
        react_1.default.createElement(GadgetBulkActionModalContent, { model: model, modelActionDetails: modelActionDetails, actionLabel: modalTitle, ids: ids, close: closeAndClear })));
};
exports.PolarisWCAutoBulkActionModal = PolarisWCAutoBulkActionModal;
/**
 * Modal content for executing Gadget bulk actions
 */
const GadgetBulkActionModalContent = (props) => {
    const { ids, close } = props;
    const { hasRun, actionResultMessage, fetching, hasError, runAction } = (0, useTableBulkActions_js_1.useGadgetBulkActionModalContent)(props);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("s-box", null,
            fetching && react_1.default.createElement(CenteredSpinner, null),
            !fetching &&
                (hasRun ? (react_1.default.createElement("s-box", { paddingBlockEnd: "base" },
                    react_1.default.createElement("s-banner", { tone: hasError ? "critical" : "success" }, actionResultMessage))) : (react_1.default.createElement(RunActionConfirmationText, { count: ids.length })))),
        react_1.default.createElement("s-box", null,
            react_1.default.createElement("s-stack", { direction: "inline", gap: "small", justifyContent: "end" },
                react_1.default.createElement("s-button", { variant: "secondary", onClick: close }, "Close"),
                ((!hasError && !hasRun) || fetching) && (react_1.default.createElement("s-button", { variant: "primary", loading: fetching, onClick: runAction }, "Run"))))));
};
const CenteredSpinner = () => (react_1.default.createElement("s-stack", { alignItems: "center", justifyContent: "center" },
    react_1.default.createElement("s-spinner", { accessibilityLabel: "Running action", size: "large" })));
const RunActionConfirmationText = (props) => {
    const { count } = props;
    return (0, react_1.useMemo)(() => react_1.default.createElement("s-text", null, (0, useTableBulkActions_js_1.getRunActionConfirmationText)(count)), [count]);
};
//# sourceMappingURL=PolarisWCAutoBulkActionModal.js.map