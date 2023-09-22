import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { FormProps } from "@shopify/polaris";
import { Banner, Button, Form, FormLayout, SkeletonBodyText, SkeletonDisplayText } from "@shopify/polaris";
import React from "react";
import { useActionMetadata } from "../../metadata.js";
import { useActionForm } from "../../useActionForm.js";
import type { OptionsType } from "../../utils";
import type { AutoFormProps } from "../AutoForm";
import { useFormFields, useValidationResolver } from "../AutoForm.js";
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
  props: AutoFormProps<GivenOptions, SchemaT, ActionFunc, Options> & Partial<FormProps>
) => {
  const { action, include: _include, exclude: _exclude, fields: _fields, submitLabel: _submitLabel, record, findBy, ...rest } = props;

  // fetch metadata describing this actions inputs and outputs from the backend
  const { metadata, fetching: fetchingMetadata, error: metadataError } = useActionMetadata(action);

  // filter down the fields to render only what we want to render for this form
  const fields = useFormFields(metadata, props);

  // setup the form state for the action
  const {
    submit,
    control,
    error: formError,
    formState: { isSubmitSuccessful, isLoading },
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

  return (
    <Form {...rest} onSubmit={submit}>
      <FormLayout>
        {fetchingMetadata && <PolarisFormSkeleton />}
        {fields.map(([path, field]) => (
          <PolarisFormInput key={field.apiIdentifier} path={path} field={field} control={control} />
        ))}
        <Button loading={isLoading} submit onClick={submit}>
          {(props.submitLabel as any) ?? "Submit"}
        </Button>
      </FormLayout>
    </Form>
  );
};
