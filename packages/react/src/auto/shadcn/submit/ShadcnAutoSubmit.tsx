import React from "react";
import type { ReactNode } from "react";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
import type { ShadcnElements } from "../elements.js";

export const makeShadcnAutoSubmit = ({ Button }: Pick<ShadcnElements, "Button">) => {

  return function ShadcnAutoSubmit(props: {
    children?: ReactNode;
    isSubmitting?: boolean;
    className?: string;
  }) {
    const { submitResult } = useAutoFormMetadata();
    const isSubmitting = props.isSubmitting ?? submitResult.isSubmitting;

    return (
      <Button 
        type="submit" 
        disabled={isSubmitting}
        {...props}
      >
        {props.children ?? "Submit"}
      </Button>
    );
  };
};