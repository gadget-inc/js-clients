import { AppProvider } from "@shopify/polaris";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Provider } from "../../../src/GadgetProvider.tsx";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.tsx";
import { PolarisAutoFileInput } from "../../../src/auto/polaris/inputs/PolarisAutoFileInput.tsx";
import { testApi as api } from "../../apis.ts";

export default {
  title: "Polaris/FileInput",
  component: PolarisAutoFileInput,
  decorators: [
    (Story, { parameters }) => {
      return (
        <AppProvider>
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
