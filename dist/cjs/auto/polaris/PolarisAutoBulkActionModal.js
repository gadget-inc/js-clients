"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionErrorMessage = exports.ActionSuccessMessage = exports.PolarisAutoBulkActionModal = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importStar(require("react"));
const useBulkAction_js_1 = require("../../useBulkAction.js");
const utils_js_1 = require("../../utils.js");
const PolarisAutoBulkActionModal = (props) => {
    const [toastMessage, setToastMessage] = react_1.default.useState(undefined);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        toastMessage && (react_1.default.createElement(polaris_1.Toast, { content: toastMessage, onDismiss: () => setToastMessage(undefined), duration: 4500, error: toastMessage.includes(exports.ActionErrorMessage) })),
        react_1.default.createElement(BulkActionModal, { ...props, setToastMessage: setToastMessage })));
};
exports.PolarisAutoBulkActionModal = PolarisAutoBulkActionModal;
const BulkActionModal = (props) => {
    const { model, modelActionDetails, ids, selectedRows, clearSelection, setToastMessage } = props;
    const [showModal, setShowModal] = react_1.default.useState(!!modelActionDetails);
    const [actionName, setActionName] = react_1.default.useState(modelActionDetails?.apiIdentifier);
    (0, react_1.useEffect)(() => {
        if (!modelActionDetails) {
            return;
        }
        setShowModal(true);
        setActionName(modelActionDetails.apiIdentifier);
    }, [modelActionDetails]);
    const actionIsLoaded = modelActionDetails && actionName;
    const isBulkGadgetAction = actionIsLoaded && model[actionName] && modelActionDetails.isGadgetAction && modelActionDetails.isBulk;
    const modalTitle = (0, react_1.useMemo)(() => (0, utils_js_1.humanizeCamelCase)(actionName ?? ""), [actionName]);
    const closeModal = (0, react_1.useCallback)(() => setShowModal(false), [setShowModal]);
    if (!actionIsLoaded || !isBulkGadgetAction) {
        return null;
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.Modal, { onClose: () => setShowModal(false), title: modalTitle, open: showModal },
            react_1.default.createElement(GadgetBulkActionModalContent, { model: model, modelActionDetails: modelActionDetails, actionLabel: modalTitle.replace("Bulk ", ""), ids: ids, close: closeModal, clearSelection: clearSelection, setToastMessage: setToastMessage }))));
};
/**
 * Modal content for executing Gadget bulk actions
 */
const GadgetBulkActionModalContent = (props) => {
    const { model, modelActionDetails, actionLabel: actionName, ids, close, clearSelection, setToastMessage } = props;
    const [hasRun, setHasRun] = react_1.default.useState(false);
    // eslint-disable-next-line
    // @ts-ignore:next-line
    const [{ fetching, data, error }, runBulkAction] = (0, useBulkAction_js_1.useBulkAction)(model[modelActionDetails.apiIdentifier], {});
    const hasError = !!(error || (data && data.success === false));
    const runAction = (0, react_1.useCallback)(() => {
        void runBulkAction(ids);
        setHasRun(true);
    }, [runBulkAction, ids, clearSelection, close]);
    // Automatically close the modal if the action is successful
    (0, react_1.useEffect)(() => {
        if (!fetching && hasRun) {
            clearSelection();
            close();
            setToastMessage(hasError ? `${actionName}${exports.ActionErrorMessage}` : `${actionName}${exports.ActionSuccessMessage}`);
        }
    }, [fetching, hasRun, hasError, clearSelection, close, setToastMessage, actionName]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.Modal.Section, null,
            fetching && react_1.default.createElement(CenteredSpinner, null),
            !fetching && !hasRun && react_1.default.createElement(RunActionConfirmationText, { count: ids.length })),
        react_1.default.createElement(polaris_1.Modal.Section, null,
            react_1.default.createElement("div", { style: { float: "right", paddingBottom: "16px" } },
                react_1.default.createElement(polaris_1.ButtonGroup, null,
                    react_1.default.createElement(polaris_1.Button, { variant: "secondary", onClick: close }, "Close"),
                    ((!hasError && !hasRun) || fetching) && (react_1.default.createElement(polaris_1.Button, { variant: "primary", onClick: runAction, loading: fetching }, "Run")))))));
};
const CenteredSpinner = () => (react_1.default.createElement("div", { style: { textAlign: "center" } },
    react_1.default.createElement(polaris_1.Spinner, { accessibilityLabel: "Spinner example", size: "large" })));
exports.ActionSuccessMessage = ` completed`;
exports.ActionErrorMessage = ` failed`;
const RunActionConfirmationText = (props) => {
    const { count } = props;
    return (0, react_1.useMemo)(() => react_1.default.createElement(polaris_1.Text, { as: "p" }, `Are you sure you want to run this action on ${count} record${count === 1 ? "" : `s`}?`), [count]);
};
//# sourceMappingURL=PolarisAutoBulkActionModal.js.map