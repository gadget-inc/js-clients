import React, { useState } from "react";
import { Provider } from "../../../../src/GadgetProvider.tsx";
import { FormProvider, useForm } from "../../../../src/useActionForm.ts";
import { testApi as api } from "../../../apis.ts";
import { StorybookErrorBoundary } from "../../StorybookErrorBoundary.tsx";
import { makeAutocomponents } from "../../../../src/auto/shadcn/index.ts";
import { elements } from "../index";
import { makeShadcnAutoEnumInput } from "../../../../src/auto/shadcn/inputs/ShadcnAutoEnumInput.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const ShadcnAutoForm = makeAutocomponents(elements).AutoForm;
const ShadcnAutoEnumInput = makeShadcnAutoEnumInput(elements);

const Component = ({ field }) => {
  return (
    <ShadcnAutoForm action={api.game.stadium.create}>
      <ShadcnAutoEnumInput field={field} />
    </ShadcnAutoForm>
  );
};

export default {
  title: "Shadcn/EnumInput",
  component: Component,
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story) => {
      // 👇 Make it configurable by reading the theme value from parameters
      return (
        <div style={{ width: "600px", backgroundColor: "white" }}>
          <Provider api={api}>
            <FormProvider {...useForm()}>
              <StorybookErrorBoundary >
                <elements.Card className="p-6 w-full bg-white shadow-lg rounded-lg">
                  <Story />
                </elements.Card>
              </StorybookErrorBoundary>
            </FormProvider>
          </Provider>
        </div>
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
