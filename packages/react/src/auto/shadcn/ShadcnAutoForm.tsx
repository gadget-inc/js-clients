import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { ComponentProps } from "react";
import React from "react";
import { FormProvider } from "../../useActionForm.js";
import { humanizeCamelCase, type OptionsType } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
import { useAutoForm } from "../AutoForm.js";
import { validateAutoFormProps } from "../AutoFormActionValidators.js";
import { AutoFormMetadataContext } from "../AutoFormContext.js";
import type { FormProps, ShadcnElements } from "./elements.js";
import { makeShadcnAutoInput } from "./inputs/ShadcnAutoInput.js";
import { makeShadcnAutoSubmit } from "./submit/ShadcnAutoSubmit.js";
import { makeSubmitResultBanner } from "./submit/ShadcnSubmitResultBanner.js";

/**
 * Renders a form for an action on a model automatically using Shadcn
 */
export const makeAutoForm =
  <Elements extends ShadcnElements>({ Form, Input, Button, Alert, Skeleton, AlertTitle, AlertDescription, Label, Checkbox }: Elements) =>
  <GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>>(
    props: AutoFormProps<GivenOptions, SchemaT, ActionFunc> & ComponentProps<typeof Form>
  ) => {
    const { action, findBy } = props as AutoFormProps<GivenOptions, SchemaT, ActionFunc> &
      Omit<Partial<FormProps>, "action"> & { findBy: any };

    validateAutoFormProps(props);

    // Component key to force re-render when the action or findBy changes
    const componentKey = `${action.modelApiIdentifier ?? ""}.${action.operationName}.${JSON.stringify(findBy)}`;

    const ShadcnAutoInput = makeShadcnAutoInput({ Input, Label, Button, Checkbox });

    return (
      <ShadcnAutoFormComponent
        key={componentKey}
        {...(props as AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<Partial<FormProps>, "action"> & { findBy: any })}
        elements={{ Form, Input, Button, Alert, Skeleton, AlertTitle, AlertDescription, ShadcnAutoInput }}
      />
    );
  };

function ShadcnAutoFormComponent<
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>
>(
  props: AutoFormProps<GivenOptions, SchemaT, ActionFunc> & {
    elements: ShadcnElements;
  } & ComponentProps<any>
) {
  const {
    record: _record,
    action,
    findBy,
    ...rest
  } = props as AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<Partial<FormProps>, "action"> & { findBy: any };
  const { Form, Button, Alert, Skeleton, AlertTitle, AlertDescription, ShadcnAutoInput } = props.elements;

  const { metadata, fetchingMetadata, metadataError, fields, submit, formError, isSubmitting, isSubmitSuccessful, originalFormMethods } =
    useAutoForm(props);

  const { ShadcnSubmitSuccessfulBanner, ShadcnSubmitErrorBanner } = makeSubmitResultBanner({ Alert, AlertTitle, AlertDescription });
  const ShadcnAutoSubmit = makeShadcnAutoSubmit({ Button });

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

  const formTitle = props.title === undefined ? humanizeCamelCase(action.operationName) : props.title;

  if (props.successContent && isSubmitSuccessful) {
    return props.successContent;
  }

  if (fetchingMetadata) {
    return (
      <Form {...rest} onSubmit={submit}>
        <Skeleton />
      </Form>
    );
  }

  const formContent = props.children ?? (
    <>
      {formTitle && <h2 className="text-2xl font-bold">{formTitle}</h2>}
      {!props.onSuccess && <ShadcnSubmitSuccessfulBanner />}
      {!props.onFailure && <ShadcnSubmitErrorBanner />}
      {!metadataError && (
        <>
          {fields.map(({ metadata }) => (
            <ShadcnAutoInput field={metadata.apiIdentifier} key={metadata.apiIdentifier} />
          ))}
          <ShadcnAutoSubmit>{props.submitLabel ?? "Submit"}</ShadcnAutoSubmit>
        </>
      )}
    </>
  );

  return (
    <AutoFormMetadataContext.Provider value={autoFormMetadataContext}>
      <FormProvider {...originalFormMethods}>
        <Form {...rest} onSubmit={submit}>
          {formContent}
        </Form>
      </FormProvider>
    </AutoFormMetadataContext.Provider>
  );
}
