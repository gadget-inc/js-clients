import { AnyModelManager, assert } from "@gadgetinc/api-client-core";
import { Select } from "@shopify/polaris";
import React from "react";
import { useController } from "react-hook-form";
import { GadgetBelongsToConfig } from "src/internal/gql/graphql.js";
import { useApi } from "../../../GadgetProvider.js";
import { useFindMany } from "../../../useFindMany.js";
import { useFormFields } from "../../AutoForm.js";
import { useAutoFormMetadata } from "../../AutoFormContext.js";

export const PolarisBelongsToInput = (props: { field: string }) => {
  const { metadata } = useAutoFormMetadata();
  const api = useApi();
  const fields = useFormFields(metadata, {});

  const fieldMetadata = fields.find((field) => field[1].apiIdentifier === props.field);

  if (!fieldMetadata) {
    throw new Error(`Field ${props.field} not found in metadata`);
  }

  const path = fieldMetadata[0];
  const _field = fieldMetadata[1];

  const {
    field: fieldProps,
    fieldState: { error: fieldError },
  } = useController({
    name: path + ".id",
    rules: { required: _field.requiredArgumentForInput },
  });

  const { ref: _ref, ...field } = fieldProps;
  const config = _field.configuration as GadgetBelongsToConfig;

  if (!config || !config.relatedModel) {
    throw new Error(`Field ${props.field} not found in metadata`);
  }

  const modelManager = assert(
    (api as any)[config.relatedModel.apiIdentifier] as AnyModelManager,
    "no model manager found for action function"
  );

  const [{ data, fetching, error }, _refetch] = useFindMany(modelManager as any, { first: 25 });

  if (fetching || !data) {
    return <p>Loading...</p>;
  }

  const options = data.map((record: Record<string, any>) => {
    return { label: record.name, value: record.id };
  });

  return <Select label={_field.name} options={options} {...field} error={fieldError?.message} />;
};
