import { AnyModelManager, assert } from "@gadgetinc/api-client-core";
import { Select } from "@shopify/polaris";
import React from "react";
import { useController } from "react-hook-form";
import { GadgetBelongsToConfig } from "src/internal/gql/graphql.js";
import { useApi } from "../../../GadgetProvider.js";
import { useFindMany } from "../../../useFindMany.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";

export const PolarisBelongsToInput = (props: { field: string }) => {
  const api = useApi();
  const { path, fieldMetadata } = useFieldMetadata(props.field);

  const {
    field: fieldProps,
    fieldState: { error: fieldError },
  } = useController({
    name: path + ".id",
    rules: { required: fieldMetadata.requiredArgumentForInput },
  });

  const { ref: _ref, ...field } = fieldProps;
  const config = fieldMetadata.configuration as GadgetBelongsToConfig;

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

  return <Select label={fieldMetadata.name} options={options} {...field} error={fieldError?.message} />;
};
