import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
const FADE_IN_DURATION_MS = 150;
const FADE_OUT_DURATION_MS = 250;
const IS_END_POSITION = {
    "below-start": false,
    "below-end": true,
    "above-start": false,
    "above-end": true,
};
/** z-index for the portaled panel so it appears above page content and stacking contexts */
const POPOVER_Z_INDEX = 9999;
const basePanelStyle = {
    position: "fixed",
    zIndex: POPOVER_Z_INDEX,
    marginTop: "4px",
    marginBottom: "4px",
    maxHeight: "300px",
    overflowY: "auto",
    padding: "8px 0",
    background: "var(--p-color-bg-surface, #ffffff)",
    borderRadius: "var(--p-border-radius-200, 8px)",
    boxShadow: "var(--p-shadow-300, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06))",
    border: "1px solid var(--p-color-border, #e1e3e5)",
};
/**
 * A general popover component using Polaris styling.
 * Portals the panel to document.body to avoid clipping. Positions using the anchor rect.
 */
export const PolarisWCPopover = (props) => {
    const { open, onClose, anchor, children, contentId, contentRef: contentRefProp, maxHeight = "300px", contentProps = {}, position = "below-start", } = props;
    const containerRef = useRef(null);
    const internalContentRef = useRef(null);
    const contentRef = contentRefProp ?? internalContentRef;
    const isEnd = IS_END_POSITION[position];
    const [anchorRect, setAnchorRect] = useState(null);
    const [shouldRender, setShouldRender] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (open) {
            setShouldRender(true);
            requestAnimationFrame(() => setIsVisible(true));
        }
        else {
            setIsVisible(false);
        }
    }, [open]);
    const handleTransitionEnd = () => {
        if (!open)
            setShouldRender(false);
    };
    const updateRect = () => {
        const el = containerRef.current;
        if (!el)
            return;
        const rect = el.getBoundingClientRect();
        setAnchorRect({
            top: rect.top,
            left: rect.left,
            right: typeof window !== "undefined" ? window.innerWidth - rect.right : 0,
            bottom: rect.bottom,
            width: rect.width,
        });
    };
    useLayoutEffect(() => {
        if (!shouldRender) {
            setAnchorRect(null);
            return;
        }
        updateRect();
        const container = containerRef.current;
        const resizeObserver = typeof window !== "undefined" && container ? new ResizeObserver(() => updateRect()) : null;
        if (resizeObserver && container) {
            resizeObserver.observe(container);
        }
        if (typeof window !== "undefined") {
            document.addEventListener("scroll", updateRect, true);
            window.addEventListener("resize", updateRect);
        }
        return () => {
            resizeObserver?.disconnect();
            if (typeof window !== "undefined") {
                document.removeEventListener("scroll", updateRect, true);
                window.removeEventListener("resize", updateRect);
            }
        };
    }, [shouldRender]);
    useEffect(() => {
        if (!shouldRender || !onClose)
            return;
        const handleMouseDown = (event) => {
            if (!open)
                return;
            const path = event.composedPath();
            if (containerRef.current && path.includes(containerRef.current))
                return;
            if (contentRef.current && path.includes(contentRef.current))
                return;
            onClose("click-outside");
        };
        document.addEventListener("mousedown", handleMouseDown);
        return () => document.removeEventListener("mousedown", handleMouseDown);
    }, [shouldRender, open, onClose, contentRef]);
    // Close on Escape
    useEffect(() => {
        if (!open || !onClose)
            return;
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose("escape");
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, onClose]);
    const maxHeightPx = typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight;
    const opacity = shouldRender ? (isVisible ? 1 : 0) : 0;
    const transition = `opacity ${isVisible ? FADE_IN_DURATION_MS : FADE_OUT_DURATION_MS}ms ease-out`;
    const panelStyle = anchorRect === null
        ? { ...basePanelStyle, opacity: 0, maxHeight: maxHeightPx, transition }
        : (() => {
            const r = anchorRect;
            const isBelow = position === "below-start" || position === "below-end";
            return {
                ...basePanelStyle,
                top: isBelow ? `${r.bottom + 4}px` : undefined,
                bottom: isBelow ? undefined : `calc(100vh - ${r.top}px + 4px)`,
                left: isEnd ? undefined : `${r.left}px`,
                right: isEnd ? `${r.right}px` : undefined,
                width: isEnd ? undefined : `${r.width}px`,
                maxHeight: maxHeightPx,
                opacity,
                transition,
            };
        })();
    const panelElement = shouldRender ? (React.createElement("div", { ref: contentRef, id: contentId, onTransitionEnd: handleTransitionEnd, ...contentProps, style: {
            ...panelStyle,
            ...contentProps.style,
        } }, children)) : null;
    return (React.createElement("div", { ref: containerRef, style: { position: "relative" } },
        anchor,
        panelElement != null && createPortal(panelElement, document.body)));
};
//# sourceMappingURL=PolarisWCPopover.js.map