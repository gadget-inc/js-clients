import type { ActionFunction } from "@gadgetinc/api-client-core";
import { LoadingButton } from "@mui/lab";
import type { GridProps } from "@mui/material";
import { Alert, Grid, Skeleton } from "@mui/material";
import React from "react";
import { useActionMetadata } from "../../metadata.js";
import { useActionForm } from "../../useActionForm.js";
import type { ErrorWrapper, OptionsType } from "../../utils";
import type { AutoFormProps } from "../AutoForm";
import { useFormFields, useValidationResolver } from "../AutoForm.js";
import { MUIErrorDisplay } from "./MUIErrorDisplay.js";
import { MUIFormInput } from "./MUIFormInput.js";

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
  const { action, include: _include, exclude: _exclude, fields: _fields, submitLabel: _submitLabel, ...rest } = props;

  // fetch metadata describing this actions inputs and outputs from the backend
  const { metadata, fetching: fetchingMetadata, error: metadataError } = useActionMetadata(action);

  // filter down the fields to render only what we want to render for this form
  const fields = useFormFields(metadata, props);

  // setup the form state for the action
  const {
    submit,
    control,
    error: formError,
    formState: { isLoading, isSubmitSuccessful },
  } = useActionForm(action, {
    defaultValues: { [action.modelApiIdentifier]: props.record },
    resolver: useValidationResolver(metadata),
    send: fields.map(([path]) => path),
  });

  const error = formError ?? metadataError;
  if (error && !(error as ErrorWrapper).validationErrors) {
    return <MUIErrorDisplay error={error} />;
  }

  if (isSubmitSuccessful) {
    return props.successContent ?? <Alert severity="success">Saved {metadata?.name} successfully</Alert>;
  }

  return (
    <Grid container component="form" spacing={2} onSubmit={submit} {...rest}>
      {fetchingMetadata && <MUIFormSkeleton />}
      {fields.map(([path, field]) => (
        <Grid item key={field.apiIdentifier} xs={12}>
          <MUIFormInput path={path} field={field} control={control} />
        </Grid>
      ))}
      <Grid item xs={12}>
        <LoadingButton loading={isLoading} type="submit">
          {(props.submitLabel as any) ?? "Submit"}
        </LoadingButton>
      </Grid>
    </Grid>
  );
};
