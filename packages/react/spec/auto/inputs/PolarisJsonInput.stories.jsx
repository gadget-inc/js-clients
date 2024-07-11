import { AppProvider, Card, Page } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Provider } from "../../../src/GadgetProvider.tsx";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.tsx";
import { PolarisAutoJSONInput } from "../../../src/auto/polaris/inputs/PolarisAutoJSONInput.tsx";
import { testApi as api } from "../../apis.ts";

export default {
  title: "Polaris/JsonInput",
  component: PolarisAutoJSONInput,
  decorators: [
    (Story, { parameters }) => {
      const { theme = "light" } = parameters;
      return (
        <Provider api={api}>
          <AppProvider i18n={translations}>
            <FormProvider {...useForm()}>
              <PolarisAutoForm action={api.widget.create}>
                <Page>
                  <Card>
                    <Story />
                  </Card>
                </Page>
              </PolarisAutoForm>
            </FormProvider>
          </AppProvider>
        </Provider>
      );
    },
  ],

  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    field: "metafields",
  },
};
