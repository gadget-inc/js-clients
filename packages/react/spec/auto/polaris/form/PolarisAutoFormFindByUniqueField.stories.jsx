import { AppProvider, Card, Page } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import React from "react";
import { Provider } from "../../../../src/GadgetProvider.js";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.js";
import { FormProvider, useForm } from "../../../../src/useActionForm.js";
import { testApi as api } from "../../../apis.js";

export default {
  title: "Polaris/AutoForm/FindByUniqueField",
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

export const FindByUniqueString = {
  args: {
    action: api.uniqueFields.mainModel.update,
    findBy: { uniqueString: "u1" },
  },
};

export const FindByUniqueBelongsTo = {
  args: {
    action: api.uniqueFields.mainModel.update,
    findBy: { uniqueBelongsTo: "22" },
  },
};

export const FindByUniqueEmail = {
  args: {
    action: api.uniqueFields.mainModel.update,
    findBy: { uniqueEmail: "u3@email.com" },
  },
};

export const FindByNonIUniqueField = {
  args: {
    action: api.uniqueFields.mainModel.update,
    findBy: { nonUniqueString: "example" },
  },
};
