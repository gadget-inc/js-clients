import { AppProvider, Card, Page } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Provider } from "../../../src/GadgetProvider.tsx";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.tsx";
import { PolarisAutoInput } from "../../../src/auto/polaris/inputs/PolarisAutoInput.tsx";
import { PolarisAutoHasManyInput } from "../../../src/auto/polaris/inputs/relationships/PolarisAutoHasManyInput.tsx";
import { PolarisAutoRelatedForm } from "../../../src/auto/polaris/inputs/relationships/PolarisAutoRelatedForm.tsx";
import { PolarisAutoSubmit } from "../../../src/auto/polaris/submit/PolarisAutoSubmit.tsx";
import { testApi as api } from "../../apis.ts";

const ExampleAutoRelatedForm = (props) => {
  return (
    <PolarisAutoForm {...props}>
      <PolarisAutoInput field="name" />
      <PolarisAutoHasManyInput field="widgets" />
      <PolarisAutoRelatedForm field="widgets">
        <PolarisAutoInput field="name" />
      </PolarisAutoRelatedForm>
      <PolarisAutoSubmit />
    </PolarisAutoForm>
  );
};

export default {
  title: "Polaris/AutoForm/AutoRelatedForm",
  component: ExampleAutoRelatedForm,
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

export const Primary = {
  args: {
    action: api.section.update,
    findBy: "1",
  },
};
