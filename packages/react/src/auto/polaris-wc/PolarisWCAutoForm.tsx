import type { OptionsType } from "@gadgetinc/client-hooks";
import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/core";
import React from "react";
import { FormProvider } from "../../useActionForm.js";
import { humanizeCamelCase } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
import { useAutoForm } from "../AutoForm.js";
import { validateAutoFormProps } from "../AutoFormActionValidators.js";
import { AutoFormFieldsFromChildComponentsProvider, AutoFormMetadataContext } from "../AutoFormContext.js";
import { PolarisWCAutoInput } from "./inputs/PolarisWCAutoInput.js";
import { PolarisWCAutoSubmit } from "./submit/PolarisWCAutoSubmit.js";
import { PolarisWCSubmitErrorBanner, PolarisWCSubmitSuccessfulBanner } from "./submit/PolarisWCSubmitResultBanner.js";

/**
 * Skeleton loader for Polaris Web Components
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   {isLoading ? <AutoFormSkeleton /> : <AutoFormContent />}
 * </AutoForm>
 * ```
 */
export const PolarisWCAutoFormSkeleton = () => (
  <s-stack gap="large">
    {/*
     */}
  </s-stack>
);

export type PolarisWCAutoFormProps<
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>,
> = AutoFormProps<GivenOptions, SchemaT, ActionFunc>;

/**
 * Renders a form for an action on a model using Polaris Web Components.
 */
export const PolarisWCAutoForm = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>,
>(
  props: PolarisWCAutoFormProps<GivenOptions, SchemaT, ActionFunc>
) => {
  const { action, findBy } = props;

  validateAutoFormProps(props);

  // Forces re-render when the action or findBy changes.
  const componentKey = `${"modelApiIdentifier" in action ? `${action.modelApiIdentifier}.` : ""}${action.operationName}.${JSON.stringify(
    findBy
  )}`;

  return (
    <AutoFormFieldsFromChildComponentsProvider hasCustomFormChildren={React.Children.count(props.children) > 0}>
      <PolarisWCAutoFormComponent
        key={componentKey}
        {...(props as PolarisWCAutoFormProps<GivenOptions, SchemaT, ActionFunc> & { findBy: any })}
      />
    </AutoFormFieldsFromChildComponentsProvider>
  );
};

const PolarisWCAutoFormComponent = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>,
>(
  props: PolarisWCAutoFormProps<GivenOptions, SchemaT, ActionFunc>
) => {
  const {
    record: _record,
    action,
    findBy,
    ...rest
  } = props as PolarisWCAutoFormProps<GivenOptions, SchemaT, ActionFunc> & {
    findBy: any;
  };

  const {
    metadata,
    fetchingMetadata,
    isLoading,
    metadataError,
    fields,
    submit,
    formError,
    isSubmitting,
    isSubmitSuccessful,
    originalFormMethods,
  } = useAutoForm(props);

  const formTitle = "title" in props && props.title !== undefined ? props.title : humanizeCamelCase(action.operationName);

  if (props.successContent && isSubmitSuccessful) {
    return props.successContent;
  }

  const autoFormMetadataContext: AutoFormMetadataContext = {
    findBy,
    submit,
    metadata,
    submitResult: {
      isSuccessful: isSubmitSuccessful,
      error: formError ?? metadataError,
      isSubmitting,
    },
    model: {
      apiIdentifier: "modelApiIdentifier" in action ? action.modelApiIdentifier : undefined,
      namespace: action.namespace,
    },
    fields,
  };

  if (fetchingMetadata) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void submit();
        }}
      >
        {props.loadingSkeleton ?? <PolarisWCAutoFormSkeleton />}
      </form>
    );
  }

  const formContent = props.children ?? (
    <>
      {/* @ts-expect-error - as prop may not be in official types */}
      {formTitle && <s-heading as="h5">{formTitle}</s-heading>}
      {!props.onSuccess && <PolarisWCSubmitSuccessfulBanner />}
      {!props.onFailure && <PolarisWCSubmitErrorBanner />}
      {!metadataError && (
        <>
          {fields.map(({ metadata }) => (
            <PolarisWCAutoInput field={metadata.apiIdentifier} key={metadata.apiIdentifier} />
          ))}
          <div>
            <PolarisWCAutoSubmit>{"submitLabel" in props && props.submitLabel ? props.submitLabel : "Submit"}</PolarisWCAutoSubmit>
          </div>
        </>
      )}
    </>
  );

  return (
    <AutoFormMetadataContext.Provider value={autoFormMetadataContext}>
      <FormProvider {...originalFormMethods}>
        <div style={{ opacity: isLoading || isSubmitting ? 0.3 : 1 }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void submit();
            }}
          >
            <s-stack gap="large">{formContent}</s-stack>
          </form>
        </div>
      </FormProvider>
    </AutoFormMetadataContext.Provider>
  );
};
