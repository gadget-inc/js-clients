import React from "react";
import type { ShadcnElements } from "./elements.js";
export declare const makeShadcnRenderOptionLabel: ({ Label, Badge, Button }: Pick<ShadcnElements, "Label" | "Badge" | "Button">) => (label: React.ReactNode, type: "primary" | "secondary" | "tertiary") => number | boolean | Iterable<React.ReactNode> | React.JSX.Element | null | undefined;
