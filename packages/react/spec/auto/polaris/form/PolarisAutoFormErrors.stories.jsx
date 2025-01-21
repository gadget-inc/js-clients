import { AppProvider, Card, Page } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import React from "react";
import { Provider } from "../../../../src/GadgetProvider.tsx";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.tsx";
import { FormProvider, useForm } from "../../../../src/useActionForm.ts";
import { testApi as api } from "../../../apis.ts";

export default {
  title: "Polaris/AutoForm/Errors",
  component: PolarisAutoForm,
  decorators: [
    (Story) => {
      return (
        <Provider api={api}>
          <AppProvider i18n={translations}>
            <FormProvider {...useForm()}>
              <Page>
                <Card>
                  <Story />
                </Card>
              </Page>
            </FormProvider>
          </AppProvider>
        </Provider>
      );
    },
  ],
};

export const InvalidModelAction = {
  args: {
    action: api.autoTableTest.invalidAction,
  },
};

export const MissingActionProp = {
  args: {},
};

export const FieldNameCustomParamCollisionError = {
  args: {
    findBy: "1",
    action: api.autoTableTest.updateWithCustomParams,
  },
};

export const ModelActionWithoutApiTrigger = {
  args: {
    findBy: "70",
    action: api.autoTableTest.noTriggerAction,
  },
};

export const GlobalActionWithoutApiTrigger = {
  args: {
    action: api.noTriggerGlobalAction,
  },
};
