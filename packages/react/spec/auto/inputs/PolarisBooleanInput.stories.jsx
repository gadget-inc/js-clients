import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import React from "react";
import { Provider } from "../../../src/GadgetProvider.tsx";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.tsx";
import { PolarisAutoBooleanInput } from "../../../src/auto/polaris/inputs/PolarisAutoBooleanInput.tsx";
import { FormProvider, useForm } from "../../../src/useActionForm.ts";
import { testApi as api } from "../../apis.ts";
export default {
  title: "Polaris/BooleanInput",
  component: PolarisAutoBooleanInput,
  decorators: [
    (Story, { parameters }) => {
      const { theme = "light" } = parameters;
      return (
        <AppProvider i18n={translations}>
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
