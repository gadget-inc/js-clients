import { Banner, Button, ButtonGroup, Modal, Spinner, Text } from "@shopify/polaris";
import React, { useCallback, useEffect, useMemo } from "react";
import { useBulkAction } from "../../useBulkAction.js";
import { humanizeCamelCase } from "../../utils.js";
export const PolarisAutoBulkActionModal = (props) => {
    const { model, modelActionDetails, ids, selectedRows, clearSelection } = props;
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
    const closeAndClear = useCallback(() => {
        setShowModal(false);
        clearSelection();
    }, [setShowModal, clearSelection]);
    if (!actionIsLoaded || !isBulkGadgetAction) {
        return null;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Modal, { onClose: closeAndClear, title: modalTitle, open: showModal },
            React.createElement(GadgetBulkActionModalContent, { model: model, modelActionDetails: modelActionDetails, actionLabel: modalTitle.replace("Bulk ", ""), ids: ids, close: closeAndClear }))));
};
/**
 * Modal content for executing Gadget bulk actions
 */
const GadgetBulkActionModalContent = (props) => {
    const { model, modelActionDetails, actionLabel: actionName, ids, close } = props;
    const [hasRun, setHasRun] = React.useState(false);
    // eslint-disable-next-line
    // @ts-ignore:next-line
    const [{ fetching, data, error }, runBulkAction] = useBulkAction(model[modelActionDetails.apiIdentifier], {});
    const hasError = !!(error || (data && data.success === false));
    const actionResultBanner = useMemo(() => hasError ? (React.createElement(Banner, { title: `${actionName}${ActionErrorMessage}`, tone: "critical" })) : (React.createElement(Banner, { title: `${actionName}${ActionSuccessMessage}`, tone: "success" })), [hasError]);
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
export const ActionSuccessMessage = ` completed`;
export const ActionErrorMessage = ` failed`;
const RunActionConfirmationText = (props) => {
    const { count } = props;
    return useMemo(() => React.createElement(Text, { as: "p" }, `Are you sure you want to run this action on ${count} record${count === 1 ? "" : `s`}?`), [count]);
};
//# sourceMappingURL=PolarisAutoBulkActionModal.js.map