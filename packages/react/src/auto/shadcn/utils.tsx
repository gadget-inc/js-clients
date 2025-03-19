import React from "react";

import type { ShadcnElements } from "./elements.js";

export const makeShadcnRenderOptionLabel = ({ Label, Badge, Button }: Pick<ShadcnElements, "Label" | "Badge" | "Button">) => {
  function renderOptionLabel(label: React.ReactNode, type: "primary" | "secondary" | "tertiary", clickable?: boolean) {
    if (typeof label === "string") {
      switch (type) {
        case "primary":
          return <Label className={`font-semibold ${clickable ? "cursor-pointer" : "cursor-text"}`}>{label}</Label>;
        case "secondary":
          return <Label className={`text-sm text-gray-500 ${clickable ? "cursor-pointer" : "cursor-text"}`}>{label}</Label>;
        case "tertiary":
          return (
            <Badge
              className={`text-xs px-3 py-1 inline-flex items-center justify-center ${clickable ? "cursor-pointer" : "cursor-text"}`}
              variant={"outline"}
            >
              {label}
            </Badge>
          );
        default:
          throw new Error("Invalid option type");
      }
    }
    return label;
  }

  return renderOptionLabel;
};
