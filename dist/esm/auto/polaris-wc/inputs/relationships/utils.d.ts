import React from "react";
/**
 * Renders an option label using Polaris Web Components.
 * @param label - The label to render (string or ReactNode)
 * @param type - The type of label: primary, secondary, or tertiary
 */
export declare const renderOptionLabel: (label: React.ReactNode, type: "primary" | "secondary" | "tertiary") => number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | React.JSX.Element | null | undefined;
