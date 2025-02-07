import React from "react";
import { Provider } from "../../../../../src/GadgetProvider.tsx";
import { makeAutocomponents } from "../../../../../src/auto/shadcn/unreleasedIndex.ts";
import { FormProvider, useForm } from "../../../../../src/useActionForm.ts";
import { testApi as api } from "../../../../apis.ts";
import { StorybookErrorBoundary } from "../../../storybook/StorybookErrorBoundary.tsx";
import { elements } from "../../index.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const { AutoForm, AutoHasOneForm, AutoInput, AutoSubmit, SubmitResultBanner, AutoBelongsToForm, AutoHasManyForm, AutoHasManyThroughForm } = makeAutocomponents(elements);
const { Card, Label } = elements;

const Component = (props) => {
  return (
    <AutoForm {...props} >
      <div className="flex flex-col gap-8">
        <div className="bg-white p-4 rounded-md">
          <SubmitResultBanner />
        </div>

        <Card className="p-6 w-full bg-white shadow-lg rounded-lg">
          <AutoBelongsToForm field="section" primaryLabel="name"
            renderSelectedRecord={(record) => <Label>this is a custom belongsTo render for {record.name}</Label>}
          >
            <AutoInput field="name" />
          </AutoBelongsToForm>
        </Card>



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
        <div style={{ width: "800px" }}>
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

export const CreateWithHasManyThrough = {
  render: (args) => <ExampleCourseCreateRelatedForm {...args} />,
  args: {
    action: api.university.course.create,
    debug: true,
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


const ExampleCourseCreateRelatedForm = (props) => {
  return (
    <div className="flex flex-col gap-4  p-4 rounded-md">
      <AutoForm {...props}>
        <SubmitResultBanner />
        <Card className="p-4 flex flex-col gap-4 bg-white">
          <Label >
            Top Level Form -- Course
          </Label>
          <AutoInput field="title" />
          <AutoInput field="description" />
        </Card>

        <Card className="p-4 flex flex-col gap-4 bg-white">
          <Label >
            Has Many Through Form -- Students
          </Label>
          <AutoHasManyThroughForm
            field="students"
            selectPaths={["firstName", "lastName", "year", "department"]}
            primaryLabel={["firstName", "lastName"]}
            secondaryLabel={(record) => {
              if (record.year <= 1) {
                return "Freshman";
              } else if (record.year <= 2) {
                return "Sophomore";
              } else if (record.year <= 3) {
                return "Junior";
              } else if (record.year <= 4) {
                return "Senior";
              } else {
                return "Mature";
              }
            }}
            tertiaryLabel="department"
          >
            <div className="flex flex-col gap-4">
              <AutoInput field="registration.effectiveFrom" />
              <AutoInput field="registration.effectiveTo" />
            </div>
          </AutoHasManyThroughForm>
        </Card>

        <Card className="p-4 flex flex-col gap-4 bg-white">
          <Label >
            Has Many Through Form -- Professors
          </Label>
          <AutoHasManyThroughForm
            field="professors"
            selectPaths={["title", "firstName", "lastName"]}
            primaryLabel={["title", "firstName", "lastName"]}
          />
        </Card>
        <AutoSubmit className="w-full bg-white p-2 rounded-md" />
      </AutoForm>
    </div>
  );
};
