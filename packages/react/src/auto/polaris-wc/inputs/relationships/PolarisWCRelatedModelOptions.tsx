import React, { useCallback, useEffect, useRef } from "react";
import type { DisplayedRecordOption } from "../../../interfaces/AutoRelationshipInputProps.js";
import { PolarisWCPopover } from "../../commonComponents/PolarisWCPopover.js";
import { renderOptionLabel } from "./utils.js";

type RelatedModelOptionsProps = {
  options: DisplayedRecordOption[];
  records?: Record<string, any>[];
  isLoading?: boolean;
  errorMessage?: string;
  checkSelected?: (id: string) => boolean;
  onSelect: (record: Record<string, any>) => void;
  actions?: React.ReactNode[];
  renderOption?: (option: DisplayedRecordOption) => React.ReactNode;
  listboxId?: string;
  /** When true, shows a checkbox on each option row (e.g. for hasMany / hasManyThrough). */
  showCheckbox?: boolean;
  /** Whether more options can be loaded (shows a sentinel element for infinite scroll). */
  canLoadMore?: boolean;
  /** Callback fired when the sentinel element at the bottom becomes visible (for infinite scroll). */
  onLoadMore?: () => void;
};

const getErrorMessage = (errorMessage: string) => {
  if (errorMessage.includes("The API key is not valid")) {
    return "Invalid API key. Check the Gadget connection settings in the Provider component.";
  }
  if (errorMessage.includes("GGT_INVALID_API_KEY")) {
    return "Invalid API key. Check the Gadget connection settings in the Provider component.";
  }
  return errorMessage;
};

export const PolarisWCRelatedModelOptions = (props: RelatedModelOptionsProps) => {
  const { checkSelected, onSelect, isLoading, errorMessage, options, records, actions, listboxId, showCheckbox } = props;

  const handleClick = useCallback(
    (id: string) => {
      const record = records?.find((record) => record.id === id) ?? { id };
      const { createdAt: _createdAt, updatedAt: _updatedAt, ...recordWithoutTimestamps } = record;
      onSelect(recordWithoutTimestamps);
    },
    [records, onSelect]
  );

  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  useDetectScrolledToBottom({ loadMoreRef, onLoadMore: props.onLoadMore });

  if (errorMessage) {
    return (
      <div style={{ padding: "12px", textAlign: "center" }}>
        <s-text tone="critical">{getErrorMessage(errorMessage)}</s-text>
      </div>
    );
  }

  return (
    <div id={listboxId} role="listbox">
      {actions}
      {options.map((option) => {
        if (props.renderOption) {
          return props.renderOption(option);
        }

        const isSelected = checkSelected?.(option.id) ?? false;

        return (
          <PolarisWCSelectableOption
            key={option.id}
            option={option}
            selected={isSelected}
            onClick={() => handleClick(option.id)}
            showCheckbox={showCheckbox}
          />
        );
      })}
      {!isLoading && options.length === 0 && (
        <div style={{ padding: "12px", textAlign: "center" }}>
          <s-text>No records found</s-text>
        </div>
      )}
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center", padding: "12px" }}>
          <s-spinner size="base" />
        </div>
      ) : props.canLoadMore ? (
        <div ref={loadMoreRef} style={{ display: "flex", justifyContent: "center", padding: "8px" }}>
          <s-spinner size="base" />
        </div>
      ) : null}
    </div>
  );
};

const selectedBg = "var(--p-color-bg-surface-selected, #f1f2f4)";
const hoverBg = "var(--p-color-bg-surface-hover, #f7f7f7)";

const PolarisWCSelectableOption = (props: {
  option: DisplayedRecordOption;
  selected: boolean;
  onClick: () => void;
  showCheckbox?: boolean;
}) => {
  const { option, selected, onClick, showCheckbox } = props;
  const showSelectedBackground = !showCheckbox && selected;

  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      onClick={onClick}
      style={{
        display: "flex",
        width: "100%",
        padding: "8px 12px",
        border: "none",
        background: showSelectedBackground ? selectedBg : "transparent",
        cursor: "pointer",
        textAlign: "left",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px",
      }}
      onMouseEnter={(e) => {
        if (showCheckbox || !selected) {
          e.currentTarget.style.background = hoverBg;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = showSelectedBackground ? selectedBg : "transparent";
      }}
    >
      {showCheckbox && <s-checkbox checked={selected}></s-checkbox>}
      <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0, flex: 1 }}>
        {renderOptionLabel(option.primary, "primary")}
        {option.secondary && renderOptionLabel(option.secondary, "secondary")}
      </div>
      {option.tertiary && renderOptionLabel(option.tertiary, "tertiary")}
    </button>
  );
};

export const PolarisWCRelatedModelOptionsPopover = (
  props: RelatedModelOptionsProps & {
    active: boolean;
    activator: React.ReactElement;
    onClose: () => void;
    search?: React.ReactNode;
    onScrolledToBottom?: () => void;
  }
) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { onScrolledToBottom } = props;

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current || !onScrolledToBottom) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    const isNearBottom = scrollTop + clientHeight >= scrollHeight - 50;

    if (isNearBottom) {
      onScrolledToBottom();
    }
  }, [onScrolledToBottom]);

  return (
    <PolarisWCPopover
      open={props.active}
      onClose={props.onClose}
      position="below-end"
      anchor={props.activator}
      maxHeight="350px"
      contentProps={{
        style: {
          width: "310px",
          padding: 0,
          overflow: "hidden",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "350px",
        }}
      >
        {props.search && (
          <div
            style={{
              borderBottom: "1px solid var(--p-color-border, #dfe3e8)",
              flexShrink: 0,
            }}
          >
            {props.search}
          </div>
        )}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          style={{
            overflowY: "auto",
            flex: 1,
            maxHeight: "292px",
          }}
        >
          <PolarisWCRelatedModelOptions
            options={props.options}
            records={props.records}
            onSelect={props.onSelect}
            isLoading={props.isLoading}
            renderOption={props.renderOption}
            actions={props.actions}
            listboxId={props.listboxId}
            showCheckbox={props.showCheckbox}
          />
        </div>
      </div>
    </PolarisWCPopover>
  );
};

const useDetectScrolledToBottom = (props: { loadMoreRef: React.RefObject<HTMLDivElement | null>; onLoadMore?: () => void }) => {
  const { loadMoreRef } = props;
  useEffect(() => {
    if (!loadMoreRef?.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          props.onLoadMore?.();
        }
      },
      {
        root: null,
        threshold: 1,
      }
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [props, loadMoreRef, props.onLoadMore]);
};

export const PolarisWCRelatedModelOptionsSearch = (props: {
  modelName: string;
  value: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
  ariaControls?: string;
}) => {
  const { modelName, value, onChange, onFocus, ariaControls } = props;

  const handleChange = useCallback(
    (event: Event) => {
      const target = event.currentTarget as HTMLInputElement;
      onChange(target.value ?? "");
    },
    [onChange]
  );

  return (
    <div style={{ padding: "12px" }} onClick={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}>
      <s-text-field
        label=""
        value={value}
        onChange={handleChange}
        onFocus={onFocus}
        placeholder={`Find ${modelName}`}
        autocomplete="off"
        aria-controls={ariaControls}
      />
    </div>
  );
};
