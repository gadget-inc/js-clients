import React, { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type ReactElement, type ReactNode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { PolarisWCPopover } from "../commonComponents/PolarisWCPopover.js";
import { PolarisWCTruncatedTextWithTooltip } from "../commonComponents/PolarisWCTruncatedTextWithTooltip.js";

export interface PolarisWCComboboxProps {
  /**
   * Callback fired when the bottom of the listbox is reached. Use to lazy load when listbox option data is paginated.
   */
  onScrolledToBottom?: () => void;
  /**
   * Allows more than one option to be selected
   */
  allowMultiple?: boolean;
  /**
   * Whether or not more options are available to lazy load when the bottom of the listbox is reached.
   */
  willLoadMoreOptions?: boolean;
  /**
   * Whether the field is required
   */
  required?: boolean;
  /**s
   * Label for the combobox
   */
  label?: ReactNode;
  /**
   * Placeholder text for the search input
   */
  placeholder?: string;
  /**
   * Whether the combobox is disabled
   */
  disabled?: boolean;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Vertical content to display above the text input (e.g., selected tags)
   */
  verticalContent?: ReactElement;
  /**
   * The options content to display inside the popover
   */
  children?: ReactNode;
  /**
   * Controlled input value
   */
  value?: string;
  /**
   * Callback when input value changes
   */
  onChange?: (value: string) => void;
  /**
   * Callback when the popover opens
   */
  onOpen?: () => void;
  /**
   * Callback when the popover closes
   */
  onClose?: () => void;
  /**
   * The HTML ID of the combobox
   */
  id?: string;
}

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
export const PolarisWCCombobox = (props: PolarisWCComboboxProps) => {
  const {
    onScrolledToBottom,
    allowMultiple,
    willLoadMoreOptions,
    required,
    label,
    placeholder,
    disabled,
    error,
    verticalContent,
    children,
    value: controlledValue,
    onChange,
    onOpen,
    onClose,
    id: propId,
  } = props;

  const generatedId = useId();
  const id = propId ?? generatedId;
  const inputId = `${id}-input`;

  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLElement>(null);
  const isMouseDownInsideRef = useRef(false);

  // Refs for injecting vertical content into shadow DOM
  const verticalContentRootRef = useRef<Root | null>(null);
  const verticalContentContainerRef = useRef<HTMLDivElement | null>(null);

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  // HACK: Inject vertical content into the shadow DOM of s-text-field
  // This injects the verticalContent React element into the .input-wrapper div
  useLayoutEffect(() => {
    const inputElement = inputRef.current;
    if (!inputElement) return;

    const setupContainer = () => {
      const shadowRoot = inputElement.shadowRoot;
      if (!shadowRoot) return false;

      const inputWrapper = shadowRoot.querySelector(".input-wrapper") as HTMLDivElement;
      if (!inputWrapper) return false;

      // HACK: Apply styles to shadow DOM elements
      inputWrapper.style.flexDirection = "column";

      const contentDiv = inputWrapper.querySelector(".content") as HTMLDivElement;
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
        verticalContentRootRef.current = createRoot(container);
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
  useEffect(() => {
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
  const openDropdown = useCallback(() => {
    if (isOpen) return;
    setIsOpen(true);
    onOpen?.();
  }, [isOpen, onOpen]);

  // Close the dropdown (reason when closed by popover: escape or click-outside)
  const closeDropdown = useCallback(
    (reason?: "escape" | "click-outside") => {
      if (!isOpen) return;
      setIsOpen(false);
      onClose?.();
      if (reason === "escape") {
        const input = inputRef.current;
        if (input) {
          const actualInput = input.shadowRoot?.querySelector("input") || input.querySelector("input");
          actualInput?.focus();
        }
      }
    },
    [isOpen, onClose]
  );

  const handleInputChange = useCallback(
    (event: Event) => {
      const target = event.currentTarget as HTMLInputElement;
      const newValue = target.value ?? "";

      if (onChange) {
        onChange(newValue);
      } else {
        setInternalValue(newValue);
      }

      // Open dropdown when typing
      openDropdown();
    },
    [onChange, openDropdown]
  );

  const handleInputFocus = useCallback(() => {
    openDropdown();
  }, [openDropdown]);

  const handleInputBlur = useCallback(
    (event: FocusEvent) => {
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
      const relatedTarget = event.relatedTarget as HTMLElement | null;
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
    },
    [closeDropdown]
  );

  // Track mousedown to prevent blur from closing popover when clicking options
  const handleContainerMouseDown = useCallback(() => {
    isMouseDownInsideRef.current = true;
  }, []);

  const handleContainerMouseUp = useCallback(() => {
    // Reset the flag after a short delay
    requestAnimationFrame(() => {
      isMouseDownInsideRef.current = false;
    });
  }, []);

  // Handle scroll for infinite loading
  const handleScroll = useCallback(() => {
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
  useEffect(() => {
    const listbox = listboxRef.current;
    if (listbox && onScrolledToBottom) {
      listbox.addEventListener("scroll", handleScroll);
      return () => {
        listbox.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll, onScrolledToBottom, isOpen]);

  // Set up blur listener on the input element
  useEffect(() => {
    const inputElement = inputRef.current;
    if (!inputElement) return;

    // The actual input is inside the shadow DOM of s-text-field
    // We need to listen on the host element for blur events that bubble
    inputElement.addEventListener("focusout", handleInputBlur as EventListener);

    return () => {
      inputElement.removeEventListener("focusout", handleInputBlur as EventListener);
    };
  }, [handleInputBlur]);

  // Ensure label is always a string for the web component
  const inputLabel: string = typeof label === "string" ? label : "";

  const dropdownId = `${id}-listbox`;

  return (
    <div
      ref={containerRef}
      onMouseDown={handleContainerMouseDown}
      onMouseUp={handleContainerMouseUp}
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Label if it's a ReactElement */}
      {label && typeof label !== "string" && <div style={{ marginBottom: "4px" }}>{label}</div>}

      {/* NOTE: verticalContent is now injected directly into the s-text-field shadow DOM */}

      <PolarisWCPopover
        open={isOpen}
        onClose={closeDropdown}
        anchor={
          <s-text-field
            ref={inputRef as any}
            id={inputId}
            label={inputLabel}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            error={error}
            autocomplete="off"
            onInput={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            {...({
              "aria-expanded": isOpen,
              "aria-controls": dropdownId,
              "aria-autocomplete": "list",
              role: "combobox",
            } as any)}
          />
        }
        contentId={dropdownId}
        contentRef={listboxRef}
        contentProps={{
          role: "listbox",
          ...(allowMultiple && { "aria-multiselectable": true }),
        }}
      >
        {children}
      </PolarisWCPopover>
    </div>
  );
};

export interface PolarisWCComboboxOptionProps {
  /** Display text for the option (must be a string). */
  text: string;
  /** Whether this option is selected. */
  selected?: boolean;
  /** Callback when the option is clicked. */
  onClick?: () => void;
  /** When true, shows a checkbox to indicate selected state instead of only background color. */
  multiselect?: boolean;
}

/**
 * A clickable option row for use inside PolarisWCCombobox listbox.
 * Use `text` for the label and set `multiselect` when the combobox allows multiple selection.
 */
export const PolarisWCComboboxOption = ({ text, selected, onClick, multiselect }: PolarisWCComboboxOptionProps) => (
  <div
    role="option"
    aria-selected={selected}
    onClick={onClick}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 12px",
      cursor: "pointer",
      fontSize: "14px",
      lineHeight: "20px",
      backgroundColor: !multiselect && selected ? "var(--p-color-bg-surface-selected, #f1f2f4)" : "transparent",
      color: "var(--p-color-text, #1a1a1a)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "var(--p-color-bg-surface-hover, #f7f7f7)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = !multiselect && selected ? "var(--p-color-bg-surface-selected, #f1f2f4)" : "transparent";
    }}
  >
    {multiselect && <s-checkbox checked={selected}></s-checkbox>}
    <PolarisWCTruncatedTextWithTooltip text={text} />
  </div>
);
