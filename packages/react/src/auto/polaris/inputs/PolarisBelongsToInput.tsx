import { assert } from "@gadgetinc/api-client-core";
import { Select } from "@shopify/polaris";
import React from "react";
import { useController } from "react-hook-form";
import type { GadgetBelongsToConfig } from "src/internal/gql/graphql.js";
import { useApi } from "../../../GadgetProvider.js";
import { useFindMany } from "../../../useFindMany.js";
import { getModelManager } from "../../../utils.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";

export const PolarisBelongsToInput = (props: { field: string }) => {
  const api = useApi();
  const { path, metadata } = useFieldMetadata(props.field);

  const {
    field: fieldProps,
    fieldState: { error: fieldError },
  } = useController({
    name: path + ".id",
    rules: { required: metadata.requiredArgumentForInput },
  });

  const { ref: _ref, ...field } = fieldProps;
  const config = metadata.configuration as GadgetBelongsToConfig;

  if (!config || !config.relatedModel) {
    throw new Error(`Field ${props.field} not found in metadata`);
  }

  const modelManager = assert(
    getModelManager(api, config.relatedModel.apiIdentifier, config.relatedModel.namespace),
    "no model manager found for action function"
  );

  const [{ data, fetching, error }, _refetch] = useFindMany(modelManager as any, { first: 25 });

  if (fetching || !data) {
    return <p>Loading...</p>;
  }

  const options = data.map((record: Record<string, any>) => {
    return { label: record.name, value: record.id };
  });

  return <Select label={metadata.name} options={options} {...field} error={fieldError?.message} />;
};