import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import type { ComponentProps } from "react";
import React, { forwardRef } from "react";
import { FormProvider } from "../../useActionForm.js";
import { humanizeCamelCase, type OptionsType } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
import { useAutoForm } from "../AutoForm.js";
import { validateAutoFormProps } from "../AutoFormActionValidators.js";
import { AutoFormFieldsFromChildComponentsProvider, AutoFormMetadataContext } from "../AutoFormContext.js";
import type { ShadcnElements } from "./elements.js";
import { makeShadcnAutoInput } from "./inputs/ShadcnAutoInput.js";
import { makeShadcnAutoBelongsToForm } from "./inputs/relationships/ShadcnAutoBelongsToForm.js";
import { makeShadcnAutoHasManyForm } from "./inputs/relationships/ShadcnAutoHasManyForm.js";
import { makeShadcnAutoHasManyThroughForm } from "./inputs/relationships/ShadcnAutoHasManyThroughForm.js";
import { makeShadcnAutoHasOneForm } from "./inputs/relationships/ShadcnAutoHasOneForm.js";
import { makeShadcnAutoSubmit } from "./submit/ShadcnAutoSubmit.js";
import { makeSubmitResultBanner } from "./submit/ShadcnSubmitResultBanner.js";

/**
 * Renders a form for an action on a model automatically using Shadcn
 */
export const makeAutoForm = <Elements extends ShadcnElements>(elements: Elements) => {
  const { Skeleton, cn } = elements;

  const {
    AutoInput,
    AutoBelongsToInput,
    AutoHasManyInput,
    AutoRolesInput,
    AutoEnumInput,
    AutoJSONInput,
    AutoDateTimePicker,
    AutoPasswordInput,
    AutoBooleanInput,
    AutoEncryptedStringInput,
    AutoStringInput,
    AutoNumberInput,
    AutoHiddenInput,
    AutoIdInput,
    AutoTextAreaInput,
  } = makeShadcnAutoInput(elements);

  const AutoSubmit = makeShadcnAutoSubmit(elements);
  const { SubmitSuccessfulBanner, SubmitErrorBanner, SubmitResultBanner } = makeSubmitResultBanner(elements);
  const AutoHasOneForm = makeShadcnAutoHasOneForm(elements);
  const AutoBelongsToForm = makeShadcnAutoBelongsToForm(elements);
  const AutoHasManyForm = makeShadcnAutoHasManyForm(elements);
  const AutoHasManyThroughForm = makeShadcnAutoHasManyThroughForm(elements);

  const FormContainer = forwardRef<HTMLFormElement, React.FormHTMLAttributes<HTMLFormElement>>(({ className, ...props }, ref) => {
    return <form ref={ref} noValidate className={cn("space-y-6", className)} {...props} />;
  });

  function AutoForm<
    GivenOptions extends OptionsType,
    SchemaT,
    ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>
  >(props: AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<ComponentProps<typeof FormContainer>, "action" | "defaultValue">) {
    const { action, findBy } = props;
    validateAutoFormProps(props);

    // Component key to force re-render when the action or findBy changes
    const componentKey = `${"modelApiIdentifier" in action ? `${action.modelApiIdentifier}.` : ""}${action.operationName}.${JSON.stringify(
      findBy
    )}`;

    return (
      <AutoFormFieldsFromChildComponentsProvider hasCustomFormChildren={React.Children.count(props.children) > 0}>
        <AutoFormInner key={componentKey} {...props} />
      </AutoFormFieldsFromChildComponentsProvider>
    );
  }

  function AutoFormInner<
    GivenOptions extends OptionsType,
    SchemaT,
    ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>
  >(props: AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<ComponentProps<typeof FormContainer>, "action">) {
    const { record: _record, action, findBy, ...rest } = props;

    const {
      metadata,
      fetchingMetadata,
      metadataError,
      fields,
      submit,
      formError,
      isSubmitting,
      isSubmitSuccessful,
      originalFormMethods,
      isLoading,
    } = useAutoForm(props);

    const formTitle = "title" in props && props.title !== undefined ? props.title : humanizeCamelCase(action.operationName);

    if (props.successContent && isSubmitSuccessful) {
      return props.successContent;
    }

    if (fetchingMetadata) {
      return (
        <FormContainer {...rest} onSubmit={submit as any}>
          <Skeleton />
        </FormContainer>
      );
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
        apiIdentifier: "modelApiIdentifier" in action ? action.modelApiIdentifier : undefined,
        namespace: action.namespace,
      },
      fields,
    };

    const formContent = props.children ?? (
      <>
        {formTitle && <h2 className="text-2xl font-bold">{formTitle}</h2>}
        {!props.onSuccess && <SubmitSuccessfulBanner />}
        {!props.onFailure && <SubmitErrorBanner />}
        {!metadataError && (
          <>
            {fields.map(({ metadata }) => (
              <AutoInput field={metadata.apiIdentifier} key={metadata.apiIdentifier} />
            ))}
            <AutoSubmit>{"submitLabel" in props && props.submitLabel ? props.submitLabel : "Submit"}</AutoSubmit>
          </>
        )}
      </>
    );

    return (
      <AutoFormMetadataContext.Provider value={autoFormMetadataContext}>
        <FormProvider {...originalFormMethods}>
          {isLoading && <Skeleton />}
          <FormContainer hidden={isLoading} {...rest} onSubmit={submit as any}>
            {formContent}
          </FormContainer>
        </FormProvider>
      </AutoFormMetadataContext.Provider>
    );
  }

  return {
    AutoForm,
    AutoInput,
    AutoSubmit,
    SubmitResultBanner,
    SubmitSuccessfulBanner,
    SubmitErrorBanner,
    AutoHasOneForm,
    AutoBelongsToForm,
    AutoHasManyForm,
    AutoHasManyThroughForm,
    AutoBelongsToInput,
    AutoHasManyInput,
    AutoRolesInput,
    AutoEnumInput,
    AutoJSONInput,
    AutoDateTimePicker,
    AutoPasswordInput,
    AutoBooleanInput,
    AutoEncryptedStringInput,
    AutoStringInput,
    AutoNumberInput,
    AutoIdInput,
    AutoHiddenInput,
    AutoTextAreaInput,
  };
};
