import React from "react";
import { useFormContext } from "react-hook-form";
import { useAutoFormMetadata } from "../../../AutoFormContext.js";
import { autoInput } from "../../../AutoInput.js";
import { useFieldMetadata } from "../../../hooks/useFieldMetadata.js";
import { useRelatedModelRecords } from "../../../hooks/useRelatedModel.js";

export const PolarisAutoRelatedForm = autoInput((props: { field: string; children: React.ReactNode }) => {
  const { field } = props;
  const {
    getValues,
    formState: { defaultValues },
  } = useFormContext();
  const { pagination } = useAutoFormMetadata();
  const { metadata, path } = useFieldMetadata(field);
  const { relatedModelRecords } = useRelatedModelRecords(props);

  const values = getValues(path);

  console.log({ defaultValues, values, path, field, relatedModelRecords, metadata, pagination }, "foo foo fas");

  return <div>hi</div>;
});
