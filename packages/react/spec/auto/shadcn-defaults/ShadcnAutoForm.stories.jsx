import React, { useState } from "react";
import { Provider } from "../../../src/GadgetProvider.tsx";
import { makeAutocomponents } from "../../../src/auto/shadcn/unreleasedIndex.ts";
import { FormProvider, useForm } from "../../../src/useActionForm.ts";
import { testApi as api } from "../../apis.ts";
import { StorybookErrorBoundary } from "../storybook/StorybookErrorBoundary.tsx";
import { elements } from "./index.tsx";

const { AutoForm, AutoInput, AutoSubmit, AutoHasManyThroughInput } = makeAutocomponents(elements);

export default {
  title: "Shadcn/AutoForm",
  component: AutoForm,
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story) => {
      // 👇 Make it configurable by reading the theme value from parameters
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
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export const Primary = {
  args: {
    action: api.widget.create,
  },
};

export const CreateWithCustomParams = {
  args: {
    action: api.widget.createWithCustomParams,
  },
};

export const UpdateRecord = {
  args: {
    action: api.widget.update,
    findBy: "999",
  },
};

export const UpdateRecordWithCustomParams = {
  args: {
    action: api.widget.updateWithCustomParams,
    findBy: "999",
  },
};

export const UpsertRecordWithFindBy = {
  args: {
    action: api.widget.upsert,
    findBy: "1",
  },
};

export const UpsertRecordWithoutFindBy = {
  args: {
    action: api.widget.upsert,
  },
};

export const Excluded = {
  args: {
    action: api.widget.create,
    exclude: ["birthday", "roles", "name"],
  },
};

export const ExcludedWithDefaultValues = {
  args: {
    action: api.widget.create,
    exclude: ["name"],
    defaultValues: { widget: { name: "Name from default when there is no field input component" } },
  },
};

export const Included = {
  args: {
    action: api.widget.create,
    // Inventory is required and  not included. This will be a server-side error since it can be set in the action file code
    include: ["name"],
  },
};

export const IncludedWithDefaultValues = {
  args: {
    action: api.widget.create,
    include: ["inventoryCount"],
    defaultValues: { widget: { name: "Name from default when there is no field input component" } },
  },
};

const ConditionalAppearingAutoInput = () => {
  const [showMoreInputs, setShowMoreInputs] = useState(false);
  return (
    <>
      <elements.Button onClick={() => setShowMoreInputs(!showMoreInputs)}>{showMoreInputs ? "Hide" : "Show"} other inputs</elements.Button>
      {showMoreInputs && (
        <>
          <AutoInput field="isChecked" />
          <AutoInput field="section" />
          <AutoInput field="gizmos" />
          <AutoInput field="customStringParam" />
        </>
      )}
    </>
  );
};
const CustomComponentWithAutoInputs = () => {
  return (
    <>
      <AutoInput field="name" />
      <AutoInput field="inventoryCount" />
      <ConditionalAppearingAutoInput />
    </>
  );
};

export const Expanded = {
  args: {
    action: api.widget.updateWithCustomParams,
    findBy: "999",
    children: (
      <>
        <CustomComponentWithAutoInputs />
        <AutoSubmit />
      </>
    ),
  },
};

export const ExpandedWithExplicitSelect = {
  // The explicit select for the conditionally rendered AutoInputs will prevent additional lookups in the useActionForm findBy
  args: {
    action: api.widget.updateWithCustomParams,
    select: {
      name: true,
      inventoryCount: true,
      isChecked: true,
      sectionId: true,
      section: { id: true, name: true },
      gizmos: { edges: { node: { id: true, name: true } } },
    },
    findBy: "999",
    children: (
      <>
        <CustomComponentWithAutoInputs />
        <AutoSubmit />
      </>
    ),
  },
};

export const Namespaced = {
  args: {
    action: api.game.city.update,
    findBy: "1",
  },
};

export const GlobalAction = {
  args: {
    action: api.flipAll,
    defaultValues: { title: "From defaultValue prop" },
  },
};

export const onSuccessCallback = {
  name: "onSuccess callback",
  args: {
    action: api.widget.create,
    onSuccess: (record) => {
      // eslint-disable-next-line no-undef
      window.alert(`Record created: ${JSON.stringify(record, null, 2)}`);
    },
  },
};

export const onFailureCallback = {
  name: "onFailure callback",
  args: {
    action: api.widget.alwaysThrowError,
    onFailure: (error) => {
      // eslint-disable-next-line no-undef
      window.alert(`Error: ${error.message} (see console for details)`);
      // eslint-disable-next-line no-undef
      console.error(error);
    },
  },
};

export const hasManyThrough = {
  name: "HasManyThrough fields",
  args: {
    action: api.hasManyThrough.baseModel.create,
    children: (
      <>
        <AutoInput field="baseModelName" />
        <AutoHasManyThroughInput field="baseModelHmtField" />
        <AutoSubmit />
      </>
    ),
  },
};
