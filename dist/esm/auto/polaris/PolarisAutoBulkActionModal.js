import { Banner, Button, ButtonGroup, Modal, Spinner, Text } from "@shopify/polaris";
import React, { useMemo } from "react";
import { getRunActionConfirmationText, useAutoTableBulkActionModal, useGadgetBulkActionModalContent, } from "../hooks/useTableBulkActions.js";
export const PolarisAutoBulkActionModal = (props) => {
    const { model, modelActionDetails, ids } = props;
    const { actionIsLoaded, closeAndClear, isBulkGadgetAction, modalTitle, showModal } = useAutoTableBulkActionModal(props);
    if (!actionIsLoaded || !isBulkGadgetAction || !modelActionDetails) {
        return null;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Modal, { onClose: closeAndClear, title: modalTitle, open: showModal },
            React.createElement(GadgetBulkActionModalContent, { model: model, modelActionDetails: modelActionDetails, actionLabel: modalTitle, ids: ids, close: closeAndClear }))));
};
/**
 * Modal content for executing Gadget bulk actions
 */
const GadgetBulkActionModalContent = (props) => {
    const { ids, close } = props;
    const { hasRun, actionResultMessage, fetching, hasError, runAction } = useGadgetBulkActionModalContent(props);
    return (React.createElement(React.Fragment, null,
        React.createElement(Modal.Section, null,
            fetching && React.createElement(CenteredSpinner, null),
            !fetching &&
                (hasRun ? (React.createElement(Banner, { title: actionResultMessage, tone: hasError ? "critical" : "success" })) : (React.createElement(RunActionConfirmationText, { count: ids.length })))),
        React.createElement(Modal.Section, null,
            React.createElement("div", { style: { float: "right", paddingBottom: "16px" } },
                React.createElement(ButtonGroup, null,
                    React.createElement(Button, { variant: "secondary", onClick: close }, "Close"),
                    ((!hasError && !hasRun) || fetching) && (React.createElement(Button, { variant: "primary", onClick: runAction, loading: fetching }, "Run")))))));
};
const CenteredSpinner = () => (React.createElement("div", { style: { textAlign: "center", width: "100%" } },
    React.createElement(Spinner, { accessibilityLabel: "Spinner example", size: "large" })));
const RunActionConfirmationText = (props) => {
    const { count } = props;
    return useMemo(() => React.createElement(Text, { as: "p" }, getRunActionConfirmationText(count)), [count]);
};
//# sourceMappingURL=PolarisAutoBulkActionModal.js.map