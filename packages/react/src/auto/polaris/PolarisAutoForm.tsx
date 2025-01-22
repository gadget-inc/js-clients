import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { FormProps } from "@shopify/polaris";
import { BlockStack, Form, FormLayout, SkeletonBodyText, SkeletonDisplayText, Text } from "@shopify/polaris";
import React from "react";
import { FormProvider } from "../../useActionForm.js";
import { humanizeCamelCase, type OptionsType } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
import { useAutoForm } from "../AutoForm.js";
import { validateAutoFormProps } from "../AutoFormActionValidators.js";
import { AutoFormFieldsFromChildComponentsProvider, AutoFormMetadataContext } from "../AutoFormContext.js";
import { PolarisAutoInput } from "./inputs/PolarisAutoInput.js";
import { PolarisAutoSubmit } from "./submit/PolarisAutoSubmit.js";
import { PolarisSubmitErrorBanner, PolarisSubmitSuccessfulBanner } from "./submit/PolarisSubmitResultBanner.js";

export const PolarisAutoFormSkeleton = () => (
  <>
    <FormLayout>
      <SkeletonDisplayText size="medium" />
      <SkeletonBodyText />
    </FormLayout>
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

  validateAutoFormProps(props);

  // Component key to force re-render when the action or findBy changes
  const componentKey = `${action.modelApiIdentifier ?? ""}.${action.operationName}.${JSON.stringify(findBy)}`;

  return (
    <AutoFormFieldsFromChildComponentsProvider>
      <PolarisAutoFormComponent
        key={componentKey}
        {...(props as AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<Partial<FormProps>, "action"> & { findBy: any })}
      />
    </AutoFormFieldsFromChildComponentsProvider>
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

  const formTitle = props.title === undefined ? humanizeCamelCase(action.operationName) : props.title;

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
      apiIdentifier: action.modelApiIdentifier,
      namespace: action.namespace,
    },
    fields,
  };

  if (fetchingMetadata) {
    return (
      <Form {...rest} onSubmit={submit}>
        <PolarisAutoFormSkeleton />
      </Form>
    );
  }

  const formContent = props.children ?? (
    <>
      {formTitle && (
        <Text variant="headingLg" as="h5">
          {formTitle}
        </Text>
      )}
      {!props.onSuccess && <PolarisSubmitSuccessfulBanner />}
      {!props.onFailure && <PolarisSubmitErrorBanner />}
      {!metadataError && (
        <>
          {fields.map(({ metadata }) => (
            <PolarisAutoInput field={metadata.apiIdentifier} key={metadata.apiIdentifier} />
          ))}
          <div>
            <PolarisAutoSubmit>{props.submitLabel ?? "Submit"} </PolarisAutoSubmit>
          </div>
        </>
      )}
    </>
  );

  return (
    <AutoFormMetadataContext.Provider value={autoFormMetadataContext}>
      <FormProvider {...originalFormMethods}>
        {isLoading && <PolarisAutoFormSkeleton />}
        <div hidden={isLoading}>
          <Form {...rest} onSubmit={submit}>
            <BlockStack gap="400">{formContent}</BlockStack>
          </Form>
        </div>
      </FormProvider>
    </AutoFormMetadataContext.Provider>
  );
};
