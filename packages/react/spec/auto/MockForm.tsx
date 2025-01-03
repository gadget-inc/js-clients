import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import type { ReactNode } from "react";
import React from "react";
import { AutoFormMetadataContext } from "../../src/auto/AutoFormContext.js";
import { FormProvider, useForm } from "../../src/useActionForm.js";
import { testApi as api } from "../apis.js";
import { MockClientProvider } from "../testWrappers.js";

export const MockForm = ({ submit, metadata, submitResult, resolver }: Partial<AutoFormMetadataContext> & { resolver?: any }) => {
  return (props: { children: ReactNode }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const methods = useForm({ resolver });

    return (
      <MockClientProvider api={api}>
        <FormProvider {...methods}>
          <AutoFormMetadataContext.Provider
            value={{
              submit: submit!,
              metadata,
              submitResult: submitResult ?? {},
            }}
          >
            <AppProvider i18n={translations}>
              {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
              <form onSubmit={methods.handleSubmit(submit as any)}>
                {props.children}
                <button type="submit">Submit</button>
              </form>
            </AppProvider>
          </AutoFormMetadataContext.Provider>
        </FormProvider>
      </MockClientProvider>
    );
  };
};
