import type { ButtonHTMLAttributes, ReactNode } from "react";
import React from "react";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
import type { ShadcnElements } from "../elements.js";

export const makeShadcnAutoSubmit = ({ Button }: Pick<ShadcnElements, "Button">) => {
  function ShadcnAutoSubmit(
    props: { children?: ReactNode; isSubmitting?: boolean; className?: string } & Partial<ButtonHTMLAttributes<HTMLButtonElement>>
  ) {
    const { submitResult } = useAutoFormMetadata();
    const isSubmitting = props.isSubmitting ?? submitResult.isSubmitting;

    return (
      <Button type="submit" disabled={isSubmitting} {...props}>
        {props.children ?? "Submit"}
      </Button>
    );
  }

  return ShadcnAutoSubmit;
};
