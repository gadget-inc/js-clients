"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoTableBulkActionModal = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useTableBulkActions_js_1 = require("../../hooks/useTableBulkActions.js");
const ShadcnAutoLoadingIndicator_js_1 = require("./ShadcnAutoLoadingIndicator.js");
const makeShadcnAutoTableBulkActionModal = (elements) => {
    const { Label, Button, Alert, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } = elements;
    const LoadingIndicator = (0, ShadcnAutoLoadingIndicator_js_1.makeShadcnAutoLoadingIndicator)(elements);
    function ShadcnAutoTableBulkActionModal(props) {
        const { model, modelActionDetails, ids } = props;
        const { actionIsLoaded, closeAndClear, isBulkGadgetAction, modalTitle, showModal } = (0, useTableBulkActions_js_1.useAutoTableBulkActionModal)(props);
        if (!actionIsLoaded || !isBulkGadgetAction || !modelActionDetails) {
            return null;
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Dialog, { open: showModal, onOpenChange: (open) => {
                    if (!open) {
                        closeAndClear();
                    }
                } },
                react_1.default.createElement(DialogContent, null,
                    react_1.default.createElement(DialogHeader, null,
                        react_1.default.createElement(DialogTitle, null, modalTitle)),
                    react_1.default.createElement(GadgetBulkActionModalContent, { model: model, modelActionDetails: modelActionDetails, actionLabel: modalTitle, ids: ids, close: closeAndClear })))));
    }
    function GadgetBulkActionModalContent(props) {
        const { ids, close } = props;
        const { hasRun, actionResultMessage, fetching, hasError, runAction } = (0, useTableBulkActions_js_1.useGadgetBulkActionModalContent)(props);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(DialogDescription, null,
                fetching && (react_1.default.createElement("div", { className: "flex items-center justify-center min-h-[32px]" },
                    react_1.default.createElement(LoadingIndicator, null))),
                !fetching &&
                    (hasRun ? (react_1.default.createElement(Alert, { variant: hasError ? "destructive" : "default" }, actionResultMessage)) : (react_1.default.createElement(RunActionConfirmationText, { count: ids.length })))),
            react_1.default.createElement(DialogDescription, { className: "flex flex-row gap-2 ml-auto" },
                react_1.default.createElement(Button, { onClick: close, variant: "secondary" }, "Close"),
                ((!hasError && !hasRun) || fetching) && (react_1.default.createElement(Button, { onClick: runAction, disabled: fetching }, "Run")))));
    }
    function RunActionConfirmationText(props) {
        const { count } = props;
        return (0, react_1.useMemo)(() => react_1.default.createElement(Label, null, (0, useTableBulkActions_js_1.getRunActionConfirmationText)(count)), [count]);
    }
    return ShadcnAutoTableBulkActionModal;
};
exports.makeShadcnAutoTableBulkActionModal = makeShadcnAutoTableBulkActionModal;
//# sourceMappingURL=ShadcnAutoTableBulkActionModal.js.map