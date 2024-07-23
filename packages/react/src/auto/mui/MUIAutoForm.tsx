import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { GridProps } from "@mui/material";
import { Grid, Skeleton, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { FormProvider } from "react-hook-form";
import { humanizeCamelCase, type OptionsType } from "../../utils.js";
import { useAutoForm, type AutoFormProps } from "../AutoForm.js";
import { AutoFormMetadataContext } from "../AutoFormContext.js";
import { MUIAutoInput } from "./inputs/MUIAutoInput.js";
import { MUIAutoSubmit } from "./submit/MUIAutoSubmit.js";
import { MUISubmitErrorBanner, MUISubmitResultBanner } from "./submit/MUISubmitResultBanner.js";

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
  const { action, findBy } = props as MUIAutoFormProps<GivenOptions, SchemaT, ActionFunc> & { findBy: any };

  // Component key to force re-render when the action or findBy changes
  const componentKey = `${action.modelApiIdentifier}.${action.operationName}.${findBy}`;

  return <MUIAutoFormComponent key={componentKey} {...props} />;
};
export const MUIAutoFormComponent = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>
>(
  props: MUIAutoFormProps<GivenOptions, SchemaT, ActionFunc>
) => {
  const { record: _record, action, findBy, ...rest } = props as MUIAutoFormProps<GivenOptions, SchemaT, ActionFunc> & { findBy: any };
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

  const humanizedOperationName = useMemo(() => humanizeCamelCase(action.operationName), [action.operationName]);

  if (props.successContent && isSubmitSuccessful) {
    return props.successContent;
  }

  const formContent = props.children ?? (
    <>
      <Typography variant="h5">{humanizedOperationName}</Typography>
      {!props.onSuccess ? <MUISubmitResultBanner /> : <MUISubmitErrorBanner />}
      {fetchingMetadata && <MUIFormSkeleton />}
      {!metadataError && (
        <>
          {fields.map(({ metadata }) => (
            <Grid item key={metadata.apiIdentifier} xs={12}>
              <MUIAutoInput field={metadata.apiIdentifier} />
            </Grid>
          ))}
          <Grid item xs={12}>
            <MUIAutoSubmit loading={isLoading}>{props.submitLabel ?? "Submit"}</MUIAutoSubmit>
          </Grid>
        </>
      )}
    </>
  );

  return (
    <AutoFormMetadataContext.Provider
      value={autoFormMetadataContext}
      key={`${action.modelApiIdentifier}.${action.operationName}.${findBy}`}
    >
      <FormProvider {...originalFormMethods}>
        <Grid container component="form" spacing={2} onSubmit={submit as any} {...rest}>
          {formContent}
        </Grid>
      </FormProvider>
    </AutoFormMetadataContext.Provider>
  );
};
