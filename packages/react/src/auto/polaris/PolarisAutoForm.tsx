import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { FormProps } from "@shopify/polaris";
import { Form, FormLayout, SkeletonBodyText, SkeletonDisplayText } from "@shopify/polaris";
import React from "react";
import { FormProvider } from "react-hook-form";
import type { OptionsType } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
import { useAutoForm } from "../AutoForm.js";
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
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>
>(
  //polaris form props also take an 'action' property, which we need to omit here.
  props: AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<Partial<FormProps>, "action">
) => {
  const { record: _record, action, findBy, ...rest } = props;
  const { metadata, fetchingMetadata, metadataError, fields, submit, formError, isSubmitSuccessful, isLoading, originalFormMethods } =
    useAutoForm(props);

  const autoFormMetadataContext: AutoFormMetadataContext = {
    findBy,
    submit,
    metadata,
    submitResult: {
      isSuccessful: isSubmitSuccessful,
      error: formError ?? metadataError,
    },
    model: {
      apiIdentifier: action.modelApiIdentifier,
      namespace: action.namespace,
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
