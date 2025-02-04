import React from "react";

import type { ShadcnElements } from "./elements.js";

export const makeShadcnRenderOptionLabel = ({ Label, Badge, Button }: Pick<ShadcnElements, "Label" | "Badge" | "Button">) => {
  function renderOptionLabel(label: React.ReactNode, type: "primary" | "secondary" | "tertiary") {
    if (typeof label === "string") {
      switch (type) {
        case "primary":
          return <Label>{label}</Label>;
        case "secondary":
          return <Badge>{label}</Badge>;
        case "tertiary":
          return <Button variant="outline">{label}</Button>;
      }
    }
    return label;
  }

  return renderOptionLabel;
};
