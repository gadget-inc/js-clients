import React from "react";
import { Provider } from "../../../../../src/GadgetProvider.tsx";
import { makeAutocomponents } from "../../../../../src/auto/shadcn/unreleasedIndex.ts";
import { FormProvider, useForm } from "../../../../../src/useActionForm.ts";
import { testApi as api } from "../../../../apis.ts";
import { StorybookErrorBoundary } from "../../../storybook/StorybookErrorBoundary.tsx";
import { elements } from "../../index.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const { AutoForm, AutoHasOneForm, AutoInput, AutoSubmit, SubmitResultBanner, AutoBelongsToForm, AutoHasManyForm } = makeAutocomponents(elements);
const { Card, Label } = elements;

const Component = (props) => {
  return (
    <AutoForm {...props} >
      <div className="flex flex-col gap-6">
        <div className="bg-white p-4 rounded-md">
          <SubmitResultBanner />
        </div>
        <div className="flex flex-col gap-4">
          <Card className="p-6 w-full bg-white shadow-lg rounded-lg">
            <AutoBelongsToForm field="section" primaryLabel="name"
              renderSelectedRecord={(record) => <Label>this is a custom belongsTo render for {record.name}</Label>}
            >
              <AutoInput field="name" />
            </AutoBelongsToForm>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          <Card className="p-6 w-full bg-white shadow-lg rounded-lg">
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
          </Card>
        </div>
        <div>
          <Card className="p-6 w-full bg-white shadow-lg rounded-lg">
            <AutoHasManyForm
              label={
                <Label as="h2" variant="headingSm">
                  Has Many Form -- Gizmos
                </Label>
              }
              field="gizmos"
              selectPaths={["name", "orientation"]}
              primaryLabel="name"
              secondaryLabel="orientation"
            >
              <div className="flex flex-col gap-4">
                <AutoInput field="name" />
                <AutoInput field="orientation" />
                <AutoInput field="attachment" />
                <AutoHasManyForm field="doodads" selectPaths={["name", "weight"]} primaryLabel="name" secondaryLabel="weight">
                  <div className="flex flex-col gap-4">
                    <AutoInput field="name" />
                    <AutoInput field="weight" />
                  </div>
                </AutoHasManyForm>
              </div>
            </AutoHasManyForm>
          </Card>
        </div>
        <div className="mt-4">
          <AutoSubmit variant="default" className="w-full bg-white p-2 rounded-md" />
        </div>
      </div>
    </AutoForm >
  );
};

export default {
  title: "Shadcn/AutoRelationshipForm",
  component: Component,
  decorators: [
    (Story, { parameters }) => {
      const { theme = "light" } = parameters;
      return (
        <div style={{ width: "600px" }}>
          <Provider api={api}>
            <FormProvider {...useForm()}>
              <StorybookErrorBoundary>
                <Story />
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

export const CreateWithLargeHasMany = {
  render: (args) => <ExampleSectionAutoRelatedForm {...args} />,
  args: {
    action: api.section.create,
  },
};

const ExampleSectionAutoRelatedForm = (props) => {
  return (
    <div className="flex flex-col gap-4">
      <AutoForm {...props}>
        <SubmitResultBanner />
        <Card>
          <Label >
            Top Level Form -- Section
          </Label>
          <AutoInput field="name" />
          <AutoInput field="label" />
        </Card>

        <Card>
          <Label >
            Has Many Form -- Widgets
          </Label>
          <AutoHasManyForm field="widgets" label="Widgets">
            <AutoInput field="name" />
            <AutoInput field="inventoryCount" />
          </AutoHasManyForm>
        </Card>
        <AutoSubmit />
      </AutoForm>
    </div>
  );
};
