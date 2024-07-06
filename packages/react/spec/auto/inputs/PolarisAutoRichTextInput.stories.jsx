import { AppProvider, Card, Page } from "@shopify/polaris";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Provider } from "../../../src/GadgetProvider.jsx";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.jsx";
import PolarisAutoRichTextInput from "../../../src/auto/polaris/inputs/PolarisAutoRichTextInput.js";
import { testApi as api } from "../../apis.js";

export default {
  title: "Polaris/RichTextInput",
  component: PolarisAutoRichTextInput,
  decorators: [
    (Story, { parameters }) => {
      const { theme = "light" } = parameters;
      return (
        <Provider api={api}>
          <AppProvider i18n={{}}>
            <FormProvider {...useForm()}>
              <PolarisAutoForm
                action={api.widget.create}
                defaultValues={{
                  description: `
              # heading 1

              some content

              ## heading 2

               - list item a
               - list item b

              some more content
              `,
                }}
              >
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
    field: "description",
  },
};
