import type { ReactNode } from "react";
import React from "react";
import type { ButtonProps, ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoSubmit: ({ Button }: Pick<ShadcnElements, "Button">) => (props: {
    children?: ReactNode;
    isSubmitting?: boolean;
    className?: string;
} & ButtonProps) => React.JSX.Element;
