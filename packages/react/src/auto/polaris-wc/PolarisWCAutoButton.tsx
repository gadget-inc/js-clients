import type { OptionsType } from "@gadgetinc/client-hooks";
import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/core";
import React from "react";
import type { AutoButtonProps } from "../hooks/useAutoButtonController.js";
import { useAutoButtonController } from "../hooks/useAutoButtonController.js";

declare let window: any;

/**
 * Render a button that invokes an action when clicked, and shows a toast notification when the action succeeds or encounters an error by default.
 * Uses Polaris Web Components (s-button).
 */
export const PolarisWCAutoButton = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>,
>(
  props: AutoButtonProps<GivenOptions, SchemaT, ActionFunc> & { id?: string; children?: React.ReactNode }
) => {
  const { id, ...rest } = props;
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
    ...rest,
  });

  return (
    <s-button
      id={id}
      variant="primary"
      tone={isDestructive ? "critical" : undefined}
      loading={running ? true : undefined}
      disabled={fetching}
      onClick={run}
      {...(buttonProps as any)}
    >
      {props?.children ?? label}
    </s-button>
  );
};
