import React from "react";
import type { ShadcnElements } from "../../elements.js";
export type ShadcnAutoTableTextCellElements = Pick<ShadcnElements, "Label" | "TooltipProvider" | "Tooltip" | "TooltipTrigger" | "TooltipContent">;
export declare const makeShadcnAutoTableTextCell: (elements: ShadcnAutoTableTextCellElements) => (props: {
    value: any;
}) => React.JSX.Element;
