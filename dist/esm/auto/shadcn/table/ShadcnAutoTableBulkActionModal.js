import React, { useMemo } from "react";
import { getRunActionConfirmationText, useAutoTableBulkActionModal, useGadgetBulkActionModalContent, } from "../../hooks/useTableBulkActions.js";
import { makeShadcnAutoLoadingIndicator } from "./ShadcnAutoLoadingIndicator.js";
export const makeShadcnAutoTableBulkActionModal = (elements) => {
    const { Label, Button, Alert, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } = elements;
    const LoadingIndicator = makeShadcnAutoLoadingIndicator(elements);
    function ShadcnAutoTableBulkActionModal(props) {
        const { model, modelActionDetails, ids } = props;
        const { actionIsLoaded, closeAndClear, isBulkGadgetAction, modalTitle, showModal } = useAutoTableBulkActionModal(props);
        if (!actionIsLoaded || !isBulkGadgetAction || !modelActionDetails) {
            return null;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(Dialog, { open: showModal, onOpenChange: (open) => {
                    if (!open) {
                        closeAndClear();
                    }
                } },
                React.createElement(DialogContent, null,
                    React.createElement(DialogHeader, null,
                        React.createElement(DialogTitle, null, modalTitle)),
                    React.createElement(GadgetBulkActionModalContent, { model: model, modelActionDetails: modelActionDetails, actionLabel: modalTitle, ids: ids, close: closeAndClear })))));
    }
    function GadgetBulkActionModalContent(props) {
        const { ids, close } = props;
        const { hasRun, actionResultMessage, fetching, hasError, runAction } = useGadgetBulkActionModalContent(props);
        return (React.createElement(React.Fragment, null,
            React.createElement(DialogDescription, null,
                fetching && React.createElement(LoadingIndicator, null),
                !fetching &&
                    (hasRun ? (React.createElement(Alert, { variant: hasError ? "destructive" : "default" }, actionResultMessage)) : (React.createElement(RunActionConfirmationText, { count: ids.length })))),
            React.createElement(DialogDescription, null,
                React.createElement(Button, { onClick: close }, "Close"),
                ((!hasError && !hasRun) || fetching) && (React.createElement(Button, { onClick: runAction, disabled: fetching }, "Run")))));
    }
    function RunActionConfirmationText(props) {
        const { count } = props;
        return useMemo(() => React.createElement(Label, null, getRunActionConfirmationText(count)), [count]);
    }
    return ShadcnAutoTableBulkActionModal;
};
//# sourceMappingURL=ShadcnAutoTableBulkActionModal.js.map