import React, { useMemo } from "react";
import { getRunActionConfirmationText, useGadgetBulkActionModalContent, } from "../../hooks/useTableBulkActions.js";
import { humanizeCamelCase } from "../../../utils.js";
import { PolarisWCModal } from "../commonComponents/PolarisWCModal.js";
export const PolarisWCAutoBulkActionModal = (props) => {
    const { model, modelActionDetails, ids, clearSelection, modalId } = props;
    const modalTitle = useMemo(() => humanizeCamelCase(modelActionDetails.apiIdentifier).replace("Bulk ", ""), [modelActionDetails.apiIdentifier]);
    return (React.createElement(PolarisWCModal, { id: modalId, heading: modalTitle },
        React.createElement("s-box", { padding: "base" },
            React.createElement(GadgetBulkActionModalContent, { model: model, modelActionDetails: modelActionDetails, actionLabel: modalTitle, ids: ids, close: clearSelection, modalId: modalId }))));
};
/**
 * Modal content for executing Gadget bulk actions
 */
const GadgetBulkActionModalContent = (props) => {
    const { ids, close, modalId } = props;
    const { hasRun, actionResultMessage, fetching, hasError, runAction } = useGadgetBulkActionModalContent(props);
    return (React.createElement(React.Fragment, null,
        React.createElement("s-box", null,
            fetching && React.createElement(CenteredSpinner, null),
            !fetching &&
                (hasRun ? (React.createElement("s-box", { paddingBlockEnd: "base" },
                    React.createElement("s-banner", { tone: hasError ? "critical" : "success" }, actionResultMessage))) : (React.createElement(RunActionConfirmationText, { count: ids.length })))),
        React.createElement("s-box", null,
            React.createElement("s-stack", { direction: "inline", gap: "small", justifyContent: "end" },
                React.createElement("s-button", { variant: "secondary", commandFor: modalId, command: "--hide", onClick: close }, "Close"),
                ((!hasError && !hasRun) || fetching) && (React.createElement("s-button", { variant: "primary", loading: fetching, onClick: runAction }, "Run"))))));
};
const CenteredSpinner = () => (React.createElement("s-stack", { alignItems: "center", justifyContent: "center" },
    React.createElement("s-spinner", { accessibilityLabel: "Running action", size: "large" })));
const RunActionConfirmationText = (props) => {
    const { count } = props;
    return useMemo(() => React.createElement("s-text", null, getRunActionConfirmationText(count)), [count]);
};
//# sourceMappingURL=PolarisWCAutoBulkActionModal.js.map