"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCModal = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
/**
 * Controlled modal wrapper around the Polaris Web Components s-modal.
 * Uses a ref to call showOverlay()/hideOverlay() so open/closed state is driven by props.
 */
const PolarisWCModal = (props) => {
    const { open, onOpenChange, heading, children } = props;
    const modalRef = (0, react_1.useRef)(null);
    // Sync open prop with s-modal overlay visibility
    (0, react_1.useEffect)(() => {
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
    (0, react_1.useEffect)(() => {
        const modal = modalRef.current;
        if (!modal)
            return;
        const handleClose = () => {
            onOpenChange(false);
        };
        modal.addEventListener("close", handleClose);
        return () => modal.removeEventListener("close", handleClose);
    }, [onOpenChange]);
    return (react_1.default.createElement("s-modal", { ref: modalRef, heading: heading, onAfterHide: () => onOpenChange(false) }, open ? children : null));
};
exports.PolarisWCModal = PolarisWCModal;
//# sourceMappingURL=PolarisWCModal.js.map