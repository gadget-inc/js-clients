import { Button, ButtonGroup, Modal, Spinner, Text, Toast } from "@shopify/polaris";
import React, { useCallback, useEffect, useMemo } from "react";
import { useBulkAction } from "../../useBulkAction.js";
import { humanizeCamelCase } from "../../utils.js";
export const PolarisAutoBulkActionModal = (props) => {
    const [toastMessage, setToastMessage] = React.useState(undefined);
    return (React.createElement(React.Fragment, null,
        toastMessage && (React.createElement(Toast, { content: toastMessage, onDismiss: () => setToastMessage(undefined), duration: 4500, error: toastMessage.includes(ActionErrorMessage) })),
        React.createElement(BulkActionModal, { ...props, setToastMessage: setToastMessage })));
};
const BulkActionModal = (props) => {
    const { model, modelActionDetails, ids, selectedRows, clearSelection, setToastMessage } = props;
    const [showModal, setShowModal] = React.useState(!!modelActionDetails);
    const [actionName, setActionName] = React.useState(modelActionDetails?.apiIdentifier);
    useEffect(() => {
        if (!modelActionDetails) {
            return;
        }
        setShowModal(true);
        setActionName(modelActionDetails.apiIdentifier);
    }, [modelActionDetails]);
    const actionIsLoaded = modelActionDetails && actionName;
    const isBulkGadgetAction = actionIsLoaded && model[actionName] && modelActionDetails.isGadgetAction && modelActionDetails.isBulk;
    const modalTitle = useMemo(() => humanizeCamelCase(actionName ?? ""), [actionName]);
    const closeModal = useCallback(() => setShowModal(false), [setShowModal]);
    if (!actionIsLoaded || !isBulkGadgetAction) {
        return null;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Modal, { onClose: () => setShowModal(false), title: modalTitle, open: showModal },
            React.createElement(GadgetBulkActionModalContent, { model: model, modelActionDetails: modelActionDetails, actionLabel: modalTitle.replace("Bulk ", ""), ids: ids, close: closeModal, clearSelection: clearSelection, setToastMessage: setToastMessage }))));
};
/**
 * Modal content for executing Gadget bulk actions
 */
const GadgetBulkActionModalContent = (props) => {
    const { model, modelActionDetails, actionLabel: actionName, ids, close, clearSelection, setToastMessage } = props;
    const [hasRun, setHasRun] = React.useState(false);
    // eslint-disable-next-line
    // @ts-ignore:next-line
    const [{ fetching, data, error }, runBulkAction] = useBulkAction(model[modelActionDetails.apiIdentifier], {});
    const hasError = !!(error || (data && data.success === false));
    const runAction = useCallback(() => {
        void runBulkAction(ids);
        setHasRun(true);
    }, [runBulkAction, ids, clearSelection, close]);
    // Automatically close the modal if the action is successful
    useEffect(() => {
        if (!fetching && hasRun) {
            clearSelection();
            close();
            setToastMessage(hasError ? `${actionName}${ActionErrorMessage}` : `${actionName}${ActionSuccessMessage}`);
        }
    }, [fetching, hasRun, hasError, clearSelection, close, setToastMessage, actionName]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Modal.Section, null,
            fetching && React.createElement(CenteredSpinner, null),
            !fetching && !hasRun && React.createElement(RunActionConfirmationText, { count: ids.length })),
        React.createElement(Modal.Section, null,
            React.createElement("div", { style: { float: "right", paddingBottom: "16px" } },
                React.createElement(ButtonGroup, null,
                    React.createElement(Button, { variant: "secondary", onClick: close }, "Close"),
                    ((!hasError && !hasRun) || fetching) && (React.createElement(Button, { variant: "primary", onClick: runAction, loading: fetching }, "Run")))))));
};
const CenteredSpinner = () => (React.createElement("div", { style: { textAlign: "center" } },
    React.createElement(Spinner, { accessibilityLabel: "Spinner example", size: "large" })));
export const ActionSuccessMessage = ` completed`;
export const ActionErrorMessage = ` failed`;
const RunActionConfirmationText = (props) => {
    const { count } = props;
    return useMemo(() => React.createElement(Text, { as: "p" }, `Are you sure you want to run this action on ${count} record${count === 1 ? "" : `s`}?`), [count]);
};
//# sourceMappingURL=PolarisAutoBulkActionModal.js.map