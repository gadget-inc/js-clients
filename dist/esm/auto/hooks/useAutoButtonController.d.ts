import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import type { ActionHookState } from "../../utils.js";
import { type OptionsType } from "../../utils.js";
export type AutoButtonProps<GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>> = {
    /** Which action this button will run */
    action: ActionFunc;
    /** The variables to pass to the action when run */
    variables?: ActionFunc["variablesType"];
    /**
     * Callback function to run when the button is clicked. The action will run after this is called.
     */
    onAction?: () => void;
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
export declare const useAutoButtonController: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends GlobalActionFunction<any> | ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: AutoButtonProps<GivenOptions, SchemaT, ActionFunc>) => {
    result: any;
    fetching: boolean;
    running: boolean;
    error: import("../../utils.js").ErrorWrapper | undefined;
    label: string;
    isDestructive: boolean;
    run: () => void;
    buttonProps: {};
};
