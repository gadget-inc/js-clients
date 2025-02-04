import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { ComponentProps } from "react";
import React from "react";
import { FormProvider } from "../../useActionForm.js";
import { humanizeCamelCase, type OptionsType } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
import { useAutoForm } from "../AutoForm.js";
import { validateAutoFormProps } from "../AutoFormActionValidators.js";
import { AutoFormFieldsFromChildComponentsProvider, AutoFormMetadataContext } from "../AutoFormContext.js";
import type { FormProps, ShadcnElements } from "./elements.js";
import { makeShadcnAutoInput } from "./inputs/ShadcnAutoInput.js";
import { makeShadcnHasOneForm } from "./inputs/relationships/ShadcnHasOneForm.js";
import { makeShadcnAutoSubmit } from "./submit/ShadcnAutoSubmit.js";
import { makeSubmitResultBanner } from "./submit/ShadcnSubmitResultBanner.js";

/**
 * Renders a form for an action on a model automatically using Shadcn
 */
export const makeAutoForm = <Elements extends ShadcnElements>({
  Form,
  Input,
  Button,
  Alert,
  Skeleton,
  AlertTitle,
  AlertDescription,
  Label,
  Checkbox,
  Badge,
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
  CommandEmpty,
  CommandGroup,
  Calendar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  ScrollArea,
  ScrollBar,
  Textarea,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
}: Elements) => {
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
    AutoIdInput,
  } = makeShadcnAutoInput({
    Input,
    Label,
    Button,
    Checkbox,
    Badge,
    Command,
    CommandLoading,
    CommandInput,
    CommandItem,
    CommandList,
    CommandEmpty,
    CommandGroup,
    Calendar,
    Popover,
    PopoverTrigger,
    PopoverContent,
    ScrollArea,
    ScrollBar,
    Textarea,
    Dialog,
    DialogContent,
    DialogTrigger,
  });

  const AutoSubmit = makeShadcnAutoSubmit({ Button });
  const { SubmitSuccessfulBanner, SubmitErrorBanner, SubmitResultBanner } = makeSubmitResultBanner({
    Alert,
    AlertTitle,
    AlertDescription,
    Button,
  });

  const AutoHasOneForm = makeShadcnHasOneForm({
    Badge,
    Button,
    Command,
    CommandItem,
    CommandInput,
    CommandLoading,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    Input,
    Label,
    CommandList,
    CommandEmpty,
    CommandGroup,
    Checkbox,
    ScrollArea,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Dialog,
    DialogContent,
    DialogClose,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
  });

  function AutoForm<GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>>(
    props: AutoFormProps<GivenOptions, SchemaT, ActionFunc> & ComponentProps<typeof Form>
  ) {
    const { action, findBy } = props as AutoFormProps<GivenOptions, SchemaT, ActionFunc> &
      Omit<Partial<FormProps>, "action"> & { findBy: any };
    validateAutoFormProps(props);

    // Component key to force re-render when the action or findBy changes
    const componentKey = `${action.modelApiIdentifier ?? ""}.${action.operationName}.${JSON.stringify(findBy)}`;

    return (
      <AutoFormFieldsFromChildComponentsProvider hasCustomFormChildren={React.Children.count(props.children) > 0}>
        <AutoFormInner
          key={componentKey}
          {...(props as AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<Partial<FormProps>, "action"> & { findBy: any })}
        />
      </AutoFormFieldsFromChildComponentsProvider>
    );
  }

  function AutoFormInner<
    GivenOptions extends OptionsType,
    SchemaT,
    ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>
  >(props: AutoFormProps<GivenOptions, SchemaT, ActionFunc> & ComponentProps<typeof Form>) {
    const {
      record: _record,
      action,
      findBy,
      ...rest
    } = props as AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<Partial<FormProps>, "action"> & { findBy: any };

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
        <Form {...rest} onSubmit={submit}>
          <Skeleton />
        </Form>
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
        apiIdentifier: action.modelApiIdentifier,
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
          <div hidden={isLoading}>
            <Form {...rest} onSubmit={submit}>
              {formContent}
            </Form>
          </div>
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
  };
};
