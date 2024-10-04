import React from "react";
import { useFormContext } from "react-hook-form";
import { useFieldMetadata } from "../../../hooks/useFieldMetadata.js";
import { useRelatedModelRecords } from "../../../hooks/useRelatedModel.js";

export const PolarisAutoRelatedForm = (props: { field: string; children: React.ReactNode }) => {
  const { field } = props;
  const { getValues } = useFormContext();
  const { metadata, path } = useFieldMetadata(field);
  const { selected, relatedModelRecords } = useRelatedModelRecords(props);

  const values = getValues(path);

  console.log({ values, path, field, selected, relatedModelRecords, metadata }, "foo foo fas");

  return <div>hi</div>;
};
