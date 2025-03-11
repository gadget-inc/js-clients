import { useMemo } from "react";
import { isValidDate } from "../../dateTimeUtils.js";
import { GadgetFieldType } from "../../internal/gql/graphql.js";
import { useController } from "../../useActionForm.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { assertFieldType } from "./utils.js";

interface DateTimeFieldProps {
  field: string;
  value?: Date;
  onChange?: (value?: Date) => void;
}

export const useDateTimeField = (props: DateTimeFieldProps) => {
  const { path, metadata } = useFieldMetadata(props.field);

  assertFieldType({
    fieldApiIdentifier: props.field,
    actualFieldType: metadata.fieldType,
    expectedFieldType: GadgetFieldType.DateTime,
  });

  const { field: fieldProps, fieldState } = useController({ name: path });
  const { onChange, value } = props;

  const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const localTime = useMemo(() => {
    if (value) return value;

    if (fieldProps.value == null) return undefined; // Prevents null from becoming 1970

    const date = new Date(fieldProps.value);
    return isValidDate(date) ? date : undefined;
  }, [value, fieldProps.value]);

  return {
    path,
    metadata,
    fieldProps,
    fieldState,
    localTz,
    localTime,
    onChange,
    value,
  };
};
