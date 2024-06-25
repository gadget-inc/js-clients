import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { FormProps } from "@shopify/polaris";
import { Form, FormLayout, SkeletonBodyText, SkeletonDisplayText } from "@shopify/polaris";
import React from "react";
import { FormProvider } from "react-hook-form";
import { useActionMetadata } from "../../metadata.js";
import { useActionForm } from "../../useActionForm.js";
import type { OptionsType } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
import { useFormFields, useValidationResolver } from "../AutoForm.js";
import { AutoFormMetadataContext } from "../AutoFormContext.js";
import { PolarisAutoInput } from "./inputs/PolarisAutoInput.js";
import { PolarisAutoSubmit } from "./submit/PolarisAutoSubmit.js";
import { PolarisSubmitResultBanner } from "./submit/PolarisSubmitResultBanner.js";

export const PolarisFormSkeleton = () => (
  <>
    <SkeletonDisplayText size="medium" />
    <SkeletonBodyText />
  </>
);

/**
 * Renders a form for an action on a model automatically using Polaris
 */
export const PolarisAutoForm = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>,
  Options extends ActionFunc["optionsType"]
>(
  //polaris form props also take an 'action' property, which we need to omit here.
  props: AutoFormProps<GivenOptions, SchemaT, ActionFunc, Options> & Omit<Partial<FormProps>, "action">
) => {
  const { action, record, findBy, ...rest } = props;

  // fetch metadata describing this actions inputs and outputs from the backend
  const { metadata, fetching: fetchingMetadata, error: metadataError } = useActionMetadata(action);

  // filter down the fields to render only what we want to render for this form
  const fields = useFormFields(metadata, props);

  // setup the form state for the action
  const {
    submit,
    error: formError,
    formState: { isSubmitSuccessful, isLoading },
    originalFormMethods,
  } = useActionForm(action, {
    defaultValues: { [action.modelApiIdentifier]: record },
    findBy,
    resolver: useValidationResolver(metadata),
    send: fields.map(({ path }) => path),
  });

  const autoFormMetadataContext: AutoFormMetadataContext = {
    submit,
    metadata,
    submitResult: {
      isSuccessful: isSubmitSuccessful,
      error: formError ?? metadataError,
    },
  };

  if (props.successContent && isSubmitSuccessful) {
    return props.successContent;
  }

  if (fetchingMetadata) {
    return (
      <Form {...rest} onSubmit={submit}>
        <FormLayout>
          <PolarisFormSkeleton />;
        </FormLayout>
      </Form>
    );
  }

  const formContent = props.children ?? (
    <>
      <PolarisSubmitResultBanner />
      {fields.map(({ metadata }) => (
        <PolarisAutoInput field={metadata.apiIdentifier} key={metadata.apiIdentifier} />
      ))}
      <PolarisAutoSubmit>{props.submitLabel ?? "Submit"}</PolarisAutoSubmit>
    </>
  );

  return (
    <AutoFormMetadataContext.Provider value={autoFormMetadataContext}>
      <FormProvider {...originalFormMethods}>
        <Form {...rest} onSubmit={submit}>
          <FormLayout>{formContent}</FormLayout>
        </Form>
      </FormProvider>
    </AutoFormMetadataContext.Provider>
  );
};
