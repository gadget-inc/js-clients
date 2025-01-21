import React, { useEffect } from "react";
import type { Control } from "../../../useActionForm.js";
import { useController, useFormContext } from "../../../useActionForm.js";
import { get } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
// should we move this to a shared location?
import { cn } from "../../../../spec/auto/shadcn-defaults/utils.js";
import type { CheckboxProps, ShadcnElements } from "../elements.js";

export const makeShadcnAutoBooleanInput = ({ Checkbox, Label }: Pick<ShadcnElements, "Checkbox" | "Label">) => {
  return autoInput(
    (
      props: {
        field: string;
        control?: Control<any>;
        className?: string;
        label?: string;
      } & Partial<CheckboxProps>
    ) => {
      const { field: fieldApiIdentifier, control, ...rest } = props;
      const { path, metadata } = useFieldMetadata(fieldApiIdentifier);

      const {
        field: fieldProps,
        fieldState: { error },
      } = useController({
        control,
        name: path,
      });

      const {
        formState: { defaultValues },
      } = useFormContext();

      useEffect(() => {
        if (metadata.requiredArgumentForInput) {
          // when the field is required, this defaults to false to match the UI
          // When not required, the field will have a null value unless it is touched by the user
          const defaultValue = get(defaultValues ?? {}, path) ?? false;
          fieldProps.onChange(defaultValue);
        }
      }, [metadata.requiredArgumentForInput, defaultValues]);

      const label = props.label ?? metadata.name;
      const { value: _value, ...restFieldProps } = fieldProps;

      return (
        <div className="flex items-center space-x-2">
          <Checkbox {...restFieldProps} id={path} checked={!!fieldProps.value} aria-invalid={!!error} {...rest} />
          <Label htmlFor={path} className={cn(props.className, error ? "text-red-500" : undefined)}>
            {label}
          </Label>
          {error && <span className="text-sm text-red-500">{error.message}</span>}
        </div>
      );
    }
  );
};
