import React, { type ReactNode } from "react";
export interface PolarisWCModalProps {
    /**
     * Whether the modal is open. Controls visibility via the s-modal showOverlay/hideOverlay API.
     */
    open: boolean;
    /**
     * Callback when the modal should close (user dismissed or overlay hidden).
     * Pass `false` to the parent so it can set open to false.
     */
    onOpenChange: (open: boolean) => void;
    /**
     * Modal title shown in the header.
     */
    heading?: string;
    /**
     * Modal body and optional footer. Rendered inside the modal.
     */
    children?: ReactNode;
}
/**
 * Controlled modal wrapper around the Polaris Web Components s-modal.
 * Uses a ref to call showOverlay()/hideOverlay() so open/closed state is driven by props.
 */
export declare const PolarisWCModal: (props: PolarisWCModalProps) => React.JSX.Element;
