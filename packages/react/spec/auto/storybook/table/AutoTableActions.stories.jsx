import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import React from "react";
import { Provider } from "../../../../src/GadgetProvider.tsx";
import { testApi as api } from "../../../apis.ts";
import { StorybookErrorBoundary } from "../StorybookErrorBoundary.tsx";
import { SelectableDesignSystemAutoTableStory } from "./SelectableDesignSystemAutoTableStory.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "AutoTable/ActionParameters",
  component: SelectableDesignSystemAutoTableStory,
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story) => {
      // 👇 Make it configurable by reading the theme value from parameters
      return (
        <Provider api={api}>
          <AppProvider i18n={translations}>
            <StorybookErrorBoundary>
              <Story />
            </StorybookErrorBoundary>
          </AppProvider>
        </Provider>
      );
    },
  ],
};

export const IncludedActionParameters = {
  args: {
    model: api.autoTableTest,
    actions: [
      "delete",
      "customAction",
      { label: "Alternate action label", action: "customAction" },
      {
        label: "Sum Nums callback",
        promoted: false,
        action: (records) => windowAlert(`Sum of record "num" values: ${sumRecordNumValues(records)}`),
      },
      {
        label: "Sum Nums promoted",
        promoted: true,
        action: (records) => windowAlert(`Sum of record "num" values: ${sumRecordNumValues(records)}`),
      },
    ],
  },
};

export const ExcludedActionParameters = {
  args: {
    model: api.autoTableTest,
    excludeActions: ["delete"],
  },
};

export const NoTriggerableActions = {
  args: {
    model: api.shopifyProductVariant,
  },
};

export const CustomCellRenderersWithCustomActions = {
  args: {
    model: api.autoTableTest,
    select: {
      id: true,
      str: true,
      num: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
    columns: [
      "id",
      "str",
      {
        header: "custom cell renderer",
        render: ({ record }) => <p>{JSON.stringify(record)}</p>,
      },
    ],
    actions: [
      {
        label: "console.log all records",
        promoted: true,
        action: (records) => console.log(`records:`, records),
      },
    ],
  },
};

const windowAlert = (message) => {
  // eslint-disable-next-line no-undef
  window.alert(message);
};

const sumRecordNumValues = (records) => {
  return records.reduce((total, record) => total + (record.num ?? 0), 0);
};
