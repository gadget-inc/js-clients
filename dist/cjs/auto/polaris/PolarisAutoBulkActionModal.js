"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoBulkActionModal = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importStar(require("react"));
const useBulkAction_js_1 = require("../../useBulkAction.js");
const utils_js_1 = require("../../utils.js");
const PolarisAutoBulkActionModal = (props) => {
    const { model, modelActionDetails, ids } = props;
    const [showModal, setShowModal] = react_1.default.useState(!!modelActionDetails);
    const [actionName, setActionName] = react_1.default.useState(modelActionDetails?.apiIdentifier);
    (0, react_1.useEffect)(() => {
        if (!modelActionDetails) {
            return;
        }
        setShowModal(true);
        setActionName(modelActionDetails.apiIdentifier);
    }, [modelActionDetails]);
    const actionIsLoaded = modelActionDetails && actionName && model[actionName];
    const isBulkAction = actionIsLoaded && modelActionDetails.isBulk;
    const modalTitle = (0, react_1.useMemo)(() => (0, utils_js_1.humanizeCamelCase)(actionName ?? ""), [actionName]);
    if (!actionIsLoaded) {
        return null;
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.Modal, { onClose: () => setShowModal(false), title: modalTitle, open: showModal }, isBulkAction ? (react_1.default.createElement(BulkActionModalContent, { model: model, modelActionDetails: modelActionDetails, ids: ids, close: () => setShowModal(false) })) : null
        // TODO - Decide on support for non-bulk actions
        // <PolarisAutoForm action={model[actionName]} />
        )));
};
exports.PolarisAutoBulkActionModal = PolarisAutoBulkActionModal;
/**
 * Modal content for executing bulk actions
 */
const BulkActionModalContent = (props) => {
    const { model, modelActionDetails, ids, close } = props;
    const [hasRun, setHasRun] = react_1.default.useState(false);
    // eslint-disable-next-line
    // @ts-ignore:next-line
    const [{ fetching, data, error }, runBulkAction] = (0, useBulkAction_js_1.useBulkAction)(model[modelActionDetails.apiIdentifier], {});
    const hasError = !!(error || (data && data.success === false));
    const errorMessage = error
        ? error.message
        : data && data?.success === false
            ? data?.errors?.map((e) => e.message).join(", ")
            : "";
    const initialMessage = (0, react_1.useMemo)(() => react_1.default.createElement(polaris_1.Text, { as: "p" }, `Are you sure you want to run this action on ${ids.length} record${ids.length === 1 ? "" : `s`}?`), [ids.length]);
    const actionResultBanner = (0, react_1.useMemo)(() => (hasError ? react_1.default.createElement(polaris_1.Banner, { title: errorMessage, tone: "critical" }) : react_1.default.createElement(polaris_1.Banner, { title: ActionSuccessMessage, tone: "success" })), [hasError, errorMessage]);
    const runAction = (0, react_1.useCallback)(() => {
        void runBulkAction(ids);
        setHasRun(true);
    }, [runBulkAction, setHasRun]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.Modal.Section, null,
            fetching && react_1.default.createElement(CenteredSpinner, null),
            !fetching && (hasRun ? actionResultBanner : initialMessage)),
        react_1.default.createElement(polaris_1.Modal.Section, null,
            react_1.default.createElement("div", { style: { float: "right", paddingBottom: "16px" } },
                react_1.default.createElement(polaris_1.ButtonGroup, null,
                    react_1.default.createElement(polaris_1.Button, { variant: "secondary", onClick: close }, "Close"),
                    react_1.default.createElement(polaris_1.Button, { disabled: hasError || hasRun, variant: "primary", onClick: runAction, loading: fetching }, "Run"))))));
};
const CenteredSpinner = () => (react_1.default.createElement("div", { style: { textAlign: "center" } },
    react_1.default.createElement(polaris_1.Spinner, { accessibilityLabel: "Spinner example", size: "large" })));
const ActionSuccessMessage = `Action completed successfully`;
//# sourceMappingURL=PolarisAutoBulkActionModal.js.map