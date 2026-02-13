import React, { useEffect, useRef, type ReactNode } from "react";

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
export const PolarisWCModal = (props: PolarisWCModalProps) => {
  const { open, onOpenChange, heading, children } = props;
  const modalRef = useRef<HTMLElement>(null);

  // Sync open prop with s-modal overlay visibility
  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    const el = modal as unknown as { showOverlay?: () => void; hideOverlay?: () => void };
    if (open) {
      const frameId = requestAnimationFrame(() => {
        el.showOverlay?.();
      });
      return () => cancelAnimationFrame(frameId);
    } else {
      el.hideOverlay?.();
    }
  }, [open]);

  // Notify parent when the modal is closed (e.g. backdrop click, escape, onAfterHide)
  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    const handleClose = () => {
      onOpenChange(false);
    };

    modal.addEventListener("close", handleClose);
    return () => modal.removeEventListener("close", handleClose);
  }, [onOpenChange]);

  return (
    <s-modal ref={modalRef as any} heading={heading} onAfterHide={() => onOpenChange(false)}>
      {open ? children : null}
    </s-modal>
  );
};
