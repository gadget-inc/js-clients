import { AppProvider } from "@shopify/polaris";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Provider } from "../../../src/GadgetProvider.tsx";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.tsx";
import { PolarisBooleanInput } from "../../../src/auto/polaris/inputs/PolarisBooleanInput.tsx";
import { testApi as api } from "../../apis.ts";

export default {
  title: "Polaris/BooleanInput",
  component: PolarisBooleanInput,
  decorators: [
    (Story, { parameters }) => {
      const { theme = "light" } = parameters;
      return (
        <AppProvider>
          <FormProvider {...useForm()}>
            <Provider api={api}>
              <PolarisAutoForm action={api.widget.create}>
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
    field: "isChecked",
  },
};

export const WithPolarisCustomProperties = {
  args: {
    ...Primary.args,
    label: "I agree to do something",
    labelHidden: false,
  },
};
