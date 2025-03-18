import { Button } from "@shopify/polaris";
import React, { useState } from "react";
import { Provider } from "../../../../src/GadgetProvider.js";
import { PolarisAutoInput } from "../../../../src/auto/polaris/inputs/PolarisAutoInput.js";
import { PolarisAutoHasManyThroughInput } from "../../../../src/auto/polaris/inputs/relationships/PolarisAutoHasManyThroughInput.js";
import { PolarisAutoSubmit } from "../../../../src/auto/polaris/submit/PolarisAutoSubmit.js";
import { testApi as api } from "../../../apis.js";
import { StorybookErrorBoundary } from "../StorybookErrorBoundary.js";
import { SelectableDesignSystemAutoFormStory } from "./SelectableDesignSystemAutoFormStory.js";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "AutoForm",
  component: SelectableDesignSystemAutoFormStory,
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story: any) => {
      // 👇 Make it configurable by reading the theme value from parameters
      return (
        <Provider api={api}>
          <StorybookErrorBoundary>
            <Story />
          </StorybookErrorBoundary>
        </Provider>
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
export const Primary: any = {
  args: {
    action: api.widget.create,
  },
};

export const CreateWithCustomParams: any = {
  args: {
    action: api.widget.createWithCustomParams,
  },
};

export const UpdateRecord: any = {
  args: {
    action: api.widget.update,
    findBy: "999",
  },
};

export const UpdateRecordWithCustomParams: any = {
  args: {
    action: api.widget.updateWithCustomParams,
    findBy: "999",
  },
};

export const UpsertRecordWithFindBy: any = {
  args: {
    action: api.widget.upsert,
    findBy: "1",
  },
};

export const UpsertRecordWithoutFindBy: any = {
  args: {
    action: api.widget.upsert,
  },
};

export const Excluded: any = {
  args: {
    action: api.widget.create,
    exclude: ["birthday", "roles", "name"],
  },
};

export const ExcludedWithDefaultValues: any = {
  args: {
    action: api.widget.create,
    exclude: ["name"],
    defaultValues: { widget: { name: "Name from default when there is no field input component" } },
  },
};

export const Included: any = {
  args: {
    action: api.widget.create,
    // Inventory is required and  not included. This will be a server-side error since it can be set in the action file code
    include: ["name"],
  },
};

export const IncludedWithFindBy: any = {
  args: {
    action: api.widget.update,
    findBy: "999",
    include: ["name", "inventoryCount"],
  },
};

export const IncludedWithDefaultValues: any = {
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
      <Button onClick={() => setShowMoreInputs(!showMoreInputs)}>{showMoreInputs ? "Hide" : "Show"} other inputs</Button>
      {showMoreInputs && (
        <>
          <PolarisAutoInput field="isChecked" />
          <PolarisAutoInput field="section" />
          <PolarisAutoInput field="gizmos" />
          <PolarisAutoInput field="customStringParam" />
        </>
      )}
    </>
  );
};
const CustomComponentWithAutoInputs = () => {
  return (
    <>
      <PolarisAutoInput field="name" />
      <PolarisAutoInput field="inventoryCount" />
      <ConditionalAppearingAutoInput />
    </>
  );
};

export const Expanded: any = {
  args: {
    action: api.widget.updateWithCustomParams,
    findBy: "999",
    children: (
      <>
        <CustomComponentWithAutoInputs />
        <PolarisAutoSubmit />
      </>
    ),
  },
};

export const ExpandedWithExplicitSelect: any = {
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
        <PolarisAutoSubmit />
      </>
    ),
  },
};

export const Namespaced: any = {
  args: {
    action: api.game.city.update,
    findBy: "1",
  },
};

export const GlobalAction: any = {
  args: {
    action: api.flipAll,
    defaultValues: { title: "From defaultValue prop" },
  },
};

export const onSuccessCallback: any = {
  name: "onSuccess callback",
  args: {
    action: api.widget.create,
    onSuccess: (record: any) => {
      // eslint-disable-next-line no-undef
      window.alert(`Record created: ${JSON.stringify(record, null, 2)}`);
    },
  },
};

export const onFailureCallback: any = {
  name: "onFailure callback",
  args: {
    action: api.widget.alwaysThrowError,
    onFailure: (error: any) => {
      // eslint-disable-next-line no-undef
      window.alert(`Error: ${error.message} (see console for details)`);
      // eslint-disable-next-line no-undef
      console.error(error);
    },
  },
};

export const hasManyThrough: any = {
  name: "HasManyThrough fields",
  args: {
    action: api.hasManyThrough.baseModel.create,
    children: (
      <>
        <PolarisAutoInput field="baseModelName" />
        <PolarisAutoHasManyThroughInput field="baseModelHmtField" />
        <PolarisAutoSubmit />
      </>
    ),
  },
};
