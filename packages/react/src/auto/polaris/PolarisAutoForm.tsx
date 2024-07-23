import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { FormProps } from "@shopify/polaris";
import { BlockStack, Form, FormLayout, SkeletonBodyText, SkeletonDisplayText, Text } from "@shopify/polaris";
import React, { useMemo } from "react";
import { FormProvider } from "react-hook-form";
import { humanizeCamelCase, type OptionsType } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
import { useAutoForm } from "../AutoForm.js";
import { AutoFormMetadataContext } from "../AutoFormContext.js";
import { PolarisAutoInput } from "./inputs/PolarisAutoInput.js";
import { PolarisAutoSubmit } from "./submit/PolarisAutoSubmit.js";
import { PolarisSubmitErrorBanner, PolarisSubmitResultBanner } from "./submit/PolarisSubmitResultBanner.js";

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
  const { action, findBy } = props as AutoFormProps<GivenOptions, SchemaT, ActionFunc> &
    Omit<Partial<FormProps>, "action"> & { findBy: any };

  // Component key to force re-render when the action or findBy changes
  const componentKey = `${action.modelApiIdentifier}.${action.operationName}.${findBy}`;

  return (
    <PolarisAutoFormComponent
      key={componentKey}
      {...(props as AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<Partial<FormProps>, "action"> & { findBy: any })}
    />
  );
};

const PolarisAutoFormComponent = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>
>(
  //polaris form props also take an 'action' property, which we need to omit here.
  props: AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<Partial<FormProps>, "action">
) => {
  const {
    record: _record,
    action,
    findBy,
    ...rest
  } = props as AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<Partial<FormProps>, "action"> & { findBy: any };
  const { metadata, fetchingMetadata, metadataError, fields, submit, formError, isSubmitting, isSubmitSuccessful, originalFormMethods } =
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
  const humanizedOperationName = useMemo(() => humanizeCamelCase(action.operationName), [action.operationName]);

  if (props.successContent && isSubmitSuccessful) {
    return props.successContent;
  }

  if (fetchingMetadata) {
    return (
      <Form {...rest} onSubmit={submit}>
        <FormLayout>
          <PolarisFormSkeleton />
        </FormLayout>
      </Form>
    );
  }

  const formContent = props.children ?? (
    <>
      <Text variant="headingLg" as="h5">
        {humanizedOperationName}
      </Text>
      {!props.onSuccess ? <PolarisSubmitResultBanner /> : <PolarisSubmitErrorBanner />}
      {!metadataError && (
        <>
          {fields.map(({ metadata }) => (
            <PolarisAutoInput field={metadata.apiIdentifier} key={metadata.apiIdentifier} />
          ))}
          <div>
            <PolarisAutoSubmit isSubmitting={isSubmitting}>{props.submitLabel ?? "Submit"}</PolarisAutoSubmit>
          </div>
        </>
      )}
    </>
  );

  return (
    <AutoFormMetadataContext.Provider value={autoFormMetadataContext}>
      <FormProvider {...originalFormMethods}>
        <Form {...rest} onSubmit={submit}>
          <BlockStack gap="400">{formContent}</BlockStack>
        </Form>
      </FormProvider>
    </AutoFormMetadataContext.Provider>
  );
};
