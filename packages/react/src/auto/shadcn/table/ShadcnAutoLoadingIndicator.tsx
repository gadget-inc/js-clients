import { LoaderIcon } from "lucide-react";
import React from "react";
import { type ShadcnElements } from "../elements.js";

export const makeShadcnAutoLoadingIndicator = (elements: ShadcnElements) => {
  function ShadcnAutoLoadingIndicator(props: { className?: string }) {
    return (
      <>
        <LoaderIcon className={`w-4 h-4 animate-spin ${props.className}`} />
      </>
    );
  }

  return ShadcnAutoLoadingIndicator;
};
