import React, { useEffect, useRef } from "react";
/**
 * Modal wrapper around the Polaris Web Components s-modal.
 * Uses the commandFor/id linking system for opening and closing.
 *
 * To open: render an `<s-button commandFor={id}>` somewhere in your tree.
 * To close from inside: use `<s-button commandFor={id} command="--hide">`.
 */
export const PolarisWCModal = (props) => {
    const { id, heading, children, onClose } = props;
    const modalRef = useRef(null);
    useEffect(() => {
        const modal = modalRef.current;
        if (!modal || !onClose)
            return;
        const handleClose = () => onClose();
        modal.addEventListener("close", handleClose);
        return () => modal.removeEventListener("close", handleClose);
    }, [onClose]);
    return (React.createElement("s-modal", { ref: modalRef, id: id, heading: heading, padding: "none" }, children));
};
//# sourceMappingURL=PolarisWCModal.js.map