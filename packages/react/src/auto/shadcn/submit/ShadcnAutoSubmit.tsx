import { LoaderIcon } from "lucide-react";
import type { ReactNode } from "react";
import React from "react";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
import type { ButtonProps, ShadcnElements } from "../elements.js";

/**
 * Make the Shadcn component for the auto submit button
 * @param elements - The Shadcn elements to use
 * @returns The Shadcn component for the auto submit button
 */
export const makeShadcnAutoSubmit = ({ Button }: Pick<ShadcnElements, "Button">) => {
  /**
   * Auto form submit button button for use within <AutoForm/>
   */
  function ShadcnAutoSubmit(props: { children?: ReactNode; isSubmitting?: boolean; className?: string } & ButtonProps) {
    const { submitResult, submit } = useAutoFormMetadata();
    const isSubmitting = props.isSubmitting ?? submitResult.isSubmitting;

    return (
      <Button
        type="submit"
        disabled={isSubmitting}
        {...props}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void submit();
          props.onClick?.(e);
        }}
      >
        {isSubmitting ? <LoaderIcon className="h-4 w-4 animate-spin" /> : props.children ?? "Submit"}
      </Button>
    );
  }

  return ShadcnAutoSubmit;
};
