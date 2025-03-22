import { useCallback, useMemo } from "react";
import { isValidDate } from "../../dateTimeUtils.js";
import { GadgetFieldType } from "../../internal/gql/graphql.js";
import { useController } from "../../useActionForm.js";
import { type AutoDateTimeInputProps } from "../shared/AutoInputTypes.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { assertFieldType } from "./utils.js";

export const useDateTimeField = (props: AutoDateTimeInputProps) => {
  const { path, metadata } = useFieldMetadata(props.field);

  assertFieldType({
    fieldApiIdentifier: props.field,
    actualFieldType: metadata.fieldType,
    expectedFieldType: GadgetFieldType.DateTime,
  });

  const { field: fieldProps, fieldState } = useController({ name: path });

  const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const localTime = useMemo(() => {
    if (fieldProps.value == null) return undefined; // Prevents null from becoming 1970

    const date = new Date(fieldProps.value);
    return isValidDate(date) ? date : undefined;
  }, [fieldProps.value]);

  const onChange = useCallback(
    (...args: any[]) => {
      fieldProps.onChange(...args);
      props.afterChange?.(...args);
    },
    [fieldProps.onChange, props.afterChange]
  );

  return {
    path,
    metadata,
    fieldProps: {
      ...fieldProps,
      onChange,
    },
    fieldState,
    localTz,
    localTime,
  };
};
