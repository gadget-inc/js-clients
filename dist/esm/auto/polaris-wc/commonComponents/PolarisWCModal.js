import React, { useEffect, useRef } from "react";
/**
 * Controlled modal wrapper around the Polaris Web Components s-modal.
 * Uses a ref to call showOverlay()/hideOverlay() so open/closed state is driven by props.
 */
export const PolarisWCModal = (props) => {
    const { open, onOpenChange, heading, children } = props;
    const modalRef = useRef(null);
    // Sync open prop with s-modal overlay visibility
    useEffect(() => {
        const modal = modalRef.current;
        if (!modal)
            return;
        const el = modal;
        if (open) {
            const frameId = requestAnimationFrame(() => {
                el.showOverlay?.();
            });
            return () => cancelAnimationFrame(frameId);
        }
        else {
            el.hideOverlay?.();
        }
    }, [open]);
    // Notify parent when the modal is closed (e.g. backdrop click, escape, onAfterHide)
    useEffect(() => {
        const modal = modalRef.current;
        if (!modal)
            return;
        const handleClose = () => {
            onOpenChange(false);
        };
        modal.addEventListener("close", handleClose);
        return () => modal.removeEventListener("close", handleClose);
    }, [onOpenChange]);
    return (React.createElement("s-modal", { ref: modalRef, heading: heading, onAfterHide: () => onOpenChange(false) }, open ? children : null));
};
//# sourceMappingURL=PolarisWCModal.js.map