"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCModal = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
/**
 * Modal wrapper around the Polaris Web Components s-modal.
 * Uses the commandFor/id linking system for opening and closing.
 *
 * To open: render an `<s-button commandFor={id}>` somewhere in your tree.
 * To close from inside: use `<s-button commandFor={id} command="--hide">`.
 */
const PolarisWCModal = (props) => {
    const { id, heading, children, onClose } = props;
    const modalRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const modal = modalRef.current;
        if (!modal || !onClose)
            return;
        const handleClose = () => onClose();
        modal.addEventListener("close", handleClose);
        return () => modal.removeEventListener("close", handleClose);
    }, [onClose]);
    return (react_1.default.createElement("s-modal", { ref: modalRef, id: id, heading: heading, padding: "none" }, children));
};
exports.PolarisWCModal = PolarisWCModal;
//# sourceMappingURL=PolarisWCModal.js.map