import React from "react";
import { Provider } from "../../../../src/GadgetProvider.tsx";
import { makeShadcnAutoFileInput } from "../../../../src/auto/shadcn/inputs/ShadcnAutoFileInput.tsx";
import { makeAutocomponents } from "../../../../src/auto/shadcn/unreleasedIndex.ts";
import { FormProvider, useForm } from "../../../../src/useActionForm.ts";
import { testApi as api } from "../../../apis.ts";
import { elements } from "../index.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const ShadcnAutoForm = makeAutocomponents(elements).AutoForm;
const ShadcnAutoFileInput = makeShadcnAutoFileInput(elements);

const Component = (props) => {
  return (
    <ShadcnAutoForm action={api.game.stadium.create}>
      <ShadcnAutoFileInput {...props} />
    </ShadcnAutoForm>
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
    field: "photo",
  },
};
