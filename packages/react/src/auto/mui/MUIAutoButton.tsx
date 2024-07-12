import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import { Alert, LoadingButton } from "@mui/lab";
import type { SnackbarProps } from "@mui/material/Snackbar";
import Snackbar from "@mui/material/Snackbar";
import type { ComponentProps } from "react";
import React, { useState } from "react";
import type { OptionsType } from "../../utils.js";
import type { AutoButtonProps } from "../hooks/useAutoButtonController.js";
import { useAutoButtonController } from "../hooks/useAutoButtonController.js";

const SnackbarHack = Snackbar as any; // types in MUI for this component are wrong, it is a default export

/**
 * Render a button that invokes an action when clicked, and shows a snackbar notification when the action succeeds or encounters an error by default.
 */
export const MUIAutoButton = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>
>(
  props: AutoButtonProps<GivenOptions, SchemaT, ActionFunc> & ComponentProps<typeof LoadingButton>
) => {
  const { fetching, isDestructive, run, label, buttonProps } = useAutoButtonController({
    onSuccess: (_result) => {
      setSnackbar({
        open: true,
        autoHideDuration: 3000,
        onClose: () => setSnackbar(null),
        children: <Alert severity="success">{label} succeeded.</Alert>,
      });
    },
    onError: (error, _result) => {
      setSnackbar({
        open: true,
        autoHideDuration: 3000,
        onClose: () => setSnackbar(null),
        children: (
          <Alert severity="error">
            {label} encountered an error: {error.message}
          </Alert>
        ),
      });
    },
    ...props,
  });
  const [snackbar, setSnackbar] = useState<SnackbarProps | null>(null);

  return (
    <>
      <LoadingButton loading={fetching} disabled={fetching} color={isDestructive ? "error" : undefined} onClick={run} {...buttonProps}>
        {label}
      </LoadingButton>
      {snackbar && <SnackbarHack {...snackbar} />}
    </>
  );
};
