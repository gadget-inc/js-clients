import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import type { ComponentProps } from "react";
import React, { forwardRef } from "react";
import { FormProvider } from "../../useActionForm.js";
import { humanizeCamelCase, type OptionsType } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
import { useAutoForm } from "../AutoForm.js";
import { validateAutoFormProps } from "../AutoFormActionValidators.js";
import { AutoFormFieldsFromChildComponentsProvider, AutoFormMetadataContext } from "../AutoFormContext.js";
import { AutoHasManyThroughJoinModelForm } from "../hooks/useHasManyThroughController.js";
import { makeDefaultPreventedButton } from "./ShadcnDefaultPreventedButton.js";
import type { ShadcnElements } from "./elements.js";
import { makeShadcnAutoInput } from "./inputs/ShadcnAutoInput.js";
import { makeShadcnAutoBelongsToForm } from "./inputs/relationships/ShadcnAutoBelongsToForm.js";
import { makeShadcnAutoHasManyForm } from "./inputs/relationships/ShadcnAutoHasManyForm.js";
import { makeShadcnAutoHasManyThroughForm } from "./inputs/relationships/ShadcnAutoHasManyThroughForm.js";
import { makeShadcnAutoHasOneForm } from "./inputs/relationships/ShadcnAutoHasOneForm.js";
import { makeShadcnAutoSubmit } from "./submit/ShadcnAutoSubmit.js";
import { makeSubmitResultBanner } from "./submit/ShadcnSubmitResultBanner.js";

type FormContainerT = React.ForwardRefExoticComponent<React.FormHTMLAttributes<HTMLFormElement> & React.RefAttributes<HTMLFormElement>>;

export type ShadcnAutoFormProps<
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>
> = AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<ComponentProps<FormContainerT>, "action" | "defaultValue">;

/**
 * Renders a form for an action on a model automatically using Shadcn
 */
export const makeAutoForm = <Elements extends ShadcnElements>(elements: Elements) => {
  const { Skeleton, cn } = elements;

  const DefaultPreventedButton = makeDefaultPreventedButton(elements);
  const allElements = { ...elements, Button: DefaultPreventedButton };

  const {
    AutoInput,
    AutoRolesInput,
    AutoFileInput,
    AutoEnumInput,
    AutoJSONInput,
    AutoDateTimePicker,
    AutoPasswordInput,
    AutoBooleanInput,
    AutoEncryptedStringInput,
    AutoStringInput,
    AutoEmailInput,
    AutoUrlInput,
    AutoNumberInput,
    AutoIdInput,
    AutoHiddenInput,
    AutoTextAreaInput,
    AutoRichTextInput,

    AutoBelongsToInput,
    AutoHasManyInput,
    AutoHasManyThroughInput,
    AutoHasOneInput,
  } = makeShadcnAutoInput(allElements);

  const AutoSubmit = makeShadcnAutoSubmit(allElements);
  const { SubmitSuccessfulBanner, SubmitErrorBanner, SubmitResultBanner } = makeSubmitResultBanner(allElements);

  const AutoHasOneForm = makeShadcnAutoHasOneForm(allElements);
  const AutoBelongsToForm = makeShadcnAutoBelongsToForm(allElements);
  const AutoHasManyForm = makeShadcnAutoHasManyForm(allElements);
  const AutoHasManyThroughForm = makeShadcnAutoHasManyThroughForm(allElements);

  const FormContainer = forwardRef<HTMLFormElement, React.FormHTMLAttributes<HTMLFormElement>>(({ className, ...props }, ref) => {
    return <form ref={ref} noValidate className={cn("space-y-6", className)} {...props} />;
  });

  function AutoForm<
    GivenOptions extends OptionsType,
    SchemaT,
    ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>
  >(props: ShadcnAutoFormProps<GivenOptions, SchemaT, ActionFunc>) {
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
  >(props: ShadcnAutoFormProps<GivenOptions, SchemaT, ActionFunc>) {
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
          {props.loadingSkeleton ?? <Skeleton />}
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
          <FormContainer
            {...rest}
            className={cn(`${isLoading || isSubmitting ? "opacity-30" : ""} ${rest.className ?? ""}`)}
            onSubmit={submit as any}
          >
            {formContent}
          </FormContainer>
        </FormProvider>
      </AutoFormMetadataContext.Provider>
    );
  }

  return {
    AutoForm,

    AutoInput,
    AutoBooleanInput,
    AutoDateTimePicker,
    AutoEmailInput,
    AutoEncryptedStringInput,
    AutoEnumInput,
    AutoFileInput,
    AutoHiddenInput,
    AutoIdInput,
    AutoJSONInput,
    AutoNumberInput,
    AutoPasswordInput,
    AutoRichTextInput,
    AutoRolesInput,
    AutoStringInput,
    AutoTextAreaInput,
    AutoUrlInput,

    AutoBelongsToInput,
    AutoHasManyInput,
    AutoHasManyThroughInput,
    AutoHasOneInput,

    AutoBelongsToForm,
    AutoHasManyForm,
    AutoHasManyThroughForm,
    AutoHasManyThroughJoinModelForm,
    AutoHasOneForm,

    AutoSubmit,
    SubmitErrorBanner,
    SubmitResultBanner,
    SubmitSuccessfulBanner,
  };
};
