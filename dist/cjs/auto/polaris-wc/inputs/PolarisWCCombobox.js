"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCComboboxOption = exports.PolarisWCCombobox = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const client_1 = require("react-dom/client");
const PolarisWCPopover_js_1 = require("../commonComponents/PolarisWCPopover.js");
const PolarisWCTruncatedTextWithTooltip_js_1 = require("../commonComponents/PolarisWCTruncatedTextWithTooltip.js");
/**
 * A combobox component using Polaris Web Components.
 * Combines a text input with a popover dropdown for searchable option selection.
 *
 * @example
 * ```tsx
 * <PolarisWCCombobox
 *   label="Select an option"
 *   placeholder="Search..."
 *   onScrolledToBottom={() => loadMore()}
 * >
 *   <s-option value="1">Option 1</s-option>
 *   <s-option value="2">Option 2</s-option>
 * </PolarisWCCombobox>
 * ```
 */
const PolarisWCCombobox = (props) => {
    const { onScrolledToBottom, allowMultiple, willLoadMoreOptions, required, label, placeholder, disabled, error, verticalContent, children, value: controlledValue, onChange, onOpen, onClose, id: propId, } = props;
    const generatedId = (0, react_1.useId)();
    const id = propId ?? generatedId;
    const inputId = `${id}-input`;
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [internalValue, setInternalValue] = (0, react_1.useState)("");
    const containerRef = (0, react_1.useRef)(null);
    const listboxRef = (0, react_1.useRef)(null);
    const inputRef = (0, react_1.useRef)(null);
    const isMouseDownInsideRef = (0, react_1.useRef)(false);
    // Refs for injecting vertical content into shadow DOM
    const verticalContentRootRef = (0, react_1.useRef)(null);
    const verticalContentContainerRef = (0, react_1.useRef)(null);
    const value = controlledValue !== undefined ? controlledValue : internalValue;
    // HACK: Inject vertical content into the shadow DOM of s-text-field
    // This injects the verticalContent React element into the .input-wrapper div
    (0, react_1.useLayoutEffect)(() => {
        const inputElement = inputRef.current;
        if (!inputElement)
            return;
        const setupContainer = () => {
            const shadowRoot = inputElement.shadowRoot;
            if (!shadowRoot)
                return false;
            const inputWrapper = shadowRoot.querySelector(".input-wrapper");
            if (!inputWrapper)
                return false;
            // HACK: Apply styles to shadow DOM elements
            inputWrapper.style.flexDirection = "column";
            const contentDiv = inputWrapper.querySelector(".content");
            if (contentDiv) {
                contentDiv.style.width = "100%";
                contentDiv.style.paddingBottom = "8px";
            }
            // Create container if it doesn't exist
            if (!verticalContentContainerRef.current) {
                const container = document.createElement("div");
                container.className = "vertical-content-container";
                container.style.cssText = "width: 100%; box-sizing: border-box;";
                inputWrapper.insertBefore(container, inputWrapper.firstChild);
                verticalContentContainerRef.current = container;
                verticalContentRootRef.current = (0, client_1.createRoot)(container);
            }
            return true;
        };
        // Try to set up immediately
        if (!setupContainer()) {
            // Shadow DOM might not be ready yet, poll for it
            const interval = setInterval(() => {
                if (setupContainer()) {
                    clearInterval(interval);
                    // Render after setup
                    verticalContentRootRef.current?.render(verticalContent ?? null);
                }
            }, 10);
            return () => clearInterval(interval);
        }
        // Render the vertical content
        verticalContentRootRef.current?.render(verticalContent ?? null);
    }, [verticalContent]);
    // Cleanup on unmount
    (0, react_1.useEffect)(() => {
        return () => {
            // Unmount the React root
            verticalContentRootRef.current?.unmount();
            verticalContentRootRef.current = null;
            // Remove the container element from the shadow DOM
            verticalContentContainerRef.current?.remove();
            verticalContentContainerRef.current = null;
        };
    }, []);
    // Open the dropdown
    const openDropdown = (0, react_1.useCallback)(() => {
        if (isOpen)
            return;
        setIsOpen(true);
        onOpen?.();
    }, [isOpen, onOpen]);
    // Close the dropdown (reason when closed by popover: escape or click-outside)
    const closeDropdown = (0, react_1.useCallback)((reason) => {
        if (!isOpen)
            return;
        setIsOpen(false);
        onClose?.();
        if (reason === "escape") {
            const input = inputRef.current;
            if (input) {
                const actualInput = input.shadowRoot?.querySelector("input") || input.querySelector("input");
                actualInput?.focus();
            }
        }
    }, [isOpen, onClose]);
    const handleInputChange = (0, react_1.useCallback)((event) => {
        const target = event.currentTarget;
        const newValue = target.value ?? "";
        if (onChange) {
            onChange(newValue);
        }
        else {
            setInternalValue(newValue);
        }
        // Open dropdown when typing
        openDropdown();
    }, [onChange, openDropdown]);
    const handleInputFocus = (0, react_1.useCallback)(() => {
        openDropdown();
    }, [openDropdown]);
    const handleInputBlur = (0, react_1.useCallback)((event) => {
        // Don't close if clicking inside the dropdown or container
        if (isMouseDownInsideRef.current) {
            isMouseDownInsideRef.current = false;
            // Refocus the input to maintain focus
            const input = inputRef.current;
            if (input) {
                // Find the actual input element inside s-text-field
                const actualInput = input.shadowRoot?.querySelector("input") || input.querySelector("input");
                actualInput?.focus();
            }
            return;
        }
        // Check if focus is moving to something inside our container
        const relatedTarget = event.relatedTarget;
        if (relatedTarget && containerRef.current?.contains(relatedTarget)) {
            return;
        }
        // Check if focus is moving into the dropdown
        if (relatedTarget && listboxRef.current?.contains(relatedTarget)) {
            return;
        }
        // Close with a small delay to allow click events to fire first
        requestAnimationFrame(() => {
            // Double-check we're still not focused inside
            const activeElement = document.activeElement;
            if (containerRef.current?.contains(activeElement)) {
                return;
            }
            closeDropdown();
        });
    }, [closeDropdown]);
    // Track mousedown to prevent blur from closing popover when clicking options
    const handleContainerMouseDown = (0, react_1.useCallback)(() => {
        isMouseDownInsideRef.current = true;
    }, []);
    const handleContainerMouseUp = (0, react_1.useCallback)(() => {
        // Reset the flag after a short delay
        requestAnimationFrame(() => {
            isMouseDownInsideRef.current = false;
        });
    }, []);
    // Handle scroll for infinite loading
    const handleScroll = (0, react_1.useCallback)(() => {
        if (!listboxRef.current || !willLoadMoreOptions || !onScrolledToBottom) {
            return;
        }
        const { scrollTop, scrollHeight, clientHeight } = listboxRef.current;
        const isNearBottom = scrollTop + clientHeight >= scrollHeight - 50;
        if (isNearBottom) {
            onScrolledToBottom();
        }
    }, [willLoadMoreOptions, onScrolledToBottom]);
    // Set up scroll listener (re-run when isOpen so we attach once panel is mounted)
    (0, react_1.useEffect)(() => {
        const listbox = listboxRef.current;
        if (listbox && onScrolledToBottom) {
            listbox.addEventListener("scroll", handleScroll);
            return () => {
                listbox.removeEventListener("scroll", handleScroll);
            };
        }
    }, [handleScroll, onScrolledToBottom, isOpen]);
    // Set up blur listener on the input element
    (0, react_1.useEffect)(() => {
        const inputElement = inputRef.current;
        if (!inputElement)
            return;
        // The actual input is inside the shadow DOM of s-text-field
        // We need to listen on the host element for blur events that bubble
        inputElement.addEventListener("focusout", handleInputBlur);
        return () => {
            inputElement.removeEventListener("focusout", handleInputBlur);
        };
    }, [handleInputBlur]);
    // Ensure label is always a string for the web component
    const inputLabel = typeof label === "string" ? label : "";
    const dropdownId = `${id}-listbox`;
    return (react_1.default.createElement("div", { ref: containerRef, onMouseDown: handleContainerMouseDown, onMouseUp: handleContainerMouseUp, style: {
            display: "flex",
            flexDirection: "column",
            position: "relative",
        } },
        label && typeof label !== "string" && react_1.default.createElement("div", { style: { marginBottom: "4px" } }, label),
        react_1.default.createElement(PolarisWCPopover_js_1.PolarisWCPopover, { open: isOpen, onClose: closeDropdown, anchor: react_1.default.createElement("s-text-field", { ref: inputRef, id: inputId, label: inputLabel, value: value, placeholder: placeholder, disabled: disabled, required: required, error: error, autocomplete: "off", onInput: handleInputChange, onFocus: handleInputFocus, onBlur: handleInputBlur, ...{
                    "aria-expanded": isOpen,
                    "aria-controls": dropdownId,
                    "aria-autocomplete": "list",
                    role: "combobox",
                } }), contentId: dropdownId, contentRef: listboxRef, contentProps: {
                role: "listbox",
                ...(allowMultiple && { "aria-multiselectable": true }),
            } }, children)));
};
exports.PolarisWCCombobox = PolarisWCCombobox;
/**
 * A clickable option row for use inside PolarisWCCombobox listbox.
 * Use `text` for the label and set `multiselect` when the combobox allows multiple selection.
 */
const PolarisWCComboboxOption = ({ text, selected, onClick, multiselect }) => (react_1.default.createElement("div", { role: "option", "aria-selected": selected, onClick: onClick, style: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 12px",
        cursor: "pointer",
        fontSize: "14px",
        lineHeight: "20px",
        backgroundColor: !multiselect && selected ? "var(--p-color-bg-surface-selected, #f1f2f4)" : "transparent",
        color: "var(--p-color-text, #1a1a1a)",
    }, onMouseEnter: (e) => {
        e.currentTarget.style.backgroundColor = "var(--p-color-bg-surface-hover, #f7f7f7)";
    }, onMouseLeave: (e) => {
        e.currentTarget.style.backgroundColor = !multiselect && selected ? "var(--p-color-bg-surface-selected, #f1f2f4)" : "transparent";
    } },
    multiselect && react_1.default.createElement("s-checkbox", { checked: selected }),
    react_1.default.createElement(PolarisWCTruncatedTextWithTooltip_js_1.PolarisWCTruncatedTextWithTooltip, { text: text })));
exports.PolarisWCComboboxOption = PolarisWCComboboxOption;
//# sourceMappingURL=PolarisWCCombobox.js.map