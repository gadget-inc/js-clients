import type { AnyModelManager } from "@gadgetinc/api-client-core";
import { assert } from "@gadgetinc/api-client-core";
import { Autocomplete, LegacyStack, Tag } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import type { GadgetBelongsToConfig } from "src/internal/gql/graphql.js";
import { useApi } from "../../../GadgetProvider.js";
import { useFindMany } from "../../../useFindMany.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";

export const PolarisHasManyInput = (props: { field: string }) => {
  const { path, fieldMetadata } = useFieldMetadata(props.field);

  const api = useApi();
  const { getValues } = useFormContext();

  const { fields, remove, replace } = useFieldArray({
    name: path,
  });

  const config = fieldMetadata.configuration as GadgetBelongsToConfig;

  if (!config || !config.relatedModel) {
    throw new Error(`Field ${props.field} not found in metadata`);
  }

  const modelManager = assert(
    (api as any)[config.relatedModel.apiIdentifier] as AnyModelManager,
    "no model manager found for action function"
  );

  const [{ data, fetching, error }, _refetch] = useFindMany(modelManager as any, { first: 25 });

  const [inputValue, setInputValue] = useState("");

  const updateText = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  if (fetching || !data) {
    return <p>Loading...</p>;
  }

  const options = data.map((record: Record<string, any>) => {
    return { label: record.name, value: record.id };
  });

  const verticalContentMarkup =
    fields.length > 0 ? (
      <LegacyStack spacing="extraTight" alignment="center">
        {fields.map((field, i) => {
          const id = getValues(path)[i].id;
          const option = options.find((option) => option.value === id);
          return (
            <Tag
              key={`option${field.id}`}
              onRemove={() => {
                const index = fields.findIndex((entry) => entry.id == field.id);
                remove(index);
              }}
            >
              {option?.label}
            </Tag>
          );
        })}
      </LegacyStack>
    ) : null;

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label={fieldMetadata.name}
      value={inputValue}
      verticalContent={verticalContentMarkup}
      autoComplete="off"
    />
  );

  return (
    <Autocomplete
      allowMultiple
      options={options}
      selected={fields.map((field, i) => getValues(path)[i].id)}
      textField={textField}
      onSelect={(selection) => {
        replace(selection.map((id) => ({ id: id })));
      }}
      listTitle={fieldMetadata.name}
    />
  );
};
