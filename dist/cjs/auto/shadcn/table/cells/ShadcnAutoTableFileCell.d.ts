import * as React from "react";
import type { FileValueType } from "../../../../utils.js";
import type { ShadcnElements } from "../../elements.js";
export declare const makeShadcnAutoTableFileCell: (elements: Pick<ShadcnElements, "Label" | "Avatar" | "AvatarImage" | "AvatarFallback">) => (props: {
    value: FileValueType;
}) => React.JSX.Element;
