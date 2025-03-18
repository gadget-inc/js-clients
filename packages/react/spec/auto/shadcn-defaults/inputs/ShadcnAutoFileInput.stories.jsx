import React from "react";
import { Provider } from "../../../../src/GadgetProvider.tsx";
import { makeAutocomponents } from "../../../../src/auto/shadcn/unreleasedIndex.ts";
import { FormProvider, useForm } from "../../../../src/useActionForm.ts";
import { testApi as api } from "../../../apis.ts";
import { elements } from "../index.tsx";

const { AutoForm, AutoFileInput } = makeAutocomponents(elements);

const Component = (props) => {
  return (
    <AutoForm action={api.game.stadium.create}>
      <AutoFileInput {...props} />
    </AutoForm>
  );
};

export default {
  title: "Shadcn/FileInput",
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
    field: "photo",
  },
};
