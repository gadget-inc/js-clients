import type { ReactNode } from "react";
import React from "react";
import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoSubmit: ({ Button }: Pick<ShadcnElements, "Button">) => (props: {
    children?: ReactNode;
    isSubmitting?: boolean;
    className?: string;
}) => React.JSX.Element;
