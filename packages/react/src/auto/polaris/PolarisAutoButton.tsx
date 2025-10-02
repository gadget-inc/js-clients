import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import type { OptionsType } from "@gadgetinc/client-hooks";
import { Button } from "@shopify/polaris";
import type { ComponentProps } from "react";
import React from "react";
import type { AutoButtonProps } from "../hooks/useAutoButtonController.js";
import { useAutoButtonController } from "../hooks/useAutoButtonController.js";

declare let window: any;

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
  const { fetching, running, isDestructive, run, label, buttonProps } = useAutoButtonController({
    onSuccess: (_result) => {
      if (window && window.shopify && window.shopify.toast) {
        window.shopify.toast.show(`${label} succeeded.`);
      } else {
        alert(`${label} succeeded.`);
      }
    },
    onError: (error, _result) => {
      if (window && window.shopify && window.shopify.toast) {
        window.shopify.toast.show(`${label} encountered an error: ${error.message}.`, { isError: true });
      } else {
        alert(`${label} encountered an error: ${error.message}.`);
      }
    },
    ...props,
  });

  return (
    <Button loading={running} disabled={fetching} tone={isDestructive ? "critical" : undefined} onClick={run} {...buttonProps}>
      {props?.children ?? label}
    </Button>
  );
};
