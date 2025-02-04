import React from "react";

import type { ShadcnElements } from "./elements.js";

export const makeShadcnRenderOptionLabel = ({ Label, Badge, Button }: Pick<ShadcnElements, "Label" | "Badge" | "Button">) => {
  function renderOptionLabel(label: React.ReactNode, type: "primary" | "secondary" | "tertiary") {
    if (typeof label === "string") {
      switch (type) {
        case "primary":
          return <Label className="font-semibold">{label}</Label>;
        case "secondary":
          return <Label className="text-sm text-gray-500">{label}</Label>;
        case "tertiary":
          return <Badge variant={"outline"}>{label}</Badge>;
        default:
          throw new Error("Invalid option type");
      }
    }
    return label;
  }

  return renderOptionLabel;
};
