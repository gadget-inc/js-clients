import React from "react";
import { makeAutocomponents } from "../../../../src/auto/shadcn/index.ts";
import { elements } from "../index.tsx";
import { Provider } from "../../../../src/GadgetProvider.tsx";
import { FormProvider, useForm } from "../../../../src/useActionForm.ts";
import { testApi as api } from "../../../apis.ts";

const { AutoForm } = makeAutocomponents(elements);

const Component = ({ field }) => {
  return (
    <elements.Dialog>
      <elements.DialogTrigger>Open Dialog</elements.DialogTrigger>
      <elements.DialogContent>
        <AutoForm action={api.autoTableTest.create}/>
      </elements.DialogContent>
    </elements.Dialog>
  )
}

export default {
  title: "Shadcn/Dialog",
  component: Component,
  decorators: [
    (Story) => (
        <div style={{ width: "600px", backgroundColor: "white" }}>
          <Provider api={api}>
            <FormProvider {...useForm()}>
              <elements.Card className="p-6 w-full bg-background shadow-lg rounded-lg">
                <Story />
              </elements.Card>
            </FormProvider>
          </Provider>
      </div>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Primary = {};