import { Banner, Button, ButtonGroup, Modal, Spinner, Text } from "@shopify/polaris";
import React, { useCallback, useEffect, useMemo } from "react";
import { useBulkAction } from "../../useBulkAction.js";
import { humanizeCamelCase } from "../../utils.js";
export const PolarisAutoBulkActionModal = (props) => {
    const { model, modelActionDetails, ids, selectedRows } = props;
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
    if (!actionIsLoaded) {
        return null;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Modal, { onClose: () => setShowModal(false), title: modalTitle, open: showModal }, isBulkGadgetAction ? (React.createElement(GadgetBulkActionModalContent, { model: model, modelActionDetails: modelActionDetails, ids: ids, close: closeModal })) : (React.createElement(CustomBulkActionModalContent, { modelActionDetails: modelActionDetails, ids: ids, close: closeModal, selectedRows: selectedRows })))));
};
/**
 * Modal content for executing Gadget bulk actions
 */
const GadgetBulkActionModalContent = (props) => {
    const { model, modelActionDetails, ids, close } = props;
    const [hasRun, setHasRun] = React.useState(false);
    // eslint-disable-next-line
    // @ts-ignore:next-line
    const [{ fetching, data, error }, runBulkAction] = useBulkAction(model[modelActionDetails.apiIdentifier], {});
    const hasError = !!(error || (data && data.success === false));
    const errorMessage = error
        ? error.message
        : data && data?.success === false
            ? data?.errors?.map((e) => e.message).join(", ")
            : "";
    const actionResultBanner = useMemo(() => (hasError ? React.createElement(Banner, { title: errorMessage, tone: "critical" }) : React.createElement(Banner, { title: ActionSuccessMessage, tone: "success" })), [hasError, errorMessage]);
    const runAction = useCallback(() => {
        void runBulkAction(ids);
        setHasRun(true);
    }, [runBulkAction, ids]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Modal.Section, null,
            fetching && React.createElement(CenteredSpinner, null),
            !fetching && (hasRun ? actionResultBanner : React.createElement(RunActionConfirmationText, { count: ids.length }))),
        React.createElement(Modal.Section, null,
            React.createElement("div", { style: { float: "right", paddingBottom: "16px" } },
                React.createElement(ButtonGroup, null,
                    React.createElement(Button, { variant: "secondary", onClick: close }, "Close"),
                    ((!hasError && !hasRun) || fetching) && (React.createElement(Button, { variant: "primary", onClick: runAction, loading: fetching }, "Run")))))));
};
const CenteredSpinner = () => (React.createElement("div", { style: { textAlign: "center" } },
    React.createElement(Spinner, { accessibilityLabel: "Spinner example", size: "large" })));
const ActionCompletedMessage = `Action completed`;
const ActionSuccessMessage = `${ActionCompletedMessage} successfully`;
const CustomBulkActionModalContent = (props) => {
    const { modelActionDetails, ids, selectedRows, close } = props;
    if (modelActionDetails.isGadgetAction) {
        throw new Error(`Custom callback "${modelActionDetails.apiIdentifier}" is invalid`);
    }
    if (!modelActionDetails.render) {
        throw new Error(`Failed to render custom bulk action modal content. Property "render" must be provided`);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Modal.Section, null, modelActionDetails.render(ids, selectedRows)),
        React.createElement(Modal.Section, null,
            React.createElement("div", { style: { float: "right", paddingBottom: "16px" } },
                React.createElement(ButtonGroup, null,
                    React.createElement(Button, { variant: "secondary", onClick: close }, "Close"))))));
};
const RunActionConfirmationText = (props) => {
    const { count } = props;
    return useMemo(() => React.createElement(Text, { as: "p" }, `Are you sure you want to run this action on ${count} record${count === 1 ? "" : `s`}?`), [count]);
};
//# sourceMappingURL=PolarisAutoBulkActionModal.js.map