import React from "react";
import type { ShadcnElements } from "./elements.js";
export declare const makeShadcnRenderOptionLabel: ({ Label, Badge, Button }: Pick<ShadcnElements, "Label" | "Badge" | "Button">) => (label: React.ReactNode, type: "primary" | "secondary" | "tertiary", clickable?: boolean) => number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | React.JSX.Element | null | undefined;
