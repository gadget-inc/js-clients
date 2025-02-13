import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import React from "react";
import type { OptionsType } from "../../utils.js";
import type { AutoButtonProps } from "../hooks/useAutoButtonController.js";
import { useAutoButtonController } from "../hooks/useAutoButtonController.js";
import { ButtonProps, type ShadcnElements } from "./elements.js";

/**
 * Render a button that invokes an action when clicked, and shows a toast notification when the action succeeds or encounters an error by default.
 */
export const makeAutoButton =
  <Elements extends ShadcnElements>({ Button, toast }: Elements) =>
  <
    GivenOptions extends OptionsType,
    SchemaT,
    ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>
  >(
    props: AutoButtonProps<GivenOptions, SchemaT, ActionFunc> & ButtonProps
  ) => {
    const { fetching, isDestructive, run, label, buttonProps } = useAutoButtonController({
      onSuccess: (_result) => {
        toast({
          title: `${label} succeeded.`,
        });
      },
      onError: (error, _result) => {
        toast({
          title: `${label} encountered an error: ${error.message}.`,
          variant: "destructive",
        });
      },
      ...props,
    });

    const { variant = isDestructive ? "destructive" : "default", ...rest } = props;

    return (
      <Button disabled={fetching} variant={variant} onClick={run} {...buttonProps} {...rest}>
        {props?.children ?? label}
      </Button>
    );
  };
