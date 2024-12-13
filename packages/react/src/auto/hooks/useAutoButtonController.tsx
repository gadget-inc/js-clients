import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import { useCallback } from "react";
import { isModelActionMetadata, useActionMetadata } from "../../metadata.js";
import { useAction } from "../../useAction.js";
import { useGlobalAction } from "../../useGlobalAction.js";
import type { ActionHookState } from "../../utils.js";
import { type OptionsType } from "../../utils.js";

export type AutoButtonProps<
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>
> = {
  /** Which action this button will run */
  action: ActionFunc;
  /** The variables to pass to the action when run */
  variables?: ActionFunc["variablesType"];
  /**
   * Callback function to run when the button is clicked. The action will run after this is called.
   */
  onStart?: () => void;
  /**
   * Callback function to run when the button succeeded at running the action
   * Overrides the default behavior of rendering a message to the user to display success
   **/
  onSuccess?: (result: ActionHookState<any, ActionFunc["variablesType"]>) => void;
  /**
   * Callback function to run when the button failed at running the action with an error
   * Overrides the default behavior of rendering a message to the user to display the error
   **/
  onError?: (error: Error, result: ActionHookState<any, ActionFunc["variablesType"]>) => void;
};

export const useAutoButtonController = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>
>(
  props: AutoButtonProps<GivenOptions, SchemaT, ActionFunc>
) => {
  const { action, variables, onStart, onSuccess, onError, ...buttonProps } = props;
  const { metadata, fetching: fetchingMetadata, error: metadataError } = useActionMetadata(action);

  const [{ data: result, fetching: fetchingActionResult, error }, runAction] =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    action.type == "globalAction" ? useGlobalAction(action) : useAction(action);

  let label;
  let isDestructive = false;
  if (metadata) {
    if (isModelActionMetadata(metadata)) {
      label = `${metadata.action.name} ${metadata.name}`;
      isDestructive = metadata.action.isDeleteAction;
    } else {
      label = metadata.name;
    }
  } else {
    label = "loading...";
  }

  const run = useCallback(async () => {
    onStart?.();

    const result = await runAction(variables);
    if (result.error) {
      onError?.(result.error, result);
    } else {
      onSuccess?.(result);
    }
  }, [onStart, runAction, variables, onError, onSuccess]) as () => void;

  return {
    result,
    fetching: fetchingMetadata || fetchingActionResult,
    running: fetchingActionResult,
    error: metadataError || error,
    label,
    isDestructive,
    run,
    buttonProps,
  };
};
