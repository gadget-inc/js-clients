import React from "react";
import { Provider } from "../../../../src/GadgetProvider.tsx";
import { makeAutocomponents } from "../../../../src/auto/shadcn/index.ts";
import { makeShadcnAutoJSONInput } from "../../../../src/auto/shadcn/inputs/ShadcnAutoJSONInput.tsx";
import { FormProvider, useForm } from "../../../../src/useActionForm.ts";
import { testApi as api } from "../../../apis.ts";
import { elements } from "../index.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const ShadcnAutoForm = makeAutocomponents(elements).AutoForm;
const ShadcnAutoJSONInput = makeShadcnAutoJSONInput(elements);

const Component = (props) => {
  return (
    <ShadcnAutoForm action={api.widget.create}>
      <ShadcnAutoJSONInput {...props} />
    </ShadcnAutoForm>
  );
};
export default {
  title: "Shadcn/JsonInput",
  component: Component,
  decorators: [
    (Story, { parameters }) => {
      const { theme = "light" } = parameters;
      return (
        <Provider api={api}>
          <FormProvider {...useForm()}>
            <elements.Card className="p-6 w-full bg-background shadow-lg rounded-lg">
              <Story />
            </elements.Card>
          </FormProvider>
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
    field: "metafields",
  },
};
