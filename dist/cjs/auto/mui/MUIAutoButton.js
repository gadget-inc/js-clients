"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoButton = void 0;
const tslib_1 = require("tslib");
const lab_1 = require("@mui/lab");
const Snackbar_1 = tslib_1.__importDefault(require("@mui/material/Snackbar"));
const react_1 = tslib_1.__importStar(require("react"));
const useAutoButtonController_js_1 = require("../hooks/useAutoButtonController.js");
const SnackbarHack = Snackbar_1.default; // types in MUI for this component are wrong, it is a default export
/**
 * Render a button that invokes an action when clicked, and shows a snackbar notification when the action succeeds or encounters an error by default.
 */
const MUIAutoButton = (props) => {
    const { fetching, isDestructive, run, label, buttonProps } = (0, useAutoButtonController_js_1.useAutoButtonController)({
        onSuccess: (_result) => {
            setSnackbar({
                open: true,
                autoHideDuration: 3000,
                onClose: () => setSnackbar(null),
                children: react_1.default.createElement(lab_1.Alert, { severity: "success" },
                    label,
                    " succeeded."),
            });
        },
        onError: (error, _result) => {
            setSnackbar({
                open: true,
                autoHideDuration: 3000,
                onClose: () => setSnackbar(null),
                children: (react_1.default.createElement(lab_1.Alert, { severity: "error" },
                    label,
                    " encountered an error: ",
                    error.message)),
            });
        },
        ...props,
    });
    const [snackbar, setSnackbar] = (0, react_1.useState)(null);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(lab_1.LoadingButton, { loading: fetching, disabled: fetching, color: isDestructive ? "error" : undefined, onClick: run, ...buttonProps }, props?.children ?? label),
        snackbar && react_1.default.createElement(SnackbarHack, { ...snackbar })));
};
exports.MUIAutoButton = MUIAutoButton;
//# sourceMappingURL=MUIAutoButton.js.map