import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { GridProps } from "@mui/material";
import { Grid, Skeleton } from "@mui/material";
import React from "react";
import { FormProvider } from "react-hook-form";
import type { OptionsType } from "../../utils.js";
import { useAutoForm, type AutoFormProps } from "../AutoForm.js";
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
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>
> = AutoFormProps<GivenOptions, SchemaT, ActionFunc> & GridProps;

/**
 * Renders a form for an action on a model automatically using MUI
 */
export const MUIAutoForm = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>
>(
  props: MUIAutoFormProps<GivenOptions, SchemaT, ActionFunc>
) => {
  const { action: _action, record: _record, findBy, ...rest } = props;
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
