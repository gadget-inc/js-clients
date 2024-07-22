import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import { useAppBridge } from "@shopify/app-bridge-react";
import { Button } from "@shopify/polaris";
import type { ComponentProps } from "react";
import React from "react";
import type { OptionsType } from "../../utils.js";
import type { AutoButtonProps } from "../hooks/useAutoButtonController.js";
import { useAutoButtonController } from "../hooks/useAutoButtonController.js";

/**
 * Render a button that invokes an action when clicked, and shows a toast notification when the action succeeds or encounters an error by default.
 */
export const PolarisAutoButton = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>
>(
  props: AutoButtonProps<GivenOptions, SchemaT, ActionFunc> & ComponentProps<typeof Button>
) => {
  const { fetching, isDestructive, run, label, buttonProps } = useAutoButtonController({
    onSuccess: (_result) => {
      shopify.toast.show(`${label} succeeded.`);
    },
    onError: (error, _result) => {
      shopify.toast.show(`${label} encountered an error: ${error.message}.`, { isError: true });
    },
    ...props,
  });
  const shopify = useAppBridge();

  return (
    <Button loading={fetching} disabled={fetching} tone={isDestructive ? "critical" : undefined} onClick={run} {...buttonProps}>
      {props?.children ?? label}
    </Button>
  );
};
