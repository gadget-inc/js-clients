import React, { type ReactNode } from "react";
export interface PolarisWCModalProps {
    /**
     * The unique ID for the modal element. Used with `commandFor` on s-button elements to open/close the modal.
     */
    id: string;
    /**
     * Modal title shown in the header.
     */
    heading?: string;
    /**
     * Callback when the modal is closed (e.g. backdrop click, escape key, or commandFor="--hide").
     * Use this to sync React state when the modal dismisses.
     */
    onClose?: () => void;
    /**
     * Modal body and optional footer slot content.
     */
    children?: ReactNode;
}
/**
 * Modal wrapper around the Polaris Web Components s-modal.
 * Uses the commandFor/id linking system for opening and closing.
 *
 * To open: render an `<s-button commandFor={id}>` somewhere in your tree.
 * To close from inside: use `<s-button commandFor={id} command="--hide">`.
 */
export declare const PolarisWCModal: (props: PolarisWCModalProps) => React.JSX.Element;
