import type { ComponentProps } from "react";
import React from "react";
/**
 * `s-badge` from Polaris Web Components does not support dismissing the badge natively
 * This component is a workaround to allow dismissing the badge by adding a small icon button to the badge
 */
export declare const PolarisWCDismissibleBadge: (props: ComponentProps<"s-badge"> & {
    onDismiss?: () => void;
}) => React.JSX.Element;
