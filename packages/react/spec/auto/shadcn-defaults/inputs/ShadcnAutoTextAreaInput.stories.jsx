import React from "react";
import { Provider } from "../../../../src/GadgetProvider.tsx";
import { makeAutocomponents } from "../../../../src/auto/shadcn/index.ts";
import { FormProvider, useForm } from "../../../../src/useActionForm.ts";
import { testApi as api } from "../../../apis.ts";
import { elements } from "../index.tsx";

const { AutoForm, AutoTextAreaInput, AutoInput, AutoSubmit, SubmitResultBanner } = makeAutocomponents(elements);

const Component = (props) => {
  return (
    <AutoForm action={api.widget.create}>
      <SubmitResultBanner />
      <AutoInput field="inventoryCount" />
      <AutoTextAreaInput {...props} />
      <AutoSubmit />
    </AutoForm>
  );
};

export default {
  title: "Shadcn/TextAreaInput",
  component: Component,
  decorators: [
    (Story, { parameters }) => {
      const { theme = "light" } = parameters;
      return (
        <Provider api={api}>
          <FormProvider {...useForm()}>
            <elements.Card className="p-6 w-full bg-white shadow-lg rounded-lg">
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
    field: "name",
  },
};
