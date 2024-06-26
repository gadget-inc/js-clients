import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useFieldMetadata } from "./useFieldMetadata.js";

export const useHiddenInput = (props: { field: string; value: any }) => {
  const { field, value } = props;
  const { path, metadata } = useFieldMetadata(field);
  const form = useFormContext();

  useEffect(() => {
    form.setValue(path, value);
  }, [form, path, value]);

  return {
    value,
    name: metadata.name,
  };
};
