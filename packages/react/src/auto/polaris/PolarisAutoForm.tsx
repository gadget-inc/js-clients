import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { FormProps } from "@shopify/polaris";
import { Banner, Button, Form, FormLayout, SkeletonBodyText, SkeletonDisplayText } from "@shopify/polaris";
import React from "react";
import { FormProvider } from "react-hook-form";
import { useActionMetadata } from "../../metadata.js";
import { useActionForm } from "../../useActionForm.js";
import type { OptionsType } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
import { useFormFields, useValidationResolver } from "../AutoForm.js";
import { AutoFormMetadataContext } from "../AutoFormContext.js";
import { PolarisErrorDisplay } from "./PolarisErrorDisplay.js";
import { PolarisFormInput } from "./PolarisFormInput.js";

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
    send: fields.map(([path]) => path),
  });

  const error = formError ?? metadataError;
  if (error && !(error as any).valiationErrors) {
    return <PolarisErrorDisplay error={error} />;
  }

  if (isSubmitSuccessful) {
    return props.successContent ?? <Banner title={`Saved ${metadata?.name} successfully.`} tone="success" />;
  }

  if (fetchingMetadata)
    return (
      <Form {...rest} onSubmit={submit}>
        <FormLayout>
          <PolarisFormSkeleton />;
        </FormLayout>
      </Form>
    );

  if (props.children)
    return (
      <AutoFormMetadataContext.Provider value={{ submit, metadata }}>
        <FormProvider {...originalFormMethods}>
          <Form {...rest} onSubmit={submit}>
            <FormLayout>{props.children}</FormLayout>
          </Form>
        </FormProvider>
      </AutoFormMetadataContext.Provider>
    );

  return (
    <AutoFormMetadataContext.Provider value={{ submit, metadata }}>
      <FormProvider {...originalFormMethods}>
        <Form {...rest} onSubmit={submit}>
          <FormLayout>
            {fields.map(([path, field]) => (
              <PolarisFormInput key={field.apiIdentifier} path={path} field={field} control={originalFormMethods.control} />
            ))}
            <Button
              loading={isLoading}
              submit
              onClick={async () => {
                submit;
              }}
            >
              {(props.submitLabel as any) ?? "Submit"}
            </Button>
          </FormLayout>
        </Form>
      </FormProvider>
    </AutoFormMetadataContext.Provider>
  );
};
