import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Provider } from "../../../src/GadgetProvider.tsx";
import { PolarisAutoFileInput } from "../../../src/auto/polaris/PolarisAutoFileInput.tsx";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.tsx";
import { testApi as api } from "../../apis.ts";

export default {
  title: "Polaris/FileInput",
  component: PolarisAutoFileInput,
  decorators: [
    (Story, { parameters }) => {
      return (
        <AppProvider i18n={translations}>
          <FormProvider {...useForm()}>
            <Provider api={api}>
              <PolarisAutoForm action={api.game.stadium.create}>
                <Story />
              </PolarisAutoForm>
            </Provider>
          </FormProvider>
        </AppProvider>
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
    field: "photo",
  },
};
