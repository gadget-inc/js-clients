import React, { useEffect, useMemo, useState } from "react";
import { useFormContext } from "../../../../useActionForm.js";
import { extractPathsFromChildren } from "../../../AutoForm.js";
import { useAutoRelationship, useRelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { useHasManyThroughController } from "../../../hooks/useHasManyThroughController.js";
import { useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnAutoComboInput } from "../ShadcnAutoComboInput.js";

export const makeShadcnAutoHasManyThroughForm = ({
  Badge,
  Button,
  Command,
  CommandItem,
  CommandInput,
  Label,
  CommandList,
  CommandEmpty,
  CommandLoading,
  CommandGroup,
  Checkbox,
  ScrollArea,
}: Pick<
  ShadcnElements,
  | "Badge"
  | "Button"
  | "Command"
  | "CommandItem"
  | "CommandList"
  | "CommandLoading"
  | "CommandEmpty"
  | "CommandGroup"
  | "CommandInput"
  | "Label"
  | "Checkbox"
  | "ScrollArea"
>) => {
  const ShadcnComboInput = makeShadcnAutoComboInput({
    Command,
    CommandInput,
    Label,
    CommandItem,
    CommandList,
    CommandLoading,
    CommandEmpty,
    CommandGroup,
    Checkbox,
    ScrollArea,
  });

  function ShadcnAutoHasManyThroughForm(props: {
    field: string;
    label?: React.ReactNode;
    children: React.ReactNode;
    primaryLabel?: OptionLabel;
    secondaryLabel?: OptionLabel;
    tertiaryLabel?: OptionLabel;
  }) {
    const { field, children } = props;
    const { metadata } = useAutoRelationship({ field });
    const { setValue } = useFormContext();

    const childPaths = children && extractPathsFromChildren(children);
    const hasChildForm = childPaths && childPaths.length > 0;

    const { fieldArrayPath, fieldArray, records, relatedModelOptions, inverseRelatedModelField, joinModelField, joinModelApiIdentifier } =
      useHasManyThroughController(props);

    const { fields, append, remove } = fieldArray;
    const relationshipContext = useRelationshipContext();
    const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;

    useEffect(() => {
      for (const [index, field] of fields.entries()) {
        if (
          inverseRelatedModelField &&
          (field as any)[inverseRelatedModelField] &&
          (field as any)[inverseRelatedModelField].id &&
          !("_link" in field)
        ) {
          // use setValue so that we don't trigger a re-render
          setValue(`${fieldArrayPath}.${index}.${inverseRelatedModelField}._link`, (field as any)[inverseRelatedModelField].id);
        }
      }
    }, [setValue, inverseRelatedModelField, fields, fieldArrayPath]);

    const [addingSibling, setAddingSibling] = useState(false);
    const listboxId = `HasManyThroughListboxInPopover-${field}`;

    if (metadata?.configuration.__typename !== "GadgetHasManyThroughConfig") {
      throw new Error("PolarisAutoHasManyThroughForm can only be used for HasManyThrough fields");
    }

    const {
      search,
      searchFilterOptions: siblingModelOptions,
      relatedModel: { fetching: siblingRecordsLoading, records: siblingRecords },
      pagination: siblingPagination,
    } = relatedModelOptions;
    const siblingModelName = metadata.name ?? "Unknown";

    const joinRecords = useMemo(() => {
      return fields.flatMap((field, idx): [string, number, Record<string, any>][] => {
        const record = records[idx];

        if (!record) {
          return [];
        }

        return [[field._fieldArrayKey, idx, record]];
      });
    }, [fields, records]);

    const primaryLabel = useOptionLabelForField(field, props.primaryLabel);

    return (
      <div>
        {props.label ?? <Label>{siblingModelName}</Label>}
        {/* <ShadcnComboInput
          options={siblingModelOptions}
          records={siblingRecords}
          onSelect={() => {}}
          isLoading={siblingRecordsLoading}
          selectedRecordTag={}
          path={fieldArrayPath}
          metadata={metadata}
          field={field}
        /> */}
      </div>
    );
  }

  return ShadcnAutoHasManyThroughForm;
};
