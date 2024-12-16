import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import React from "react";
import { Provider } from "../../../src/GadgetProvider.tsx";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.tsx";
import { PolarisAutoFileInput } from "../../../src/auto/polaris/inputs/PolarisAutoFileInput.tsx";
import { FormProvider, useForm } from "../../../src/useActionForm.ts";
import { testApi as api } from "../../apis.ts";

const Component = (props) => {
  return (
    <PolarisAutoForm action={api.game.stadium.create}>
      <PolarisAutoFileInput {...props} />
    </PolarisAutoForm>
  );
};

export default {
  title: "Polaris/FileInput",
  component: Component,
  decorators: [
    (Story, { parameters }) => {
      return (
        <AppProvider i18n={translations}>
          <FormProvider {...useForm()}>
            <Provider api={api}>
              <Story />
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
