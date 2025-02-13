import { LoaderIcon } from "lucide-react";
import type { ReactNode } from "react";
import React from "react";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
import type { ButtonProps, ShadcnElements } from "../elements.js";

export const makeShadcnAutoSubmit = ({ Button }: Pick<ShadcnElements, "Button">) => {
  function ShadcnAutoSubmit(props: { children?: ReactNode; isSubmitting?: boolean; className?: string } & ButtonProps) {
    const { submitResult } = useAutoFormMetadata();
    const isSubmitting = props.isSubmitting ?? submitResult.isSubmitting;

    return (
      <Button type="submit" disabled={isSubmitting} {...props}>
        {isSubmitting ? <LoaderIcon className="h-4 w-4 animate-spin" /> : props.children ?? "Submit"}
      </Button>
    );
  }

  return ShadcnAutoSubmit;
};
