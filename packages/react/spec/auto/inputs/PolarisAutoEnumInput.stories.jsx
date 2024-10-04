import { AppProvider, Card, Page } from "@shopify/polaris";
import React from "react";
import { Provider } from "../../../src/GadgetProvider.tsx";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.tsx";
import { PolarisAutoEnumInput } from "../../../src/auto/polaris/inputs/PolarisAutoEnumInput.tsx";
import { FormProvider, useForm } from "../../../src/useActionForm.ts";
import { testApi as api } from "../../apis.ts";

const Component = ({ field }) => {
  return (
    <PolarisAutoForm action={api.game.stadium.create}>
      <Page>
        <Card>
          <PolarisAutoEnumInput field={field} />
        </Card>
      </Page>
    </PolarisAutoForm>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Polaris/EnumInput",
  component: Component,
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story, { parameters }) => {
      // 👇 Make it configurable by reading the theme value from parameters
      const { theme = "light" } = parameters;
      return (
        <Provider api={api}>
          <AppProvider>
            <FormProvider {...useForm()}>
              <Story />
            </FormProvider>
          </AppProvider>
        </Provider>
      );
    },
  ],

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    field: "type",
  },
};

export const MultiSelect = {
  args: {
    field: "tags",
  },
};
