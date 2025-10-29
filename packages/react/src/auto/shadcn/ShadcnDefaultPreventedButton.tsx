import type { OptionsType } from "@gadgetinc/client-hooks";
import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/core";
import type { ComponentProps } from "react";
import React from "react";
import type { AutoFormProps } from "../AutoForm.js";
import type { ButtonProps, ShadcnElements } from "./elements.js";

type FormContainerT = React.ForwardRefExoticComponent<React.FormHTMLAttributes<HTMLFormElement> & React.RefAttributes<HTMLFormElement>>;

export type ShadcnAutoFormProps<
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>
> = AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<ComponentProps<FormContainerT>, "action" | "defaultValue">;

export const makeDefaultPreventedButton = <Elements extends Pick<ShadcnElements, "Button">>(elements: Elements) => {
  const { Button } = elements;

  const DefaultPreventedButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    return (
      <Button
        ref={ref}
        {...props}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          props.onClick?.(e);
        }}
      />
    );
  });
  DefaultPreventedButton.displayName = "DefaultPreventedButton";
  return DefaultPreventedButton;
};
