import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import React, { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AutoFormMetadataContext } from "../../src/auto/AutoFormContext.js";
import { ActionMetadata } from "../../src/metadata.js";
import { testApi as api } from "../apis.js";
import { MockClientProvider } from "../testWrappers.js";

export const MockForm = (saveData: () => void, metadata: ActionMetadata) => {
  return (props: { children: ReactNode }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const methods = useForm();

    return (
      <MockClientProvider api={api}>
        <FormProvider {...methods}>
          <AutoFormMetadataContext.Provider value={{ submit: saveData as any, metadata }}>
            <AppProvider i18n={translations}>
              {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
              <form onSubmit={methods.handleSubmit(saveData)}>
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
