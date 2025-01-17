import { AppProvider, Button, Card, Page } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import React, { useState } from "react";
import { Provider } from "../../../src/GadgetProvider.tsx";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.tsx";
import { PolarisAutoInput } from "../../../src/auto/polaris/inputs/PolarisAutoInput.tsx";
import { PolarisAutoSubmit } from "../../../src/auto/polaris/submit/PolarisAutoSubmit.tsx";
import { FormProvider, useForm } from "../../../src/useActionForm.ts";
import { testApi as api } from "../../apis.ts";
import { StorybookErrorBoundary } from "../StorybookErrorBoundary.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Polaris/AutoForm",
  component: PolarisAutoForm,
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story) => {
      // 👇 Make it configurable by reading the theme value from parameters
      return (
        <Provider api={api}>
          <AppProvider i18n={translations}>
            <FormProvider {...useForm()}>
              <Page>
                <Card>
                  <StorybookErrorBoundary>
                    <Story />
                  </StorybookErrorBoundary>
                </Card>
              </Page>
            </FormProvider>
          </AppProvider>
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
      <Button onClick={() => setShowMoreInputs(!showMoreInputs)}>{showMoreInputs ? "Hide" : "Show"} other inputs</Button>
      {showMoreInputs && (
        <>
          <PolarisAutoInput field="isChecked" />
          <PolarisAutoInput field="section" />
          <PolarisAutoInput field="gizmos" />
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

export const Expanded = {
  args: {
    action: api.widget.update,
    findBy: "1",
    children: (
      <>
        <CustomComponentWithAutoInputs />
        <PolarisAutoSubmit />
      </>
    ),
  },
  tags: ["!autodocs"],
  docs: {
    source: { language: "tsx", code: "hi world" },
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
  },
};
