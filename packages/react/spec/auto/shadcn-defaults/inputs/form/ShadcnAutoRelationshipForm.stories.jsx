import React from "react";
import { Provider } from "../../../../../src/GadgetProvider.tsx";
import { makeAutocomponents } from "../../../../../src/auto/shadcn/unreleasedIndex.ts";
import { FormProvider, useForm } from "../../../../../src/useActionForm.ts";
import { testApi as api } from "../../../../apis.ts";
import { StorybookErrorBoundary } from "../../../storybook/StorybookErrorBoundary.tsx";
import { elements } from "../../index.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const { AutoForm, AutoHasOneForm, AutoInput, AutoSubmit, SubmitResultBanner, AutoBelongsToForm } = makeAutocomponents(elements);
const { Label } = elements;

const Component = (props) => {
  return (
    <AutoForm {...props} action={api.widget.create}>
      <div className="flex flex-col gap-4">
        <div>
          <AutoBelongsToForm field="section" primaryLabel="name"
            renderSelectedRecord={(record) => <Label>this is a custom belongsTo render for {record.name}</Label>}
          >
            <AutoInput field="name" />
          </AutoBelongsToForm>
        </div>
        <SubmitResultBanner />
        <AutoHasOneForm field="doodad" primaryLabel="name"
          secondaryLabel={(record) => `${record.weight ?? 'N/A'} (${record.active ?? 'N/A'})`} tertiaryLabel="size"
        >

          <div className="flex flex-col gap-4">
            <AutoInput field="name" />
            <AutoInput field="weight" />
            <AutoInput field="active" />
            <AutoInput field="size" />
          </div>
        </AutoHasOneForm>
        <AutoSubmit />
      </div>
    </AutoForm>
  );
};

export default {
  title: "Shadcn/AutoRelationshipForm",
  component: Component,
  decorators: [
    (Story, { parameters }) => {
      const { theme = "light" } = parameters;
      return (
        <div style={{ width: "600px", backgroundColor: "white" }}>
          <Provider api={api}>
            <FormProvider {...useForm()}>
              <StorybookErrorBoundary>
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
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Create = {
  args: {
    action: api.widget.create,
    debug: true,
  },
};

export const Update = {
  args: {
    action: api.widget.update,
    findBy: "1",
  },
};
