import React from "react";
import { type ShadcnElements } from "../elements.js";

export const makeShadcnAutoLoadingIndicator = (elements: ShadcnElements) => {
  function ShadcnAutoLoadingIndicator() {
    return (
      <>
        {/*
         TODO 
          - Animated spinner
            - Maybe spinner animation configuration
          - Props to control a label around the spinner
      */}
        <p>Loading...</p>
      </>
    );
  }

  return ShadcnAutoLoadingIndicator;
};
