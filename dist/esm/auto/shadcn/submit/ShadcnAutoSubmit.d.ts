import type { ReactNode } from "react";
import React from "react";
import type { ButtonProps, ShadcnElements } from "../elements.js";
/**
 * Make the Shadcn component for the auto submit button
 * @param elements - The Shadcn elements to use
 * @returns The Shadcn component for the auto submit button
 */
export declare const makeShadcnAutoSubmit: ({ Button }: Pick<ShadcnElements, "Button">) => (props: {
    children?: ReactNode;
    isSubmitting?: boolean;
    className?: string;
} & ButtonProps) => React.JSX.Element;
