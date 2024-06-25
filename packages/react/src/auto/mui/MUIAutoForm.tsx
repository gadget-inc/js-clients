import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { GridProps } from "@mui/material";
import { Grid, Skeleton } from "@mui/material";
import React from "react";
import { FormProvider } from "react-hook-form";
import { useActionMetadata } from "../../metadata.js";
import { useActionForm } from "../../useActionForm.js";
import type { OptionsType } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
import { useFormFields, useValidationResolver } from "../AutoForm.js";
import { AutoFormMetadataContext } from "../AutoFormContext.js";
import { MUIAutoInput } from "./inputs/MUIAutoInput.js";
import { MUIAutoSubmit } from "./submit/MUIAutoSubmit.js";
import { MUISubmitResultBanner } from "./submit/MUISubmitResultBanner.js";

export const MUIFormSkeleton = () => (
  <>
    <Skeleton animation="wave" />
    <Skeleton animation="wave" />
  </>
);

export type MUIAutoFormProps<
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>,
  Options extends ActionFunc["optionsType"]
> = AutoFormProps<GivenOptions, SchemaT, ActionFunc, Options> & GridProps;

/**
 * Renders a form for an action on a model automatically using MUI
 */
export const MUIAutoForm = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>,
  Options extends ActionFunc["optionsType"]
>(
  props: MUIAutoFormProps<GivenOptions, SchemaT, ActionFunc, Options>
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
    formState: { isLoading, isSubmitSuccessful },
    originalFormMethods,
  } = useActionForm(action, {
    defaultValues: { [action.modelApiIdentifier]: props.record },
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

  const formContent = props.children ?? (
    <>
      <MUISubmitResultBanner />
      {fetchingMetadata && <MUIFormSkeleton />}
      {fields.map(({ metadata }) => (
        <Grid item key={metadata.apiIdentifier} xs={12}>
          <MUIAutoInput field={metadata.apiIdentifier} />
        </Grid>
      ))}
      <Grid item xs={12}>
        <MUIAutoSubmit loading={isLoading}>{props.submitLabel ?? "Submit"}</MUIAutoSubmit>
      </Grid>
    </>
  );

  return (
    <AutoFormMetadataContext.Provider value={autoFormMetadataContext}>
      <FormProvider {...originalFormMethods}>
        <Grid container component="form" spacing={2} onSubmit={submit} {...rest}>
          {formContent}
        </Grid>
      </FormProvider>
    </AutoFormMetadataContext.Provider>
  );
};
