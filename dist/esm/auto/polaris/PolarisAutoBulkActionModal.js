import { Banner, Button, ButtonGroup, Modal, Spinner, Text } from "@shopify/polaris";
import React, { useCallback, useEffect, useMemo } from "react";
import { useBulkAction } from "../../useBulkAction.js";
import { humanizeCamelCase } from "../../utils.js";
export const PolarisAutoBulkActionModal = (props) => {
    const { model, modelActionDetails, ids } = props;
    const [showModal, setShowModal] = React.useState(!!modelActionDetails);
    const [actionName, setActionName] = React.useState(modelActionDetails?.apiIdentifier);
    useEffect(() => {
        if (!modelActionDetails) {
            return;
        }
        setShowModal(true);
        setActionName(modelActionDetails.apiIdentifier);
    }, [modelActionDetails]);
    const actionIsLoaded = modelActionDetails && actionName && model[actionName];
    const isBulkAction = actionIsLoaded && modelActionDetails.isBulk;
    const modalTitle = useMemo(() => humanizeCamelCase(actionName ?? ""), [actionName]);
    if (!actionIsLoaded) {
        return null;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Modal, { onClose: () => setShowModal(false), title: modalTitle, open: showModal }, isBulkAction ? (React.createElement(BulkActionModalContent, { model: model, modelActionDetails: modelActionDetails, ids: ids, close: () => setShowModal(false) })) : null
        // TODO - Decide on support for non-bulk actions
        // <PolarisAutoForm action={model[actionName]} />
        )));
};
/**
 * Modal content for executing bulk actions
 */
const BulkActionModalContent = (props) => {
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
    const initialMessage = useMemo(() => React.createElement(Text, { as: "p" }, `Are you sure you want to run this action on ${ids.length} record${ids.length === 1 ? "" : `s`}?`), [ids.length]);
    const actionResultBanner = useMemo(() => (hasError ? React.createElement(Banner, { title: errorMessage, tone: "critical" }) : React.createElement(Banner, { title: ActionSuccessMessage, tone: "success" })), [hasError, errorMessage]);
    const runAction = useCallback(() => {
        void runBulkAction(ids);
        setHasRun(true);
    }, [runBulkAction, setHasRun]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Modal.Section, null,
            fetching && React.createElement(CenteredSpinner, null),
            !fetching && (hasRun ? actionResultBanner : initialMessage)),
        React.createElement(Modal.Section, null,
            React.createElement("div", { style: { float: "right", paddingBottom: "16px" } },
                React.createElement(ButtonGroup, null,
                    React.createElement(Button, { variant: "secondary", onClick: close }, "Close"),
                    React.createElement(Button, { disabled: hasError || hasRun, variant: "primary", onClick: runAction, loading: fetching }, "Run"))))));
};
const CenteredSpinner = () => (React.createElement("div", { style: { textAlign: "center" } },
    React.createElement(Spinner, { accessibilityLabel: "Spinner example", size: "large" })));
const ActionSuccessMessage = `Action completed successfully`;
//# sourceMappingURL=PolarisAutoBulkActionModal.js.map