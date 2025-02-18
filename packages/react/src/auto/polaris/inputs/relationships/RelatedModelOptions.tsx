import type { AutoSelection, TextFieldProps } from "@shopify/polaris";
import { Icon, Listbox, Popover, Scrollable, TextField } from "@shopify/polaris";
import { SearchIcon } from "@shopify/polaris-icons";
import React from "react";
import type { DisplayedRecordOption } from "../../../interfaces/AutoRelationshipInputProps.js";
import { ListMessage, NoRecordsMessage, SelectableOption, getErrorMessage } from "./PolarisListMessages.js";

type RelatedModelOptionsProps = {
  options: DisplayedRecordOption[];
  records?: Record<string, any>[];
  isLoading?: boolean;
  errorMessage?: string;
  checkSelected?: (id: string) => boolean;
  onSelect: (record: Record<string, any>) => void;
  autoSelection?: AutoSelection;
  actions?: React.ReactNode[];
  renderOption?: (option: DisplayedRecordOption) => React.ReactNode;
};

export const RelatedModelOptions = (props: RelatedModelOptionsProps) => {
  const { checkSelected, onSelect, isLoading, errorMessage, options, records, actions } = props;

  const listBoxOptions = [
    ...(actions ?? []),
    ...options.map((option) => {
      return props.renderOption ? (
        props.renderOption(option)
      ) : (
        <SelectableOption {...option} selected={checkSelected?.(option.id) ?? false} key={option.id} />
      );
    }),
  ];

  return (
    <Listbox
      autoSelection={props.autoSelection}
      onSelect={(id) => {
        const record = records?.find((record) => record.id === id) ?? { id };
        const { createdAt: _createdAt, updatedAt: _updatedAt, ...recordWithoutTimestamps } = record;
        onSelect(recordWithoutTimestamps);
      }}
    >
      {errorMessage ? (
        <ListMessage message={getErrorMessage(errorMessage)} />
      ) : (
        <>
          {listBoxOptions}
          {!isLoading && options.length === 0 && <NoRecordsMessage />}
          {isLoading && <Listbox.Loading accessibilityLabel="Loading" />}
        </>
      )}
    </Listbox>
  );
};

export const RelatedModelOptionsPopover = (
  props: RelatedModelOptionsProps & {
    active: boolean;
    activator: React.ReactElement;
    onClose: () => void;
    search?: React.ReactNode;
    onScrolledToBottom?: () => void;
  }
) => {
  return (
    <Popover
      active={props.active}
      activator={props.activator}
      ariaHaspopup="listbox"
      preferredAlignment="right"
      autofocusTarget="first-node"
      onClose={props.onClose}
    >
      <Popover.Pane fixed>
        <div
          style={{
            alignItems: "stretch",
            borderTop: "1px solid #DFE3E8",
            display: "flex",
            flexDirection: "column",
            justifyContent: "stretch",
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          {props.search}
          <Scrollable
            shadow={props.options.length > numberOfOptionsThatCanBeShownWithoutScrolling}
            style={{
              position: "relative",
              width: "310px",
              height: "292px",
              padding: "var(--p-space-200) 0",
              borderBottomLeftRadius: "var(--p-border-radius-200)",
              borderBottomRightRadius: "var(--p-border-radius-200)",
            }}
            onScrolledToBottom={props.onScrolledToBottom}
          >
            <RelatedModelOptions
              options={props.options}
              records={props.records}
              onSelect={props.onSelect}
              isLoading={props.isLoading}
              autoSelection={props.autoSelection}
              renderOption={props.renderOption}
              actions={props.actions}
            />
          </Scrollable>
        </div>
      </Popover.Pane>
    </Popover>
  );
};

const numberOfOptionsThatCanBeShownWithoutScrolling = 8;

export const RelatedModelOptionsSearch = (
  props: { modelName: string; label?: TextFieldProps["label"]; autoComplete?: TextFieldProps["autoComplete"] } & Omit<
    TextFieldProps,
    "label" | "autoComplete"
  >
) => {
  const { modelName, label, placeholder, prefix, autoComplete, ...rest } = props;
  return (
    <div style={{ padding: "12px" }}>
      <StopPropagation>
        <TextField
          labelHidden
          autoComplete={autoComplete ?? "off"}
          label={label ?? modelName}
          placeholder={placeholder ?? `Find ${props.modelName}`}
          prefix={prefix ?? <Icon source={SearchIcon} />}
          {...rest}
        />
      </StopPropagation>
    </div>
  );
};

const StopPropagation = ({ children }: React.PropsWithChildren<any>) => {
  const stopEventPropagation = (event: React.MouseEvent | React.TouchEvent) => {
    event.stopPropagation();
  };

  return (
    <div onClick={stopEventPropagation} onTouchStart={stopEventPropagation}>
      {children}
    </div>
  );
};
