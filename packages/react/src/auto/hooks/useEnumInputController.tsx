import { useCallback, useMemo, useState } from "react";
import { GadgetFieldType } from "../../internal/gql/graphql.js";
import { useController } from "../../useActionForm.js";
import { type AutoEnumInputProps } from "../shared/AutoInputTypes.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { assertFieldType } from "./utils.js";

export const useEnumInputController = (props: AutoEnumInputProps) => {
  const { field: fieldApiIdentifier, control } = props;
  const { path, metadata } = useFieldMetadata(fieldApiIdentifier);
  assertFieldType({
    fieldApiIdentifier,
    actualFieldType: metadata.fieldType,
    expectedFieldType: GadgetFieldType.Enum,
  });

  const config = metadata.configuration;
  if (config.__typename !== "GadgetEnumConfig") {
    throw new Error("Field is not an enum type");
  }

  const {
    field: fieldProps,
    fieldState: { error },
  } = useController({
    control,
    name: path,
  });
  const [searchValue, setSearchValue] = useState("");

  const selectedOptions = useMemo(
    () => (typeof fieldProps.value === "string" ? [fieldProps.value] : fieldProps.value ?? []) as string[],
    [fieldProps.value]
  );
  const providedOptions = useMemo(() => config.options.map((option) => option.name), [config.options]);
  const allOptions = useMemo(() => [...new Set([...selectedOptions, ...providedOptions])], [providedOptions, selectedOptions]);
  const filteredOptions = useMemo(
    () =>
      allOptions.filter((option) => {
        return !searchValue || option.toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase());
      }),
    [allOptions, searchValue]
  );

  const onChange = useCallback(
    (...args: any[]) => {
      fieldProps.onChange(...args);
      props.afterChange?.(...args);
    },
    [fieldProps.onChange, props.afterChange]
  );

  const onSelectionChange = useCallback(
    (selected: string | null) => {
      setSearchValue("");
      if (config.allowMultiple) {
        if (selected === null) {
          onChange([]);
          return;
        }

        const nextSelectedTags = new Set([...selectedOptions]);
        if (nextSelectedTags.has(selected)) {
          nextSelectedTags.delete(selected);
        } else {
          nextSelectedTags.add(selected);
        }

        onChange([...nextSelectedTags]);
      } else {
        if (selected === null || selectedOptions.includes(selected)) {
          onChange(null);
        } else {
          onChange(selected);
        }
      }
    },
    [config.allowMultiple, onChange, selectedOptions]
  );

  return {
    path,
    allowMultiple: config.allowMultiple,
    allowOther: config.allowOther,
    /** The list of selected options. */
    selectedOptions,
    /** The list of options that are provided by the configuration. */
    providedOptions,
    /** The list of options that are currently visible based on the search query. */
    filteredOptions,
    /** The list of all options that are available to select by combining the selected and provided options. */
    allOptions,
    searchQuery: {
      value: searchValue,
      setValue: setSearchValue,
    },
    /** The callback to handle the selection change */
    onSelectionChange,
    label: metadata.name,
    metadata,
    fieldProps,
    isError: !!error,
    errorMessage: error?.message,
  };
};
