import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { GridProps } from "@mui/material";
import { Grid, Skeleton, Typography } from "@mui/material";
import React from "react";
import { FormProvider } from "../../useActionForm.js";
import { humanizeCamelCase, type OptionsType } from "../../utils.js";
import { useAutoForm, type AutoFormProps } from "../AutoForm.js";
import { validateAutoFormProps } from "../AutoFormActionValidators.js";
import { AutoFormMetadataContext } from "../AutoFormContext.js";
import { MUIAutoInput } from "./inputs/MUIAutoInput.js";
import { MUIAutoSubmit } from "./submit/MUIAutoSubmit.js";
import { MUISubmitErrorBanner, MUISubmitSuccessfulBanner } from "./submit/MUISubmitResultBanner.js";

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

  validateAutoFormProps(props);

  // Component key to force re-render when the action or findBy changes
  const componentKey = `${action.modelApiIdentifier ?? ""}.${action.operationName}.${JSON.stringify(findBy)}`;

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

  const { metadata, fetchingMetadata, metadataError, fields, submit, formError, isSubmitting, isSubmitSuccessful, originalFormMethods } =
    useAutoForm(props);

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
    options: {
      include: props.include,
      exclude: props.exclude,
    },
  };

  const formTitle = props.title === undefined ? humanizeCamelCase(action.operationName) : props.title;

  if (props.successContent && isSubmitSuccessful) {
    return props.successContent;
  }

  if (fetchingMetadata) {
    return (
      <Grid container component="form" spacing={2} onSubmit={submit as any} {...rest}>
        <MUIFormSkeleton />
      </Grid>
    );
  }

  const formContent = props.children ?? (
    <>
      {formTitle && <Typography variant="h5">{formTitle}</Typography>}
      {!props.onSuccess && <MUISubmitSuccessfulBanner />}
      {!props.onFailure && <MUISubmitErrorBanner />}
      {!metadataError && (
        <>
          {fields.map(({ metadata }) => (
            <Grid item key={metadata.apiIdentifier} xs={12}>
              <MUIAutoInput field={metadata.apiIdentifier} />
            </Grid>
          ))}
          <Grid item xs={12}>
            <MUIAutoSubmit>{props.submitLabel ?? "Submit"}</MUIAutoSubmit>
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
