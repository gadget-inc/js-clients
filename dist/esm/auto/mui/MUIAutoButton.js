import { Alert, LoadingButton } from "@mui/lab";
import Snackbar from "@mui/material/Snackbar";
import React, { useState } from "react";
import { useAutoButtonController } from "../hooks/useAutoButtonController.js";
const SnackbarHack = Snackbar; // types in MUI for this component are wrong, it is a default export
/**
 * Render a button that invokes an action when clicked, and shows a snackbar notification when the action succeeds or encounters an error by default.
 */
export const MUIAutoButton = (props) => {
    const { fetching, isDestructive, run, label, buttonProps } = useAutoButtonController({
        onSuccess: (_result) => {
            setSnackbar({
                open: true,
                autoHideDuration: 3000,
                onClose: () => setSnackbar(null),
                children: React.createElement(Alert, { severity: "success" },
                    label,
                    " succeeded."),
            });
        },
        onError: (error, _result) => {
            setSnackbar({
                open: true,
                autoHideDuration: 3000,
                onClose: () => setSnackbar(null),
                children: (React.createElement(Alert, { severity: "error" },
                    label,
                    " encountered an error: ",
                    error.message)),
            });
        },
        ...props,
    });
    const [snackbar, setSnackbar] = useState(null);
    return (React.createElement(React.Fragment, null,
        React.createElement(LoadingButton, { loading: fetching, disabled: fetching, color: isDestructive ? "error" : undefined, onClick: run, ...buttonProps }, props?.children ?? label),
        snackbar && React.createElement(SnackbarHack, { ...snackbar })));
};
//# sourceMappingURL=MUIAutoButton.js.map