import type { FormControlProps } from "@chakra-ui/react";
import { Box, Button, FormControl, FormLabel, Skeleton, Stack } from "@chakra-ui/react";
import type { ActionFunction } from "@gadgetinc/api-client-core";
import React from "react";
import { FormProvider } from "react-hook-form";
import { humanizeCamelCase, type OptionsType } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
import { useAutoForm } from "../AutoForm.js";
import { AutoFormMetadataContext } from "../AutoFormContext.js";
import { ChakraAutoInput } from "./inputs/ChakraAutoInput.js";
import { ChakraSubmitErrorBanner, ChakraSubmitSuccessfulBanner } from "./submit/ChakraSubmitResultBanner.js";

const ChakraFormSkeleton = () => (
  <>
    <Stack>
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  </>
);

export const ChakraAutoForm = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>
>(
  props: AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<Partial<FormControlProps>, "action">
) => {
  const {
    record: _record,
    action,
    findBy,
    // What to do with form here?
    ...rest
  } = props as AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<Partial<FormControlProps>, "action"> & { findBy: any };
  const { metadata, fetchingMetadata, metadataError, fields, submit, formError, isSubmitting, isSubmitSuccessful, originalFormMethods } =
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
      <FormControl>
        <FormLabel>{formTitle}</FormLabel>
        <ChakraFormSkeleton />
      </FormControl>
    );
  }

  const formContent = props.children ?? (
    <>
      {!props.onSuccess && <ChakraSubmitSuccessfulBanner />}
      {!props.onFailure && <ChakraSubmitErrorBanner />}
      {!metadataError && (
        <>
          {fields.map(({ metadata }) => (
            <ChakraAutoInput field={metadata.apiIdentifier} key={metadata.apiIdentifier} />
          ))}
          <div>
            <Button colorScheme="blue">Submit</Button>
          </div>
        </>
      )}
    </>
  );

  return (
    <AutoFormMetadataContext.Provider value={autoFormMetadataContext}>
      <FormProvider {...originalFormMethods}>
        <Box as="form" onSubmit={submit as any}>
          {formContent}
        </Box>
      </FormProvider>
    </AutoFormMetadataContext.Provider>
  );
};

export default ChakraAutoForm;
