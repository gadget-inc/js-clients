import React, { useCallback, useContext, useState } from "react";
import type { FieldMetadata, GlobalActionMetadata, ModelWithOneActionMetadata } from "../metadata.js";
import type { RecordIdentifier, UseActionFormSubmit } from "../use-action-form/types.js";

export interface AutoFormSubmitResult {
  isSuccessful?: boolean;
  error?: Error;
  isSubmitting?: boolean;
}

export interface AutoFormMetadataContext {
  findBy?: RecordIdentifier;
  metadata: ModelWithOneActionMetadata | GlobalActionMetadata | undefined;
  submit: UseActionFormSubmit<any>;
  submitResult: AutoFormSubmitResult;
  model?: {
    namespace?: string | string[] | null;
    apiIdentifier?: string;
  };
  fields: readonly {
    path: string;
    metadata: FieldMetadata;
  }[];
}

/**
 * React context that stores an instance of the metadata loaded for a particular form action
 */
export const AutoFormMetadataContext = React.createContext<AutoFormMetadataContext | undefined>(undefined);

/**
 * Get the current `metadata` object and `submit` function from React context
 * Must be called within a component wrapped by the `<AutoForm>` component.
 **/
export const useAutoFormMetadata = () => {
  const autoFormContext = useContext(AutoFormMetadataContext);
  if (!autoFormContext) {
    throw new Error(
      `useAutoFormMetadata hook called in context where no AutoFormMetadata context is available. Please ensure you are wrapping this hook with the <AutoForm/> component from @gadgetinc/react.

    Possible remedies:
      - ensuring you have the <AutoForm/> component wrapped around your hook invocation
      - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`
    );
  }

  return autoFormContext;
};

export const useFieldsFromChildComponents = () => {
  const autoFormContext = useContext(AutoFormFieldsFromChildComponentsContext);
  if (!autoFormContext) {
    throw new Error(
      `useFieldsFromChildComponents hook called in context where no AutoFormFieldsFromChildComponents context is available. Please ensure you are wrapping this hook with the <AutoForm/> component from @gadgetinc/react.

    Possible remedies:
      - ensuring you have the <AutoForm/> component wrapped around your hook invocation
      - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`
    );
  }
  return autoFormContext;
};

export const AutoFormFieldsFromChildComponentsContext = React.createContext<AutoFormFieldsFromChildComponents | undefined>(undefined);

/**
 * Context hook that manages the registration of form fields when using child components within an AutoForm.
 * Registered fields are used to determine which fields should be included in form state
 */
export const useInitializeFieldsFromChildComponents = (hasChildren: boolean): AutoFormFieldsFromChildComponents => {
  const [fieldSet, setFieldSet] = useState<Set<string>>(new Set());

  const registerField = useCallback(
    (field: string) => {
      if (!hasChildren) {
        return;
      }
      setFieldSet((prev) => new Set([...prev, field]));
    },
    [hasChildren, setFieldSet]
  );

  return { hasChildren, fieldSet, registerField };
};

export interface AutoFormFieldsFromChildComponents {
  hasChildren: boolean;
  fieldSet: Set<string>;
  registerField: (field: string) => void;
}
